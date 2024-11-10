import { useConfig } from 'nextra-theme-docs';
import Head from 'next/head';

export default {
  logo: (
    <>
      <img src="/allo_favicon.png"></img>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Allo Protocol
      </span>
    </>
  ),
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
        <link rel="shortcut icon" href="/allo_favicon.png" />
      </>
    )
  }
}
