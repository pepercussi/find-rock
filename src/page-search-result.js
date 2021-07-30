import React, { Comment, Component} from 'react';

import SearchBar from './components/search-bar.js'
import SearchResult from './components/search-result.js';

class PageSearchResult extends Component {
  state = {};

  componentWillMount(){
    console.log("Entramos a componentWillMount");
  }
  componentDidMount(){
    console.log("Estamos en componentDidMount");
  }
  componentWillUnmount(){
    console.log("llegamos a componentWillUnmount");
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      // es lo mismo que hacer:
      //busqueda: e.target.value
    });
  };
  render(){
    console.log("Estamos renderizando");
    return (
      <React.Fragment>
        <SearchBar 
          onChange={this.handleChange}
          busqueda={ this.state.busqueda }
        />
        <SearchResult busqueda={ this.state.busqueda } />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
