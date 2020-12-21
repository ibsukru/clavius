// https://github.com/zeit/styled-jsx#global-styles
import css from 'styled-jsx/css'

export default css.global`
  /* https://themer.dev/ */
  :root {
    --foreground: #000;
    --background: #fff;

    --accent-0: #dd2f2f;
    --accent-1: #f5a623;
    --accent-2: #97f646;
    --accent-3: #79c638;
    --accent-4: #58aa11;
    --accent-5: #4697f6;
    --accent-6: #197ef4;
    --accent-7: #f832e7;
    --accent-8: #863dcf;

    --shade-1: #fafafa;
    --shade-2: #eaeaea;
    --shade-3: #999;
    --shade-4: #888;
    --shade-5: #666;
    --shade-6: #444;
    --shade-7: #333;
    --shade-8: #111;

    --selection: var(--accent-2);
    --link-color: var(--accent-6);

    --secondary-light: var(--shade-3);
    --secondary: var(--shade-5);
    --secondary-dark: var(--shade-7);

    --shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    --portal-opacity: 0.25;
  }

  html.dark {
    --foreground: #fff;
    --background: #000;

    --shade-8: #fafafa;
    --shade-7: #eaeaea;
    --shade-6: #999;
    --shade-5: #888;
    --shade-4: #666;
    --shade-3: #444;
    --shade-2: #333;
    --shade-1: #111;
    --selection: var(--accent-7);
  }

  :root {
    --breakpoint-mobile: 600px;
    --breakpoint-tablet: 960px;
    --radius: 10px;
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  html,
  body {
    background-color: var(--background);
  }

  body {
    color: var(--foreground);
    font-family: var(--font-mono);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  pre,
  code {
    font-family: var(--font-mono);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header {
  }

  a {
    position: relative;
    text-decoration: none;

    color: var(--link-color);
  }

  button,
  .clickable {
    position: relative;
  }

  .small {
    font-size: 0.875rem;
  }
  .smaller {
    font-size: 0.775rem;
  }
  .smallest {
    font-size: 0.675rem;
  }

  .invert {
    background-color: var(--foreground);
    color: var(--background);
  }

  button:active,
  a:active,
  .clickable:active {
    top: 1.2px;
  }

  ::selection {
    background: var(--selection);
  }
  ::-moz-selection {
    background: var(--selection);
  }
`
