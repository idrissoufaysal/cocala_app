import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const navMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Contact", link: "/" },
    { id: 2, title: "Home", link: "/" },
  ];
  return (
    <div>
      <div className="container text-white bg-orange-500 py-8">
        {/* logo section */}
        <div className="">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="to"
            className="max-w-[100px] invert"
          />
        </div>
        {/* Menu section */}
        {/* icon */}
      </div>
    </div>
  );
}
