import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import EditPost from "./features/posts/EditPost";
import UserList from "./features/users/UserList";
import User from "./features/users/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path="edit/:postId" element={<EditPost />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
        
        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<User />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
