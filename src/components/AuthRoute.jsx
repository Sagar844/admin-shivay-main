import { Navigate } from "react-router-dom";
import { withUserToken } from "../withProvider/withProvider";

const AuthRoute = ({ children, token }) => {
  console.log(token);
  if (token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default withUserToken(AuthRoute);
