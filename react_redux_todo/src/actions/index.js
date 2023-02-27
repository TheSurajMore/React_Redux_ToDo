export const addTodo = (todo) => {
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            todo:todo
        }
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