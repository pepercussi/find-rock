import React, { Comment, Component} from 'react';
import ArtistCard from './artist-card.js'

class SearchResult extends Component {
  state = {
    "artist": [
      {
          "name": "Allie X",
          "match": "1",
          "url": "https://www.last.fm/music/Allie+X",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/744b9f38af4a009bdab5cdaf172ee104.webp#744b9f38af4a009bdab5cdaf172ee104"
      },
      {
          "name": "Lorde",
          "mbid": "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
          "match": "0.827789",
          "url": "https://www.last.fm/music/Lorde",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/85175af262fd3a6a81a4113b290c2916.webp#85175af262fd3a6a81a4113b290c2916"
      },
      {
          "name": "Billie Eilish",
          "match": "0.811899",
          "url": "https://www.last.fm/music/Billie+Eilish",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/9ebb83ddc5d811d864e7a54077e360b9.webp#9ebb83ddc5d811d864e7a54077e360b9"
      }, {
          "name": "Marina",
          "mbid": "fe0ad4d4-391b-4f43-b02f-4d2ed0ab2b5e",
          "match": "0.648183",
          "url": "https://www.last.fm/music/Marina",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/122aea4964fbcf9e8ebba282292935d2.webp#122aea4964fbcf9e8ebba282292935d2"
      }, {
          "name": "BROODS",
          "mbid": "68205c8f-9518-4b49-8df7-bd297da67599",
          "match": "0.573807",
          "url": "https://www.last.fm/music/BROODS",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/02f996f2935b13fb18e2d420a1202487.webp#02f996f2935b13fb18e2d420a1202487"
      }, {
          "name": "Declan Mckenna",
          "match": "0.525606",
          "url": "https://www.last.fm/music/Declan+Mckenna",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/2588f9f2db2c03950633bce29f32d978.webp#2588f9f2db2c03950633bce29f32d978"
      }, {
          "name": "Susanne Sundfør",
          "mbid": "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
          "match": "0.463562",
          "url": "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/879147866679f85158a4acff426c6ff6.webp#879147866679f85158a4acff426c6ff6"
      }, {
          "name": "iamamiwhoami",
          "mbid": "9aaa99df-9383-47df-92af-8bb5e5595815",
          "match": "0.457291",
          "url": "https://www.last.fm/music/iamamiwhoami",
          "image": "https://lastfm.freetls.fastly.net/i/u/770x0/72aac11a306140f69ab8e4b8f73bd055.webp#72aac11a306140f69ab8e4b8f73bd055"
      }
    ]
  }
  render(){
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.artist.map((item, i) => {
              return <ArtistCard img={item.image} titulo={item.name} key={i} />
            })}
            
            <h1>{ this.props.busqueda }</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
