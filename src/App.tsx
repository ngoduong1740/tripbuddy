import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/about/About'
import ForgotPassword from './pages/authentication/ForgotPassword'
import Login from './pages/authentication/Login'
import ResetPassword from './pages/authentication/ResetPassword'
import SignUp from './pages/authentication/SignUp'
import VerifyCode from './pages/authentication/VerifyCode'
import Destinations from './pages/destinations/Destinations'
import TravelHistory from './pages/history/TravelHistory'
import Home from './pages/home/Home'
import Notification from './pages/notification/Notification'
import PlaceDetails from './pages/place/PlaceDetails'
import EditProfile from './pages/profile/EditProfile'
import Profile from './pages/profile/Profile'
import QnA from './pages/qna/QnA'
import ReccomendAttractionList from './pages/reccomend-attraction/ReccomendAttractionList'
import Review from './pages/review/Review'
import Schedules from './pages/schedules/Schedules'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/place/details" element={<PlaceDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route
            path="/reccomend-attraction"
            element={<ReccomendAttractionList />}
          />
          <Route path="/notification" element={<Notification />} />
          <Route path="/travel-history" element={<TravelHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
