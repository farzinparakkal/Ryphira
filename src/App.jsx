import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import VisionMission from './components/VisionMission'
import Recognition from './components/Recognition'
import BoardMembers from './components/BoardMembers'
import Staff from './components/Staff'
import Affiliates from './components/Affiliates'
import Reviews from './components/Reviews'
import ConnectUs from './components/ConnectUs'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <VisionMission />
      <Recognition />
      <BoardMembers />
      <Staff />
      <Affiliates />
      <Reviews />
      <ConnectUs />
      <Footer />
    </div>
  )
}

export default App
