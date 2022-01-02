import SideBar from '../SideBar'
import RecommendedVideos from '../RecommendedVideos'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <SideBar />
      <RecommendedVideos />
    </div>
  </>
)
export default Home
