import React from 'react'
import { Personas } from '../components'

const Index = () => {
  return (
    <div className="personas">
      <style jsx>{`
        .personas {
          margin-top: 20%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          font-size: 3rem;
        }
      `}</style>
      <Personas size="5rem" />
    </div>
  )
}

export default Index
