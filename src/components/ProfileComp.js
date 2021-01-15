import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProfileComp = () => {
  const [profile, setProfile] = useState({name: "", email: "", bankName: "", bankAccountNumber: "", profile_image: ""});

  useEffect(() => {
    getProfile()
  }, []);

    function getProfile() {
      axios.get('https://talikasih.kuyrek.com:3000/user/get?user_id=ff435eee-5fc4-4af4-ae16-e3f014ca8042')
      .then((res) => {
        setProfile(res.data.data)
      })
    }
  
    return (
      <div className="w-11/12 mt-16 mx-auto border border-solid p-1 md:w-3/5 p-5">
        <div className="flex justify-between mb-5">
          <h2 className="font-bold text-xl">My Profile</h2>
          <a href="#" className="text-red-800 underline font-bold">Logout</a>
        </div>
        <img src={profile.profile_image} alt="" className="mx-auto max-h-52"/>
        <Link to="edit-profile" className="text-tosca underline font-bold flex justify-center mt-3">Edit Profile</Link>
        <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
         <div className="w-full p-1 mb-2 sm:w-1/2">
           <label for="name" className="text-md font-medium text-gray-500">Name</label><br/>
           <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="fname" name="fname" value={profile.name} readOnly/><br/>
         </div>
         <div className="w-full p-1 mb-2 sm:w-1/2">
             <label for="email" className="text-md font-medium text-gray-500">Email</label><br/>
             <input className="px-4 py-2 bg-gray-100 w-full text-md" type="email" id="fname" name="fname" value={profile.email} readOnly/><br/>
         </div>
         <div className="w-full p-1 mb-5 sm:w-1/2">
            <label for="bank" className="text-md font-medium text-gray-500">Bank Info</label><br/>
            <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="lname" name="lname" value={profile.bankName} readOnly/>
         </div>
        </div>
     </div>
    )
}

export default ProfileComp;