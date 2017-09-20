export function addCompra(compra){
	return {type:"ADD_COMPRA", compra}
}

export function checkComprado(compra){
	return {type:"CHECK_COMPRADO", compra}
}

export function deleteCompra(compra){
	return {type:"DELETE_COMPRA", compra}
}