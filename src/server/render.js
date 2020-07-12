import React, { Fragment } from 'react'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Header from '../components/Header'
import routes from '../routes'
import { Provider } from 'react-redux'
import { getServerStore } from '../store'

export default function(req, res) {
  let context = {}
  let store = getServerStore()
  // matchPath 是路由提供的工具方法，可以用来判断路径和路由对象是否匹配
  let matchRoutes = routes.filter(route => (
    matchPath(req.path, route)
  ))
  let promises = [];
  matchRoutes.forEach(route => {
    if (route.loadData) {
      promises.push(route.loadData(store))
    }
  })
  Promise.all(promises).then(function() {
    console.log('🆚', store.getState())
    let html = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.path}>
          <Fragment>
            <Header/>
            <div className="container" style={{marginTop:50}}>
              {routes.map(route => (
                <Route {...route}/>
              ))}
            </div>
          </Fragment>
        </StaticRouter>
      </Provider>
    )
    res.send(
      `
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>weisuoke SSR</title>
          <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src="/client.js"></script>
        </body>
      </html>
    `
    )
  })
}
