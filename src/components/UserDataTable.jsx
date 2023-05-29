import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

import {
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocument,
  HiOutlineEye,
} from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  fetchUerByCourseName,
  getfetchAllCourses,
  getfetchUser,
} from "../api/api";
import UserLoading from "./UserLoading";

const UserDataTable = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [pinInput, setPinInput] = useState("");
  const [fitnessInput, setFitnessInput] = useState("");
  const [userID, setUserID] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [showFitness, setShowFitness] = React.useState(false);
  const [userName, setUserName] = useState("");
  const [color, setColor] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [msg, setMsg] = useState("");
  const [setId] = useState("");
  const [loading, setloading] = useState(true);

  console.log(user);

  useEffect(() => {
    (async () => {
      try {
        const results = await getfetchUser();
        setUser(results);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const results = await getfetchAllCourses();
        setCourses(results);
        setloading(false);
      } catch (error) {
        setloading(false);
      }
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const results = await fetchUerByCourseName(select);
  //       setUser(results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [select]);

  // useEffect(() => {
  //   fetchUerByCourseName();
  // }, [refresh]);

  const decrement = () => {
    // Counter state is decrement
    setPage(page - 1);
  };
  const increment = () => {
    // Counter state is incremented
    setPage(page + 1);
  };

  const toggle = () => {
    setHide(false);
    setShow(true);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e);
    setColor("Copied");
    setId(e);
    toast.warn("Copy Successfully", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const editPin = () => {
    if (pinInput == "" || pinInput == 0) {
      console.log("not update");
    } else {
      const options = {
        method: "PATCH",
        url: `https://shivayshaktibackend.onrender.com/trainee/pin/${userID}`,
        headers: {
          Accept: "application/json",
        },
        data: {
          pin: pinInput,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data._id);

          toast.success("Pin Update Successfully !", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch(function (error) {
          console.error(error);
          console.error(error.response.data.message);
          toast.error("Something Went Wrong !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };

  const editFitnessReport = () => {
    if (fitnessInput == "" || fitnessInput == 0) {
      console.log("not update");
    } else {
      const options = {
        method: "PATCH",
        url: `https://shivayshaktibackend.onrender.com/trainee/report/${userID}`,
        headers: {
          Accept: "application/json",
        },
        data: {
          medicalHistory: fitnessInput,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data._id);

          toast.success("Report Added Successfully !", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setUserID(null);
        })
        .catch(function (error) {
          // console.error(error);
          console.error(error.response.data.message);
          toast.error("Something Went Wrong !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };

  // useEffect(() => {
  //   editPin();
  // }, [pinInput]);

  const DeleteUser = () => {
    if (userID) {
      const options = {
        method: "DELETE",
        url: `https://shivayshaktibackend.onrender.com/trainee/${userID}`,
        headers: {
          Accept: "application/json",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log("delete", response);
          // console.log(response.data._id);

          toast.success("User Delete Successfully !", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setShowModal(false);
          // setRefresh(true)
        })
        .catch(function (error) {
          console.error(error);
          // console.error(error);
          toast.error("Something Went Wrong !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };

  // console.log("Pin Input ===> ", pinInput);
  // console.log("User ID ===> ", userID);
  // console.log("User Name ===> ", userName);

  if (loading) {
    return <UserLoading />;
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <>
        <div>
          <h1 className="text-2xl ml-6">Users</h1>
        </div>
        <div className="flex items-center  gap-6 mt-3 ">
          <div className="flex ml-6 lg:ml-4">
            <div className="">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-[35px] lg:w-[300px] lg:rounded-l-3xl  w-[280px] p-2 border-r-0 border-gray-300 border-2 rounded-l-2xl rounded-t-l-2xl rounded-r-none  rounded-b-none outline-none "
                placeholder="Search..."
              ></input>
            </div>
            <div>
              <HiSearch className="w-[44px] h-[35px] p-1 lg:rounded-r-3xl  border-l-0  border-gray-300 border-2 outline-none rounded-r-2xl text-gray-500"></HiSearch>
            </div>
          </div>

          {/* <select
            onChange={(e) => setSelect(e.target.value)}
            className=" h-[35px] lg:w-[300px] rounded-2xl shadow-lg inputShadow px-2 w-48 border-[#cdcdcd] border-2 text-gray-400"
            name="category"
            type="select"
          >
            <option>Select Course Name</option>

            {courses.map((item) => {
              return (
                <option key={item._id}>
                  <option value={item.name}>{item.name}</option>;
                </option>
              );
            })}
          </select> */}
        </div>
      </>
      <div className="relative overflow-x-auto shadow-md scrollbar-hide mt-6 mb-5 px-2">
        <table className="w-full text-sm text-left text-gray-500  inline">
          <tbody className="text-xs text-[#FAA200]  bg-[#283143]  ">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-2">
                Date
              </th>
              <th scope="col" className="px-6 py-2">
                Customer PIN
              </th>
              <th scope="col" className="px-6 py-2">
                Customer ID
              </th>
              <th scope="col" className="px-6 py-2"></th>
              <th scope="col" className="px-6 py-2">
                Name
              </th>
              <th scope="col" className="px-6 py-2">
                Contact
              </th>
              <th scope="col" className="px-6 py-2">
                Email
              </th>
              <th scope="col" className="px-6 py-2">
                Fitness Status
              </th>
              <th scope="col" className="px-6 py-2">
                Course Name
              </th>
              <th scope="col" className="px-6 py-2">
                Category
              </th>
              <th scope="col" className="px-6 py-2">
                Type
              </th>

              <th scope="col" className="px-6 py-2">
                Age
              </th>
              <th scope="col" className="px-6 py-2">
                Gender
              </th>
              <th scope="col" className="px-6 py-2">
                Duration
              </th>
              <th scope="col" className="px-6 py-2">
                Level{" "}
              </th>
              <th scope="col" className="px-6 py-2">
                Time
              </th>
              <th scope="col" className="px-6 py-2">
                Start Date{" "}
              </th>
              <th scope="col" className="px-6 py-2">
                Amount (INR)
              </th>
              <th scope="col" className="px-6 py-2">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-2">
                Delete
              </th>
            </tr>
          </tbody>
          <tbody>
            {user
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search) ||
                      item._id.toLowerCase().includes(search) ||
                      item.pin.toLowerCase().includes(search) ||
                      item.course.toLowerCase().includes(search) ||
                      item.phone.toLowerCase().includes(search) ||
                      item.email.toLowerCase().includes(search);
              })
              .slice(page * 6 - 6, page * 6)
              .map((item) => {
                console.log(item);
                {item.length === 0 ? "user not found " : "hsdh"}
                return (
                  <tr
                    key={item._id}
                    className="bg-orange-400 bg-opacity-20 text-black border-b  hover:bg-[#283143]  hover:bg-opacity-20"
                  >
                

                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        {/* <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label> */}
                      </div>
                    </td>

                    <td className="px-6 py-2 ">
                      <p className="w-20">12-04-2022</p>
                    </td>
                    <td className="px-6 py-2 flex items-center text-center justify-center">
                      <input
                        onChange={(e) => setPinInput(e.target.value)}
                        onClick={() => setUserID(item._id)}
                        className="w-20 bg-white rounded-md p-1 h-7 mr-2"
                        defaultValue={item.pin}
                      ></input>

                      {userID == item._id && (
                        <button onClick={editPin}>
                          <HiOutlineDocumentCheck className="text-[#3D89BA] text-2xl"></HiOutlineDocumentCheck>
                        </button>
                      )}
                    </td>

                    <td className="px-6 py-2 h-7">{item._id} </td>
                    <td
                      className="cursor-pointer hover:text-orange-500"
                      onClick={() => {
                        handleCopy(item._id);
                      }}
                    >
                      <HiOutlineClipboardDocument />
                    </td>

                    <td className="px-6 py-2">
                      {" "}
                      <p className="w-24 h-7">{item.name}</p>
                    </td>
                    <td className="px-6 py-2 h-7">{item.phone}</td>
                    <td className="px-6 py-2 h-7">{item.email}</td>
                    {/* <td className="px-6 py-2">
                      <p className="w-40 bg-white rounded-md p-1 h-7"></p>
                    </td> */}
                    <td className="px-6 py-2 flex items-center text-center justify-center">
                      <input
                        onChange={(e) => setFitnessInput(e.target.value)}
                        onClick={() => setUserID(item._id)}
                        className="w-40 bg-white rounded-md p-1 h-7 mr-2"
                        defaultValue={item.medicalHistory}
                      ></input>
                      {userID == item._id && (
                        <button onClick={editFitnessReport}>
                          <HiOutlineDocumentCheck className="text-[#3D89BA] text-2xl"></HiOutlineDocumentCheck>
                        </button>
                      )}
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setShowFitness(true);
                          // setUserID(item._id);
                          setUserName(item.name);
                          setMsg(item.medicalHistory);
                        }}
                      >
                        <HiOutlineEye className="hover:text-orange-400 text-md" />
                      </div>
                    </td>
                    <td className="px-6 py-2">
                      {" "}
                      <p className="w-48 bg-white rounded-md p-1 h-7">
                        {item.course}
                      </p>
                    </td>
                    <td className="px-6 py-2">
                      <p className="w-28 bg-white rounded-md p-1 h-7"></p>
                    </td>
                    <td className="px-6 py-2">
                      <p className="w-28 bg-white rounded-md p-1 h-7"></p>
                    </td>

                    <td className="px-6 py-2">
                      <p className="w-24 bg-white rounded-md p-1">
                        {item.age} year
                      </p>
                    </td>
                    <td className="px-6 py-2">
                      {" "}
                      <p className="w-24 bg-white rounded-md p-1">
                        {item.gender}
                      </p>
                    </td>
                    <td className="px-6 py-2">
                      {" "}
                      <p className="w-24 bg-white rounded-md p-1 h-7"></p>
                    </td>

                    <td className="px-6 py-2">
                      {" "}
                      <p className="w-24 bg-white rounded-md p-1 h-7"></p>{" "}
                    </td>
                    <td className="px-6 py-2">
                      <p className="w-40 bg-white rounded-md p-1 h-7"></p>
                    </td>
                    <td className="px-6 py-2">
                      <p className="w-24 bg-white rounded-md p-1 h-7"></p>
                    </td>
                    <td className="px-6 py-2">
                      <p className="w-24 bg-white rounded-md p-1 h-7"></p>{" "}
                    </td>
                    <td className="px-6 py-2">
                      <p className="w-24 bg-white rounded-md p-1 h-7"></p>{" "}
                    </td>

                    <td className="flex items-center px-6 py-1 space-x-3 text-[#FAA200] ">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setShowModal(true);
                          setUserID(item._id);
                          setUserName(item.name);
                        }}
                      >
                        <HiOutlineTrash className="text-xl"></HiOutlineTrash>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between px-5">
        <div> .</div>

        <div className="text-[#FAA200] flex items-center text-center">
          {" "}
          <h1>
            {" "}
            {page} - {user.length > 6 ? 6 : user.length} of {user.length}
          </h1>{" "}
          <button
            onClick={decrement}
            disabled={page <= 1}
            className="border-2 border-[#FAA200] mx-2 p-1 rounded-sm cursor-pointer disabled:border-2 disabled:border-gray-500 disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <HiArrowSmallLeft></HiArrowSmallLeft>
          </button>{" "}
          <button
            onClick={increment}
            disabled={page >= Math.ceil(user.length / 6)}
            className="border-2 border-[#FAA200] mx-2 p-1 rounded-sm cursor-pointer disabled:border-2 disabled:border-gray-500 disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <HiArrowSmallRight></HiArrowSmallRight>{" "}
          </button>{" "}
        </div>
      </div>

      {/* Pop Up */}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Are You Sure ?</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are You Sure You Want To Delete This Account{" "}
                    <span className="text-red-400"> ({userName}) </span> ?
                    <br></br>
                    <span>
                      You cannot view this account in your list anymore if you
                      are deleting this account.{" "}
                    </span>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-orange-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={DeleteUser}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* popup end  */}

      {/* fitness pop up */}
      {showFitness ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex text-center items-center">
                    <h3 className="text-3xl font-semibold">Fitness Report </h3>
                    <span className="text-red-400 ml-3"> ({userName}) </span>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowFitness(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {msg != " " ? msg : "Report Not Available"}
                    {/* <span className="text-red-400"> ({userName}) </span> ? */}
                    <br></br>
                    {/* <span>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis a tenetur eius delectus nisi.
                    </span> */}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-orange-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowFitness(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* fitness pop end */}
    </>
  );
};

export default UserDataTable;
