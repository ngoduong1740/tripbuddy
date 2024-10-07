import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import About from './pages/about/About'
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
