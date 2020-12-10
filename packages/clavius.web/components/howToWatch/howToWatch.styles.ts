import css from 'styled-jsx/css'

export default css`
  .howToWatch {
    padding: 30px 0;
    margin: 0 auto;
    color: var(--background);
    background-color: var(--shade-7);
    text-align: center;
  }

  .howToWatch-header {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 30px 0;
  }

  .howToWatch-wrapper {
    max-width: 60%;
    margin: 0 auto;
  }

  .howToWatch-stepHeader {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .howToWatch-steps {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  @media (min-width: 2760px) {
    .howToWatch-steps {
      flex-direction: row;
    }
  }

  .howToWatch-step {
    background-color: var(--foreground);
    margin: 0 auto;
    padding: 10px;
    border-radius: var(--radius);
  }

  .howToWatch-number {
    display: block;
    text-align: center;
  }

  .howToWatch-description {
    font-size: 0.875rem;
  }
`
