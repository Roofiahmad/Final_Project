import React from 'react';
import arrow from '../assets/arrow.png';
import card from '../assets/card.png';
import sort from '../assets/sort.png';


const SearchResult = () => {
    return (
        <div className="mt-20 mb-36">
          <div className="w-10/12 mx-auto">
          <h1 className="font-bold text-3xl mb-6">Result for "medical help"</h1>
          <a href="#" className="font-bold flex mb-24"><img src={arrow} alt="" width="20" className="mr-2"/>See all categories</a>
          <a href="#" className="font-bold flex mb-5">Sort<img src={sort} alt="" width="20" className="ml-2"/></a>
          <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
  <div class="container mx-auto flex justify-between">
    <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold">Logo</div>
    <ul class="flex">
          <li class="toggleable hover:bg-blue-800 hover:text-white">
        <input type="checkbox" value="selected" id="toggle-one" class="toggle-input"/>
          <label for="toggle-one" class="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Click</label>
          <div role="toggle" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
            <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 2</h3>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold">Heading 3</h3>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
                <li>
                  <a href="#" class="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white">Category One Sublink</a>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">Heading 4</h3>
                <li class="pt-3">
                  <img src="https://placehold.it/205x172"/>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          </ul>
      </div>
    </nav>
            <div className="grid grid-cols-1 gap-5 justify-between md:gap-14 sm:grid-cols-3">
              <div className="shadow-md">
                <img src={card} alt=""/>
                <div className="w-5/6 mx-auto pb-4 pt-2">
                  <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                  <p className="font-bold mt-4">Aid for necessary items to help our country</p>
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
                  <p className="font-bold mt-4">Aid for necessary items to help our country</p>
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
                        <p className="font-bold mt-4">Aid for necessary items to help our country</p>
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
            <nav className="flex justify-end shadow-sm" aria-label="Pagination">
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