import React, { Component } from 'react'
import UploadFile from "./UploadFile";
import axios from 'axios'


export default class NewCampaign extends Component {

  state ={
    inputForm:[
      { name: "Title", id: "title", placeholder: "Input Title", type: "text" },
      {
        name: "Category",
        id: "category",
        placeholder: "Input Category",
        type: "text",
      },
      { name: "Goal", id: "goal", placeholder: "Input Goal", type: "number" },
      { name: "Due Date", id: "due_date", type: "date" },
    ],
    token: localStorage.getItem("token"),
    image: null,

  }

  handleFile = (e) => {
    let file = e.target.files[0];
    this.setState({
      image: file,
    });
  };

   handleFormSubmit = (e) => {
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();
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
      console.log(response);
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
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <UploadFile handleFile={this.handleFile} />
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


