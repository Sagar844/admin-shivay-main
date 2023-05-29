import React from "react";

const HomeCart = ({item}) => {

  return (
    <>
      <div className="px- py-5 ml-3  ">
        <div className="bg-white rounded-3xl   w-[250px] h-[350px] shadow-xl">
          <div className="flex items-center justify-center">
          
            <img
              className="rounded-b-none rounded-t-2xl h-[180px] w-full "
              src={item.image}
            />
          </div>
          <div className="px-4 py-1 ">
            <h1 className="text-[#FAA200] font-bold text-[13px]">
              {item.name}
            </h1>

            {item.batchSize ? (
              <h1 className="text-[13px] mb-3">Group Session</h1>
            ) : (
              <h1 className="text-[13px] mb-3">One on One</h1>
            )}

            {item.batchSize ? (
              <span></span>
            ) : (
              <h1 className="text-[10px] font-semibold">
                Sessions :{item.liveClasses}
              </h1>
            )}

            {item.batchSize ? (
              <p className="text-[10px] font-semibold">
                Batch Size: : {item.batchSize}
              </p>
            ) : (
              <span></span>
            )}

            <h1 className="text-[10px] font-semibold">
              {" "}
              Duration:
              {item.duration}
            </h1>

            {item.batchSize ? (
              <p className="text-[10px] font-semibold">
                Start Date: :{item.startDate}
              </p>
            ) : (
              <span></span>
            )}
            {item.batchSize ? (
              <span></span>
            ) : (
              <h1 className="text-[10px] font-semibold">
                Price :{item.priceI}
              </h1>
            )}
          </div>
          <div className="flex justify-center gap-7 ">
            <a
              href={`https://shivaay-shakti-official.vercel.app/category/group-session/${item._id}`}
              target="_blank"
            >
              <button className="bg-gray-100 text-[#283143] text-[12px] font-semibold border-1 hover:bg-[#283143] rounded-2xl hover:text-white p-2 border-2 border-[#283143]">
                View Details
              </button>
            </a>

          </div>
        </div>
        <a href="https://zoom.us/signin#/login" target="_blank">
          <button className="bg-[#283143] text-white text-[12px] font-semibold border-1 w-20 mt-4 ml-5 hover:bg-gray-100 rounded-2xl hover:text-[#283143] p-2">
            Join
          </button>
        </a>
        <a href="https://zoom.us/signin#/login" target="_blank">
          {" "}
          <h1 className="px-2 py-2 shadow-2xl bg-white text-[#3D89BA] rounded-2xl mt-4 text-[12px] hover:text-blue-800">
            https://zoom.us/j/5551112222
          </h1>
        </a>
      </div>
    </>
  );
};

export default HomeCart;
