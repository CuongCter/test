const initState = []

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addTodo':
            return [...state, action.payload]
            break;
    
        default:
            return state
    }
}
 
export default todoReducer