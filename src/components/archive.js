/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
            allMarkdownRemark(limit: 5, sort: {
                order: DESC,
                fields: [frontmatter___date]
              }) {
                edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`

const Archive = () => (
  <StaticQuery
    query={ POST_ARCHIVE_QUERY }
    render={({allMarkdownRemark}) => (
      <>
       <aside>
           <h3>Archive</h3>
           <ul>
            {allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                    <Link to={`/post${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                    </Link>
                </li>   
            ))}
           </ul>
       </aside>
      </>
    )}
  />
)

export default Archive
