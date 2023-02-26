export const addTodo = () => {
    return{
        type: "ADD_TODO"
    }
}

export const deleteTodo = () => {
    return{
        type: "DELETE_TODO"
    }
}

export const deleteAll = () => {
    return{
        type: "DELETE_ALL"
    }
}