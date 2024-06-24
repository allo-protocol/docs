import { useConfig } from 'nextra-theme-docs'

export default {
  logo: <span>Allo Protocol</span>,
  project: {
    link: 'https://github.com/allo-protocol'
  },
  docsRepositoryBase: 'https://github.com/allo-protocol/docs/blob/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Allo Docs'
    }
  },
  head: () => {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'Allo Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The Allo protocol docs'}
        />
      </>
    )
  }
}
