const reducer =(state, action)=>{
    switch (action.type) {
      case "DELETE_TRANSACTION":
        const deletedTrans= state.filter(trans => trans.id !== action.payload)
        return deletedTrans;

      case "ADD_TRANSACTION":
        const addedTrans= [action.payload, ...state]
        return addedTrans;

       default:
           return state;
    }

}

export default reducer;