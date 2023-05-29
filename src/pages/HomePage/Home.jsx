import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import NameComp from "../../components/NameComp";
import UserDataTable from "../../components/UserDataTable";
import { GetActiveCourses } from "../../api/api";
import HomeCart from "../../components/HomeCart";
import SkeltonLoading from "../../components/SkeltonLoading";
import UserLoading from "../../components/UserLoading";

const Home = () => {
  const [activeCourse, setActiveCourse] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const results = await GetActiveCourses();
        // console.log(results);
        setActiveCourse(results);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    })();
  }, []);

  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="bg-[url('/src/assets/Screen_1.png')] w-full bg-no-repeat bg-cover overflow-y-scroll h-screen">
          <NameComp></NameComp>
          <UserDataTable></UserDataTable>
          <h1 className="mt-8 ml-8 text-xl font-bold">Active Courses</h1>
          <div className="flex gap-4   overflow-x-scroll scrollbar-hide  ml-5 ">
            
            {activeCourse &&
              activeCourse.map((item) => {
                return (
                  <div key={item._id}>
                 
                    <HomeCart item={item} />
                  </div>
                );
              })}
          </div>
          {loading && <UserLoading />}
        </div>
      </div>
    </div>
  );
};

export default Home;
