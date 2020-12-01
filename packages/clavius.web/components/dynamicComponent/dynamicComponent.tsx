import { Navigation, Headline, Rails, Placeholder } from '..'

const Components = {
  navigation: Navigation,
  headline: Headline,
  rails: Rails,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] === 'undefined') {
    console.log(
      `🚀 ~ file: dynamicComponent.tsx ~ line 11 ~ DynamicComponent ~ blok.component`,
      blok.component,
    )
    return <Placeholder componentName={blok.component} />
  }

  const Component = Components[blok.component]

  return <Component blok={blok} />
}

export default DynamicComponent
