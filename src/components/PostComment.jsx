import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostComment() {
  let {campaignId} = useParams();
  const token = localStorage.getItem('token');
  const handlePostComment = async (e) => {
    e.preventDefault();

    const sendComment = {
      campaign_id: campaignId,
      comment: e.target.comment.value,
    };

    const config = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    await axios.post(
      "https://talikasih.kuyrek.com:3004/comment/create",
      sendComment, config
    )
    .then((response) => {
        toast.success("Your comment is created successfully", {
          position: toast.POSITION.TOP_CENTER
      })
        window.location.reload();
    })
    .catch((err) => {
        console.log("INI PESAN ERROR", err.response);
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER
      })
    })
  };
  return (
    <div>
      <form onSubmit={(e) => handlePostComment(e)} className="grid grid-cols-1">
        <div className=" ">
          <textarea
            name="comment"
            className="h-40 w-full bg-gray-50 mb-4 focus:outline-none p-4 lg:text-base text-sm"
            id="story"
            type="text"
            placeholder="Give them support..."
          />
        </div>
        <button type="submit" className="mb-4 btn-red uppercase lg:text-base text-sm w-28 justify-self-end">
          Post
        </button>
      </form>
    </div>
  );
}
