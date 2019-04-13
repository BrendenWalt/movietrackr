import React from 'react'
import SearchBar from './SearchBar'
import TMDb from '../apis/tmdb'
import ResultsList from './ResultsList'

class App extends React.Component {
  state = { results: [] };

  onTermSubmit = async (term) => {
    const response = await TMDb.get('/search/movie', {
      params: {
        query: term
      }
    });
    this.setState({ results: response.data.results })
  }

  render() {
    return (
      <div className="ui container">
        <h2>App Component</h2>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <ResultsList results={this.state.results}/>
      </div>
    )
  }
}

export default App