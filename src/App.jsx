import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/Home' // Rename Home to About since it contains About Me content
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} /> {/* Also accessible via /about */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App