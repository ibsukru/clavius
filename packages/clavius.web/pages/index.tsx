import React from 'react'
import { StoryblokResult } from 'storyblok-js-client'
import { Layout, Page } from '../components'
import { StoryBlokContextProvider } from '../contexts'
import { storyBlokType } from '../contexts/storyBlokContext'
import { storyBlockEditor, storyBlokService } from '../lib'

export default class extends React.Component<
  { storyBlok: storyBlokType },
  { story: unknown }
> {
  constructor(props) {
    super(props)
    this.state = {
      story: props.storyBlok?.data?.story,
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
      <StoryBlokContextProvider storyBlok={this.props.storyBlok}>
        <Layout>
          <Page />
        </Layout>
      </StoryBlokContextProvider>
    )
  }
}
