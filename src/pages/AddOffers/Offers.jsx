import React from "react";
import Sidebar from "../../components/Sidebar";
import UserDataTableOffer from "../../components/UserDataTableOffer";

const Offers = () => {
  return (
    <>
      <div>
        <div className="flex overflow-x-hidden">
          <Sidebar></Sidebar>
          <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1089873814923509790/Screen_3.png')] bg-no-repeat bg-cover overflow-y-scroll h-screen w-full">
            <UserDataTableOffer></UserDataTableOffer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
