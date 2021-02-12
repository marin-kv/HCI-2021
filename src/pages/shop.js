import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"
import ShopBody from "../modules/ShopBody"

const ShopPage = () => (
  
  <main>
    <Header activeTab = "Shop"/>
    <ShopBody />
    <Footer />
  </main>
)

export default ShopPage