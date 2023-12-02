import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, selectPostById, updatePost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [addReuestStatus, setAddRequestStatus] = useState("idle");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();

  const canSave =
    [title, content, userId].every(Boolean) && addReuestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${post.id}`);
      } catch (err) {
        console.log("Failed to save");
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const onDeletePostClicked = () => {
    try {
        setAddRequestStatus("pending");
        dispatch(deletePost({id: post.id})).unwrap();

        navigate("/");
    } catch (err) {
        console.log("Failed to delete.");
    } finally {
        setAddRequestStatus("idle");
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <section>
      <h2>Add a New Post</h2>

      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value={""}></option>
          {usersOptions}
        </select>

        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>

        <button onClick={onDeletePostClicked}>Delete</button>
      </form>
    </section>
  );
};

export default EditPost;
