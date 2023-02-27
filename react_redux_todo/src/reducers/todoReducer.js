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
        default: return state;
     }
}
export default todoReducer;