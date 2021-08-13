import React from "react";
import { Link, NavLink } from "react-router-dom";
import ManagePosts from "./Manageposts";
function Sidebar() {
    return (
       

        <div class="sidebar">
           
            <ul class="sideul">
                <li><a href="#">DIY</a></li>
                <li><a href="#">Debate</a></li>
                <li><a href="#">Enterprenurship</a></li>
                <li><a href="#">Art and Designing</a></li>
                <li><a href="#">Heritage and Environment</a></li>
            </ul>

        </div>

    );
}


export default Sidebar;