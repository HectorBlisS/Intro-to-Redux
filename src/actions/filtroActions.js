export function showActivos(filtro){
	return {type:"SHOW_ACTIVOS", filtro}
}

export function showTachados(filtro){
	return {type:"SHOW_TACHADOS", filtro}
}

export function showTodos(filtro){
	return {type:"SHOW_TODOS", filtro}
}
