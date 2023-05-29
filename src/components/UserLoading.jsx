import React from "react";
import {CgSpinner} from "react-icons/cg"

function UserLoading() {
  return (
    <div className="text-blue-500 text-xl  grow-1 flex items-center mt-52 mb-20 justify-center">
      <CgSpinner className="animate-spin text-2xl" />
    </div>
  );
}
export default UserLoading;
