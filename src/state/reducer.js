export const initialState = {
    habit: '',
    walletConnected: false,
    alturaConnected: false,
    pets: [],
    todoList: []
}

export const actions = {
    PICK_HABIT_TYPE: 'PICK_HABIT_TYPE',
    PICK_HABIT_NAME: 'PICK_HABIT_NAME',
    CONNECT_WALLET: 'CONNECT_WALLET',
    CONNECT_ALTURA: 'CONNECT_ALTURA',
    GET_PETS: 'GET_PETS',
    ADD_TODO_ITEM: 'ADD_TODO_ITEM',
    REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
    TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
}

export const reducer = (state, action) => {
    if (action.type === actions.PICK_HABIT_TYPE) {
        return { habitType: action.value };
    } else if (action.type === actions.ADD_TODO_ITEM) {
        return {
            todoList: [
                ...state.todoList,
                {
                    id: new Date().valueOf(),
                    label: action.value,
                    completed: false
                }
            ]
        };
    } else if (action.type === actions.REMOVE_TODO_ITEM) {
        const filteredTodoItem = state.todoList.filter(
            (todoItem) => todoItem.id !== action.value
        )
        return { todoList: filteredTodoItem };
    } else if (action.type === actions.TOGGLE_COMPLETED) {
        const updatedTodoList = state.todoList.map((todoItem) =>
            todoItem.id === action.value
                ? { ...todoItem, completed: !todoItem.completed }
                : todoItem
        )
        return { todoList: updatedTodoList };
    } else if (action.type === actions.PICK_HABIT_NAME) {
        return { habitName: action.value };
    } else {
        return state;
    }
}