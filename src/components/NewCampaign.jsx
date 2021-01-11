import React from "react";
import UploadFile from "./UploadFile";
export default function NewCampaign() {
  const inputForm = [
    { name: "Title", id: "title", placeholder: "Input Title", type: "text" },
    {
      name: "Category",
      id: "category",
      placeholder: "Input Category",
      type: "text",
    },
    { name: "Goal", id: "goal", placeholder: "Input Goal", type: "number" },
    { name: "Due Date", id: "due_date", type: "date" },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.category.value);
    console.log(e.target.goal.value);
    console.log(e.target.due_date.value);
    console.log(e.target.story.value);
  };
  return (
    <div className="w-10/12 mx-auto relative ">
      <div className="pb-4">
        <h2 className="text-3xl font-medium my-4">New Campaign</h2>
      </div>
      <hr className="border-b-3 border-gray-400 pb-3" />
      <hr />
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <UploadFile />
        <div className="grid  gap-4 my-8 sm:grid-cols-1 md:grid-cols-2">
          {inputForm.map((item, index) => (
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
            className="h-40 bg-gray-50"
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
