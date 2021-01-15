import React from "react";
import PostComment from "./PostComment";

export default function CommentCampaignDetail(props) {
  return (
    <div className="border border-gray-300 shadow px-10 py-4 my-10">
      <p className="text-xl font-semibold mt-4 mb-8 ">Comments(11)</p>
      {props.role == "donatur" ? <PostComment /> : null}
      <div className="border-t-2 border-gray-300  px-5 py-8  ">
        <div style={{ display: "inline-block", width: "100px" }}>
          <img
            src="https://i.picsum.photos/id/116/200/200.jpg?hmac=l2LJ3qOoccUXmVmIcUqVK6Xjr3cIyS-Be89ySMCyTQQ"
            alt="donatur image"
            className="rounded-md"
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
          <p className="">William Minerva</p>
          <p className="text-gray-400">15 minutes ago</p>
        </div>
        <p className="mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          obcaecati iure. Quos iste eaque impedit nam odit, maxime consectetur
          fuga doloremque ipsam dolor perspiciatis sequi vero repellat incidunt
          quasi, praesentium omnis! Non incidunt quaerat voluptates quod,
          asperiores culpa placeat neque odio consequatur earum aspernatur
          excepturi error, ipsa, perferendis cupiditate voluptatum."
        </p>
      </div>
      <div className="border-t-2 border-gray-300  px-5 py-8 bg-gray-50 ">
        <div style={{ display: "inline-block", width: "100px" }}>
          <img
            src="https://i.picsum.photos/id/116/200/200.jpg?hmac=l2LJ3qOoccUXmVmIcUqVK6Xjr3cIyS-Be89ySMCyTQQ"
            alt="donatur image"
            className="rounded-md"
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
          <p className="">William Minerva</p>
          <p className="text-gray-400">15 minutes ago</p>
        </div>
        <p className="mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          obcaecati iure. Quos iste eaque impedit nam odit, maxime consectetur
          fuga doloremque ipsam dolor perspiciatis sequi vero repellat incidunt
          quasi, praesentium omnis! Non incidunt quaerat voluptates quod,
          asperiores culpa placeat neque odio consequatur earum aspernatur
          excepturi error, ipsa, perferendis cupiditate voluptatum."
        </p>
      </div>
      <div className="border-t-2 border-gray-300  px-5 py-8  ">
        <div style={{ display: "inline-block", width: "100px" }}>
          <img
            src="https://i.picsum.photos/id/116/200/200.jpg?hmac=l2LJ3qOoccUXmVmIcUqVK6Xjr3cIyS-Be89ySMCyTQQ"
            alt="donatur image"
            className="rounded-md"
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
          <p className="">William Minerva</p>
          <p className="text-gray-400">15 minutes ago</p>
        </div>
        <p className="mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          obcaecati iure. Quos iste eaque impedit nam odit, maxime consectetur
          fuga doloremque ipsam dolor perspiciatis sequi vero repellat incidunt
          quasi, praesentium omnis! Non incidunt quaerat voluptates quod,
          asperiores culpa placeat neque odio consequatur earum aspernatur
          excepturi error, ipsa, perferendis cupiditate voluptatum."
        </p>
      </div>
      <button className="btn-outline-tosca uppercase mb-6 mt-10 mx-auto block w-1/6">
        load more
      </button>
    </div>
  );
}
