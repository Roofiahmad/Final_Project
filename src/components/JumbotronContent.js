import React from 'react';

function JumbotronContent() {
    return (
        <div className="flex mx-8 container">
            <div className="flex flex-col justify-center container lg:mx-auto font-semibold text-tosca">
                <div className="mx-2 lg:mx-0">
                    <h1 className="lg:text-5xl">#EducationForEveryone</h1>
                    <h1 className="text-xs lg:text-xl my-2">Proper education is not just a dream</h1>
                </div>
                <div className="my-8 mx-2 lg:mx-0 flex flex-col lg:flex-row">
                   <button className="text-white bg-rose rounded-full text-xl font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36">DONATE</button>
                   <button className="text-rose bg-white rounded-full border-2 border-rose text-xl font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5">CREATE CAMPAIGN</button>
                </div>
                <div className="my-8 mx-2 lg:mx-0 flex flex-col lg:flex-row">
                    <button className="mr-2 dot active" autoFocus></button>
                    <button className="mr-2 dot"></button>
                    <button className="mr-2 dot"></button>
                </div>
            </div>
        </div>
    )
}

export default JumbotronContent;
