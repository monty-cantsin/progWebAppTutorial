import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRender from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import NotFound from './NotFound'

test('NotFound component should render as expected', () => {
	const component = shallow(<NotFound />)
	const tree = toJson(component)

	expect(tree).toMatchSnapshot()
})