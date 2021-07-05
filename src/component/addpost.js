import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
export default function Addpost() {
    let UPLOAD_URL="http://localhost:3000/admin";
    const [gettitile,settitle]=useState('');
    const [getrole,setrole]=useState('');
    const [getExper,setExper]=useState('');
    const [gettech,settech]=useState('');

    const Addpost = (event) => {
        event.preventDefault();
       let title=gettitile
        let role=getrole
        let Experience=getExper
        let technologies=gettech
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"title":title,"role":role,"Experience":Experience,"technologies":technologies});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/admin/addpost", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));



        // const formData = new FormData();
        // formData.append("title",title);
        // formData.append("role",role);
        // formData.append("Experience",Experience);
        // formData.append("technologies",technologies);
        // var requestOptions = {
        //     method: 'post',
        //     body:formData
        //   };

        // fetch('http://localhost:3000/admin/addpost',{
        //     method: 'post',
        //     body:JSON.stringify(formData)
        //   })
        //   .then((res) => {
        //       console.log(res.json())
        //      alert("post success");
        //   })
        //   .catch((err) => alert("Error!"));
      
           
        };
    return (
        <div>
            <h1>Admin can post the job! terminal commponent </h1>
            <input type='text' placeholder='enter title' value={gettitile} onChange={(e)=>settitle(e.target.value)}/>
           <br></br>
            <input type='text' placeholder='enter role' value={getrole} onChange={(e)=>setrole(e.target.value)}/>
            <br></br>
            <input type='text' placeholder='enter Experience' value={getExper} onChange={(e)=>setExper(e.target.value)}/>
            <br></br>
            <input type='text' placeholder='enter technologies' value={gettech} onChange={(e)=>settech(e.target.value)}/>
            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" onClick={Addpost} >Add post</Button>
            <br></br>
        </div>

    );
}   


