import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import ShopBody from "../modules/ShopBody"

const ShopPage = ({ location }) => (
  
  <main>
    <Header activeTab = "Shop"/>
    <ShopBody sentCategory = {location.state ? location.state.sentCategory : ''}/>
    <Footer />
  </main>
)

export default ShopPage