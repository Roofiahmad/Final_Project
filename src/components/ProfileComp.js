import React, { useState, useEffect } from 'react';
import profileImg from '../assets/blank_profile.png';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const ProfileComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState('');
  const [image, setImage] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    getProfile()
  }, []);

   // AUthentication
  let history = useHistory();
  
  if (!token) {
    history.push("/");
  }

  function getProfile() {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
  }

      axios.get('https://talikasih.kuyrek.com:3000/user/profile', config)
      .then((res) => {
        console.log(res.data)
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        if (res.data.data.profile_image !== "https://talikasih.kuyrek.com:3000/img/null") {
          setImage(res.data.data.profile_image)
        } else {
          setImage(`${profileImg}`)
        }
        let bankAccount = res.data.data.bank_account_number;
        if(res.data.data.bank_account_number) {
          bankAccount = bankAccount.toString().replace(/\d(?=\d{3})/g, "*");
        }
        setBank(res.data.data.bank_name + " - " + bankAccount);
      })
    }

    const signOutHandler = () => {
      localStorage.clear();
      window.location.reload();
    };
  
    return (
      <div className="w-11/12 mt-16 mx-auto border border-solid p-1 md:w-3/5 p-5">
        <div className="flex justify-between mb-5">
          <h2 className="font-bold text-xl">My Profile</h2>
          <a className="text-red-800 underline font-bold cursor-pointer" onClick={signOutHandler}>Logout</a>
        </div>
        <img src={image} alt="photo profile" className="mx-auto h-52 w-52"/>
        <Link to="edit-profile" className="text-tosca underline font-bold flex justify-center mt-3">Edit Profile</Link>
        <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
        <div className="w-full p-1 mb-2 sm:w-1/2">
          <label for="name" className="text-md font-medium text-gray-500">Name</label><br/>
          <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="fname" name="fname" value={name} disabled /><br/>
        </div>
        <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="email" className="text-md font-medium text-gray-500">Email</label><br/>
            <input className="px-4 py-2 bg-gray-100 w-full text-md" type="email" id="fname" name="fname" value={email} disabled /><br/>
        </div>
        <div className="w-full p-1 mb-5 sm:w-1/2">
            <label for="bank" className="text-md font-medium text-gray-500">Bank Info</label><br/>
            <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="lname" name="lname" value={bank} disabled />
        </div>
        </div>
    </div>
    )
}

export default ProfileComp;