import { useRouter } from 'next/router'
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
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.allo.gitcoin.co' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Allo'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The Allo protocol docs'}
        />
      </>
    )
  }
}
