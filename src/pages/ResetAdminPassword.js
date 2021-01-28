import React, { useState, useEffect } from "react";
import profile from "../assets/profile.png";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

const ResetAdminPassword = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  const isImage = localStorage.getItem("image");
  let history = useHistory();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const sendPassword = {
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    await axios
      .put(
        "https://talikasih.kuyrek.com:3005/admin/update/password",
        sendPassword,
        config
      )
      .then((response) => {
        console.log(response);
        console.log(response, "update user data success");
        toast.success("Yeay, your password is reset!", {
            position: toast.POSITION.TOP_CENTER
        });
        history.push("/myprofile");
      })
      .catch((err) => {
        console.log("INI PESAN ERROR", err.response);
        alert("Sorry, email or password is incorrect");
      });
  };


  return (
    <div className="w-11/12 mt-16 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
      <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQGGSlK8xwfivQ/profile-displayphoto-shrink_200_200/0/1606981919722?e=1616025600&v=beta&t=cs8IZAu-AFy-GGAfSwmJQxlgmEQHEvh85_F2Jbf95dQ" alt="" className="mx-auto rounded w-52" />
      <form onSubmit={(e) => handleResetPassword(e)}>
        <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
          <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="name" className="text-md font-medium">
              Name<sup className="text-red-500 font-bold">&#x2217;</sup>
            </label>
            <br />
            <input
              className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700"
              type="text"
              id="fname"
              name="fname"
              value={name}
            />
            <br />
          </div>
          <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="email" className="text-md font-medium">
              Email<sup className="text-red-500 font-bold">&#x2217;</sup>
            </label>
            <br />
            <input
              className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700"
              type="email"
              id="fname"
              name="fname"
              value={email}
            />
            <br />
            <Link to="editadminprofile">
              <a className="text-sm font-bold float-right underline mt-2">
                Keep old password
              </a>
            </Link>
          </div>
          <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="email" className="text-md font-medium">
              New Password<sup className="text-red-500 font-bold">&#x2217;</sup>
            </label>
            <br />
            <input
              className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700"
              type="password"
              id="fname"
              name="password"
              placeholder="**********"
            />
            <br />
          </div>
          <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="email" className="text-md font-medium">
              Confirm New Password
              <sup className="text-red-500 font-bold">&#x2217;</sup>
            </label>
            <br />
            <input
              className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700"
              type="password"
              id="fname"
              name="passwordConfirmation"
              placeholder="**********"
            />
            <br />
          </div>
        </div>
        <div className="w-11/12 grid justify-items-end mb-10 mx-auto">
          <button
            type="submit"
            className="btn-red rounded text-white px-6 py-2 font-medium"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetAdminPassword;
