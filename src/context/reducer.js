const reducer =(state, action)=>{
    switch (action.type) {
      case "DELETE_TRANSACTION":
        const deletedTrans= state.filter(trans => trans.id !== action.payload)
        localStorage.setItem("transactions", JSON.stringify(deletedTrans));
        return deletedTrans;

      case "ADD_TRANSACTION":
        const addedTrans= [action.payload, ...state]
        localStorage.setItem("transactions", JSON.stringify(addedTrans));
        return addedTrans;

       default:
           return state;
    }

}

export default reducer;