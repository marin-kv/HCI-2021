import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Home_icon = () => {
    const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "home_icon.png" }) {
       childImageSharp {
         fluid(maxWidth: 23, maxHeight:19) {
           ...GatsbyImageSharpFluid_noBase64
         }
       }
     }
   }
 `)
  return <div style={{minWidth: "23px", minHeight: "19px"}}> 
  <Img fluid={data.myImage.childImageSharp.fluid} />
</div>
 }
 
 export default Home_icon