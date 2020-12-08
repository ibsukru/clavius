import { storyBlockEditor } from '../../lib'

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      {children} {storyBlockEditor().bridge()}
    </>
  )
}

export default Layout
