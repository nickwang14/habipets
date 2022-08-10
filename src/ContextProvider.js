import { createContext, useReducer } from 'react'
import { reducer, initialState, actions } from 'state/reducer'
import PropTypes from 'prop-types'

export const AppContext = createContext()

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        habitType: state.habitType,
        walletConnected: state.walletConnected,
        alturaConnected: state.alturaConnected,
        pets: state.pets,
        todoList: state.todoList,
        pickHabitType: (habitType) => {
            dispatch({ type: actions.PICK_HABIT_TYPE, habitType })
        },
        addTodoItem: (todoItemLabel) => {
            dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel })
        },
        removeTodoItem: (todoItemId) => {
            dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId })
        },
        markAsCompleted: (todoItemId) => {
            dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId })
        }
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
}