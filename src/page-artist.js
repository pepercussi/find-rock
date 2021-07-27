import React, { Comment, Component} from 'react';

import SearchBar from './components/search-bar.js'
import SimilarArtist from './components/similar-artist.js';

import "./page-artist.css"

class PageArtist extends Component {
  state = {};
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      // es lo mismo que hacer:
      //busqueda: e.target.value
    });
  };
  render(){
    return (
      <React.Fragment>
        <SearchBar 
          onChange={this.handleChange}
          busqueda={ this.state.busqueda }
        />
        <div className="container">
            <div className="row centrar">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <img className="pic-artist margenes50" src="https://cucharasonica.com/files/2013/05/Gustavo_Cerati-Bocanada-Frontal-600x600.jpg" alt="" />
                    <h2>Gustavo Cerati</h2>
                    <p>loremp imp sum....</p>
                    
                </div>

            </div>
            <div className="row centrar">
                <SimilarArtist/>
            </div>
            
        </div>
        
      </React.Fragment>
    );
  }
}

export default PageArtist;
