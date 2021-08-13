import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ManagePosts from "./components/Manageposts";
import ManagePeople from "./components/Managepeople";
import AddPeople from "./components/Addpeople";
import AddPosts from "./components/Addposts";
import Main from "./components/Main";

function Appp(){
  return(
    <Router>
      <Switch>
        <Route exact="true" path="/" component={Main} />
        <Route path="/manageposts" component={ManagePosts} />
        <Route path="/managepeople" component={ManagePeople} />
        <Route path="/addposts" component={AddPosts} />
        <Route path="/addpeople" component={AddPeople} />
      </Switch>
    </Router>
  )
}
ReactDOM.render(
  <Appp />,
  document.getElementById('root')
);


