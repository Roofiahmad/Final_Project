import React, {useState, useEffect} from 'react';
import profile from '../assets/profile.png'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import SpinnerPage from '../components/SpinnerPage';


const MyProfile = () => {
  const signOutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  //Loading
  const [isLoading, setLoading] = useState(true);

  // AUthentication
  let history = useHistory();
  let token = localStorage.getItem("token");
  
  if (!token) {
    history.push("/");
  }

  // Declare state to place the data
  const [image, setImage] = useState(`${profile}`);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankNumber, setBankNumber] = useState("");

  // Get user data
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };

    axios.get(
      "https://talikasih.kuyrek.com:3000/user/profile",
      config
    )
    .then((response) => {
        console.log("INI DATA USER", response);
        if(response.data.data.profile_image !== "https://talikasih.kuyrek.com:3000/img/null") {
          setImage(response.data.data.profile_image);
        }
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        let bankAccount = response.data.data.bank_account_number;
        if (bankAccount != null) {
          let bankAccounReversedtArray = bankAccount.toString().split('').reverse();
          let lastThree = bankAccounReversedtArray.slice(0,3).reverse().join('');
          setBank(response.data.data.bank_name + " - " + "*******" + lastThree);
          setBankName(response.data.data.bank_name);
          setBankNumber(response.data.data.bank_account_number);
        } else {
          setBank("not set")
        }
        setLoading(false);
    })
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("bank_name", bankName);
  localStorage.setItem("bank_number", bankNumber);
  localStorage.setItem("image", image);
  

    return (
      <div>
        {isLoading ? (
        <SpinnerPage />
      ) : (
        <div className="w-11/12 mt-16 mb-20 mx-auto border border-solid p-1 md:w-3/5 p-5">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-xl">My Profile</h2>
            <a onClick={signOutHandler} className="text-red-800 underline font-bold cursor-pointer">Logout</a>
          </div>
          <img src={image} alt="" className="mx-auto w-52 h-52"/>
          <Link to="/editprofile">
            <a className="text-tosca underline font-bold flex justify-center mt-3">Edit Profile</a>
          </Link>
          <div className="flex flex-wrap content-end w-11/12 mx-auto mt-10 mb-5">
          <div className="w-full p-1 mb-2 sm:w-1/2">
            <label for="name" className="text-md font-medium text-gray-500">Name</label><br/>
            <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="fname" name="fname" value={name} disabled/><br/>
          </div>
          <div className="w-full p-1 mb-2 sm:w-1/2">
              <label for="email" className="text-md font-medium text-gray-500">Email</label><br/>
              <input className="px-4 py-2 bg-gray-100 w-full text-md" type="email" id="fname" name="fname" value={email} disabled/><br/>
          </div>
          <div className="w-full p-1 mb-5 sm:w-1/2">
              <label for="bank" className="text-md font-medium text-gray-500">Bank Info</label><br/>
              <input className="px-4 py-2 bg-gray-100 w-full text-md" type="text" id="lname" name="lname" value={bank} disabled/>
          </div>
          </div>
      </div>
      )}
     </div>
    )
}

export default MyProfile;