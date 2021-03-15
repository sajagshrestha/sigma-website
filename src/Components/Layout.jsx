//common componets that appear in all pages go here
import React from "react";
import Footer from "./Footer";
import Nav from "./NavBar/Nav";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
