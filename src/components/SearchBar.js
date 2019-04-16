import React from 'react'


class SearchBar extends React.Component {
  state = { 
    option: 'movie',
    term: '',
   }



  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term, this.state.option)
  }

  onOptionChange =(e) => {
    this.setState({ option: e.target.value});
  }

 

  render() {
    return(
      <div className="search-bar ui segment">
        <form 
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Search</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          <div>Search for:
            <div>
              <label htmlFor="movie">Movie</label>
              <input type="radio" id="movie" name="option" value="movie" defaultChecked onChange={this.onOptionChange}/>
            </div>
            <div>
              <label htmlFor="tvShow">TV Show</label>
              <input type="radio" id="tvShow" name="option" value="tv" onChange={this.onOptionChange}/>
            </div>
            <div>
              <label htmlFor="person">Person</label>
              <input type="radio" id="person" name="option" value="person" onChange={this.onOptionChange}/>
            </div>
          </div>
        </form>
      </div>
    ) 
  }
}

export default SearchBar