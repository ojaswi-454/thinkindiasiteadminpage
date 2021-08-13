import React from "react";
import { Link, NavLink } from "react-router-dom";

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
           <li><NavLink class="homeb" to="/addpeople">Add People</NavLink></li>
         <li><NavLink class="homeb" to="/managepeople">Manage People</NavLink></li>
         <li><NavLink class="homeb" to="/addposts">Add Posts</NavLink></li>  
         <li><NavLink class="homeb" to="/manageposts">Manage Posts</NavLink></li>     
           </ul>
       </div>
      
       </div>
 
</div>
    );
}


export default Main;