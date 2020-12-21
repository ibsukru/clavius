import { IconType } from '../icons'
import { withSize } from '../icons/shared'

const Spinner: IconType = props => {
  return (
    <span className="spinner">
      <style jsx>{`
        @-webkit-keyframes spin {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .spinner {
          display: inline-block;
          width: ${props.width};
          height: ${props.height};
          border: solid 2px transparent;
          border-top-color: inherit;
          border-left-color: inherit;
          border-radius: 50%;
          animation: spin 550ms linear infinite;
        }
      `}</style>
    </span>
  )
}

export default withSize(Spinner)
