import React from "react";

export default function DonaturTimeline() {
  return (
    <div className="border border-gray-300 shadow px-10 py-2 my-10 rounded-sm">
      <p className="text-xl font-semibold my-4">Donations(132)</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="border border-gray-300 shadow p-5 rounded-md ">
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
            }}
          >
            <p className="text-tosca text-xl font-medium mb-5">
              Rp 320.000.000
            </p>
            <p className="">William Minerva</p>
            <p className="text-gray-400">15 minutes ago</p>
          </div>
          <p className="mt-2">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptas blanditiis alias ea rem, voluptatem officia expedita
            inventore dolorem? Tempore?"
          </p>
        </div>
        <div className="border border-gray-300 shadow p-5 rounded-md ">
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
            }}
          >
            <p className="text-tosca text-xl font-medium mb-5">Rp 320.000</p>
            <p className="">Justin Junaidi</p>
            <p className="text-gray-400">15 minutes ago</p>
          </div>
          <p className="mt-2">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptas blanditiis alias ea rem, voluptatem officia expedita
            inventore dolorem? Tempore?"
          </p>
        </div>
        <div className="border border-gray-300 shadow p-5 rounded-md ">
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
            }}
          >
            <p className="text-tosca text-xl font-medium mb-5">Rp 320.000</p>
            <p className="">Natsu</p>
            <p className="text-gray-400">15 minutes ago</p>
          </div>
          <p className="mt-2">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptas blanditiis alias ea rem, voluptatem officia expedita
            inventore dolorem? Tempore?"
          </p>
        </div>
        <div className="border border-gray-300 shadow p-5 rounded-md ">
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
            }}
          >
            <p className="text-tosca text-xl font-medium mb-5">Rp 320.000</p>
            <p className="">Raine</p>
            <p className="text-gray-400">15 minutes ago</p>
          </div>
          <p className="mt-2">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptas blanditiis alias ea rem, voluptatem officia expedita
            inventore dolorem? Tempore?"
          </p>
        </div>
      </div>
      <button className="btn-outline-tosca uppercase my-4 mx-auto block w-1/6">
        see all
      </button>
    </div>
  );
}
