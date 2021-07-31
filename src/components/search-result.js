import React, { Comment, Component} from 'react';
import ArtistCard from './artist-card.js'

class SearchResult extends Component {
  state = {
    data: {
      similarartists:{
        artist:[]
      }
    }
  }

  componentDidMount(){
    this.fetchData("https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=metallica&api_key=608225c9fdbbd3af8e7cb331c3a71dfc&format=json");
  }

  fetchData = async url =>{
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      data: data
    });
  };

  render(){
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return <ArtistCard img={item.image[2]["#text"]} titulo={item.name} key={i} />
            })}
            
            <h1>{ this.props.busqueda }</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
