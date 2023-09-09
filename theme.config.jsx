export default {
  logo: <span>Allo Protocol</span>,
  project: {
    link: 'https://github.com/allo-protocol'
  },
  docsRepositoryBase: 'https://github.com/allo-protocol/docs/blob/main',
  banner: {
    key: '',
    text: (
      <a href="/#current-status" target="_blank" rel="noreferrer">
        🚧 Allo v2 is under active development. Learn more →
      </a>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Allo'
    }
  }
}
