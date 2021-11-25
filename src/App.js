import React from "react";
import HomePage from "./components/home/HomePage";
import VisitingUser from "./api/visiting-users";

function App() {
  React.useEffect(() => {
    VisitingUser.postIpAddress();
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
