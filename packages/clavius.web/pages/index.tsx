import React from 'react'
import { Layout, Page } from '../components'
import { storyBlokService } from '../lib'

// const Index = () => {
//   return (
//     <Layout>
//       <Navigation />
//       <Headline />
//       <Rails />
//     </Layout>
//   )
// }

// export default Index

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
    const contentOfStory = this.state.story.content
    console.log(
      `🚀 ~ file: index.tsx ~ line 41 ~ extends ~ render ~ this.state`,
      this.state,
    )

    return (
      <Layout>
        <Page content={contentOfStory} />
      </Layout>
    )
  }
}
