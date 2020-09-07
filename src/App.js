import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  
  return (
    <Router>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/posts/:postId">
        <PostDetail/>

      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
