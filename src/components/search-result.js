import React, { Comment, Component} from 'react';
import ArtistCard from './artist-card.js';
import Loading from './loading.js';
import Error from './error.js';

class SearchResult extends Component {
  state = {
    loading: false,
    error: false,
    data: {
      similarartists:{
        artist:[]
      }
    }
  }

  componentWillReceiveProps(e){
    let termino = e.busqueda;
    this.fetchData("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+termino+"&api_key=608225c9fdbbd3af8e7cb331c3a71dfc&format=json");
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
    }
  };

  render(){
    return (
      <React.Fragment>
        {this.state.loading && <Loading/>}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return <ArtistCard img={item.image[2]["#text"]} titulo={item.name} key={i} />
            })}
            
            {/* <h1>{ this.props.busqueda }</h1> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
