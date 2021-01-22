import React, { Component } from 'react'
import UploadFile from "./UploadFile";
import axios from 'axios'


export default class EditCampaign extends Component {

  state ={
    inputForm:[
      { name: "Title", id: "title", placeholder: "Input Title", type: "text", defaultValue: localStorage.getItem("campaign_title") },
      {
        name: "Category",
        id: "category",
        placeholder: "Input Category",
        type: "text",
        defaultValue: localStorage.getItem("campaign_category")
      },
      { name: "Goal", id: "goal", placeholder: "Input Goal", type: "number", defaultValue: Number(localStorage.getItem("campaign_goal")) },
      { name: "Due Date", id: "due_date", type: "date", defaultValue: localStorage.getItem("campaign_due_date") },
    ],
    campaign_id : localStorage.getItem("campaign_id"),
    campaign_title : localStorage.getItem("campaign_title"),
    campaign_category : localStorage.getItem("campaign_category"),
    campaign_goal : localStorage.getItem("campaign_goal"),
    campaign_story : localStorage.getItem("campaign_story"),
    token: localStorage.getItem("token"),
    image: null,

  }

  handleFile = (e) => {
    let file = e.target.files[0];
    this.setState({
      image: file,
    });
  };

  //Update Data
  handleFormSubmit = (e) => {
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();
    // formData.append("images", this.state.image, this.state.image.name);
    formData.append("title",e.target.title.value);
    formData.append("category",e.target.category.value);
    formData.append("goal",e.target.goal.value);
    formData.append("due_date",e.target.due_date.value);
    formData.append("story",e.target.story.value);

    const editData = {
      title: e.target.title.value,
      goal: e.target.goal.value,
      due_date: e.target.due_date.value,
      category: e.target.category.value,
      story: e.target.story.value,
    };

    // let formImage = new FormData();

    // formImage.append("images", this.state.image, this.state.image.name);

    axios
    .put(
      `https://talikasih.kuyrek.com:3001/campaign/update/campaign/${this.state.campaign_id}`,
      editData,
      {
        headers: header,
      }
    )
    .then((response) => {
      console.log(response);
      alert("Your campaign is updated successfully");
      this.props.history.push("/myprofile");
      // window.location.reload();
    })
    .catch((err) => console.log(err.response));
  };

  //Update Image
  handleImageUpdate = (e) => {
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formImage = new FormData();
    formImage.append("images", this.state.image, this.state.image.name);
    // formData.append("title",e.target.title.value);
    // formData.append("category",e.target.category.value);
    // formData.append("goal",e.target.goal.value);
    // formData.append("due_date",e.target.due_date.value);
    // formData.append("story",e.target.story.value);

    // let formImage = new FormData();

    // formImage.append("images", this.state.image, this.state.image.name);

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
      alert("Your campaign's image is updated successfully");
      this.props.history.push("/myprofile");
      // window.location.reload();
    })
    .catch((err) => console.log(err.response));
  };

  render() {
    console.log(this.state.image)
    return (
      <div className="w-10/12 mx-auto relative fromtop-animation  ">
        <div className="pb-4">
          <h2 className="text-3xl font-medium my-4">New Campaign</h2>
        </div>
        <hr className="border-b-3 border-gray-400 pb-3" />
        <hr />
        <form onSubmit={(e) => this.handleImageUpdate(e)}>
          <UploadFile handleFile={this.handleFile} />
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


