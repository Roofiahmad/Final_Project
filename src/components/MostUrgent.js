import React from 'react';
import card from '../assets/card.png';


const MostUrgent = () => {
    return (
        <div className="w-10/12 mt-24 mb-5 mx-auto">
           <h4 className="font-bold underline mb-4">Most Urgent</h4>
           <div className="grid grid-cols-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
               <div className="shadow-md">
                   <img src={card} alt=""/>
                   <div className="w-5/6 mx-auto pb-4 pt-2">
                    <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">Medical</p>
                    <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
                    <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-tosca absolute" style={{width: "70%"}}></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-sm text-grey">Raised</p>
                            <p className="font-bold text-tosca">IDR 30.000.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-grey">Goal</p>
                            <p>IDR 50.000.000</p>
                        </div>
                    </div>
                   </div>
               </div> 
               <div className="shadow-md">
                   <img src={card} alt=""/>
                   <div className="w-5/6 mx-auto pb-4 pt-2">
                    <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">Medical</p>
                    <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
                    <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-tosca absolute" style={{width: "70%"}}></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-sm text-grey">Raised</p>
                            <p className="font-bold text-tosca">IDR 30.000.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-grey">Goal</p>
                            <p>IDR 50.000.000</p>
                        </div>
                    </div>
                   </div>
               </div> 
               <div className="shadow-md">
                   <img src={card} alt=""/>
                   <div className="w-5/6 mx-auto pb-4 pt-2">
                    <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">Medical</p>
                    <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
                    <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-tosca absolute" style={{width: "70%"}}></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-sm text-grey">Raised</p>
                            <p className="font-bold text-tosca">IDR 30.000.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-grey">Goal</p>
                            <p>IDR 50.000.000</p>
                        </div>
                    </div>
                   </div>
               </div>               
           </div>
        </div>
    )
}

export default MostUrgent;