import React, { useState, useEffect } from "react";
import profile from "../assets/profile.png";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const ResetPassword = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const bankName = localStorage.getItem("bank_name");
  const bankNumber = localStorage.getItem("bank_number");
  const token = localStorage.getItem("token");
  const isImage = localStorage.getItem("image");
  const [image, setImage] = useState(`${profile}`);
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
        "https://talikasih.kuyrek.com:3000/user/update/password",
        sendPassword,
        config
      )
      .then((response) => {
        console.log(response);
        console.log(response, "update user data success");
        alert("Yass, your password was reset successfully");
        history.push("/myprofile");
      })
      .catch((err) => {
        console.log("INI PESAN ERROR", err.response);
        alert("Sorry, email or password is incorrect");
      });
  };

  useEffect(() => {
    imageCondition();
  }, []);

  const imageCondition = () => {
    if (isImage !== "https://talikasih.kuyrek.com:3000/img/null") {
      setImage(isImage);
    }
  };

  return (
    <div className="w-11/12 mt-16 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
      <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
      <img src={image} alt="" className="mx-auto rounded w-52" />
      <a
        href="#"
        className="text-tosca underline font-bold flex justify-center mt-3"
      >
        Change Image Profile
      </a>
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
            <Link to="editprofile">
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
          <div className="w-full">
            <p className="text-sm text-yellow-800 mb-2">
              We need your bank account for campaign purpose
            </p>
          </div>
          <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="bank" className="text-md font-medium">
              Bank Name<sup className="text-red-500 font-bold">&#x2217;</sup>
            </label>
            <br />
            <input
              className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700"
              type="text"
              id="lname"
              name="lname"
              value={bankName}
            />
          </div>
          <div className="w-full p-1 mb-2 sm:w-1/2 mb-4">
            <label for="email" className="text-md font-medium">
              Bank Account Number
              <sup className="text-red-500 font-bold">&#x2217;</sup>
            </label>
            <br />
            <input
              className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700"
              type="text"
              id="fname"
              name="fname"
              value={bankNumber}
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

export default ResetPassword;
