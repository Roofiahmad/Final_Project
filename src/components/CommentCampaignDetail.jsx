import React, { useState, useEffect } from "react";
import PostComment from "./PostComment";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { comment } from "postcss";
import moment from 'moment';

export default function CommentCampaignDetail(props) {
    let campaignId = useParams().campaignId;
    const [arrayComments, setComments] = useState("");
    const [slicedArrayComments, setSlicedArrayComments] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    async function getData() {
      await axios.get(
        `https://talikasih.kuyrek.com:3004/comment/get/campaign?campaign_id=${campaignId}&page=1&limit=10`
      )
      .then((response) => {
          setComments(response.data.data);
          setSlicedArrayComments(response.data.data.slice(0,2))
      })
      .catch((err) => console.log(err))
    }
    
  return (
    <div className="border border-gray-300 shadow px-10 py-4 my-10">
      <p className="text-xl font-semibold mt-4 mb-8 ">Comments({arrayComments.length})</p>
      {props.role == "donatur" ? <PostComment /> : null}
      {slicedArrayComments.length > 0 ? slicedArrayComments.map((comments, index) => {
        return (
      <div key={index} className="border-t-2 border-gray-300  px-5 py-8 frombottom-animation ">
        <div style={{ display: "inline-block", width: "100px" }}>
          <img
            src={comments.user.profile_image}
            alt="donatur image"
            className="rounded-md"
            width={`200px`}
            height={`200px`}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            margin: "0px 20px",
            position: "relative",
            bottom: "60px",
          }}
        >
          <p className="">{comments.user.name}</p>
          <p className="text-gray-400">{moment(comments.created_at).startOf('hour').fromNow()}</p>
        </div>
        <p className="mt-4">
          {comments.comment}
        </p>
      </div>
        );
      })
       :null}
{ arrayComments.length > 2 ?<button onClick={() => slicedArrayComments.length <=2 ? setSlicedArrayComments(arrayComments) : setSlicedArrayComments(arrayComments.slice(0,2)) } className="btn-outline-tosca uppercase mb-6 mt-10 mx-auto block w-1/6">
{slicedArrayComments.length <=2 ? 'load more' : 'show less'}
      </button> :null}
    </div> 
  );
}
