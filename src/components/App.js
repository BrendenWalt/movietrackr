import React from 'react'
import SearchBar from './SearchBar'
import TMDb from '../apis/tmdb'
import ResultsList from './ResultsList'
import CollectionList from './CollectionList'

class App extends React.Component {
  state = {
    collection: [], 
    results: [] 
  };

  onTermSubmit = async (term, option) => {
    const response = await TMDb.get(`/search/movie`, {
      params: {
        query: term
      }
    });
    this.setState({ results: response.data.results })
  }

  onAddClick = (id) => {
    this.setState(prevState => ({
      collection: [...prevState.collection, id] 
    }));
  }

  render() {
    return (
      <div className="ui container">
        <h2>MovieTrackr</h2>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <ResultsList 
            results={this.state.results}
            onAddClick={this.onAddClick}/>
          <CollectionList
            list={this.state.collection} />
        </div>
        
      </div>
    )
  }
}

export default App