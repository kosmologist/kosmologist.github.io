/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Personal Blog by <strong>{author.name}</strong>{author?.summary || null}
          {` `}
          <br></br>
          <a href={`https://www.linkedin.com/in/kosmologist`}>
            LinkedIn
          </a>
          {` `}
          <a href={`https://stackoverflow.com/users/3141231/qasim`}>
            StackOverflow
          </a>
          {` `}
          <a href={`https://github.com/kosmologist`}>
            Github
          </a>
          {` `}
          <a href={`https://x.com/qosmologist`}>
            Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
