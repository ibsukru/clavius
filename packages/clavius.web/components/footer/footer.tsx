import { FooterType } from '.'

const Footer: FooterType = props => {
  const { links } = props
  return (
    <footer>
      <style jsx>{`
        footer {
          padding: 20px;
        }
        nav {
          display: flex;
          gap: 20px;
        }
      `}</style>
      <nav>
        {links.map(link => {
          return (
            <a key={link._uid} href={`/${link.key}`}>
              {link.value}
            </a>
          )
        })}
      </nav>
    </footer>
  )
}

export default Footer
