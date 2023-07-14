const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const config = {

}
 
module.exports = withNextra(config)
