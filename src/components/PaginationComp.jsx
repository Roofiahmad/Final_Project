import React, { useState } from 'react';


const PaginationComp = (props) => {
  console.log('props', props)
  // console.log(props.campaignData.length)
  
  const campaignItem = 2

  const totalPage = Math.ceil(props.campaignData.length/campaignItem)
  console.log("Jumlah Button", totalPage)

  let data = [];

  for (let i = 0; i < totalPage; i++) {
    let object = {page: i+1, indexAwal: i*campaignItem, indexAkhir: i*campaignItem+campaignItem};
    data.push(object)
  }


  return (
    <div className="w-10/12 mx-auto">
        <nav className="flex justify-end" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
          {
            data.map((button, index) => {
              return (
                <a key={index} href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => props.pagination(button.indexAwal, button.indexAkhir)}>
            {button.page}
              </a>
              )   
            })
          }
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
  )
}

export default PaginationComp;