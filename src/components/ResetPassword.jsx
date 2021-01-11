import React from 'react';
import profile from '../assets/profile.png'


const ResetPassword = () => {
  return (
    <div className="w-11/12 mt-96 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
      <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
      <img src={profile} alt="" className="mx-auto" />
      <a href="#" className="text-tosca underline font-bold flex justify-center mt-3">Change Image Profile</a>
      <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
        <div className="w-full p-1 mb-2 sm:w-1/2">
          <label for="name" className="text-md font-medium">Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br />
          <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="fname" name="fname" value="Luna" /><br />
        </div>
        <div className="w-full p-1 mb-2 sm:w-1/2">
          <label for="email" className="text-md font-medium">Email<sup className="text-red-500 font-bold">&#x2217;</sup></label><br />
          <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="luna@mail.com" /><br />
        </div>
        <div className="w-full p-1 mb-2 sm:w-1/2">
          <label for="email" className="text-md font-medium">New Password<sup className="text-red-500 font-bold">&#x2217;</sup></label><br />
          <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="**********" /><br />
        </div>
        <div className="w-full p-1 mb-2 sm:w-1/2">
          <label for="email" className="text-md font-medium">Confirm New Password<sup className="text-red-500 font-bold">&#x2217;</sup></label><br />
          <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="**********" /><br />
        </div>
        <div className="w-full p-1 mb-2 sm:w-1/2">
          <p className="text-sm text-yellow-800 mb-2">We need your bank account for campaign purpose</p>
          <label for="bank" className="text-md font-medium">Bank Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br />
          <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="lname" name="lname" value="Bank BCA" />
        </div>
        <div className="w-full p-1 mb-2 sm:w-1/2 mb-4">
          <p className="text-sm text-white mb-2">sad</p>
          <label for="email" className="text-md font-medium">Bank Account Number<sup className="text-red-500 font-bold">&#x2217;</sup></label><br />
          <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="12345678" /><br />
        </div>
      </div>
      <div className="w-11/12 grid justify-items-end mb-10 mx-auto">
        <button className="bg-red-600 rounded text-white px-6 py-2 font-medium hover:bg-red-700">SAVE CHANGES</button>
      </div>
    </div>
  )
}

export default ResetPassword;