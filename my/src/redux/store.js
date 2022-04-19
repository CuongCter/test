// import {createStore, combineReducers} from 'redux'
// import todoReducer from './reducer'

// const rootReducer = combineReducers({
//     todoList: todoReducer
// })
// const store = createStore(rootReducer)

// export default store

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './tokit/todoSlice'
const store = configureStore({
    reducer:{
        todoList: todoReducer
    }
})

export default store