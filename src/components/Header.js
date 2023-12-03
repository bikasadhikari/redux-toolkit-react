import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCounter, increaseCounter } from "../features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCounter);

  return (
    <header>
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Add Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
        <button onClick={() => dispatch(increaseCounter())}>{count}</button>
      </nav>
    </header>
  );
};

export default Header;
