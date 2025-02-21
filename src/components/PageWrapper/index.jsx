import React from "react";
const Page = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    <Footer/>
    </>
  );
};

export default Page;
