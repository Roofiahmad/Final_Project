import React, { Component, useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class UpdateAvaModal extends Component {
  state = {
    token: localStorage.getItem("token"),
    image: null,
    redirect: false,
  };
  handleSubmit = (e) => {
    console.log(this.state.image);
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();

    if(this.state.image == null){
      toast.error("Can't Update Image, No Image File Choosen", {
        position: toast.POSITION.TOP_CENTER
    })
    }else{

      formData.append("profile_image", this.state.image, this.state.image.name);
      axios
        .put(`https://talikasih.kuyrek.com:3000/user/update/image`,
          formData,
          {
            headers: header,
          }
        )
        .then((response) => {
          console.log(response);
          toast.success("Profile Image Updated Successfully", {
            position: toast.POSITION.TOP_CENTER
        })
        this.setState({redirect:true})
        })
        .catch((err) => console.log(err));
    }
  };

  handleUpdateImage = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    this.setState({
      image: file,
    });
  };
  
  render() {
  return (
    <div className="fromtop-animation">
      {this.state.redirect ? <Redirect to="/myprofile"/>:null}
        <div className="flex justify-center mt-3">       
          <form onSubmit={(e) => {this.handleSubmit(e);}}> 
                <input className="rounded" onChange={(e) => this.handleUpdateImage(e)} type={"file"} name={"image"} id="exampleFile" />
                <button type="submit" className="btn-red" >
                  Submit
                </button>
          </form>
        </div>
    </div>
    );
  }
};
