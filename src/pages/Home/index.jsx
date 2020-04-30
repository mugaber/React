import React from 'react'
import { Posts, User } from 'components/Fetch'

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>

      <User userId={2} />

      <Posts userId={2} postsNumber={5} />
    </div>
  )
}

export default HomePage
