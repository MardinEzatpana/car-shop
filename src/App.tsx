import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Store from './components/Store'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Navbar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
