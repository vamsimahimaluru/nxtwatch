import './index.css'

function index() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img
            className="header-logo"
            alt="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
        </div>
        <div className="header-input">
          <input type="text" placeholder="Search" />
          <button type="button" className="input-button">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="header-right">
          <img
            className="profile"
            alt="profile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          />
          <button>Logout</button>
        </div>
      </div>
    </>
  )
}

export default index
