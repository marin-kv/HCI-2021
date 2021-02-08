import React from "react"
import Header from "../components/header"
import Carousel from "../modules/carousel"
import Footer from '../components/Footer'

const IndexPage = () => (
  
  <main>
    <Header activeTab = "Naslovnica"/>
    <Carousel/>
    <Footer/>
  </main>
)

export default IndexPage