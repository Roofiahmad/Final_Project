import React, { Component } from 'react'
import UploadFile from "./UploadFile";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';


export default class NewCampaign extends Component {
constructor(props) {
  super(props)
  this.state ={
    inputForm:[
      { name: "Title", id: "title", placeholder: "Input Title", type: "text" },
      // {
      //   name: "Category",
      //   id: "category",
      //   placeholder: "Input Category",
      //   type: "text",
      // },
      { name: "Goal", id: "goal", placeholder: "Input Goal", type: "number" },
      { name: "Due Date", id: "due_date", type: "date" },
    ],
    token: localStorage.getItem("token"),
    bank: localStorage.getItem("bank_number"),
    redirect : false,
    input: ['goal', 'due_date','category', 'story'],
    image: null,
    imagePrev: null

  }
}

  handleFile = (e) => {
    let filePrev = URL.createObjectURL(e.target.files[0]);
    let file = e.target.files[0];
    this.setState({
      image: file,
      imagePrev: filePrev,
    });
    console.log(file);
    console.log(filePrev);
  };

   handleFormSubmit = (e) => {
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();
    this.state.image == null ? 
    formData.append("images", null):
    formData.append("images", this.state.image, this.state.image.name);
    formData.append("title",e.target.title.value);
    formData.append("category",e.target.category.value);
    formData.append("goal",e.target.goal.value);
    formData.append("due_date",e.target.due_date.value);
    formData.append("story",e.target.story.value);

    axios
    .post(
      'https://talikasih.kuyrek.com:3001/campaign/create',
      formData,
      {
        headers: header,
      }
    )
    .then((response) => {
      toast.success("Your campaign is created successfully", {
        position: toast.POSITION.TOP_CENTER
    })
    setTimeout(() => {
      this.setState({redirect:true})
    }, 1500);
    })
    .catch((err) => {
      toast.error("something went wrong", {
        position: toast.POSITION.TOP_CENTER
    })

      // if(err.response){
      //   if(err.response.data.errors.title !== undefined){
      //     toast.error( `error code ${err.response.status}, error message : ${err.response.data.errors['title'].msg}`, {
      //       position: toast.POSITION.TOP_CENTER
      //   })
      //   }
      //   for(let i = 0; i<this.state.input.length; i++){
      //     if(err.response.data.errors[this.state.input[i]] !==undefined ){
      //       toast.error( `error code ${err.response.status}, error message : ${err.response.data.errors[this.state.input[i]].msg}`, {
      //         position: toast.POSITION.TOP_CENTER
      //     })
      //     }
      //   }
      // }
      // else{
      //   toast.error( err.message, {
      //     position: toast.POSITION.TOP_CENTER
      // })
      // }
    })
  }

  componentDidMount() { 
    if (!this.state.token) {
      toast.error("Sorry, you are not logged in yet!", {
        position : toast.POSITION.TOP_CENTER
      });
      this.props.history.push("/");
    }

    if (this.state.token && this.state.bank == "") {
      toast.error("Please input your Bank Info first!", {
        position : toast.POSITION.TOP_CENTER
      });
      this.props.history.push("/myprofile");
    }
    
  }

  render() {
    return (
      <div className="w-10/12 mx-auto relative fromtop-animation  ">
        {this.state.redirect ? <Redirect to ="/myprofile"/> :null}
        <div className="lg:pb-4">
          <h2 className="text-3xl  font-medium lg:my-4 mt-2">New Campaign</h2>
        </div>
        <hr className="border-b-3 border-gray-400 pb-3" />
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <UploadFile handleFile={this.handleFile} {...this.state} />
          <div className="grid  lg:gap-4  lg:my-8 my-4 sm:grid-cols-1 md:grid-cols-2">
            {this.state.inputForm.map((item, index) => (
              <div key={index}>
                <label className="text-base">
                  {item.name} <span className="text-red-700">*</span>
                </label>
                <input
                  required
                  className="text-base w-full bg-gray-50"
                  name={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                />
                <hr className="border-b-3 border-gray-400 pb-3" />
              </div>
            ))}
            <select required className="text-base bg-gray-50" name="Category" id="category">
              <option value="" disabled selected>Choose a category...</option>
              <option value="Disability">Disability</option>
              <option value="Disaster">Disaster</option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Humanity">Humanity</option>
              <option value="Medical">Medical</option>
              <option value="Religious">Religious</option>
              <option value="Sociopreneur">Sociopreneur</option>
            </select>
          </div>
          <div className="grid grid-cols-1 text-base">
            <label >Story</label>
            <textarea
              required
              name="story"
              className="h-40 bg-gray-50 focus:outline-none p-4"
              id="story"
              type="text"
              placeholder="Input Story Here"
            />
            <hr className="border-b-3 border-gray-400 pb-3" />
          </div>
          <button type="submit" className="text-base btn-red float-right">
            Submit
          </button>
        </form>
        <div className="lg:h-40 h-14"></div>
      </div>
    );
  }
}


