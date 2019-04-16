import './ResultItem.css'
import React from 'react'

const ResultItem = (props) => {
  return (
    <div className="item result-item">
      <img className="ui image" src={`http://image.tmdb.org/t/p/w185/${props.poster}`} alt={props.title}  />
      <div className="content">
        <div className="header" >
          {props.title}
        </div>
      </div>
      
    </div>
  )
}

export default ResultItem