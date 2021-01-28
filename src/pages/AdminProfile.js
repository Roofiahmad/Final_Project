import React, {useState, useEffect} from 'react';
import profile from '../assets/blank_profile.png'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import SpinnerPage from '../components/SpinnerPage';
import { toast } from 'react-toastify';


const AdminProfile = () => {
  const signOutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  //Loading
  const [isLoading, setLoading] = useState(true);

  // AUthentication
  let history = useHistory();
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  
  const kick = () => {
    if (!token) {
      toast.error("Sorry, you are not logged in yet!", {
        position : toast.POSITION.TOP_CENTER
      });
      history.push("/");
    }
  }

  const profileDirect = () => {
    if (role == "admin") {
      history.push("/adminprofile");
    }
  }

  // Declare state to place the data
  const [image, setImage] = useState(`${profile}`);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Get user data
  useEffect(() => {
    getData();
    kick();
    profileDirect();
  }, []);

  function getData() {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };

    axios.get(
      "https://talikasih.kuyrek.com:3005/admin/profile",
      config
    )
    .then((response) => {
        console.log("INI DATA USER", response);
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setLoading(false);
    })
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

    return (
      <div>
        {isLoading ? (
        <SpinnerPage />
      ) : (
        <div className="w-11/12 mt-10 mb-10 lg:mb-16 lg:mt-16 mx-auto border border-solid p-1 md:w-3/5 p-5">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-xl">My Profile</h2>
            <a onClick={signOutHandler} className="text-red-800 underline font-bold cursor-pointer">Logout</a>
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGGSlK8xwfivQ/profile-displayphoto-shrink_200_200/0/1606981919722?e=1616025600&v=beta&t=cs8IZAu-AFy-GGAfSwmJQxlgmEQHEvh85_F2Jbf95dQ" alt="" className="mx-auto w-52 h-52"/>
          <Link to="/editadminprofile">
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
          </div>
      </div>
      )}
     </div>
    )
}

export default AdminProfile;