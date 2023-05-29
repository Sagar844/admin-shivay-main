import React, { useState } from "react";
import { HiSearch, HiXCircle } from "react-icons/hi";

const UserFilter = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl ml-6">Users</h1>
      </div>
      <div className="flex items-center  gap-6 mt-5 ">
        <div className="flex ml-6 lg:ml-4">
          <div className="">
            <input
              className="h-[35px] lg:w-[300px] lg:rounded-l-3xl  w-[280px] p-2 border-r-0 border-gray-300 border-2 rounded-l-2xl rounded-t-l-2xl rounded-r-none  rounded-b-none outline-none "
              placeholder="Search..."
            ></input>
          </div>
          <div>
            <HiSearch className="w-[44px] h-[35px] p-1 lg:rounded-r-3xl  border-l-0  border-gray-300 border-2 outline-none rounded-r-2xl text-gray-500"></HiSearch>
          </div>
        </div>
        <div>
          <select
            className=" h-[35px] lg:w-[300px] rounded-2xl shadow-lg inputShadow px-2 w-48 border-[#cdcdcd] border-2 text-gray-400"
            name="category"
            type="select"
          >
            <option value="">Search</option>
            <option value="General Fitness">General Fitness</option>
            <option value="Weight Management">Weight Management</option>
            <option value="Mental Wellness">Mental Wellness</option>
            <option value="Medical Conditions">Medical Conditions</option>
            <option value="Flexibility">Flexibility</option>
            <option value="Spirituality">Spirituality</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default UserFilter;
