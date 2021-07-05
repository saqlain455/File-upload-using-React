import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
export default function Del() {
    let UPLOAD_URL="http://localhost:3000/teacher";
    const [gettitile,settitle]=useState();
    const [getrole,setrole]=useState();
    const [getExper,setExper]=useState();
    const [gettech,settech]=useState();

    const Addpost = (event) => {
        event.preventDefault();

        var requestOptions = {
            method: 'post',
            body:{
                title:gettitile,
                role:getrole,
                Experience:getExper,
                technologies:gettech
            }
          };

        fetch(UPLOAD_URL+'/admin/addpost',requestOptions)
          .then((res) => {
              console.log(res.json())
            alert("post success");
          })
          .catch((err) => alert("Error!"));
      };
    return (
        <div>
            <h1>Teacher can delete the assignment by id </h1>
            <input type='text' placeholder='enter title' value={getId} onChange={(e)=>settitle(e.target.value)}/>
            <input type='text' placeholder='enter role' value={getId} onChange={(e)=>setrole(e.target.value)}/>
            <input type='text' placeholder='enter Experience' value={getId} onChange={(e)=>setExper(e.target.value)}/>
            <input type='text' placeholder='enter technologies' value={getId} onChange={(e)=>settech(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={Addpost} >Add post</Button>
        </div>

    );
}   


