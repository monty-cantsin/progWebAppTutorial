import React from 'react'

import Post from '../post/post'

const Home = ({ posts }) => (
	<div>
 		{posts.length
 			? posts.map( post => (
	 			<Post 
	 				{ ... post }
	 				key={post.slug}
	 				titleLink
	 			/>
 			)) : <p>Awaiting posts!</p>
 		}
	</div>
)

export default Home