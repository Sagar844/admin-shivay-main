import React ,{useState , useEffect}from "react";
import { TokenContext } from "../Context/Context";

const UserTokenProviders = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const local_token = localStorage.getItem("email");
    setToken(local_token);
    console.log("local storage token", local_token);
  }, [token]);
  return (
    <div>
      <TokenContext.Provider value={{ token, setToken }}>
        {children}
      </TokenContext.Provider>
    </div>
  );
};

export default UserTokenProviders;
