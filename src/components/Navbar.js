import React from "react";
import Logo from "../assets/Subtract.svg";
import DashboardIcon from "../assets/NavbarIcons/Category.svg";
import UploadIcon from "../assets/NavbarIcons/Chart.svg";
import InvoiceIcon from "../assets/NavbarIcons/Ticket.svg";
import ScheduleIcon from "../assets/NavbarIcons/Document.svg";
import CalenderIcon from "../assets/NavbarIcons/Calendar.svg";
import NotificationIcon from "../assets/NavbarIcons/Notification.svg";
import SettingIcon from "../assets/NavbarIcons/Setting.svg";
import { useState } from "react";
import UploadActiveIcon from "../assets/NavbarIcons/ChartActive.svg";
import InvoiceActiveIcon from "../assets/NavbarIcons/TicketActive.svg";
import ScheduleActiveIcon from "../assets/NavbarIcons/DocumentActive.svg";
import CalenderActiveIcon from "../assets/NavbarIcons/CalendarActive.svg";
import NotificationActiveIcon from "../assets/NavbarIcons/NotificationActive.svg";
import SettingActiveIcon from "../assets/NavbarIcons/SettingActive.svg";
import DashboardActiveIcon from "../assets/NavbarIcons/CategoryActive.svg";

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon, activeicon: DashboardActiveIcon },
  { label: "Upload", icon: UploadIcon, activeicon: UploadActiveIcon },
  { label: "Invoice", icon: InvoiceIcon, activeicon: InvoiceActiveIcon },
  { label: "Schedule", icon: ScheduleIcon, activeicon: ScheduleActiveIcon },
  { label: "Calendar", icon: CalenderIcon, activeicon: CalenderActiveIcon },
  {
    label: "Notification",
    icon: NotificationIcon,
    activeicon: NotificationActiveIcon,
  },
  { label: "Setting", icon: SettingIcon, activeicon: SettingActiveIcon },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="">
      {/* mobile */}
      <div className="md:hidden">ye navbar maine abhi nahi banaya hai </div>
      {/* desktop */}
      <div className="w-[218px] h-screen hidden md:block border-black ">
        <div className="flex flex-col  py-[51px]">
          {/* logo div */}
          <div className="flex w-full justify-center items-center pb-[50px]   ">
            <div className="">
              <img src={Logo} alt="logo" />
            </div>
            <div className="text-slate-950 text-2xl font-semibold pl-[15px]">
              Base
            </div>
          </div>
          {/* navbar elements div */}
          <div className="flex flex-col space-y-[38px] text-zinc-400 text-base font-semibold capitalize pl-[31px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-[14px] cursor-pointer ${
                  activeItem === index ? "text-indigo-500 font-bold" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div>
                  <img
                    src={activeItem === index ? item.activeicon : item.icon}
                    alt="icon"
                    className={activeItem === index ? "" : ""}
                  ></img>
                </div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
