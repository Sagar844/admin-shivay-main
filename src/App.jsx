import AllPages from "./AllRoutes/AllPages";
import UserTokenProviders from "./Providers/UserTokenProviders";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <UserTokenProviders>
          <AllPages />
        </UserTokenProviders>
      </div>
    </>
  );
}

export default App;
