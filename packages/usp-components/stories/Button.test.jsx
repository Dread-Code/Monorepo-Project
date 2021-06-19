import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

test('should ', () => {
  const wrapper = shallow(<Button label="Demo" />)
  expect(wrapper.find('button').length).toBe(1)
})
