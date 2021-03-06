import React from "react"
import { graphql, Link } from "gatsby"
import styles from './blog_post.module.css'
import Header from "../components/header"
import Footer from '../components/Footer'
import Img from 'gatsby-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"

export default function BlogPost({ data }) {
  return (
    <main>
      <Header activeTab="Naslovnica" />
      <div style = {{backgroundColor:"#F8F4EF", padding:"1em"}}><Link to={"/"} style = {{textDecoration: 'none'}}><div className={styles.back_button}>&#8249; Natrag</div></Link></div>
      <div className={styles.body}>
        <div className={styles.article_title}>{data.allContentfulBlogPostAll.edges[0].node.title}</div>
        <div className={styles.writer}> by {data.allContentfulBlogPostAll.edges[0].node.writer}</div>
        <div className={styles.blog_img}>
          <Img fluid={data.allContentfulBlogPostAll.edges[0].node.blogImage.fluid} />
        </div>
        <div className={styles.article_text}>{renderRichText(data.allContentfulBlogPostAll.edges[0].node.text)}</div>
      </div>
      <div style = {{backgroundColor:"#F8F4EF", padding:"1em"}}><Link to={"/"} style = {{textDecoration: 'none'}}><div className={styles.back_button}>&#8249; Natrag</div></Link></div>
      <Footer />
    </main>
  )
}

export const query = graphql`
query($id: String!){
    allContentfulBlogPostAll (filter: {id: {eq: $id}}) {
      edges {
        node {
          writer
          id
          title
          text{
            raw
          }
          blogImage{
            fluid(maxHeight: 150, maxWidth: 300){
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`