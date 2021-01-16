import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.png'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import UpdateAvaModal from './UpdateAvaModal';

const EditProfile = () => {
    let history = useHistory();
    let token = localStorage.getItem("token");
    const [image, setImage] = useState(`${profile}`);
    const [ToggleImageUp, setToggleImageUp] = useState(false);


    const handleUpdateUser = async (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.bank_name.value);
        console.log(e.target.bank_account_number.value);
        const sendaDataUser = {
          name: e.target.name.value,
          bank_name: e.target.bank_name.value,
          bank_account_number: e.target.bank_account_number.value,
        };

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        };
    
        await axios.put(
          "https://talikasih.kuyrek.com:3000/user/update/profile",
          sendaDataUser, config
        )
        .then((response) => {
            console.log(response);
            console.log(response, "update user data success"); 
            alert("Yass, your data is updated successfully");
            history.push("/myprofile");
        })
        .catch((err) => {
            console.log("INI PESAN ERROR", err.response);
            alert("Sorry, email or password is incorrect");
        })
    };

    useEffect(() => {
        imageCondition();
      }, []);    

    const imageCondition = () => {
        if(isImage !== "https://talikasih.kuyrek.com:3000/img/null") {
        setImage(isImage);
        }
    }

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const bankName = localStorage.getItem("bank_name");
    const bankNumber = localStorage.getItem("bank_number");
    const isImage = localStorage.getItem("image");

    return (
        <div className="fromtop-animation w-11/12 mt-20 mb-20 mx-auto border border-solid p-1 md:w-3/5 p-5">
           <h2 className="font-bold text-xl mb-5">Edit Profile</h2>
           <img src={image} alt="" className="mx-auto rounded w-52 h-52"/>
           <a onClick={() => setToggleImageUp(!ToggleImageUp)} className="cursor-pointer text-tosca underline font-bold flex justify-center mt-3">Change Image Profile</a>
           {ToggleImageUp ? (
            <UpdateAvaModal/>
           ) :null}
           <form onSubmit={(e) => handleUpdateUser(e)}>
                <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">      
                    <div className="w-full p-1 mb-2 sm:w-1/2">
                        <label for="name" className="text-md font-medium">Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                        <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="fname" name="name" defaultValue={name}/><br/>
                    </div>
                    <div className="w-full p-1 mb-2 sm:w-1/2">
                        <label for="email" className="text-md font-medium">Email<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                        <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="email" id="fname" name="email" defaultValue={email}/><br/>
                        <Link to="resetpassword">
                            <a className="text-sm font-bold float-right underline mt-2">Reset password</a>
                        </Link>
                    </div>
                    <div className="w-full">
                        <p className="text-sm text-yellow-800 mb-2">We need your bank account for campaign purpose</p>
                    </div>
                    <div className="w-full p-1 mb-2 sm:w-1/2">
                        <label for="bank" className="text-md font-medium">Bank Name<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                        <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="lname" name="bank_name" defaultValue={bankName}/>
                    </div>
                    <div className="w-full p-1 mb-2 sm:w-1/2 mb-4">
                        <label for="email" className="text-md font-medium">Bank Account Number<sup className="text-red-500 font-bold">&#x2217;</sup></label><br/>
                        <input className="border-blue-400 border-b-2 px-4 py-2 bg-gray-100 w-full text-md text-gray-700" type="text" id="fname" name="bank_account_number" defaultValue={bankNumber}/><br/>
                    </div>
                </div>
                    <div className="w-11/12 grid justify-items-end mb-10 mx-auto">
                        <button type="submit" className="btn-red rounded text-white px-6 py-2 font-medium">SAVE CHANGES</button>
                    </div>
                </form>
        </div>
    )
}

export default EditProfile;
