import React from 'react'
import ResultItem from './ResultItem'

const ResultsList = (props) => {

  const renderedList = props.results.map((result) => {
    return <ResultItem 
              poster={result.poster_path}
              title={result.title}
              key={result.id} 
            />
  })

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}

export default ResultsList