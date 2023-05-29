import React from "react";
import { HiOutlineMail, HiPhone, HiInformationCircle } from "react-icons/hi";
const AccountCard = ({ item}) => {
  return (
    <>
      <div className="pl-8 mt-10 ">


        <div className="bg-white rounded-2xl w-64 h-[250px] ">
          <div className="flex justify-center">
    
            <img className="w-20  h-20 -mt-10 rounded-full" src={item.avatar} />

          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-[14px] font-bold">{item.name}</h1>
            <h1 className="text-[13px]">{item.expertise}</h1>
          </div>
          <div className="bg-[#FEF1D9] mt-10 rounded-2xl">
            <div className="flex gap-3 items-center pl-5 pt-4">
              <div className="text-[#FAA200]">
                <HiOutlineMail></HiOutlineMail>
              </div>
              <div>
                <h1 className="text-sm">{item.email}</h1>
              </div>
            </div>
            <div className="flex items-center gap-4 pl-5 pt-2">
              <div className="text-[#FAA200]">
                <HiPhone></HiPhone>
              </div>
              <div>
                <h1>{item.mobile}</h1>
              </div>
            </div>

            <div className="flex justify-between items-center pl-5 pt-2 pb-6">
              <div className="flex items-center gap-4">
                <div className="text-[#FAA200]">
                  <HiInformationCircle></HiInformationCircle>
                </div>
                <div className="text-[#FAA200]">
                  <h1>Details</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
