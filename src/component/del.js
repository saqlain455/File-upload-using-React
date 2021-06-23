import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
export default function Del() {
    let UPLOAD_URL="http://localhost:3000/teacher";
    const [getId,setId]=useState();
     

    const Del = (event) => {
        event.preventDefault();
       fetch(UPLOAD_URL+'/DeleteAssignment/'+getId,{method:'delete'})
          .then((res) => {
              console.log(res.json())
            alert("File deleted success");
          })
          .catch((err) => alert("File Upload Error"));
      };
    return (
        <div>
            <h1>Teacher can delete the assignment by id </h1>
            <input type='text' placeholder='enter ID' value={getId} onChange={(e)=>setId(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={Del} >Delete Assignment</Button>
        </div>

    );
}   