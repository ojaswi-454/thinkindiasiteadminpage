import React from "react";
import { Link, NavLink } from "react-router-dom";

function Adminnav() {
    return (
        <div class="home">   
        <ul class="homeul">
         <li><NavLink class="homeb" to="/addpeople">Add People</NavLink></li>
         <li><NavLink class="homeb" to="/managepeople">Manage People</NavLink></li>
         <li><NavLink class="homeb" to="/addposts">Add Posts</NavLink></li>  
         <li><NavLink class="homeb" to="/manageposts">Manage Posts</NavLink></li>   
        </ul>
   </div>
    ); 
}


export default Adminnav;