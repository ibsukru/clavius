const Navigation: React.FunctionComponent<{
  blok: { logo: { filename: string } }
}> = props => {
  console.log(`🚀 ~ file: navigation.tsx ~ line 2 ~ Navigation ~ props`, props)
  return (
    <nav>
      <style jsx>{``}</style>
      <img src={props.blok.logo.filename} width="42px" alt="logo" />
      Navigation
    </nav>
  )
}
export default Navigation
