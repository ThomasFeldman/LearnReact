import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    onSearchSubmit(term){
        axious.get('https://api.unsplash.com/search/photos', {
          params: { query: term },
          headers: {
            Authorization: 'Client-ID CrM2fFC3OcHfuGTJnXRPfeQhgmDUIV9qjNb9AGu6YeE'
          }
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App; 