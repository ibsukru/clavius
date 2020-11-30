import Link from 'next/link'
import classNames from 'classnames'

import { Spinner } from '..'
import { forwardRef } from 'react'
import { ButtonPropsType } from '.'

const Button: React.FunctionComponent<ButtonPropsType> = forwardRef<
  HTMLButtonElement,
  ButtonPropsType
>(
  (
    { link, type, processing, secondary, children, icon, onClick, ...rest },
    ref,
  ) => {
    const size = rest.size || 'medium'
    const disabled = rest.disabled || processing || false

    const buttonType = type || 'primary'

    const className = classNames(size, rest.className, buttonType, {
      secondary: Boolean(secondary),
      disabled: Boolean(disabled),
      processing: Boolean(processing),
      hasIcon: Boolean(icon),
    })

    const button = (
      <button
        ref={ref}
        {...rest}
        disabled={disabled}
        className={className}
        onClick={e => {
          !disabled && onClick?.(e)
        }}
      >
        <style jsx>{`
          button {
            display: flex;
            align-items: center;
            border: none;
            border-radius: var(--radius);
            cursor: pointer;
            user-select: none;
            outline: none;
            background: var(--foreground);
            color: var(--background);
            padding: 5px 20px;
            position: relative;
            font-size: 0.875rem;
            border: 1px solid var(--foreground);
            height: fit-content;
          }

          button .text {
            margin: 0 auto;
            display: flex;
            align-items: center;
          }

          button.disabled {
            cursor: not-allowed;
            filter: grayscale(1);
            color: var(--shade-5);
            border: 1px solid var(--shade-2);
            background: var(--shade-1);
          }

          button.disabled.processing {
            color: var(--accent-6);
            cursor: default;
          }

          button.processing .text {
            opacity: 0;
          }
          button.processing > :global(.spinner) {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -0.5rem;
            margin-top: -0.5rem;
          }
          button.small {
            padding: 1px 8px;
          }
          button.large {
            padding: 6px 12px;
            font-size: 1rem;
          }
          button.secondary {
            background: var(--background);
            border-color: var(--shade-2);
            color: var(--secondary);
          }

          button:not(.disabled):hover,
          button:not(.disabled):hover {
            background: var(--background);
            border-color: var(--foreground);
            box-shadow: var(--shadow);
            color: var(--foreground);
          }

          button.ghost {
            color: var(--secondary);
          }

          button.ghost,
          button.ghost:hover {
            background: transparent;
            border-color: transparent;
            box-shadow: none;
          }

          button .icon {
            display: inline-flex;
            margin-right: 5px;
          }
        `}</style>
        {processing && <Spinner />}
        {icon && <span className="icon">{icon}</span>}
        <span className="text">{children}</span>
      </button>
    )

    if (typeof link === 'string') {
      if (link.startsWith('http')) return <a href={link}>{button}</a>

      return <Link href={link}>{button}</Link>
    }

    if (link) {
      return <Link {...link}>{button}</Link>
    }

    return button
  },
)

export default Button
