const theme = require('shiki/themes/material-palenight.json')
const { remarkCodeHike } = require('@code-hike/mdx')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: 'nord',
          lineNumbers: false,
          showCopyButton: true,
          skipLanguages: ["","mermaid"],
          staticMediaQuery: "not screen, (max-width: 768px)",
          autoImport: true,
          autoLink: false,
        }
      ]
    ]
  }
})

module.exports = withMDX({
  pageExtensions: [
    "ts", "tsx", "js", "jsx", "md", "mdx"
  ]
})
