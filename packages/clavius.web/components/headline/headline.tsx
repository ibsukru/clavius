import { HeadlinePricing } from '.'
import SbEditable from 'storyblok-react'

const Headline = props => {
  const { blok } = props
  const { bg, text, logo, explore } = blok

  const [pricing] = blok.pricing

  return (
    <SbEditable content={blok}>
      <div className="headline">
        <style jsx>{`
          .headline {
            position: relative;
          }

          .headline:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(${bg.filename});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top left;
            filter: brightness(50%);
          }

          .headline-content {
            position: relative;
            padding-bottom: 30px;
          }

          @media (min-width: 760px) {
            .headline-content {
            }
          }

          @media (min-width: 1600px) {
            .headline-content {
              padding-bottom: 180px;
            }
          }

          .headline-aside-title {
            font-size: 2.3rem;
            max-width: 600px;
          }

          .headline-aside {
            margin: 50px 30px 0 30px;
          }

          .headline-aside-pricing {
            margin-top: 30px;
          }

          .headline-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
          }

          .headline-nav-explore {
            display: inline-flex;
            color: var(--background);
            background-color: var(--shade-8);
            padding: 10px;
            border-radius: var(--radius);
            font-weight: bold;
            font-size: 0.875rem;
          }

          .headline-nav-explore:hover {
            background-color: var(--shade-7);
          }
        `}</style>
        <div className="headline-content">
          <nav className="headline-nav">
            <a href="/">
              <img src={logo.filename} width="42px" alt="logo" />
            </a>
            <a className="headline-nav-explore" href="/">
              {explore}
            </a>
          </nav>
          <aside className="headline-aside">
            <h1 className="headline-aside-title">{text}</h1>
            <div className="headline-aside-pricing">
              <HeadlinePricing pricing={pricing} />
            </div>
          </aside>
        </div>
      </div>
    </SbEditable>
  )
}

export default Headline
