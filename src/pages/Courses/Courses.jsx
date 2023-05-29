import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import CourseHistory from "../../components/CourseHistory";
import Sidebar from "../../components/Sidebar";
import SkeltonLoading from "../../components/SkeltonLoading";
import UserLoading from "../../components/UserLoading";

const Courses = () => {
  const [oneOneOnOne, setOneOnOne] = useState([{}]);
  const [groupSession, setGroupSession] = useState([{}]);
  const [oneOneOnOneFilter, setOneOnOneFilter] = useState([{}]);
  const [groupSessionFilter, setGroupSessionFilter] = useState([{}]);
  const [bg, setBg] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setloading] = useState(true);

  const headers = {
    "Content-Type": "application/json",
    "Custom-Header": "Your custom header value",
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://shivayshaktibackend.onrender.com/course1",
        {
          method: "GET",
          headers: headers,
          mode: "cors",
        }
      );

      const data = await response.json();

      console.log(data);
      setOneOnOneFilter(data);
      setOneOnOne(data);
      // setloading(false);
    } catch (error) {
      console.error(error);
      // setloading(false);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://shivayshaktibackend.onrender.com/course",
        {
          method: "GET",
          headers: headers,
          mode: "cors",
        }
      );

      const data = await response.json();

      console.log(data);
      setGroupSessionFilter(data);
      setGroupSession(data);
      setloading(false);
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
    getData();
  }, []);

  const courseRedusur = (category, action) => {
    switch (action.type) {
      case "FILTER_CATEGORY":
        const updatedItem = groupSessionFilter.filter((item) => {
          return item.category == action.payload;
        });

        setGroupSession(updatedItem);

        const updatedItem2 = oneOneOnOneFilter.filter((item) => {
          return item.category == action.payload;
        });

        setOneOnOne(updatedItem2);
        setBg(true);
        setMsg(action.payload);
        break;

      default:
        category;
        break;
    }
  };

  const [category, dispach] = useReducer(courseRedusur);

  const filterItem = (currentInput) => {
    dispach({ type: "FILTER_CATEGORY", payload: currentInput });
  };


  return (
    <div>
      <div className="flex overflow-x-hidden">
        <Sidebar></Sidebar>

        <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1089873814923509790/Screen_3.png')] bg-no-repeat bg-cover overflow-y-scroll h-screen w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center text-center  gap-6 px-3">
              <div>
                <h1 className="text-xl text-[#283143] font-bold">Courses</h1>
              </div>

              {/* <div className="flex   mt-4">
                <div className="">
                  <input
                    className="h-[45px] lg:w-[400px] lg:rounded-l-3xl  w-[280px] p-2 border-r-0 bg-transparent  border-gray-400 border-2 rounded-l-2xl rounded-t-l-2xl rounded-r-none  rounded-b-none outline-none "
                    placeholder="Search..."
                  ></input>
                </div>
                <div>
                  <a href="">
                    <HiSearch className="w-[44px] h-[45px] p-1 bg-transparent lg:rounded-r-3xl  border-l-0  border-gray-400 border-2 outline-none rounded-r-2xl text-gray-500"></HiSearch>
                  </a>
                </div>
              </div> */}
            </div>

            <div className="pr-5">
              <Link to="/courses/add-new-course/group-session">
                <div className="bg-[#FAA200] rounded-md text-white py-2 px-4 mt-5  ml-5 ">
                  <button>Add New Courses</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex gap-2 mt-6 px-4">
            <button
              onClick={() => {
                setGroupSession(groupSessionFilter);
                setOneOnOne(oneOneOnOneFilter);
                setBg(true);
                setMsg("All Courses");
              }}
            >
              <h1
                className={` ${
                  bg && msg == "All Courses" ? "ActiveBg" : ""
                }    ${
                  !bg ? "ActiveBg" : ""
                }   text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143]`}
              >
                All Courses
              </h1>
            </button>
            <button onClick={() => filterItem("General Fitness")}>
              <h1
                className={`${
                  bg && msg == "General Fitness" ? "ActiveBg" : ""
                }  text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143]`}
              >
                General Fitness
              </h1>
            </button>
            <button onClick={() => filterItem("Weight Management")}>
              <h1
                className={` ${
                  bg && msg == "Weight Management" ? "ActiveBg" : ""
                }   text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143] `}
              >
                Weight Management
              </h1>
            </button>
            <button onClick={() => filterItem("Mental Wellness")}>
              <h1
                className={`    ${
                  bg && msg == "Mental Wellness" ? "ActiveBg" : ""
                }        text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143]`}
              >
                Mental Wellness
              </h1>
            </button>
            <button onClick={() => filterItem("Medical Conditions")}>
              <h1
                className={`   ${
                  bg && msg == "Medical Conditions" ? "ActiveBg" : ""
                }    text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143]`}
              >
                Medical Conditions
              </h1>
            </button>
            <button onClick={() => filterItem("Flexibility")}>
              <h1
                className={`   ${
                  bg && msg == "Flexibility" ? "ActiveBg" : ""
                }   text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143]`}
              >
                Flexibility
              </h1>
            </button>
            <button onClick={() => filterItem("Spirituality")}>
              <h1
                className={`    ${
                  bg && msg == "Spirituality" ? "ActiveBg" : ""
                }      text[#283143] bg-white px-2 py-2 hover:bg-[#283143] hover:text-white rounded-2xl inline-block border-2 border-[#283143]`}
              >
                Spirituality
              </h1>
            </button>
          </div>

          <a href="">
            <h1 className=" text-white bg-[#283143] px-2 py-2 hover:text-white  rounded-2xl inline-block ml-5 mt-5">
              Group Sessions
            </h1>
          </a>
          {loading && <UserLoading/>}
          <CourseHistory data={groupSession}></CourseHistory>
          <a href="">
            <h1 className=" text-white bg-[#283143] px-2 py-2 hover:text-white  rounded-2xl inline-block ml-5 mt-5">
              Personal Training Sessions
            </h1>
          </a>

          <CourseHistory data={oneOneOnOne}></CourseHistory>
        </div>
      </div>
    </div>
  );
};

export default Courses;
