import React from 'react'
import SidebarRow from '../SidebarRow'
import './index.css'

function index() {
  return (
    <div className="side-bar">
      <SidebarRow icon={<i className="fas fa-home" />} title="Home" />
      <SidebarRow icon={<i className="fab fa-whatsapp" />} title="Trending" />
      <SidebarRow
        icon={<i className="fas fa-closed-captioning" />}
        title="Subscription"
      />
    </div>
  )
}

export default index
