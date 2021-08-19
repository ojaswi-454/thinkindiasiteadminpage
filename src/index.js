    // import React from 'react';
    // import ReactDOM from 'react-dom';

    // import App from "./components/App";







    // ReactDOM.render(
  
    //  <App />,
    //  document.getElementById('root')
    // );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ManagePost from "./components/Managepost";
import Addpost from "./components/Addpost";
import Addpeople from './components/Addpeople';
import ManagePeople from './components/Managepeople';
import DIY from './components/DIY';
import Debate from './components/Debate';
import Enterprenurship from './components/Enterprenurship';
import Art from './components/Art';
import Heritage from './components/Heritage';









import Main from "./components/Main";
import Edit from './components/Edit';
function Appp(){
  return(
    <Router>
      <Switch>
        <Route exact="true" path="/" component={Main} />
        <Route path="/Managepost" component={ManagePost} />
        <Route path="/Addpost" component={Addpost} />
        <Route path="/Addpeople" component={Addpeople} />
        <Route path="/Managepeople" component={ManagePeople} />
        <Route path="/DIY" component={DIY} />
        <Route path="/Debate" component={Debate} />
        <Route path="/Enterprenurship" component={Enterprenurship} />
        <Route path="/Art" component={Art} />
        <Route path="/Heritage" component={Heritage} />
        <Route path="/Edit/:id" component={Edit} />
        
        
       
       
        
          
        

        

      </Switch>
    </Router>
  )
}
ReactDOM.render(
  <Appp />,
  document.getElementById('root')
);








