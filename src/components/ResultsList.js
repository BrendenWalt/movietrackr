import React from 'react'
import ResultItem from './ResultItem'

const ResultsList = (props) => {

  const renderedList = props.results.map((result) => {
    return <ResultItem 
              id={result.id}
              poster={result.poster_path}
              title={result.title}
              key={result.id} 
              onAddClick={props.onAddClick}
            />
  })

  return (
    <div className="ui relaxed divided list eight wide column">
      {renderedList}
    </div>
  )
}

export default ResultsList