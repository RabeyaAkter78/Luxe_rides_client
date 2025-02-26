import React from "react";
// import key from "/key.png";
// import wheel from "../../assets/images/wheel.png";
// import download from "../../assets/images/download.png";
// import downloadm from "../../assets/images/downloadm.jfif";
const GuideLine = () => {
  return (
    <div className="bg-neutral-50 py-10 md:py-20 px-2 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-neutral-200 p-5 flex flex-col items-center  rounded-xl">
            <img src="/image/download.png" className="h-40 w-40 bg-neutral-50 p-3 rounded-full"></img>
            <h1 className="text-2xl font-semibold  my-3 ">New vehicle</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
          </div>
          <div className="border border-neutral-200 p-5 flex flex-col items-center  rounded-xl">
            <img src="/image/key.png" className="h-40 w-40 bg-neutral-50 p-3 rounded-full"></img>
            <h1 className="text-2xl font-semibold  my-3 ">Pre-owned car</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
          </div>
          <div className="border border-neutral-200 p-5 flex flex-col items-center  rounded-xl">
            <img src='/image/wheel.png' className="h-40 w-40 bg-neutral-50 p-3 rounded-full"></img>
            <h1 className="text-2xl font-semibold  my-3 ">Test drive</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
          </div>
          <div className="border border-neutral-200 p-5 flex flex-col items-center  rounded-xl">
            <img src="/image/downloadm.jfif" className="h-40 w-40 bg-neutral-50 p-3 rounded-full"></img>
            <h1 className="text-2xl font-semibold  my-3 ">Maintenance</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideLine;
