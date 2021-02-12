import React from "react"
import Header from "../components/header"
import Carousel from "../modules/carousel"
import Footer from '../components/Footer'
import Articles from "../modules/news_article"

const IndexPage = () => (

  <main>
    <Header activeTab="Naslovnica" />
    <Carousel />
    <Articles />
    <Footer />
  </main>
)

export default IndexPage