import React from 'react'

function index({title, icon}) {
  return (
    <div className="sidebar-row">
      <i className="fas">{icon}</i>
      <h2>{title}</h2>
    </div>
  )
}

export default index
