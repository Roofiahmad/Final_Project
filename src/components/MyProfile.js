import React from 'react';
import jumbotron from '../assets/jumbotron.png';
import profile from '../assets/profile.png'


const MyProfile = () => {
    return (
        <div className="w-11/12 mt-20 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
           <div className="flex justify-between mb-5">
               <h2 className="font-bold text-xl">My Profile</h2>
               <a href="#" className="text-red-800 underline font-bold">Logout</a>
           </div>
           <img src={profile} alt="" className="mx-auto"/>
           <a href="#" className="text-tosca underline font-bold flex justify-center mt-3">Edit Profile</a>
           <div className="grid grid-cols-1 w-11/12 mx-auto mt-10 mb-5 justify-center sm:grid-cols-2">
            <div className="mx-auto">
            <form>
              <label for="name" className="text-md">Name</label><br/>
              <input className="border border-solid p-1 mb-5" type="text" id="fname" name="fname"/><br/>
              <label for="bank" className="text-md">Bank Info</label><br/>
              <input className="border border-solid p-1" type="text" id="lname" name="lname"/>
            </form>
            </div>
            <div className="mx-auto">
            <form>
              <label for="email" className="text-md">Email</label><br/>
              <input className="border border-solid p-1 mb-5" type="email" id="fname" name="fname"/><br/>
            </form>
            </div>
           </div>
        </div>
    )
}

export default MyProfile;