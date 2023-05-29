import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { fetchLogs } from "../api/api";
import UserLoading from "./UserLoading";

var ArrayColor = [
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
  "bg-[#FFE4FF]",
  "bg-[#EDFFE3]",
  "bg-[#DAEDF9]",
];

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(1, "0");
const day = currentDate.getDate().toString().padStart(1, "0");
const formattedDate = `${day}-${month}-${year}`;
console.log("Formated Date", formattedDate, typeof day);

let intDay = parseInt(day);

const newDate = Date.now();

const y = new Date(1681105047245 - 86400000);

console.log(y);
console.log(newDate);
const MomentDate = DateTime.now().toFormat("MMMM dd, yyyy");
const showDate = DateTime.now().toFormat("MM-dd-yyyy");

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setloading] = useState(true);
  const [apiDate, setApiDate] = useState(formattedDate);

  console.log(apiDate);

  useEffect(() => {
    (async () => {
      try {
        const resulst = await fetchLogs(apiDate);
        setApiDate(resulst);
        setloading(false)
        if (resulst && resulst) {
          setLogs(resulst.reverse());
        }
      } catch (error) {
        setloading(false)
      }
    })();
  }, []);

  return (
    <>
      <div className="bg-white  w-[700px] ">
        <div className="p-6 flex flex-col gap-2">
          <h1 className="text-[#FAA200] text-xl">Appoinments</h1>
          <h2>{MomentDate}</h2>
          <h3 className="text-2xl">TODAY</h3>
        </div>
        <div className="text-[#FAA200] flex justify-between px-3 text-xl items-center text-center">
          <HiChevronLeft></HiChevronLeft>
          <div
            // onClick={() => setApiDate((intDay - 2) - month - year)}
            onClick={() => setApiDate(`${intDay - 2}-${month}-${year}`)}
            className="p-1 w-10 border-2 border-[#FAA200] rounded-md cursor-pointer "
          >
            <p>{intDay - 2}</p>
          </div>
          <div
            onClick={() => setApiDate(`${intDay - 1}-${month}-${year}`)}
            className="p-1 w-10 border-2 border-[#FAA200] rounded-md cursor-pointer"
          >
            <p>{intDay - 1}</p>
          </div>
          <div
            onClick={() => setApiDate(`${intDay}-${month}-${year}`)}
            className="p-1 w-10 border-2 border-[#FAA200] rounded-md  text-white bg-[#FAA200] cursor-pointer"
          >
            <p>{intDay}</p>
          </div>
          <div className="p-1 w-10 border-2 border-[#FAA200] rounded-md cursor-pointer">
            <p>{intDay + 1}</p>
          </div>
          <div className="p-1 w-10 border-2 border-[#FAA200] rounded-md cursor-pointer ">
            <p>{intDay + 2}</p>
          </div>
          <HiChevronRight></HiChevronRight>
        </div>

        <div className=" items-end p-5  overflow-y-scroll h-[530px] scrollbar-hide ">
          {logs.map((item, index) => {
            let s1 = "",
              s2 = item.time.slice(item.time.length - 2, item.time.length);
            let count = 0;
            for (let i = 0; i < item.time.length; i++) {
              if (item.time[i] == ":") count++;
              if (item.time[i] == ":" && count == 2) break;
              s1 += item.time[i];
            }
            let tt = s1 + " " + s2;
            console.log("tt", tt);
            return (
              <div key={item._id} className="flex  gap-2">
                <div className="mt-5 w-20 uppercase"> {tt}</div>
                <div className="h-full w-1 bg-sky-300 ">
                  <div className="h-36 bg-primary">
                    <div className="bg-[#FAA200]  w-3 h-3  rounded-full mt-5 -ml-1 "></div>
                  </div>
                </div>
                <div
                  className={`${ArrayColor[index]} w-64 mt-3 mb-2 rounded-2xl`}
                >
                  {/* <div className={`w-64 ${item.color}  mt-3 mb-2 rounded-2xl`}> */}

                  {/* <div className="  w-64 mt-3 mb-2 rounded-2xl"> */}
                  <div className="p-3">
                    {loading && <UserLoading/>}
                    <h1 className="text-lg ">{item.title}</h1>
                    <p className="mt-3">{item.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Logs;
