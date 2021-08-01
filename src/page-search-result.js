import React, { Comment, Component} from 'react';

import SearchBar from './components/search-bar.js'
import SearchResult from './components/search-result.js';

class PageSearchResult extends Component {
  state = {
    busqueda: ""
  };

  // componentWillMount(){
  //   console.log("Entramos a componentWillMount");
  // }
  componentDidMount(){
    // console.log("Estamos en componentDidMount");
    let search = this.props.history.location.search.substr(1).replace("%20", " ");
    // console.log(search);
    this.setState({
      busqueda: search
    });
  }
  // componentWillUnmount(){
  //   console.log("llegamos a componentWillUnmount");
  // }
  handleChange = e => {
    this.setState({
      busqueda: e.target.value
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
