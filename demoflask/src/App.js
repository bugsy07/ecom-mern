import React, { useState, useEffect, Component } from 'react';
import './App.css';


import './App.css';
import axios from 'axios';
//import { json } from 'express/lib/response';
//import express from 'express';
let img64 = "";
let imgurl="";
//let userimageurl = "";
let serverUrl = "http://127.0.0.1:5000/name";
let picUrl =
    "https://raw.githubusercontent.com/octalpixel/Skin-Extraction-from-Image-and-Finding-Dominant-Color/master/82764696-open-palm-hand-gesture-of-male-hand_image_from_123rf.com.jpg";



class App extends React.Component {



  state ={
    selectedFile: null,
    //img64: null
  }


  fileSelectedHandler = event => {
    this.setState({
    selectedFile: event.target.files[0]
  })
  }

  fileUploadHandler = () =>{
    var reader = new FileReader();
    reader.readAsDataURL(this.state.selectedFile);
    reader.onload = (e)=> {
      //console.log(reader.result);
      //this.state.img64 = reader.result  
      img64= e.target.result ;
      
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    
  }

  sendServer = ()=>{
    /*
    {
      method: 'POST',
      url: 'http://127.0.0.1:5000/name',
      data: img64
    }

    const reqOpt ={
      method : 'POST',
      //headers: {'Content-type': 'application/json'},
      body: JSON.stringify({picUrl: img64})
    }

    fetch('http://127.0.0.1:5000/name',reqOpt).then(response =>{
      console.log(response.json())
    }).catch(error=>{
      console.log(error)
    })
    
    const formData= {file: img64}
    axios.post('http://127.0.0.1:5000/name',formData).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })*/
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/name',
      data: img64
    }).then(response=>{console.log(response)});
  

  }
  render() { 
    return (
    <div>
        <div className="App">
           <input type="file" onChange={this.fileSelectedHandler} name="file"/>
           <button onClick={this.fileUploadHandler}> Upload</button>
           <button onClick={this.sendServer}> sendServer </button>
        </div>
    </div>);
  }
}
 
export default App;




