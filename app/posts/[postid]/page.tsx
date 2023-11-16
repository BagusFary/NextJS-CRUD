import React from 'react'

export default function PostList({params}: {params: {postid: string}}) {
  return (
    <div>Post {params.postid}</div>
  )
}
