import React from 'react'
import { StoryblokResult } from 'storyblok-js-client'
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
    let storyBlok: StoryblokResult | undefined

    try {
      storyBlok = await storyBlokService().get(
        `cdn/stories/${query.slug || 'home'}`,
        {},
      )
    } catch (error) {
      console.log(
        `🚀 ~ file: index.tsx ~ line 18 ~ extends ~ getInitialProps ~ error`,
        error,
      )
    }

    return {
      storyBlok,
    }
  }

  componentDidMount() {
    storyBlockEditor().init()
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
