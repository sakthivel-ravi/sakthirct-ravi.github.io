import React from "react";
import Header from "../ui/reports-details/Header";

function Landing({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Landing;
