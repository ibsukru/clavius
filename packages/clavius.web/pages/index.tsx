import React from 'react'
import { Layout, Page } from '../components'
import { storyBlokService } from '../lib'
export default class extends React.Component<{}, { story: any }> {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story,
    }
  }

  static async getInitialProps({ query }) {
    storyBlokService.setQuery(query)

    const res = await storyBlokService.get('cdn/stories/home', {})

    return {
      res,
    }
  }

  componentDidMount() {
    storyBlokService.initEditor(this)
  }

  render() {
    const { content } = this.state.story

    return (
      <Layout>
        <Page content={content} />
      </Layout>
    )
  }
}
