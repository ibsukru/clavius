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
    const { content } = this.state.story

    const { bg } = content

    return (
      <Layout>
        <style jsx>{`
          .hero {
            position: relative;
            width: 100vw;
            height: 100vh;
          }
          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(${bg.filename});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            filter: brightness(60%);
          }
          .hero-content {
            position: relative;
          }
        `}</style>
        <div className="herwo">
          <div className="herwo-content">
            <Page content={content} />
          </div>
        </div>
        {/* <img className="hero" alt="hero" src={bg.filename} /> */}
      </Layout>
    )
  }
}
