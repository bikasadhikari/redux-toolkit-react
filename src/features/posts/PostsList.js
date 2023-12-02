import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
import {
  selectAllPosts,
  getPostError,
  getPostStatus,
  fetchPosts,
} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <article key={post.id}>
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
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostsList;
