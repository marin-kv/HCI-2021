import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Facebook = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "Facebook.png" }) {
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

export default Facebook