import React from "react";
import SearchResult from "../components/SearchResult";
import arrow from "../assets/arrow.png";

export default function DiscoverSearchResult() {

  return (
    <div>
      <div className="mt-16 mb-40">
        <div className="w-10/12 mx-auto">
          <h1 className="font-bold text-3xl mb-6">Result for "medical help"</h1>
          <a href="/discoverall" className="font-bold flex mb-24 ">
            <img src={arrow} alt="" width="20" className="mr-2 hover:cursor-pointer" />
            See all categories
          </a>
        </div>
      </div>
      <SearchResult />
    </div>
  );
}
