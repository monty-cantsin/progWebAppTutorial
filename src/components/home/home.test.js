import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestRender from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

import Home from './Home'
import Post from '../post/post'

test('Home component should render one post as expected', () => {
	const posts = [{
    "title": "How to build a progressive web app with React",
    "slug": "how-to-build-a-progressive-web-app-with-react",
    "excerpt": "One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on.",
    "content": "One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on."
	}]
	const component = shallow(<Home posts={posts}/>)
	const tree = toJson(component)
	expect(component.find(Post).length).toBe(1)
	expect(tree).toMatchSnapshot()
})

test('Home component should render two posts as expected', () => {
	const posts = [{
    "title": "How to build a progressive web app with React",
    "slug": "how-to-build-a-progressive-web-app-with-react",
    "excerpt": "One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on.",
    "content": "One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on."
	}, {
    "title": "How to build a progressive web app with React",
    "slug": "how-to-build-a-progressive-web-app-with-react",
    "excerpt": "One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on.",
    "content": "One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on."    
	}]
	const component = shallow(<Home posts={posts}/>)
	const tree = toJson(component)
	expect(component.find(Post).length).toBe(2)
	expect(tree).toMatchSnapshot()
})

test('Home component should not render any posts if there are none', () => {
	const posts = []
	const component = shallow(<Home posts={posts}/>)
	const tree = toJson(component)
	expect(component.find(Post).length).toBe(0)
	expect(tree).toMatchSnapshot()
})