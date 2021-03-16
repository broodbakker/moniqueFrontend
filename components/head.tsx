import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = ({ props }: any) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{''}</title>

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />




    <meta name="twitter:card" content="summary_large_image" />

    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </NextHead>
)



export default Head
