import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Instagr = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "Instagram.png" }) {
       childImageSharp {
         fixed(width: 32) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Instagr