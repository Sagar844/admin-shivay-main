import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

var date;
var newConversion;
const CourseHistory = (data) => {
  const [courseRestartId, SetCourseRestartId] = useState("");
  const [courseRestartType, SetCourseRestartType] = useState(false);
  const [courseId, SetCourseId] = useState("");
  const [courseType, SetCourseType] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState(false);
  const [startDateInput, setStartDateInput] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const deleteCourse = async () => {
    if (courseId) {
      console.log("we gone delete course Func");

      await axios
        .delete(`https://shivayshaktibackend.onrender.com/course/${courseId}`)
        .then((response) => setDeleteMsg("Delete successful"));

      setTimeout(() => {
        refreshPage();
      }, 1000);

      toast.success("Course Deleted !", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("Api Called Res");
      SetCourseId("").catch((error) => {
        console.error("There was an error!", error);
        SetCourseId("");

        toast.error("Something Went Wrong!", {
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

      console.log("Func End");
    }
  };

  const deleteCourse1 = async () => {
    if (courseId) {
      console.log("we gone personal training delete Func");

      await axios
        .delete(`https://shivayshaktibackend.onrender.com/course1/${courseId}`)
        .then((response) => setDeleteMsg("Delete successful"));

      setTimeout(() => {
        refreshPage();
      }, 1000);

      toast.success("Course Deleted !", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("Api Called Res");
      SetCourseId("").catch((error) => {
        console.error("There was an error!", error);
        SetCourseId("");

        toast.error("Something Went Wrong!", {
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

      console.log("Func End");
    }
  };

  useEffect(() => {
    if (courseType == true) {
      deleteCourse1();
      console.log("Delete One on one");
    } else {
      deleteCourse();
      console.log("Group Session");
    }
  }, [courseId]);

  const changeCourseStatus = () => {
    var options = !courseRestartType
      ? {
          method: "PATCH",
          url: `https://shivayshaktibackend.onrender.com/course/changeStatus/${courseRestartId}`,
          headers: {
            Accept: "application/json",
          },
          data: {
            startDate: startDateInput,
          },
        }
      : {
          method: "PATCH",
          url: `https://shivayshaktibackend.onrender.com/course1/changeStatus/${courseRestartId}`,
          headers: {
            Accept: "application/json",
          },
        };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data._id);

        toast.success("Course Restarted Successfully !", {
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
  };

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
      <div>
        <div className="flex gap-4   overflow-x-scroll scrollbar-hide pr-5 mt-5 ">
          {data.data.map((item) => {
            {
              date = item.startDate;
            }

            return (
              <div key={item._id} className="px- py-5 ml-3  ">
                <div className="bg-white rounded-3xl rounded-t-2xl  w-[250px] h-[350px] shadow-xl">
                  <div className=" flex-col flex items-center justify-center rounded-t-2xl ">
                    <img
                      className="rounded-b-none w-36 relative mt-2 h-10  ml-[105px] rounded-tr-lg  "
                      src={
                        item.status == "Active"
                          ? "https://res.cloudinary.com/dpzhezt6x/image/upload/v1 683020867/Active_m87aku.png"
                          : item.status == "Completed"
                          ? "https://res.cloudinary.com/dpzhezt6x/image/upload/v1683020867/Completed_skxuge.png"
                          : item.status !== "Upcoming"
                          ? "https://res.cloudinary.com/dpzhezt6x/image/upload/v1683020916/Available_csztxa.png"
                          : "https://res.cloudinary.com/dpzhezt6x/image/upload/v1683020867/Upcoming_ghbhm7.png"
                      }
                    />

                    <img
                      className="rounded-b-none rounded-t-2xl -mt-12  h-[180px] w-full "
                      src={
                        item.image
                          ? item.image
                          : "https://media.istockphoto.com/id/1354776457/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=w3OW0wX3LyiFRuDHo9A32Q0IUMtD4yjXEvQlqyYk9O4="
                      }
                    />
                  </div>

                  <div className="px-4 py-1 ">
                    <h1 className="text-[#FAA200] font-bold text-[13px]">
                      {item.name}
                    </h1>

                    <h1 className="text-[12px] font-semibold mr-2">
                      {" "}
                      Batch Size : {item.batchSize}
                    </h1>

                    <h1 className="text-[10px] font-semibold">
                      {" "}
                      Duration:
                      {item.duration}
                    </h1>
                    {item.batchSize !== undefined ? (
                      <p className="text-[10px] font-semibold">
                        Start Date:
                        {
                          (newConversion = moment
                            .parseZone(date)
                            .format("DD/MM/YYYY"))
                        }
                      </p>
                    ) : null}
                    <p className="text-[10px] font-semibold">
                      Timings: {item.timings}
                    </p>

                    <p className="text-[10px] font-semibold">
                      Price: {item.priceI}
                    </p>
                  </div>

                  <div  className="flex justify-center gap-7 mt-3 ">
                    <a
                      href={`https://shivaay-shakti-official.vercel.app/category/group-session/${item._id}`}
                      target="_blank"
                    >
                      <button className="bg-gray-100 text-[#283143] text-[12px] font-semibold border-1 hover:bg-[#283143] rounded-2xl hover:text-white p-2">
                        View Detail
                      </button>
                    </a>

                    <button
                      className="bg-[#283143] text-white text-[12px] font-semibold border-1 hover:bg-gray-100 rounded-2xl hover:text-[#283143] p-2 w-20"
                      onClick={() => {
                        SetCourseId(item._id);
                        SetCourseType(item.priceC ? true : false);
                      }}
                    >
                      Delete
                    </button>
                    {console.log(courseType)}

                    {item.status == "Completed" ? (
                      <button
                        className="bg-[#283143] text-white text-[12px] font-semibold border-1 hover:bg-gray-100 rounded-2xl hover:text-[#283143] p-2"
                        onClick={() => {
                          setShowModal(true);
                          SetCourseRestartId(item._id);
                          setCourseName(item.name);
                          SetCourseRestartType(item.priceC ? true : false);
                        }}
                      >
                        Restart Course
                      </button>
                    ) : null}
                  </div>
                </div>
                <a href="https://zoom.us/signin#/login" target="_blank">
                  <h1 className="px-2 py-2 shadow-2xl bg-white rounded-2xl mt-4 text-[12px] hover:text-blue-800 text-blue-500">
                    https://zoom.us/j/5551112222
                  </h1>
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end lg:hidden">
          <h1 className="font-mono font-bold text-[14px]">SWIPE </h1>
          <FiChevronsRight></FiChevronsRight>
        </div>
      </div>

      {/* pop up */}
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
                    Are You Sure You Want To Restart This Course
                    <span className="text-red-400"> ({courseName}) </span> ?
                    <br></br>
                  </p>
                  {!courseRestartType ? (
                    <div className="flex text-center items-center justify-center">
                      <h1> Start Date : </h1>
                      <input
                        onChange={(e) => {
                          setStartDateInput(e.target.value);
                          console.log("mmmmmjlj", startDateInput);
                        }}
                        type="date"
                        className="ml-10"
                      />
                    </div>
                  ) : null}
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
                    onClick={changeCourseStatus}
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={DeleteUser}
                  >
                    Restart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CourseHistory;
