import React from 'react'

export default function PostList({ resource }) {
    const posts = resource.posts.read();

    return (
        <ul>
            {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    )
}
