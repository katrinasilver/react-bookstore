import React from 'react'

const SortButton = (props) => {
  return (
    <input type="button" className="sort btn btn-outline-secondary mr-1" onClick={props.onClick} value={props.sortBy} />
  )
}

export default SortButton
