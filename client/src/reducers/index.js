import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'

import addres_bookReducer from './addr_book/addr_bookReducer'

export default combineReducers({
  auth, adrBook: addres_bookReducer,
  form: formReducer
});
