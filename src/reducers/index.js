import { combineReducers } from 'redux'
import { formReducer } from './formReducer'

//probably wont need combinereducer

export default combineReducers({
    form: formReducer 
})
