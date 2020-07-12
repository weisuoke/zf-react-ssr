import * as types from '../action-types'
import axios from 'axios'

export default {
  getHomeList() {
    return function (dispatch, getState) {
      return axios.get('http://localhost:4000/api/users').then(function(result) {
        let list = result.data
        dispatch({
          type: types.SET_HOME_LIST,
          payload: list
        })
      })
    }
  }
}
