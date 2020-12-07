const Footer: React.FunctionComponent<{
  blok: { links: Array<{ key: string; value: string; _uid: string }> }
}> = props => {
  const { links } = props.blok
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
