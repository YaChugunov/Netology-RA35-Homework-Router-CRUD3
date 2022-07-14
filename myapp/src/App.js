import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404/Page404';
import HomePage from './pages/HomePage/HomePage';
import NewPostPage from './pages/NewPostPage/NewPostPage';
import ViewPostPage from './pages/ViewPostPage/ViewPostPage';
import PostsProvider from './components/PostsProvider/PostsProvider';
import './App.css';

export default function App() {
  return (
    <PostsProvider>
      <div className="App">
        <Routes>
          <Route path="/posts/new" element={<NewPostPage />} />
          <Route path="/posts/:id([0-9]+)?" element={<ViewPostPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route element={<Page404 />} />
        </Routes>
      </div>
    </PostsProvider>
  );
}
