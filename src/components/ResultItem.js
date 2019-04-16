import React from 'react'


const ResultItem = (props) => {
  return (
    <div style={{marginBottom: 15}}>
      <img src={`http://image.tmdb.org/t/p/w185/${props.poster}`} alt={props.title}  />
      <h3 
        style={{
          marginTop: 5
        }}>
        {props.title}
      </h3>
    </div>
  )
}

export default ResultItem