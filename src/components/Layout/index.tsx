import React from "react";
import { Link } from "react-router-dom";

import Logo from "assets/logo.svg";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header className="bg-black w-full flex items-center h-20">
        <Link to={"/"} className="lg:w-[1000px] lg:mx-auto mx-4">
          <img width={120} height={50} src={Logo} alt="logo" />
        </Link>
      </header>
      <Navbar />
      <div className="lg:w-[1000px] lg:mx-auto mx-4">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
