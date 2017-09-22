import firebase from '../firebase';

export function loadComprasSuccess(compras){
	return {type:"LOAD_COMPRAS_SUCCESS", compras}
}

export function addCompra(compra){
	return {type:"ADD_COMPRA", compra}
}

export function checkComprado(compra){
	return {type:"CHECK_COMPRADO", compra}
}

export function deleteCompra(compra){
	return {type:"DELETE_COMPRA", compra}
}

export function saveCompra(compra){
	return function(dispatch, getState){
		firebase.database().ref("compras")
		.push(compra)
		.then(r=>{
			compra['key'] = r.key;
			dispatch(addCompra(compra));
		})
		.catch(e=>console.log(e));
	}
}

export function loadCompras(){
	return function(dispatch, getState){
		firebase.database().ref("compras")
		.once("value")
		.then(r=>{
			let lista = [];
			const obj = r.val();
			for(let k in obj){
				let item = obj[k];
				item['key'] = k;
				lista.push(item);
			}
			dispatch(loadComprasSuccess(lista));
		})
		.catch(e=>console.log(e));
	}
}

export function removeCompra(compra){
	return function(dispatch, getState){
		let updates = {};
		updates['/compras/' + compra.key] = null;
		firebase.database().ref().update(updates)
			.then(r=>dispatch(deleteCompra(compra)))
			.catch(e=>console.log(e));

	}
}

export function toggleCompra(compra){
	return function(dispatch, getState){
		let updates = {};
		let co = {...compra, comprado:!compra.comprado};
		updates['/compras/' + compra.key] = co;
		firebase.database().ref().update(updates)
			.then(r=>dispatch(checkComprado(compra)))
			.catch(e=>console.log(e));
	}
}