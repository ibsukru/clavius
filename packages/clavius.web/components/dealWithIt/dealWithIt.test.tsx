import { shallow } from 'enzyme'
import React from 'react'
import DealWithIt from './dealWithIt'

test('DealWithIt', () => {
  const wrapper = shallow(<DealWithIt text="Hello world" />)
  expect(wrapper).toMatchSnapshot()
})
