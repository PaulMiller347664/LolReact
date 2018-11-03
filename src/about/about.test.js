import React from 'react'
import { shallow } from 'enzyme'

import About from './about.js'

it('renders without props', () => {
  shallow(<About />)
})
