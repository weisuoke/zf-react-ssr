import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import routes from '../routes'
import Header from '../components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Fragment>
        <Header/>
        <div className="container" style={{marginTop:50}}>
          {routes.map(route => (
            <Route {...route}/>
          ))}
        </div>
      </Fragment>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root')
)
