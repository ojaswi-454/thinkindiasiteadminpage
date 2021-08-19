import React,{useState}  from "react";
import { Link, NavLink } from "react-router-dom";
import ManagePost from "./Managepost";
import Addpost from "./Addpost";
import ManagePeople from "./Managepeople";
import DIY from "./DIY";
import { useHistory } from "react-router";
import axios from "axios";




const Addpeople = () => {
    let history = useHistory();
    const [people,setPeople]=useState({
        name:"",
        about:"",
        topic:""
    });
    const {name,about,topic}=people;
    const onInputChange = e => {
        setPeople({ ...people,[e.target.name]: e.target.value})

    };
    const onSubmit= async e => {
        e.preventDefault();
        
        history.push("./Managepeople");
        
        


    };


    
    
        return(
            <div class="main">
            <div class="sidebar">
               
                <ul class="sideul">
                    
                <li> <NavLink to="/DIY">DIY </NavLink></li>
                <li> <NavLink to="/Debate">Debate  </NavLink></li>
                <li><NavLink to="/Enterprenurship">Enterprenurship</NavLink></li>
                <li><NavLink to="/Art">Art and Designing  </NavLink></li>
                <li><NavLink to="/Heritage">Heritage and Environment </NavLink></li>
                    
                     
                </ul>
                
    
            </div>
           
           
            <div class="home">
               
               <ul class="homeul">
                <li><a class="homeb" href="#">Add People</a></li>
                
                <li> <NavLink class="homeb" to="/Managepeople">Manage People </NavLink></li>
                <li> <NavLink class="homeb" to="/Addpost">Add Post</NavLink></li> 
                <li> <NavLink class="homeb" to="/Managepost">Manage Posts</NavLink></li>     
               </ul>
               <h1 class="title"> Add people </h1>
               <div class="form">
                   
               <form onSubmit={e => onSubmit(e)} 
               >
                   
                   
                       
                       <p class="label"> Name  </p>
                       <input type="text" 
                        class="input" name="name"  value={name} onChange={e => onInputChange(e)}
                        
                         />
                       <p class="label"> Body </p>
                       <textarea name="body" id="body" name="about" value={about} onChange={e => onInputChange(e)} ></textarea>
                       <p class="label"> Topic </p>
                       <select name="topic" class="topic" name="topic" value={topic} onChange={e => onInputChange(e)}  >
                           <option value="DIY"> DIY </option>
                           <option value="Debate"> Debate  </option>
                           <option value="Enterprenurship"> Enterprenurship  </option>
                           <option value="Art and Designing"> Art and Designing  </option>
                           <option value="Heritage"> Heritage and Environment  </option>
                       </select>
                       <br />
                       <br />
                       <br />
                       <br />
                       
                       <input type="submit" value="Add people" class="submit" />
                       </form>
    
                       
                       
                   </div>
               
               
    
           </div>
           
           
           
           
     
    </div>
    
        )
    }



    


export default Addpeople;