import React from 'react';
import FiltroLink from './FiltroLink';
import {connect} from 'react-redux';
import * as comprasActions from '../actions/comprasActions';
import * as filtroActions from '../actions/filtroActions';
import {bindActionCreators} from 'redux';


class Lista extends React.Component{ 
  
  state = {
    items:[],
    nuevoItem:''
  }
  

  
  handleChange = (e) => {
    const nuevoItem = e.target.value;
    this.setState({nuevoItem});
  };
  


  addCompra = (e) => {
    const item = {
      text: this.state.nuevoItem,
      key: this.state.nuevoItem,
      comprado:false
    }
    e.preventDefault();
    this.props.comprasActions.saveCompra(item);
    this.setState({nuevoItem:''});
   
  };

  deleteCompra = (i) => {
    if(window.confirm("Estas seguro de borrarlo?")){
      //store.dispatch({type:"DELETE_COMPRA", compra:i});
      this.props.comprasActions.removeCompra(i);
    }
    
  };

  filterItems = (losItems, filtro) => {
    switch(filtro){
      case "SHOW_ACTIVOS":
        return losItems.filter(i=>!i.comprado);
      case "SHOW_TACHADOS":
        return losItems.filter(i=>i.comprado==true);
      case "SHOW_TODOS":
        return losItems;
        
    }
  };

  
  render(){
    const {nuevoItem} = this.state;
    const losItems = this.props.compras;
    const filtro = this.props.filtro;
    const items = this.filterItems(losItems, filtro);
    console.log(items, filtro);
   return( 
      <div>
  <h2>Lista de compras</h2>
     <form onSubmit={this.addCompra}>
  <input
     value={nuevoItem}
     onChange={this.handleChange}
     type="text" />
  <input
     type="submit"/> 
      </form>
  
  <ul>
     {items.map(i=>
      <div key={i.key}>
      <span
      onClick={()=>this.props.comprasActions.toggleCompra(i)}
      style={{cursor:'pointer'}}
      className={i.comprado?"tachado":null}
       >{i.text}</span>
      --
      <a href="#"
        onClick={()=>this.deleteCompra(i)}
        >borrar</a>
      </div>
     )}
  </ul>
  
    <div>
      <h3>Filtro: </h3> 
      
      <FiltroLink
            filtro="SHOW_TODOS"
            current={filtro}
            onClick={()=>this.props.filtroActions.showTodos("SHOW_TODOS")}
          >
            Todos
        </FiltroLink>
      {" "}
        <FiltroLink
            current={filtro}
            filtro="SHOW_ACTIVOS"
            onClick={()=>this.props.filtroActions.showActivos("SHOW_ACTIVOS")}
          >
            Activos
        </FiltroLink>
      {" "}
        <FiltroLink
            current={filtro}
            filtro="SHOW_TACHADOS"
            onClick={()=>this.props.filtroActions.showTachados("SHOW_TACHADOS")}
          >
            Tachados
        </FiltroLink>
      
    </div>
  
  </div>
     );
  }
 
}


function mapStateToProps(state, ownProps){
  console.log("orale putita: ", state);
  return {
    compras:state.compras,
    filtro:state.filtro
  }
}

function mapDispatchToProps(dispatch){
  return {
    comprasActions: bindActionCreators(comprasActions, dispatch),
    filtroActions: bindActionCreators(filtroActions, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lista);