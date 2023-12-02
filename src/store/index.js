import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/counterSlice";
import PostsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostsReducer,
    users: usersReducer,
  },
});
