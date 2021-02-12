import React from "react"
import Header from "../components/header"
import Footer from '../components/Footer'
import ONamaTitleImg from '../modules/o_nama_title_image'
import ONamaTekst from '../components/o_nama_tekst'

const ONamaPage = () => (
  
  <main>
    <Header activeTab = "O_nama"/>
    <ONamaTitleImg/>
    <ONamaTekst/>
    <Footer/>
  </main>
)

export default ONamaPage