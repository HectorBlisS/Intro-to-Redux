export default function comprasReducer(state = [], action){
  switch(action.type){
    case "ADD_COMPRA":
      //return state.push(action.compra);
      return [...state, action.compra];
      
    case "CHECK_COMPRADO":
      const item = {...action.compra, comprado:!action.compra.comprado};
      return state.map(c=>{
        if(c.key === action.compra.key){
          return item;
        }
        return c;
      });
      
    case "DELETE_COMPRA":
      return [...state.filter(i=>i.key !== action.compra.key)];
    default:
      return state;
  }
  
}