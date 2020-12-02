import { HeadlinePricing } from '.'
import SbEditable from 'storyblok-react'

const Headline = props => {
  const { blok } = props
  const { bg, text, logo, explore } = blok

  const [pricing] = blok.pricing

  return (
    <SbEditable content={blok}>
      <div className="hero">
        <style jsx>{`
          .hero {
            position: relative;
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

          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
          }
          a {
            display: inline-block;
          }

          h1 {
            font-size: 2.3rem;
            max-width: 600px;
          }
          section {
            margin: 50px 30px 0 30px;
          }
          .pricing {
            margin-top: 30px;
          }
          .explore {
            display: inline-flex;
            color: var(--background);
            background-color: var(--shade-8);
            padding: 10px;
            border-radius: var(--radius);
            font-weight: bold;
            font-size: 0.875rem;
          }
          .explore:hover {
            background-color: var(--shade-7);
          }
        `}</style>
        <div className="hero-content">
          <div className="header">
            <a href="/">
              <img src={logo.filename} width="42px" alt="logo" />
            </a>
            <a className="explore" href="/">
              {explore}
            </a>
          </div>
          <section>
            <h1>{text}</h1>
            <div className="pricing">
              <HeadlinePricing pricing={pricing} />
            </div>
          </section>
        </div>
      </div>
    </SbEditable>
  )
}

export default Headline
