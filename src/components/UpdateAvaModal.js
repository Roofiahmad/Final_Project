import React, { Component, useState } from "react";
import axios from "axios";

export default class UpdateAvaModal extends Component {
  state = {
    token: localStorage.getItem("token"),
    image: null,
  };
  handleSubmit = (e) => {
    console.log(this.state.image);
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();
    formData.append("profile_image",this.state.image, this.state.image.name);
    axios
      .put(`https://talikasih.kuyrek.com:3000/user/update/image`,
        formData,
        {
          headers: header,
        }
      )
      .then((response) => {
        console.log(response);
        alert("Profile Image Updated Successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
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
    <div>
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
