import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Shop_icon = () => {
    const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "shop_icon.png" }) {
       childImageSharp {
         fixed(width: 23, height:19) {
           ...GatsbyImageSharpFixed_noBase64
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed}
              />
 }
 
 export default Shop_icon