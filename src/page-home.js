import React from 'react';
import "./page-home.css";
import logo from './logo.svg';
import ReactDom from 'react-dom';
import Modal from './components/modal';

class PageHome extends React.Component{
    handleSubmit = e =>{
        e.preventDefault();
        this.props.history.push("/busqueda?"+this.state.busqueda);
    }
    onChange = e =>{
        //console.log(e.target.value);
        this.setState({
            busqueda: e.target.value
        });
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.setState({
            modal:true
        });

    }
    state = {
        busqueda : "",
        modal: false
    }
    render(){
        return (
            <div className="container">
                <div className="row centrado">
                    <div className="col-md-6 centrar">
                        <img id="logo" src={logo} alt="" />
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="busqueda">
                                <input 
                                    id="buscar" 
                                    value={ this.props.busqueda }
                                    name="busqueda" 
                                    type="search" 
                                    placeholder="Banda"  
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="actions">
                                <button className="btng" type="submit">Search Similar Artist</button>
                                <button className="btng" onClick={this.handleClick}>Lariat Systems</button>
                            </div>
                        </form>
                    </div>
                </div>
                {ReactDom.createPortal(
                    <Modal estado={this.state.modal}>
                        <h4>Aguante la birra!</h4>
                    </Modal>,
                    document.getElementById("teleport")
                )}
            </div>
        )
    }
}

export default PageHome;