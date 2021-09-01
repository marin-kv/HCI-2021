import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from './style.module.css'

const CartLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "cart_icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Link className={styles.button} to="/cart">
      <Img fluid={data.myImage.childImageSharp.fluid} />
    </Link>
  )
}

export default CartLogo
