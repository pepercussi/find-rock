import React from 'react';
import './search-bar.css';
import logo from '../logo.svg';

class SearchBar extends React.Component{
    state = {
        busqueda: ""
    };
    handleChange = e => {
        this.setState(
            { [ e.target.name ]: e.target.value }
        );
        console.log("Soy el input: ",e.target.value);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("")
    }
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a class="navbar-brand" href="#"><img className="logo-barra" src={ logo } alt="" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline" onSubmit={this.handleSubmit}>
                                <div className="busqueda">
                                    <input 
                                        id="buscar" 
                                        value={ this.props.busqueda }
                                        name="busqueda" 
                                        type="search" 
                                        placeholder="Banda"  
                                        onChange={this.props.onChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default SearchBar