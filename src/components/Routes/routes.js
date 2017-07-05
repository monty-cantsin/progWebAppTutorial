import React from 'react'
import { Match, Miss } from 'react-router'

import posts from '../../../blog-posts.json'

import About from '../about/about'
import NotFound from '../notfound/notfound'
import Home from '../home/home'
import PostDetail from '../postdetail/postdetail'

const Routes = () => (
	<div>
		<Match exactly pattern='/' component={() => <Home posts={posts.posts} />} />
		<Match exactly pattern='/about' component={About} />
		<Match pattern='/post/:slug' component={props => {
		  const post = posts.posts.filter(post => props.params.slug === post.slug)
		  return <PostDetail post={post[0]} />
		}} />
		<Miss component={NotFound} />
	</div>
)

export default Routes