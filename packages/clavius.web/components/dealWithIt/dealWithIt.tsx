import React from 'react'
import { dealWithIt } from 'clavius.lib'

const DealWithIt: React.FunctionComponent<{ text: string }> = ({ text }) => (
  <span>{dealWithIt(text)}</span>
)

export default DealWithIt
