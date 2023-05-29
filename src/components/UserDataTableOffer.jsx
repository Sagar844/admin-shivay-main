import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getAllOffers } from "../api/api";

const offersDataTableOffer = () => {
  const [couponName, setCouponName] = useState("");
  const [discount, setDiscount] = useState("");
  const [page, setPage] = useState(1);
  const [offers, setOffers] = useState([
    {
      _id: "",
      couponName: "",
      discount: 0,
      noOfCoupons: 0,
      active: false,
      showAd: false,
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const alloffers = await getAllOffers();
        setOffers(alloffers);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const decrement = () => {
    // Counter state is incremented
    setPage(page - 1);
  };
  const increment = () => {
    // Counter state is incremented
    setPage(page + 1);
  };

  const addCoupon = () => {
    if (couponName == "" || discount == "") {
      alert("please fill the inputs");
    } else {
      axios
        .post("https://shivayshaktibackend.onrender.com/offers", {
          couponName: couponName,
          discount: discount,
        })
        .then(() => {
          console.log("Coupon added successfully");
          getAllOffers();
        });
    }
  };

  const changeShowAd = async (id) => {
    // const response = await axios
    // .patch(`https://shivayshaktibackend.onrender.com/offers/showAd/${id}`,  {
    //     headers: { 'Content-type': 'application/json; charset=UTF-8' }
    // });

    fetch(`https://shivayshaktibackend.onrender.com/offers/showAd/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const changeActive = (id) => {
    axios
      .patch(`https://shivayshaktibackend.onrender.com/offers/active/${id}`)
      .then(async () => {
        console.log("coupon active status changed");
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

      <>
        <div className="mt-16">
          <h1 className="text-2xl ml-6">Offers</h1>
        </div>
        <div className="flex items-center  gap-6 mt-3 ">
          <div>
            {/* <select
              onChange={(e) => setSelect(e.target.value)}
              className=" h-[35px] lg:w-[300px] rounded-2xl shadow-lg inputShadow px-2 w-48 border-[#cdcdcd] border-2 text-gray-400"
              name="category"
              type="select"
            >
              <option>Select Course Name</option>

              {courses.map((item, index) => {
                return <option value={item.name}>{item.name}</option>;
              })}
            </select> */}
          </div>
        </div>
      </>
      <div className="relative overflow-x-auto shadow-md scrollbar-hide mt-6 mb-5 px-2">
        <table className="w-full text-sm text-left text-gray-500  inline">
          <thead className="text-xs text-[#FAA200]  bg-[#283143]  ">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-2">
                Coupon Name
              </th>
              <th scope="col" className="px-20 py-2">
                Coupon ID
              </th>
              <th scope="col" className="px-6 py-2">
                Discount %
              </th>
              {/* <th scope="col" className="px-6 py-2"></th> */}
              <th scope="col" className="px-6 py-2">
                No of Coupons Sold
              </th>
              <th scope="col" className="px-6 py-2">
                Active
              </th>
              <th scope="col" className="px-6 py-2">
                Show Ad
              </th>
              {/* <th scope="col" className="px-6 py-2">
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
              </th> */}
            </tr>
          </thead>
          <tbody>
            {offers.map((item, index) => {
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
                    <p className="w-20">{item.couponName}</p>
                  </td>
                  <td className="px-6 py-2 flex items-center text-center justify-center">
                    <p className="w-20">{item._id} </p>

                    {/* {offersID == item._id && (
                        <button onClick={editPin}>
                          <HiOutlineDocumentCheck className="text-[#3D89BA]  text-2xl"></HiOutlineDocumentCheck>
                        </button>
                      )} */}
                  </td>

                  <td className="px-6 py-2 h-7 text-center ">
                    {/* <input className="w-20 h-7" type="number" /> */}

                    {item.discount}
                  </td>
                  {/* <span
                      className="cursor-pointer hover:text-orange-500"
                      onClick={(e) => {
                        handleCopy(item._id);
                      }}
                    >
                      <HiOutlineClipboardDocument />
                    </span> */}

                  <td className="px-6 py-2">
                    {" "}
                    <p className="w-24 h-7">{item.noOfCoupons}</p>
                  </td>
                  <td className="px-6 py-2 h-7">
                    <input
                      onChange={() => changeActive(item._id)}
                      type="checkbox"
                      defaultChecked={item.active}
                    />
                  </td>

                  <td className="px-6 py-2 h-7">
                    <input
                      onChange={() => changeShowAd(item._id)}
                      type="checkbox"
                      defaultChecked={item.showAd}
                    />
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
            {page} - {offers.length > 6 ? 6 : offers.length} of {offers.length}
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
            disabled={page >= Math.ceil(offers.length / 6)}
            className="border-2 border-[#FAA200] mx-2 p-1 rounded-sm cursor-pointer disabled:border-2 disabled:border-gray-500 disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <HiArrowSmallRight></HiArrowSmallRight>{" "}
          </button>{" "}
        </div>
      </div>

      <h1 className="text-2xl font-medium pl-5">Create New Coupon Code</h1>

      <div className="flex flex-col gap-5 mt-5 pl-5 w-[350px]">
        <div className="flex gap-5 items-center">
          <h1 className="text-[#FAA200] w-32 font-medium">Coupon Name :</h1>
          <input
            onChange={(e) => setCouponName(e.target.value)}
            placeholder="Coupon Name"
            className="p-2 w-44"
          ></input>
        </div>

        <div className="flex gap-5 items-center">
          <h1 className="text-[#FAA200] w-32 font-medium">Discount % :</h1>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Discount %"
            className="p-2 w-44"
          ></input>
        </div>
        {console.log(couponName, discount)}

        <div className=" flex justify-end">
          <button
            onClick={addCoupon}
            className="bg-gray-100 text-[#283143] text-[15px] font-semibold border-1 hover:bg-[#283143] rounded-xl hover:text-white p-2 border-2 border-[#283143]"
          >
            Add New
          </button>
        </div>
      </div>
    </>
  );
};

export default offersDataTableOffer;
