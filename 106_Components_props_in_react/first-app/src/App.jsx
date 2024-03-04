import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="cards">
          <Card title="card1" description="desc1" api="https://picsum.photos/300/301" />
          <Card title="card2" description="desc2" api="https://picsum.photos/300/302" />
          <Card title="card3" description="desc3" api="https://picsum.photos/300/303" />
          <Card title="card4" description="desc4" api="https://picsum.photos/300/300" />         
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
