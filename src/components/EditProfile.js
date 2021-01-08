import React from 'react';
import jumbotron from '../assets/jumbotron.png';
import profile from '../assets/profile.png'


const EditProfile = () => {
    return (
        <div className="w-3/5 mt-20 mb-36 mx-auto border border-solid p-10">
           <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
           <img src={profile} alt="" className="mx-auto"/>
           <a href="#" className="text-tosca underline font-bold flex justify-center mt-3">Change Image Profile</a>
           <div className="grid grid-cols-2 w-10/12 mx-auto mt-10 mb-5">
            <div className="">
            <form>
              <label for="name" className="text-md">Name</label><br/>
              <input className="border border-solid p-1 mb-5" type="text" id="fname" name="fname"/><br/>
              <label for="bank" className="text-md">Bank Info</label><br/>
              <input className="border border-solid p-1" type="text" id="lname" name="lname"/>
            </form>
            </div>
            <div className="">
            <form>
              <label for="email" className="text-md">Email</label><br/>
              <input className="border border-solid p-1 mb-5" type="email" id="fname" name="fname"/><br/>
            </form>
            </div>
           </div>
        </div>
    )
}

export default EditProfile;