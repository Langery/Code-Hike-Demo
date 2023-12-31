const theme = require('shiki/themes/material-palenight.json')
const { remarkCodeHike } = require('@code-hike/mdx')

const {
  remarkCodeHike
} = require('@code-hike/mdx')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, {theme: 'nord'}]
    ]
  }
})

module.exports = withMDX({
  pageExtensions: [
    "ts", "tsx", "js", "jsx", "md", "mdx"
  ]
})