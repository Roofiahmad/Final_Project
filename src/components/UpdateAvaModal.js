import React, { Component, useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class UpdateAvaModal extends Component {
  state = {
    token: localStorage.getItem("token"),
    image: null,
    redirect: false,
    uploadPercentage: 0,
  };
  handleSubmit = (e) => {
    console.log(this.state.image);
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();

    if (this.state.image == null) {
      toast.error("Can't Update Image, No Image File Choosen", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      formData.append("profile_image", this.state.image, this.state.image.name);

      const option = {
        headers: header,
        onUploadProgress: (ProgressEvent) => {
          const { loaded, total } = ProgressEvent;
          let percent = Math.floor((loaded * 100) / total);
          this.setState({
            uploadPercentage: percent,
          });
        },
      };

      axios
        .put(
          `https://talikasih.kuyrek.com:3000/user/update/image`,
          formData,
          option
        )
        .then((response) => {
          console.log(response);
          toast.success("Profile Image Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          this.setState({ redirect: true });
        })
        .catch((err) => {
          toast.error("something went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  handleUpdateImage = (e) => {
    console.log(e.target);
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    this.setState({
      image: file,
      uploadPercentage: 0,
    });
  };

  render() {
    console.log(this.state.uploadPercentage);
    return (
      <div className="fromtop-animation">
        <div className="relative pt-1 w-7/12 mx-auto">
          <div className="flex mb-2 items-center justify-between w-10/12">
            <div></div>
          </div>
          <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-silk">
            <div
              style={{ width: `${this.state.uploadPercentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white font-semibold justify-center bg-green-600"
            > Progress : {this.state.uploadPercentage}%</div>
          </div>
        </div>
        {this.state.redirect ? <Redirect to="/myprofile" /> : null}
        <div className="flex justify-center mt-3">
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <input
              className="rounded"
              onChange={(e) => this.handleUpdateImage(e)}
              type={"file"}
              name={"image"}
              id="exampleFile"
            />
            <button type="submit" className="btn-red">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
