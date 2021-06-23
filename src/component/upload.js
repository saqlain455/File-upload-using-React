import React, { useState } from "react";
import Button from '@material-ui/core/Button';
export default function Upload() {

     const [desc, setdesc] = useState("");
     const [selectedFile, setSelectedFile] = useState();
     const UPLOAD_URL="http://localhost:3000/teacher";


    const submitForm = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("description", desc);
        formData.append("filesent", selectedFile);
        var requestOptions = {
            method: 'post',
            body:formData
          };

      fetch(UPLOAD_URL+'/AddAssignment',requestOptions)
          .then((res) => {
            alert("File Upload success");
            console.log(res.json())
          })
          .catch((err) => alert("File Upload Error"));
      };

  return (

    <div>
    <h1>Teacher can upload Assignment there</h1>
    <p>u can see response with in console</p>
      <form onSubmit={submitForm} >
        <br />
        <br />
        <br />
        Upload assignment: <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <br />
        <br />
        <br />
        Description: <input
        type="text"
        onChange={(e) => setdesc(e.target.value)}
        placeholder={"Description"}
      />
      <br />
      <br />
      <br/>
        <input type="submit" style={{backgroundColor:'white', padding:20}}/>
        
      </form>
    </div>
  );
}




