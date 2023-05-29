import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [showLogout, setShowLogout] = React.useState(false);

  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  const LogoutAdmin = () => {
    localStorage.removeItem("email");

    // localStorage.setItem("email", JSON.stringify(email));

    toast.warn("Log Out Successfully !", {
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    console.log("navigation chala");
    navigate("/login");
    refreshPage();
  };

  return (
    <>
      <div
        className="flex flex-col mt-60  ml-10"
        onClick={() => {
          setShowLogout(true);
          // setUserID(item._id);
          // setUserName(item.name);
        }}
      >
        <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
          <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
            <i className="bx bx-log-out"></i>
          </span>
          <span className="text-xl font-medium">Logout</span>
        </button>
      </div>

      {showLogout ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5  rounded-t">
                  <div className="flex text-center items-center">
                    <h3 className="text-2xl font-semibold">
                      Are you sure you want to logout ?
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-orange-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowLogout(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={LogoutAdmin}
                  >
                    Confirm
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

export default Logout;
