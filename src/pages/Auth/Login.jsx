import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const adminEmail = "admin@email.com";
const adminPass = 123456;

const Login = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pin, setPin] = useState(0);
  const [load, setLoad] = useState(false);

  const adminLogin = () => {
    if (email == "" || pin == 0) {
      setLoad(true);

      setTimeout(() => {
        toast.error("All Field Are Mandatory !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setLoad(false);
      }, 2000);
    } else {
      setLoad(true);

      if (email == adminEmail && pin == adminPass) {
        localStorage.setItem("email", JSON.stringify(email));

        toast.success("Login Successfully !", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setLoad(false);

        navigate("/");
        refreshPage();
      } else {
        setTimeout(() => {
          setLoad(false);
          toast.error("Email And Passward incorrect !", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }, 1000);
      }
    }
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

      {/* mob view */}

      <div className="bgCatmob lg:hidden  ">
        <div className="flex flex-col items-center justify-center justify-items-center  ">
          <img className="w-36" src="/src/assets/image_3.png" />
          <img className="-mt-2 w-64" src="/src/assets/image_4.png" />
        </div>
        <h1 className="text-black text-center text-3xl font-semibold -mt-6 pb-10">
          Welcome!
        </h1>
        <form onSubmit={adminLogin}>
          <div className=" flex flex-col gap-4 items-center">
            <input
              autoComplete="on"
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] h-[50px] rounded-xl pl-4 text-gray-700"
              placeholder="Admin User Name / Email*"
            ></input>
            <input
              autoComplete="on"
              type="number"
              
              required
              onChange={(e) => setPin(e.target.value)}
              className="w-[350px] h-[50px] rounded-xl pl-4 text-gray-700"
              placeholder="Passward*"
            ></input>
          </div>
          <div className="flex flex-row justify-between mt-5 ">
            {/* <Link to="/SignUp">
            <button className="ml-5 bg-[#283143] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300">
              Sign Up
            </button>
          </Link> */}

            {load == false ? (
              <button
                type="submit"
                className="mr-5  bg-[#FAA200] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300"
              >
                Login
              </button>
            ) : (
              <button
                type="submit"
                className="mr-5  bg-[#FAA200] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:scale-110  duration-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-7"
                    version="1.1"
                    id="L9"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 0 0"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#fff"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                  <span> Wait</span>
                </div>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* mob view end */}

      {/* destop view */}

      <div className="bgCatdes hidden sm:flex justify-center ">
        <div className="flex justify-center items-center">
          <div className="">
            <img
              className="w-[463px] mt-[56px] rounded-l-3xl "
              src="https://cdn.discordapp.com/attachments/1078905801017659432/1091975362608627732/image.png"
            />
          </div>
          <div className="bg-gray-100  w-[450px] h-[500px] mt-14 rounded-r-3xl -ml-20 ">
            <div className="flex flex-col items-start ml-6">
              <img
                className="mt-10 w-40 "
                src="https://cdn.discordapp.com/attachments/1031605156996972574/1089263441568616560/image_3.png"
              />
              <h1 className="text-2xl text-black ml-10">Welcome!</h1>
            </div>
            <div className="flex flex-col gap-5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl mt-12 ml-16 text-black"
                placeholder="Admin User Name / Email*"
              ></input>
              <input
                onChange={(e) => setPin(e.target.value)}
                className="w-[320px] h-[50px] rounded-xl p-4 shadow-2xl ml-16 text-black"
                placeholder="Passward*"
              ></input>
            </div>
            <div className="flex flex-row gap-12 justify-center mt-10">
              {/* <Link to="/SignUp">
                <button className="w-[135px] h-[45px] bg-[#283143] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300">
                  Sign Up
                </button>
              </Link> */}
              {load == false ? (
                <button
                  onClick={adminLogin}
                  className="w-[135px] h-[45px] bg-[#FAA200] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  Log in
                </button>
              ) : (
                <button
                  onClick={adminLogin}
                  className="w-[135px] h-[45px] bg-[#FAA200] text-white rounded-xl hover:-translate-y-1 hover:scale-110  duration-300 "
                >
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-7"
                      version="1.1"
                      id="L9"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enableBackground="new 0 0 0 0"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#fff"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="1s"
                          from="0 50 50"
                          to="360 50 50"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                    <span> Wait</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
