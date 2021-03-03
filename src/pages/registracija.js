import React from "react"
import Header from "../components/header"
import Footer from '../components/Footer'
import Registracija from '../components/registracija'

const RegisterPage = () => (
  
  <main>
    <Header activeTab = "Prijava"/>
    <Registracija/>
    <Footer/>
  </main>
)

export default RegisterPage