/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<div><p>Hello World!</p></div>)

    expect(app.find('p').text()).toEqual('Hello World!')
  })
})
