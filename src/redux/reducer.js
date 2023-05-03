import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer'
import todoReducer from './todoReducer'

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoReducer(state.todoList, action),
//     };
// }
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoReducer,
})

export default rootReducer;