import React from 'react'
import { shallow } from 'enzyme'
import styles from 'button.scss'
import Button from './Button'

describe('Button', () => {
  it('should find a button', () => {
    const wrapper = shallow(<Button label="Demo" primary={true} />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('should be primary button ', () => {
    const wrapper = shallow(<Button label="Demo" primary={true} />)
    expect(wrapper.find('button').hasClass(styles['storybook-button--primary'])).toBe(true)
  })

  it('should be secondary button ', () => {
    const wrapper = shallow(<Button label="Demo" primary={false} />)
    expect(wrapper.find('button').hasClass(styles['storybook-button--secondary'])).toBe(true)
  })

  it('should be return the brackground color', () => {
    const wrapper = shallow(<Button label="Demo" primary={false} backgroundColor="red" />)
    expect(wrapper.getElement().props.style.backgroundColor).toBe('red')
  })
})
