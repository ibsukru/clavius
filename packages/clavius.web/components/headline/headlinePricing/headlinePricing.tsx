import Markdown from 'react-markdown'
import { HeadlinePricingPropType } from '.'
import { useFeatureToggleContext } from '../../../hooks'

const HeadlinePricing: React.FunctionComponent<HeadlinePricingPropType> = props => {
  const { featureToggles } = useFeatureToggleContext()

  const { header, footer, features, signup } = props
  const { SIGNUP_PRICING_CTA_COLOR } = featureToggles || {}

  return (
    <section className="pricing">
      <style jsx>{`
        .pricing {
          background-color: var(--shade-2);
          display: inline-block;
          padding: 20px;
          border-radius: var(--radius);
        }

        .pricing-header {
          font-size: 1.475rem;
          font-weight: bold;
          line-height: 1rem;
        }

        .pricing-features {
          margin: 20px 0;
          font-size: 0.875rem;
        }

        .pricing-features > :global(ul) {
          margin: 0;
          padding: 0;
          list-style-position: inside;
        }

        .pricing-signup {
          display: block;
          color: var(--foreground);
          background-color: var(${SIGNUP_PRICING_CTA_COLOR || '--accent-5'});
          padding: 10px;
          font-weight: bold;
          font-size: 0.875rem;
          text-align: center;
          font-size: 1.325rem;
          margin: 0 0 20px 0;
          border-radius: var(--radius);
        }

        .pricing-signup:hover {
          background-color: var(--accent-6);
        }

        .pricing-footer {
          font-size: 0.875rem;
        }
      `}</style>
      <header className="pricing-header">{header}</header>
      <div className="pricing-features">
        <Markdown source={features} />
      </div>
      <a href="/signup" className="pricing-signup">
        {signup}
      </a>
      <footer className="pricing-footer">{footer}</footer>
    </section>
  )
}

export default HeadlinePricing
