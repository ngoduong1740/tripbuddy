import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/about/About'
import Home from './pages/home/Home'
import PlaceDetails from './pages/place/PlaceDetails'
import Profile from './pages/profile/Profile'
import EditProfile from './pages/profile/EditProfile'
import QnA from './pages/qna/QnA'


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/place/details" element={<PlaceDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path='/qna' element={<QnA />}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
