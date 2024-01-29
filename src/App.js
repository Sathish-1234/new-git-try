import React from 'react'
import Nav from './components/NavigationBar'
import Main from './components/Main'
import Droptrip from './components/Droptrip'
import Navtrip from './components/Navtrip'
import Img from './components/Img'
import About from './components/About'
import Footer from './components/Footer'
import Quotes from './components/Quotes'

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Navtrip/>
      <About/>
      <Quotes/>
      <Footer/>
    </div>
  )
}

export default App