import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import EditPost from "./features/posts/EditPost";

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
      </Route>
    </Routes>
  );
}

export default App;
