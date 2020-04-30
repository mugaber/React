import React from 'react'
import { useFetch } from 'effects'

export const Posts = ({ userId, postsNumber }) => {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      {posts &&
        posts
          .filter(post => post.userId === userId)
          .slice(0, postsNumber)
          .map(post => (
            <div
              id={post.title}
              style={{
                margin: '1rem',
                padding: '.5rem',
                borderRadius: '10px',
                border: '1px solid grey'
              }}
            >
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
    </div>
  )
}

//

export const User = ({ userId }) => {
  const user = useFetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`, true)

  return (
    <div
      style={{
        margin: '1rem',
        padding: '.5rem',
        borderRadius: '10px',
        border: '1px solid grey'
      }}
    >
      {user && user.username ? (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  )
}
