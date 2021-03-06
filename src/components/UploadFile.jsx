import React, { useState, useEffect } from "react";

export default function UploadFile(props) {
  console.log(props.imagePrev); 
  return (
    <div style={{backgroundImage: `url("${props.imagePrev ? props.imagePrev : props.campaign_images }")`, backgroundSize: 'cover', backgroundPosition: "center",}} className="mx-auto flex lg:w-8/12 lg:h-96 w-full h-56 items-center justify-center rounded-md ">
      <label className="w-64 flex flex-col items-center px-4 py-6 bg-transparent text-gray-700 rounded-lg shadow-lg tracking-wide uppercase  cursor-pointer hover:bg-gray-400 transform duration-500 hover:-translate-y-2 hover:text-gray-100">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2 lg:text-base text-sm leading-normal">Add Header Photo</span>
        <input 
        onChange={(e) => props.handleFile(e)}
        type="file" className="hidden" />
      </label>
    </div>
  );
}
