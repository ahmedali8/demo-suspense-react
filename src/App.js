import React, { Suspense } from 'react';
import createResource from './resource';
import PostList from './PostList';

const resource = createResource();

function App() {
	return (
		<div >
			<h1>Blog Posts</h1>
			<Suspense fallback={<h1>Loading...</h1>}>
				<PostList resource={resource} />
			</Suspense>
		</div>
	);
}

export default App;
