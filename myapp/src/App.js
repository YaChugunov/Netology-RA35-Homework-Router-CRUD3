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
          <Route path="/posts/new" component={NewPostPage} />
          <Route path="/posts/:id([0-9]+)?" component={ViewPostPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={Page404} />
        </Routes>
      </div>
    </PostsProvider>
  );
}
