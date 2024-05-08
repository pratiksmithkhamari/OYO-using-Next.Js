"use client";

import React, { useEffect } from "react";
import NavTwo from "./NavTwo";
import { PiHandbagSimple } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import NavbarThree from "./NavbarThree";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const navigate = useRouter();
  // check if window is not = to undefined so it have the token or cookie value

  let auth;
    useEffect(()=>{
      auth = Cookies.get("user");
      navigate.push("/");
    },[])

  //handle logout and clear cookies
  const handleLogout = () => {
    Cookies.remove("user");
    navigate.push("/login");
  };

  return (
    <>
      <div className="flex items-center h-20 justify-between border-b-2">
        <div className="ml-14">
          <img
            src="/logo.png"
            alt="logo"
            height={110}
            width={110}
            className=""
          />
        </div>

        {/* block components */}
        <div className="flex gap-1 h-full mr-10">
          <NavTwo
            title="Become a member"
            details="additional 10% off"
            logo={<PiHandbagSimple />}
          />
          <NavTwo
            title="OYO for business"
            details="trusted by 5000 corporates"
            logo={<PiHandbagSimple />}
          />
          <NavTwo
            title="List of property"
            details="start earning in 30 mins"
            logo={<BsBuildings />}
          />
          <NavTwo
            title="0123-123-1233"
            details="call us to book now"
            logo={<IoCallOutline />}
          />
        </div>

        <div className="flex gap-3 items-center">
          <TfiWorld className="text-[1.5rem]" />{" "}
          <h2 className="capitalize font-semibold">english</h2>
        </div>

        {/* login/signup */}
        {auth ? (
          <div className="flex items-center mr-11 gap-2">
            <FaCircleUser className="text-2xl" />
            <h2 className="font-semibold capitalize cursor-pointer" onClick={handleLogout}>
              Log Out
            </h2>
          </div>
        ) : (
          <div className="flex items-center mr-11 gap-2">
            <FaCircleUser className="text-2xl" />
            <Link href={'/login'}>
              <h2 className="font-semibold capitalize">Signin/Signup</h2>
            </Link>
          </div>
        )}
      </div>
      {/* cities components */}
      <div></div>
      {/* banner one  */}
      <div></div>
    </>
  );
};

export default Navbar;
