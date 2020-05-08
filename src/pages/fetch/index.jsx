import React from 'react'
import { Posts, User } from 'components/Fetch'

export const Fetch = () => {
  return (
    <div>
      <User userId={2} />

      <Posts userId={2} postsNumber={5} />
    </div>
  )
}

export default Fetch
