import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styles from './product.module.css'
import Header from "../components/header"
import Footer from '../components/Footer'
import ShopCategories from '../components/ShopCategories'
import ProductSection from '../components/ProductSection'
import Img from 'gatsby-image'

export default function Product({ data }) {
  const categoryDict = { 'Pivo': ['Svijetlo', 'Tamno', 'Lager', 'Ale', 'Pšenično'], 'Slad': [], 'Hmelj': [], 'Kvasac': [], 'Oprema': ['Kompleti', 'Fermentacija', 'Higijena', 'Punjenje'] };
  const [category, setCategory] = useState('');

  return (
    <main>
      <Header />
      <div className={styles.productBody}>
        <ShopCategories categories={categoryDict} setCategory={setCategory} />
        <ProductSection data={data} />
      </div>
      <Footer />
    </main>
  )
}

export const query = graphql`
query($id: String!){
    allContentfulProduct (filter: {id: {eq: $id}}) {
      edges {
        node {
          productName
          productPrice
          productDescription {
            productDescription
          }
          productTags
          productImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`