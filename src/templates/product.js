import React from "react"
import { graphql, Link } from "gatsby"
import styles from './product.module.css'
import Header from "../components/header"
import Footer from '../components/Footer'
import Img from 'gatsby-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"

export default function Product({ data }){
    return(
        <div>{data.allContentfulProduct.edges[0].node.productName}</div>
    )
}

export const query = graphql`
query($id: String!){
    allContentfulProduct (filter: {id: {eq: $id}}) {
      edges {
        node {
          productName
        }
      }
    }
  }
`