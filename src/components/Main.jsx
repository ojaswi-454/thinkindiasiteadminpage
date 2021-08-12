import React from "react";
import { Link, NavLink } from "react-router-dom";
import ManagePosts from "./Manageposts";
function Main() {
    return (
       
<div class="main">
        <div class="sidebar">
           
            <ul class="sideul">
                <li><a href="#">DIY</a></li>
                <li><a href="#">Debate</a></li>
                <li><a href="#">Enterprenurship</a></li>
                <li><a href="#">Art and Designing</a></li>
                <li><a href="#">Heritage and Environment</a></li>
            </ul>

        </div>
        <div class="managehome">
        <div class="home">
           
           <ul class="homeul">
            <li><a class="homeb" href="#">Add People</a></li>
            <li><a class="homeb" href="#">Manage People</a></li>
            <li><a class="homeb" href="#">Add Post</a></li>  
            <li><a class="homeb" href="#">Manage Post</a></li>   
            <NavLink to="/manageposts">Manage Posts</NavLink>     
           </ul>
       </div>
       {/* <ManagePosts /> */}
       </div>
 
</div>
    );
}


export default Main;