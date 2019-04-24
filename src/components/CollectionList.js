import React from 'react'

const CollectionList = (props) => {
    return (
      <div className="collection-container eight wide column">
        <h3>Collection</h3>
        <div>{props.list}</div>
      </div>
    )
}

export default CollectionList;