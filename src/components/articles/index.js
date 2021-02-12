import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

const NewsArticle = () => {
  const data = useStaticQuery(graphql`
        {
          allContentfulBlogPostAll (filter: {node_locale: {eq: "en-US"}}) {
            edges {
              node {
                id
                title
                tekst{
                  tekst
                }
                blogSlika{
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
          <Img fluid={edge.node.blogSlika.fluid} />
        </div>
        <div className={styles.article_title}>{edge.node.title}</div>
        <div className={styles.article_content}><p>{edge.node.tekst.tekst}</p></div>
        <div className={styles.article_arrow}>&#8594;</div>
      </div>)}
  </div>
  )
}

export default NewsArticle