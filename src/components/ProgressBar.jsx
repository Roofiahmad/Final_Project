import React from "react";

export default function ProgressBar() {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div></div>
      </div>
      <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-silk">
        <div
          style={{ width: `${(1 / 3) * 100}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tosca"
        ></div>
      </div>
    </div>
  );
}
