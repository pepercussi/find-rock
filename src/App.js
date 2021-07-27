import React, { Comment, Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import PageSearchResult from './page-search-result.js';
import PageHome from './page-home.js';
import PageArtist from './page-artist.js'


class App extends Component {
  render(){
    return (
      <PageArtist/>
    );
  }
}

export default App;
