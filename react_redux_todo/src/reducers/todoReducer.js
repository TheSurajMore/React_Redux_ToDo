const initialList = {
    list: []
}
const todoReducer = (state=initialList, action) => {
    switch(action.type){
        case "ADD_TODO" :
            const {id, todo} = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        todo:todo
                    }
                ]
            }
            case "DELETE_TODO" :    
             const newList = state.list.filter((el)=>el.id!==action.id)
                return {
                    ...state,
                    list : newList
                }
            case "DELETE_ALL" : 
            return{
                ...state,
                list : []
            }
        default: return state;
     }
}
export default todoReducer;