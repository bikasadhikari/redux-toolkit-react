import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

let PostExcerpt = ({post}) => {
  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0)}</p>
        <p>
          <Link to={`post/${post.id}`}>View Post</Link>&nbsp;
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <div>
          <ReactionButtons post={post} />
        </div>
      </article>
  )
};

PostExcerpt = React.memo(PostExcerpt);

export default PostExcerpt