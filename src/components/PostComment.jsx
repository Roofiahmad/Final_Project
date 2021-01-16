import React from "react";

export default function PostComment() {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1">
        <form>
          <textarea
            name="story"
            className="h-40 bg-gray-50 mb-4 focus:outline-none p-4"
            id="story"
            type="text"
            placeholder="Give them support..."
          />
        </form>
        </div>
        <button type="submit" className="btn-red float-right uppercase">
          Post
        </button>
      </form>
      <div className="h-20"></div>
    </div>
  );
}
