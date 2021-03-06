import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import TextEllipsis from 'react-text-ellipsis'

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
      edge => <div key={edge.node.id} className={styles.article_style}><Link to={"/posts/" + edge.node.id} style={{ textDecoration: 'none' }}>
        <div>
          <Img fluid={edge.node.blogImage.fluid} />
        </div>
        <div className={styles.article_title}>{edge.node.title}</div>
        <TextEllipsis lines={5} tag={'div'} ellipsisChars={'...'} tagClass={styles.article_content} useJsOnly={true}>{renderRichText(edge.node.text)}</TextEllipsis>
        <div className={styles.article_arrow}>&#8594;</div>
      </Link></div>)}
  </div>
  )
}

export default NewsArticle