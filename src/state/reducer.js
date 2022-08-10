export const initialState = {
    habit: '',
    walletConnected: false,
    alturaConnected: false,
    pets: [],
    todoList: []
}
  
export const actions = {
    PICK_HABIT_TYPE: 'PICK_HABIT_TYPE',
    CONNECT_WALLET: 'CONNECT_WALLET',
    CONNECT_ALTURA: 'CONNECT_ALTURA',
    GET_PETS: 'GET_PETS',
    ADD_TODO_ITEM: 'ADD_TODO_ITEM',
    REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
    TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
}

export const reducer = (state, action) => {
    switch (action.type) {
    case actions.PICK_HABIT_TYPE:
        
        return {
            habitType: action.habitType
        }
    case actions.ADD_TODO_ITEM:
        return {
            todoList: [
                ...state.todoList,
                {
                    id: new Date().valueOf(),
                    label: action.todoItemLabel,
                    completed: false
                }
            ]
        }
    case actions.REMOVE_TODO_ITEM: {
        const filteredTodoItem = state.todoList.filter(
            (todoItem) => todoItem.id !== action.todoItemId
        )
        return { todoList: filteredTodoItem }
    }
    case actions.TOGGLE_COMPLETED: {
        const updatedTodoList = state.todoList.map((todoItem) =>
            todoItem.id === action.todoItemId
                ? { ...todoItem, completed: !todoItem.completed }
                : todoItem
        )
        return { todoList: updatedTodoList }
    }
    default:
        return state
    }
}