import React, { Component } from 'react'
import UploadFile from "./UploadFile";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class EditCampaign extends Component {

  state ={
    inputForm:[
      { name: "Title", id: "title", placeholder: "Input Title", type: "text", defaultValue: localStorage.getItem("campaign_title") },
      { name: "Goal", id: "goal", placeholder: "Input Goal", type: "number", defaultValue: Number(localStorage.getItem("campaign_goal")) },
      { name: "Due Date", id: "due_date", type: "date", defaultValue: localStorage.getItem("campaign_due_date") },
    ],
    campaign_id : localStorage.getItem("campaign_id"),
    campaign_title : localStorage.getItem("campaign_title"),
    campaign_category : localStorage.getItem("campaign_category"),
    campaign_goal : localStorage.getItem("campaign_goal"),
    campaign_story : localStorage.getItem("campaign_story"),
    campaign_images: localStorage.getItem("campaign_images"),
    token: localStorage.getItem("token"),
    input: ['goal', 'due_date','category', 'story'],
    image: null,
    imagePrev: null

  }

  handleFile = (e) => {
    let filePrev = URL.createObjectURL(e.target.files[0]);
    let file = e.target.files[0];
    this.setState({
      image: file,
      imagePrev: filePrev,
    });
  };

  //Update Data
  handleFormSubmit = (e) => {
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };

    const editData = {
      title: e.target.title.value,
      goal: e.target.goal.value,
      due_date: e.target.due_date.value,
      category: e.target.category.value,
      story: e.target.story.value,
    };

  if(editData.title === localStorage.getItem("campaign_title"))
  {editData.title += ' '}

    axios
    .put(
      `https://talikasih.kuyrek.com:3001/campaign/update/campaign/${this.state.campaign_id}`,
      editData,
      {
        headers: header,
      }
    )
    .then((response) => {
      toast.success("Your campaign is updated successfully!");
      this.props.history.push("/myprofile");
    })
    .catch((err) => {
      console.log(err.response)

      if(err.response){
        if(err.response.data.errors.title !== undefined){
          toast.error( `error code ${err.response.status}, error message : ${err.response.data.errors['title'].msg}`, {
            position: toast.POSITION.TOP_CENTER
        })
        }
        for(let i = 0; i<this.state.input.length; i++){
          if(err.response.data.errors[this.state.input[i]] !==undefined ){
            toast.error( `error code ${err.response.status}, error message : ${err.response.data.errors[this.state.input[i]].msg}`, {
              position: toast.POSITION.TOP_CENTER
          })
          }
        }
      }
      // else if(err.request){
      //   console.log('server not responsed')
      // }
      else{
        toast.error( err.message, {
          position: toast.POSITION.TOP_CENTER
      })
      }
    });
  };

  //Update Image
  handleImageUpdate = (e) => {
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formImage = new FormData();
    this.state.image == null ? 
    formImage.append("images", null):
    formImage.append("images", this.state.image, this.state.image.name);

    axios
    .put(
      `https://talikasih.kuyrek.com:3001/campaign/update/images/${this.state.campaign_id}`,
      formImage,
      {
        headers: header,
      }
    )
    .then((response) => {
      console.log(response);
      toast.success("Your campaign is updated successfully", {
        position: toast.POSITION.TOP_CENTER
    })
      this.props.history.push("/myprofile")
    })
    .catch((err) => {
      toast.error("Something Went Wrong", {
        position: toast.POSITION.TOP_CENTER
    })
      console.log(err.response)
    });
  };

  render() {
    console.log(this.state.image)
    return (
      <div className="w-10/12 mx-auto relative fromtop-animation  ">
        <div className="pb-4">
          <h2 className="text-3xl font-medium my-4">Edit Campaign</h2>
        </div>
        <hr className="border-b-3 border-gray-400 pb-3" />
        <hr />
        <form onSubmit={(e) => this.handleImageUpdate(e)}>
        <UploadFile handleFile={this.handleFile} {...this.state} />
          <button type="submit" className="btn-red float-right">
            Update Photo
          </button>
        </form>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <div className="grid  gap-4 my-8 sm:grid-cols-1 md:grid-cols-2">
            {this.state.inputForm.map((item, index) => (
              <div key={index}>
                <label>
                  {item.name} <span className="text-red-700">*</span>
                </label>
                <input
                  className="w-full bg-gray-50"
                  name={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  defaultValue={item.defaultValue}
                />
                <hr className="border-b-3 border-gray-400 pb-3" />
              </div>
            ))}
            <select className="bg-gray-50" name="Category" id="category">
              <option value={localStorage.getItem("campaign_category")} selected>{localStorage.getItem("campaign_category")}</option>
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
          <div className="grid grid-cols-1">
            <label>Story</label>
            <textarea
              name="story"
              className="h-40 bg-gray-50 focus:outline-none p-4"
              id="story"
              type="text"
              placeholder="Input Story Here"
              defaultValue= {localStorage.getItem("campaign_story")}
            />
            <hr className="border-b-3 border-gray-400 pb-3" />
          </div>
          <button type="submit" className="btn-red float-right">
            Submit
          </button>
        </form>
        <div className="h-40"></div>
      </div>
    );
  }
}


