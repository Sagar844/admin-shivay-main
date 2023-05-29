import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <>
      <div className="flex sticky">
        <div className="h-screen flex flex-row  bg-[#E4E4DA]">
          <div className="flex flex-col w-60  rounded-r-3xl overflow-hidden bg-gradient-to-t from-[#FAA200] to-[#F6E0BE] text-white">
            <div className="flex items-center justify-center h-20 ">
              {/* <h1 className="text-3xl uppercase text-indigo-500">Logo</h1> */}
              <img className="w-36 mt-20" src={logo} alt="" />
            </div>
            <div>
              <ul className="flex flex-col  mt-32 ml-10">
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/"
                  >
                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bx-home"></i>
                      </span>
                      <span className="text-xl font-medium">Home</span>
                    </button>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/Trainers"
                  >
                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bx-group"></i>
                      </span>
                      <span className="text-xl font-medium">Trainers</span>
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/courses"
                  >
                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bx-file"></i>
                      </span>
                      <span className="text-xl font-medium">Courses</span>
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to="/offers"
                  >
                    <button className="transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                        <i className="bx bxs-offer"></i>
                      </span>
                      <span className="text-xl font-medium">Offers</span>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
            <Logout/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
