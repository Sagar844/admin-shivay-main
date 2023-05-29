import React from "react";

const NameComp = () => {
  return (
    <>
      <h1 className="font-bold text-lg pl-5 mt-16 ">User Dashboard</h1>

      <div className="p-4 ">
        <div className="bg-[#F6E0BE] rounded-2xl h-44 lg:w-[700px] lg:h-28 ">
          <div className="flex gap-20 pl-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-xl mt-3">Hi Shivaay!</h1>
              <h1 className="text-[#FAA200]">
                Today is a great day to add to your fitness journey!
              </h1>
            </div>
            <div>
              <img
                className="w-[200px] h-[200px] -mt-24 "
                src="/image_12.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameComp;
