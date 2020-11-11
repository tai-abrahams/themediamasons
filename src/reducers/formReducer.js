import { ADD_MESSAGE } from '../actions/types'
const initialState = []


export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return{
                ...action.payload
            }
        default:
            return state;
    }
}

