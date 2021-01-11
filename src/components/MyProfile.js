import React from 'react';
import profile from '../assets/profile.png'


const MyProfile = () => {
    return (
      <div className="w-11/12 mt-96 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
        <div className="flex justify-between mb-5">
          <h2 className="font-bold text-xl">My Profile</h2>
          <a href="#" className="text-red-800 underline font-bold">Logout</a>
        </div>
        <img src={profile} alt="" className="mx-auto"/>
        <a href="#" className="text-tosca underline font-bold flex justify-center mt-3">Edit Profile</a>
        <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
         <div className="w-full p-1 mb-2 sm:w-1/2">
           <label for="name" className="text-md font-medium text-gray-500">Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
           <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="fname" name="fname" value="Luna"/><br/>
         </div>
         <div className="w-full p-1 mb-2 sm:w-1/2">
             <label for="email" className="text-md font-medium text-gray-500">Email<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
             <input className="px-4 py-2 bg-gray-100 w-full text-md" type="email" id="fname" name="fname" value="luna@mail.com"/><br/>
         </div>
         <div className="w-full p-1 mb-5 sm:w-1/2">
            <label for="bank" className="text-md font-medium text-gray-500">Bank Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
            <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="lname" name="lname" value="Bank BCA - *****678"/>
         </div>
        </div>
     </div>
    )
}

export default MyProfile;