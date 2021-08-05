import React, { Comment, Component} from 'react';

import SearchBar from './components/search-bar.js'
import SimilarArtist from './components/similar-artist.js';
import Loading from './components/loading.js';
import Error from './components/error.js';

import "./page-artist.css"

class PageArtist extends Component {
  state = {
    data: {
      artist:{
        image: [
          {"#text": ""},
          {"#text": ""},
          {"#text": ""},
          {"#text": ""},
          {"#text": ""}
        ],
        bio:{
          summary: ""
        },
        similar: {
          artist: {
            name: "",
            url: "",
            image: [
              { "#text": ""},
              { "#text": ""},
              { "#text": ""},
              { "#text": ""},
              { "#text": ""}
            ]
          }
        }
      }
    }
  };
  handleChange = e => {
    this.setState({
      // [e.target.name]: e.target.value
      // es lo mismo que hacer:
      busqueda: e.target.value
    });
  };

  componentWillMount(){
    // console.log("entro al componentWillMount");
    let artista = this.props.history.location.search.substr(1).replace("%20", " ");
    // console.log("artista: ", artista);
    this.fetchData(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artista+"&api_key=608225c9fdbbd3af8e7cb331c3a71dfc&format=json"
    );
  }

  fetchData = async url =>{
    this.setState({
      loading: true
    });
    const response = await fetch(url);
    const data = await response.json();
    if(data.error){
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message
      });
    }else{
      this.setState({
        loading: false,
        error: false,
        data: data
      });
      //console.log("data: ", data);
    }
  };


  render(){
    return (
      <React.Fragment>
        <SearchBar 
          onChange={this.handleChange}
          busqueda={ this.state.busqueda }
        />
        {this.state.loading && <Loading/>}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}        
        <div className="container">
            <div className="row centrar">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <img className="pic-artist margenes50" src={ this.state.data.artist.image[3]["#text"]} alt="" />
                    <h2>{ this.state.data.artist.name }</h2>
                    <p>{ this.state.data.artist.bio.summary }</p>
                    
                </div>

            </div>
            <div className="row centrar">
                <SimilarArtist data={Array.from(this.state.data.artist.similar.artist)} />
            </div>
            
        </div>
        
      </React.Fragment>
    );
  }
}

export default PageArtist;
