import React, { useState } from 'react';
import card from '../assets/card.png';
import iconsort from '../assets/sort.png';
import { Link } from "react-router-dom";


const SearchResult = () => {
  const [sort, setSort] = useState(false)
    return (
        <div className="mt-16 mb-36">
          <div className="w-10/12 mx-auto">
          <button className="font-bold flex mb-5 bg-white hover:bg-blue" onClick={() => setSort(!sort)}>Sort
          <img src={iconsort} alt="" width="20" className="ml-2"/>
          {sort ? (
            <div className="z-10 absolute shadow-md bg-white py-2 px-3 font-normal text-md text-left mt-8">
              <ul className="hover:">
                <li className="campaign-text-setting text-md">Newest</li>
                <li className="campaign-text-setting text-md">Most urgent</li>
                <li className="campaign-text-setting text-md">Popular</li>
                <li className="campaign-text-setting text-md">Less donation</li>
              </ul>
            </div>
          ) : null}
          </button>
          <div className="grid grid-cols-1 gap-10 justify-between xl:grid-cols-3 md:grid-cols-2">
            <div className="shadow-md">
              <img src={card} alt=""/>
              <div className="w-5/6 mx-auto pb-4 pt-2">
                <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
                <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className="h-full bg-tosca absolute" style={{width: "70%"}}></div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm">Raised</p>
                    <p className="font-bold text-tosca">IDR 30.000.000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Goal</p>
                    <p>IDR 50.000.000</p>
                  </div>
                </div>
              </div>
            </div> 
            <div className="shadow-md">
              <img src={card} alt=""/>
              <div className="w-5/6 mx-auto pb-4 pt-2">
                <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
                <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className="h-full bg-tosca absolute" style={{width: "70%"}}></div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm">Raised</p>
                    <p className="font-bold text-tosca">IDR 30.000.000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Goal</p>
                    <p>IDR 50.000.000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md">
              <img src={card} alt=""/>
              <div className="w-5/6 mx-auto pb-4 pt-2">
                <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
                <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className="h-full bg-tosca absolute" style={{width: "70%"}}></div>
                </div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-sm">Raised</p>
                    <p className="font-bold text-tosca">IDR 30.000.000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Goal</p>
                    <p>IDR 50.000.000</p>
                  </div>
                </div>
              </div>
            </div> 
            </div>
              </div>
              <div className="w-10/12 mx-auto mt-20">
            <nav className="flex justify-end" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                4
              </span>
              <a href="#" className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                5
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                ...
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                10
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
    )
}

export default SearchResult;