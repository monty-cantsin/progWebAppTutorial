import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRender from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import Post from '../post/post'

test("Post component's title should NOT render as a link", () => {
	const component = shallow(<Post title='My Post' />)
	const tree = toJson(component)
	expect(tree).toMatchSnapshot()
})

test("Post component's title should render as a link", () => {
	const component = shallow(<Post title='My Post' titleLink />)
	const tree = toJson(component)
	expect(tree).toMatchSnapshot()
})

