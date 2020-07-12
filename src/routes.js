import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Counter from './containers/Counter'

// export default (
//   <Fragment>
//     <Route path="/" exact component={Home}/>
//     <Route path="/counter" exact component={Counter}/>
//   </Fragment>
// )

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: '/',
    loadData: Home.loadData // 加载数据，如果此配置项有了这个属性，那么则意味着需要加载异步数据
  },
  {
    path: '/counter',
    component: Counter,
    key: '/counter',
  }
]
