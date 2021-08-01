import React from 'react';
import "./page-home.css";
import logo from './logo.svg';

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
    state = {
        busqueda : ""
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
                                <button className="btng">EscuelaDevRock</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHome;