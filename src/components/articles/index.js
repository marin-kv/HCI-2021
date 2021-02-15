import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const NewsArticle = () => {
  const data = useStaticQuery(graphql`
        {
          allContentfulBlogPostAll (filter: {node_locale: {eq: "en-US"}}) {
            edges {
              node {
                id
                title
                text{
                  raw
                }
                blogImage{
                  fluid{
                  ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
    `)
  return (<div className={styles.body}>
    {data.allContentfulBlogPostAll.edges.map(
      edge => <div key={edge.node.id} className={styles.article_style}>
        <div style={{ maxWidth: "800px", minWidth: "300px", minHeight: "150px" }}>
          <Img fluid={edge.node.blogImage.fluid} />
        </div>
        <div className={styles.article_title}>{edge.node.title}</div>
        <div className={styles.article_content}><p>{renderRichText(edge.node.text)}</p></div>
        <div className={styles.article_arrow}>&#8594;</div>
      </div>)}
  </div>
  )
}

export default NewsArticle