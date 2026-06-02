import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import CaseStudy from './pages/CaseStudy/CaseStudy'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
