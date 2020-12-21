import Select from './select'

export type selectOptionType = {
  text: string
  value?: string
  selected?: boolean
}

export type SelectType = React.FunctionComponent<{
  options: selectOptionType[]
  onChange?: (value: string) => void | Promise<void>
  processing?: boolean
  success?: boolean
  error?: boolean
  disabled?: boolean
  value?: string
}>

export default Select
