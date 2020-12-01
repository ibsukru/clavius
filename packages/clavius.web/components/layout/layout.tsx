import { storyBlokService } from '../../lib'

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      {children} {storyBlokService.bridge()}
    </>
  )
}

export default Layout
