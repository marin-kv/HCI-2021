import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "Logo.png" }) {
       childImageSharp {
         fixed(width: 108) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Logo