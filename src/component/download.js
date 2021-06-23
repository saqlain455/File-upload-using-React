import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';
import fileDownload from 'js-file-download'
export default function Download() {
    let UPLOAD_URL="http://localhost:3000/teacher";
    const [getId,setId]=useState('');
     

    const Down = (event) => {
        event.preventDefault();
       fetch(UPLOAD_URL+'/ViewAssignment/'+getId,{method:'get'}).then(res=>res.json())
        .then((res)=>{
            console.log(res.content.data.data)
            let TYPED_ARRAY = new Uint8Array(res.content.data.data);
            const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
              return data + String.fromCharCode(byte);
              }, '');
              let base64String = btoa(STRING_CHAR);
             
             saveAs('data:image/jpeg/pdf;base64,' + base64String, 'Assig.pdf');
        }
          
          )
          .catch((err) => alert("Error!"));
      };
    return (
        <div>
            <h1>Teacher can download the assignment by id </h1>
            <input type='text' placeholder='enter ID' value={getId} onChange={(e)=>setId(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={Down} >Download Assignment</Button>
        </div>

    );
}



