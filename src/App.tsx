import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { lazy } from "react";

import "modern-normalize";

const UsersPage = lazy(() => import("./pages/UsersPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const PostPage = lazy(() => import("./pages/PostPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post" element={<PostPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
