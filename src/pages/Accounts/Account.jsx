import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { HiDotsHorizontal, HiOutlineTrash } from "react-icons/hi";
import AddTrainer from "../../components/AddTrainer";
import Logs from "../../components/Logs";
import axios from "axios";
import { deleteapi, fetchTrainers } from "../../api/api";
import AccountCard from "../../components/AccountCard";
import UserLoading from "../../components/UserLoading";


const Account = () => {
  const [trainers, setTrainers] = useState([]);
  const [trainerID, setTrainerID] = useState("");
  const [deleteMassage, setDeleteMassege] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const results = await fetchTrainers();
        setTrainers(results);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    })();
  }, [deleteMassage]);

  const deleteTrainer = () => {
    console.log("dealtetraner ");
    axios
      .delete(deleteapi + trainerID)
      .then((response) => setDeleteMassege("Delete successful"))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  console.log("trainer Id", trainerID);

  return (
    <>
      <div className="flex ">
        <Sidebar></Sidebar>
        <div className="bg-[url('/src/assets/Screen_1 (1).png')] w-full bg-no-repeat bg-cover overflow-y-scroll h-screen scrollbar-hide">
          <h1 className="text-xl font-bold ml-6 mt-5 pb-6 sticky">
            Registered Trainers
          </h1>

          {loading && <UserLoading />}
          <div className="flex flex-wrap gap-5 justify-evenly ">
            {trainers.map((item) => {
              return (
                <div key={item._id}>
                              
                  <AccountCard  loading={loading} item={item} />

                  <div>
                    <div
                      onClick={() => setTrainerID(trainerID ? "" : item._id)}
                      className="text-[#FAA200] pr-5 text-3xl"
                    >
                      <HiDotsHorizontal></HiDotsHorizontal>
                    </div>
                    {item._id == trainerID && (
                      <div className="flex justify-end  ">
                        <div
                          onClick={deleteTrainer}
                          className="bg-white h-12 w-32 rounded-b-2xl flex items-center justify-center gap-2 text-[#FAA200]  "
                        >
                          <HiOutlineTrash className="text-xl"></HiOutlineTrash>
                          <h1>Delete</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            <div>
              <AddTrainer></AddTrainer>
            </div>
          </div>
        </div>
        <Logs></Logs>
      </div>
    </>
  );
};

export default Account;
