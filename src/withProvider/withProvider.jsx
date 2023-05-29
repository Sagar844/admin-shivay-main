import { useContext } from "react";
import { TokenContext } from "../Context/Context";

const withProvider = (Provider) => (IncominComponets) => (props) => {
  const contextData = useContext(Provider);
  return <IncominComponets {...props} {...contextData} />;
};

export default withProvider;

export const withUserToken = withProvider(TokenContext);
