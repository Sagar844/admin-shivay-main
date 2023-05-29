import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AddTrainer = () => {
  return (
    <>
      <div className="border-2 border-dashed border-orange-400 w-60 h-64 bg-white rounded-2xl mt-10 ml-10 mb-10">
        <Link to="/trainer/add-new-trainer" >
        
        <div className="text-[100px] text-orange-500 flex flex-col justify-center text-center mt-12">
          <div className="flex justify-center ">
            <HiOutlinePlusCircle></HiOutlinePlusCircle>
          </div>

          <p className="text-xl">Add Trainer</p>
        </div>
        
        </Link>
       
      </div>
    </>
  );
};

export default AddTrainer;
