import React from "react"
import Header from "../components/header"
import Footer from '../components/Footer'
import Prijava from '../components/prijava'

const LoginPage = () => (
  
  <main>
    <Header activeTab = "Prijava"/>
    <Prijava/>
    <Footer/>
  </main>
)

export default LoginPage