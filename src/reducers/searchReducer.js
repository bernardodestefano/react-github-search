import { combineReducers } from 'redux'
import { searchUser } from '../actions/actions'

const searchReducer = (state = { users: [] }, action) => {
  switch(action.type){
    case 'SEARCH_USER':
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            username: action.username
          }
        ]
      })
    default:
      return state;
  }
}

export default searchReducer;
