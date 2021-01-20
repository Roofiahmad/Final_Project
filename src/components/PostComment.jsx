import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostComment() {
  let {campaignId} = useParams();
  const token = localStorage.getItem('token');
  const handlePostComment = async (e) => {
    e.preventDefault();

    console.log("INI IDNYA", campaignId)
    
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
        console.log(response);
        console.log(response, "update user data success"); 
        alert("Yass, your comment is sent");
        window.location.reload();
    })
    .catch((err) => {
        console.log("INI PESAN ERROR", err.response);
        alert("Sorry, email or password is incorrect");
    })
  };
  return (
    <div>
      <form onSubmit={(e) => handlePostComment(e)}>
        <div className="grid grid-cols-1">
          <textarea
            name="comment"
            className="h-40 bg-gray-50 mb-4 focus:outline-none p-4"
            id="story"
            type="text"
            placeholder="Give them support..."
          />
        </div>
        <button type="submit" className="btn-red float-right uppercase">
          Post
        </button>
      </form>
      <div className="h-20"></div>
    </div>
  );
}
