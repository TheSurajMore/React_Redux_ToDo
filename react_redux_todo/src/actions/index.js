export const addTodo = (todo) => {
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            todo:todo
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        id
    }
}

export const deleteAll = () => {
    return{
        type: "DELETE_ALL"
    }
}