import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import ManagePost from "./Managepost";
import AddPost from "./Addpost";
import Addpeople from './Addpeople';
import ManagePeople from './Managepeople';

function DIY() {
    return(


        <div class="main">

        <div class="sidebar">
           
            <ul class="sideul">
                <li> <NavLink to="/DIY">DIY </NavLink></li>
                <li> <NavLink to="/Debate">Debate  </NavLink></li>
                <li><NavLink to="/Enterprenurship">Enterprenurship </NavLink></li>
                <li><NavLink to="/Art">Art and Designing  </NavLink></li>
                <li><NavLink to="/Heritage">Heritage and Environment </NavLink></li>
                
                 
            </ul>

        </div>
       
       
        <div class="home">
            <h1 class="heading"> DIY </h1>
           
           <ul class="homeul">
           <li> <NavLink class="homeb" to="/Addpeople">Add People </NavLink></li>
                <li> <NavLink class="homeb" to="/Managepeople">Manage People </NavLink></li>
            
            
            <li> <NavLink class="homeb" to="/Addpost">Add Post</NavLink></li>  
            <li> <NavLink class="homeb" to="/Managepost">Manage Post</NavLink></li>
            
             
            
            


            
             
            
                
           </ul>
       </div>
       
       
 
</div>


    );
}

export default DIY;