import React from "react";
import Logo from "../assets/SubtractMobile.svg";
import { IoClose } from "react-icons/io5";
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
import { GiHamburgerMenu } from "react-icons/gi";
import BellIcon from "../assets/BellIcon.svg";
import Profile from "../assets/ProfilePhoto.png";
import { RxHamburgerMenu } from "react-icons/rx";

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

const MobileNav = ({ open, setOpen }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      {!open && (
        <div className="flex justify-between py-[27px] h-[80px] px-[20px] ">
          <div className="flex items-center space-x-[16px]">
            <button onClick={() => setOpen(!open)}>
              <RxHamburgerMenu size={25} />
            </button>
            <div className="flex space-x-[11px]">
              <img src={Logo} alt="logo" />
              <div className="text-slate-950 text-xl font-semibold">Base</div>
            </div>
          </div>
          <div className="flex items-center space-x-[27px]">
            <img src={BellIcon} alt="bell"></img>
            <img
              src={Profile}
              alt=" description"
              class="rounded-full h-9 w-9 object-cover"
            />
          </div>
        </div>
      )}
      {open && (
        <div className="w-full fixed inset-0 z-50 bg-white h-screen">
          <div className="text-black flex justify-between pt-[28px] px-[21px]">
            <div className="flex space-x-[11px]">
              <img src={Logo} alt="/" />
              <div className="text-slate-950 text-xl font-semibold">Base</div>
            </div>
            <button onClick={handleClose}>
              <IoClose size={20} style={{ color: "#999CA0" }} />
            </button>
          </div>
          <div className="flex flex-col space-y-[38px] pt-[52px] text-zinc-400 text-base font-semibold capitalize">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-[14px] pl-[33px]   py-2 cursor-pointer ${
                  activeItem === index
                    ? "text-indigo-500 font-bold bg-gradient-to-r from-indigo-100 to-white to-20%"
                    : ""
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
      )}
    </>
  );
};

export default MobileNav;
