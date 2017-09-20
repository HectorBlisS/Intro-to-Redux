export default function filtroReducer(state = "SHOW_TODOS", action){
  switch(action.type){
    case "SHOW_ACTIVOS":
      return action.filtro;
    case "SHOW_TACHADOS":
      return action.filtro;
    case "SHOW_TODOS":
      return action.filtro;
    default:
      return state;
  }
}