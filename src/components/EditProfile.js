// import React, { useState, useEffect} from 'react';
// import profileImg from '../assets/profile.png';
import { Link } from "react-router-dom";
// import axios from 'axios'


// const EditProfile = () => {
//     const [profile, setProfile] = useState({name: "", email: "", bankName: "", bankAccountNumber: ""});
//     const [isUpdate, setIsUpdate] = useState(false);
//     const token = localStorage.getItem("token");


//     useEffect(() => {
//     getProfile();
//     }, []);

//     function getProfile() {
//       axios.get('https://talikasih.kuyrek.com:3000/user/get?user_id=ff435eee-5fc4-4af4-ae16-e3f014ca8042')
//       .then((res) => {
//         console.log(res.data)
//         setProfile(res.data.data)
//       })
//     }

//     putProfile = () => {
//       axios.put('https://talikasih.kuyrek.com:3000/user/update/profile', profile, { headers: {Authorization: 'Bearer ' + token}})
//         .then((res) => {
//           getProfile();
          
//         })
//     }
  
//     handleUpdate = (data) => {
//       setProfile(data)
//     }
  
//     handleFormChange = (event) => {
//       let newProfile = { ...profile };
//       if (!isUpdate) {
//         // formBlogPostNew['id'] = timeStamp;
//       }
//       newProfile[event.target.name] = event.target.value;
//       this.setState({
//         formBlogPost: formBlogPostNew
//       }, () => {
//         console.log('value:', this.state.formBlogPost)
//       })
//     }
  
//     handleSubmit = () => {
//       if (isUpdate) {
//         putProfile();
//       } else {
//         this.postData();
//       }
//     }


//     return (
//         <div className="w-11/12 mt-16 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
//            <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
//            <img src={profile} alt="" className="mx-auto"/>
//            <a href="#" className="text-tosca underline font-bold flex justify-center mt-3">Change Image Profile</a>
//            <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
//             <div className="w-full p-1 mb-2 sm:w-1/2">
//               <label for="name" className="text-md font-medium">Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
//               <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="fname" name="fname" value={profile.name}/><br/>
//             </div>
//             <div className="w-full p-1 mb-2 sm:w-1/2">
//                 <label for="email" className="text-md font-medium">Email<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
//                 <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="luna@mail.com"/><br/>
//                 <Link to="/reset-password" className="text-sm font-bold float-right underline mt-2">Reset password</Link>
//             </div>
//             <div className="w-full mt-4">
//                 <p className="text-sm text-yellow-800 mb-2">We need your bank account for campaign purpose</p>
//             </div>
//             <div className="w-full p-1 mb-2 sm:w-1/2">
//                 <label for="bank" className="text-md font-medium">Bank Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
//                 <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="lname" name="lname" value="Bank BCA"/>
//             </div>
//             <div className="w-full p-1 mb-2 sm:w-1/2 mb-4">
//                 <label for="email" className="text-md font-medium">Bank Account Number<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
//                 <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="12345678"/><br/>
//             </div>
//            </div>
//            <div className="w-11/12 grid mx-auto mb-10 sm:justify-items-end">
//             <button className="bg-red-600 rounded text-white px-6 py-2 font-medium hover:bg-red-700">SAVE CHANGES</button>
//            </div>
//         </div>
//     )
// }

// export default EditProfile;
import React from 'react';
import profile from '../assets/profile.png'


const EditProfile = () => {
    return (
        <div className="w-11/12 mt-16 mb-36 mx-auto border border-solid p-1 md:w-3/5 p-5">
           <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
           <img src={profile} alt="" className="mx-auto"/>
           <a href="#" className="text-tosca underline font-bold flex justify-center mt-3">Change Image Profile</a>
           <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
            <div className="w-full p-1 mb-2 sm:w-1/2">
                <label for="name" className="text-md font-medium">Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="fname" name="fname" value="Luna"/><br/>
            </div>
            <div className="w-full p-1 mb-2 sm:w-1/2">
                <label for="email" className="text-md font-medium">Email<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="luna@mail.com"/><br/>
                <Link to="/reset-password" className="text-sm font-bold float-right underline mt-2">Reset password</Link>
            </div>
            <div className="w-full">
                <p className="text-sm text-yellow-800 mb-2">We need your bank account for campaign purpose</p>
            </div>
            <div className="w-full p-1 mb-2 sm:w-1/2">
                <label for="bank" className="text-md font-medium">Bank Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="lname" name="lname" value="Bank BCA"/>
            </div>
            <div className="w-full p-1 mb-2 sm:w-1/2 mb-4">
                <label for="email" className="text-md font-medium">Bank Account Number<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="fname" value="12345678"/><br/>
            </div>
           </div>
           <div className="w-11/12 grid justify-items-end mb-10 mx-auto">
            <button className="bg-red-600 rounded text-white px-6 py-2 font-medium hover:bg-red-700">SAVE CHANGES</button>
           </div>
        </div>
    )
}

export default EditProfile;
