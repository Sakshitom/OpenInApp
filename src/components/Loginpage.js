import React from "react";
import logowhite from "../assets/LoginpageIcons/Ellipse 111.svg";
import discord from "../assets/LoginpageIcons/discord.svg";
import github from "../assets/LoginpageIcons/github.svg";
import linkedin from "../assets/LoginpageIcons/linkedin.svg";
import twitter from "../assets/LoginpageIcons/twitter.svg";
import vector from "../assets/LoginpageIcons/Vector.svg";
import google from "../assets/LoginpageIcons/google-icon.svg";
import apple from "../assets/LoginpageIcons/apple.svg";
import Logo2 from "../assets/LoginpageIcons/Subtract2.svg";
import discord2 from "../assets/LoginpageIcons/discord2.svg";
import github2 from "../assets/LoginpageIcons/github2.svg";
import linkedin2 from "../assets/LoginpageIcons/linkedin2.svg";
import twitter2 from "../assets/LoginpageIcons/twitter2.svg";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className="w-full h-screen  bg-gray-200">
      <div className="h-screen  bg-gray-200 flex-shrink-0 flex flex-row gap-6">
        {/* left side vala part */}
        {/* mobile vala part */}
        <div className="md:hidden w-full bg-gray-200">
          <div className="bg-[#605BFF] flex flex-row p-4">
            <img src={Logo2} alt="Logo2" />
            <div className="p-2 text-white font-Nunito text-xl">Base</div>
          </div>
          {/* sign vala mobile ka  */}
          <div className="p-2">
            <div className="font-bold font-Montserrat text-[24px] px-2 mt-4">
              Sign In
            </div>
            <div className="px-2 text-[12px]">Sign in to your account</div>
            <div className="flex flex-row justify-between gap-6 px-2 py-2">
              <div className="mt-[15px] flex items-center px-5 gap-3 justify-center bg-white rounded h-[32px]">
                <img src={google} alt="google" />
                <div className="text-[12px] font-Lato text-[#858585] ">
                  Sign in with Google
                </div>
              </div>
              <div className="mt-[15px] flex flex-row px-5 items-center gap-3 justify-center bg-white rounded  h-[32px]">
                <img src={apple} alt="apple" />
                <div className="text-[12px] font-Lato text-[#858585] ">
                  Sign in with apple
                </div>
              </div>
            </div>
            {/* email address vala part mobile ka */}
            <div className=" flex flex-col mt-5 px-2 p-2 w-full rounded">
              <div className="bg-white w-full rounded p-3 flex flex-col">
                <div className="py-2 px-3 w-full text-[14px]">
                  Email address
                </div>
                <input
                  type="text"
                  className="p-2 w-full text-slate-600 px-3 bg-gray-200 text-[12px] rounded"
                  placeholder="Enter your Email ID"
                />
                <div className=" mx-3 py-2 text-[14px]">Password</div>
                <input
                  type="text"
                  className="p-2 text-slate-600 px-3 w-full bg-gray-200 text-[12px] rounded"
                  placeholder="Enter your Password"
                />
                <div className=" mx-3 py-4 text-[#346BD4] text-[14px]">
                  Forgot password?
                </div>
                <div className="py-2">
                  <Link to="/uploads">
                    <button className="bg-[#605BFF] text-white justify-center px-3 p-2 w-full h-[45px] rounded text-bold">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="text-[#858585] font-Lato">
                  Don’t have an account?
                </div>
                <div className="text-[#346BD4] font-Lato p-1">
                  Register here
                </div>
              </div>
              <div className="flex flex-row  gap-6 justify-center">
                <img src={github2} alt="github" />
                <img src={twitter2} alt="twitter" />
                <img src={linkedin2} alt="linkedin" />
                <img src={discord2} alt="discord" />
              </div>
            </div>
          </div>
        </div>
        {/* desktop vala part */}
        <div className=" hidden md:flex flex-col h-screen justify-between w-[700px] bg-[#605BFF] ">
          <div className="p-10">
            <img src={logowhite} alt="logowhite" />
          </div>
          <div className="flex flex-col items-center justify-center  text-white text-6xl font-montserrat font-bold">
            BASE
          </div>
          <div className="flex flex-row  py-10 gap-6 justify-center">
            <img src={github} alt="github" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={discord} alt="discord" />
          </div>
        </div>
        {/* desktop vala */}
        <div className="hidden md:flex flex-col mt-[150px] mx-[100px] items-start justify-start">
          <div className="font-bold font-montserrat text-4xl">Sign In</div>
          <div className="font-semibold font-Lato py-4">
            Sign in to your account
          </div>
          <div className="flex flex-row gap-6 flex-shrink-0">
            <div className="mt-[20px] flex flex-row items-center gap-4 justify-center bg-white rounded w-[200px] h-[32px]">
              <img src={google} alt="google" />
              <div className="text-[12px] font-Lato text-[#858585] ">
                Sign in with Google
              </div>
            </div>
            <div className="mt-[20px] flex flex-row items-center gap-4 justify-center bg-white rounded w-[200px] h-[32px]">
              <img src={apple} alt="apple" />
              <div className="text-[12px] font-Lato text-[#858585] ">
                Sign in with apple
              </div>
            </div>
          </div>
          {/* email address vala part */}
          <div className=" flex flex-col flex-shrink-0 mt-5 rounded">
            <div className="bg-white rounded p-3 ">
              <div className="py-4 mx-6">Email address</div>
              <input
                type="text"
                className="p-2 text-slate-600 mx-6 bg-gray-200 font-[16px] rounded"
                style={{ width: "350px" }}
                placeholder="Enter your Email ID"
              />
              <div className=" mx-6 py-4">Password</div>
              <input
                type="text"
                className="p-2 text-slate-600 mx-6 bg-gray-200 font-[16px] rounded"
                style={{ width: "350px" }}
                placeholder="Enter your Password"
              />
              <div className=" mx-6 py-4 text-[#346BD4]">Forgot password?</div>
              <div className="py-2">
                <Link to="/uploads">
                  <button className="bg-[#605BFF] text-white justify-center px-3 p-2 w-full h-[45px] rounded text-bold">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-1 p-2">
              <div className="text-[#858585] font-Lato">
                Don’t have an account?
              </div>
              <div className="text-[#346BD4] font-Lato">Register here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
