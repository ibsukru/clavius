import React from 'react'
import { Layout, Page } from '../components'
import { StoryBlokContextProvider } from '../contexts'
import { storyBlokType } from '../contexts/storyBlokContext'
import { storyBlockEditor, storyBlokService } from '../lib'

export default class extends React.Component<
  { storyBlok: storyBlokType },
  { storyBlok: storyBlokType }
> {
  constructor(props) {
    super(props)

    //💡 State is not ideal but for live editing purposes on dev mode, see storyblok editor to bridge
    this.state = {
      storyBlok: props.storyBlok,
    }
  }

  static async getInitialProps({ query }) {
    try {
      return {
        storyBlok: await storyBlokService().get(
          `cdn/stories/${query.slug || 'home'}`,
          {},
        ),
      }
    } catch (error) {
      console.log(`ERROR`, error)
    }

    return {}
  }

  componentDidMount() {
    storyBlockEditor().init(this)
  }

  render() {
    return (
      <StoryBlokContextProvider storyBlok={this.state.storyBlok}>
        <Layout>
          <Page />
        </Layout>
      </StoryBlokContextProvider>
    )
  }
}
