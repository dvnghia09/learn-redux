const initState = [
    { id: 1, name: 'quét nhà', completed: false, priority: 'High'},
    { id: 2, name: 'Lau nhà', completed: true, priority: 'High'},
    { id: 3, name: 'Rửa bát', completed: false, priority: 'High'},
]

const todoReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];
        case 'todoList/updateStatue':
            return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
}

export default todoReducer;