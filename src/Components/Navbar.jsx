import React from "react";
import logoA from "../../images/logo.svg";
import todo from "../../images/icon-todo.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import calendar from "../../images/icon-calendar.svg";
import reminder from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";
import arrowUp from "../../images/icon-arrow-up.svg";
import mobileMenuClose from "../../images/icon-close-menu.svg";
import mobileM from "../../images/icon-menu.svg";
import heroDesktop from "../../images/image-hero-desktop.png";
import heroMobile from "../../images/image-hero-mobile.png";
import databliz from "../../images/client-databiz.svg";
import maker from "../../images/client-maker.svg";
import meet from "../../images/client-meet.svg";
import audiophile from "../../images/client-audiophile.svg";

import { useState } from "react";
const Navbar = () => {
  const menu = [
    {
      name: "Todo List",
      icon: todo,
    },
    {
      name: "Calendar",
      icon: calendar,
    },
    {
      name: "Reminders",
      icon: reminder,
    },
    {
      name: "Planning",
      icon: planning,
    },
  ];
  const comp = ["History", "Our Team", "Blog"];
  const [isDropdowned1, setDropdown1] = useState(false);

  const handleClick = () => {
    setDropdown1((prev) => !prev);
  };

  const [isDropdowned2, setDropdown2] = useState(false);
  const handleClic = () => {
    setDropdown2((prev) => !prev);
  };

  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((p) => !p);
  };

  const [isMobileFeaturesOpen, setMobileFeatures] = useState(false);
  const [isMobileCompanyOpen, setMobileCompany] = useState(false);
  const handleMobileFeatures = () => {
    setMobileFeatures((p) => !p);
  };
  const handleMobileCompany = () => {
    setMobileCompany((e) => !e);
  };
  return (
    <div className="font-poppins">
      <div className="flex justify-between items-center h-[10vh]">
        <div className="flex justify-center items-center gap-x-10 lg:gap-x-20 sm:pl-10 pl-4 ">
          <img className="pt-2" src={logoA} alt="Logo" />
          <ul className="hidden sm:flex sm:gap-5 items-center text-[color:var(--gray)] font-medium text-sm md:gap-11  ">
            <li onClick={handleClick} className="group cursor-pointer">
              Features
              <img
                className="inline pl-3 items-center "
                src={isDropdowned1 ? arrowUp : arrowDown}
                alt="arrowDown"
              />
              {isDropdowned1 && (
                <div className="group absolute  left-[7.5rem] pt-5 mt-5 rounded-lg p-5 bg-[color:var(--white)] shadow-[0_5px_40px_1px_rgba(0,0,0,0.2)]  w-[10rem] h-[11rem] ">
                  <ul>
                    {menu.map((item, index) => {
                      return (
                        <li
                          className={
                            index != 0
                              ? "flex items-center pt-4"
                              : "flex items-center"
                          }
                        >
                          <img src={item.icon} alt={item.name} />
                          <p className="pl-4">{item.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
            <li onClick={handleClic} className="group cursor-pointer">
              Company
              <img
                className="inline pl-3 items-center"
                src={isDropdowned2 ? arrowUp : arrowDown}
                alt="arrowDown"
              />
              {isDropdowned2 && (
                <div className="group absolute  lg:left-[21rem] md:left[19rem] pt-5 mt-5 rounded-lg  bg-[color:var(--white)] shadow-[0_5px_40px_1px_rgba(0,0,0,0.2)]  w-[7rem] h-[8rem]  ">
                  <ul>
                    {comp.map((item2, index) => {
                      return (
                        <li>
                          <p className={index != 0 ? "pl-4 pt-2" : "pl-4"}>
                            {item2}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className="pr-10 sm:flex gap-10 hidden ">
          <button>Login</button>
          <button className="pl-5 pr-5 pt-2 pb-2 border-[1px] rounded-[0.80rem]">
            Register
          </button>
        </div>
        {/* Modile Menu */}
      </div>
      <div
        className={
          isMobileMenuOpen
            ? "bg-[#2c2b2b] bg-opacity-70 absolute right-0 top-0 sm:hidden w-full h-screen"
            : "absolute right-0 top-0 sm:hidden w-full h-screen overflow-hidden"
        }
      >
        <img
          className="absolute top-7 right-2 z-20"
          src={isMobileMenuOpen ? mobileMenuClose : mobileM}
          alt="mobileMenu"
          onClick={handleMobileMenu}
        />
        <div
          className={
            isMobileMenuOpen
              ? "absolute right-0 w-[65%]  bg-white  h-screen flex justify-center items-center"
              : "hidden"
          }
        >
          <ul
            className={
              isMobileMenuOpen
                ? " flex text-[color:var(--gray)] font-medium flex-col  h-screen w-[80%] pt-14 gap-y-1 "
                : "hidden"
            }
          >
            <li className="cursor-pointer" onClick={handleMobileFeatures}>
              Features
              <img
                className="inline pl-3"
                src={isMobileFeaturesOpen ? arrowUp : arrowDown}
              />
              {isMobileFeaturesOpen && (
                <ul className="h-[10rem] w-full">
                  {menu.map((item, index) => {
                    return (
                      <li key={index} className="flex pt-3 pl-5">
                        <img
                          className="pr-5 h-5"
                          src={item.icon}
                          alt={item.name}
                        />
                        <p>{item.name}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="cursor-pointer pt-4" onClick={handleMobileCompany}>
              Company
              <img
                className="inline pl-3"
                src={isMobileCompanyOpen ? arrowUp : arrowDown}
              />
              {isMobileCompanyOpen && (
                <ul className="h-28 w-full pl-5 pt-1">
                  {comp.map((item, index) => {
                    return (
                      <li key={index} className="pt-3">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="cursor-pointer pt-4">Carrers</li>
            <li className="cursor-pointer pt-4">About</li>

            <button>Login</button>
            <button className="pl-5 pr-5 pt-1 pb-2 border-[1px] rounded-[0.80rem]">
              Register
            </button>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <main>
        <div className="h-full overflow-y-hidden sm:pt-20">
          <img
            src={heroMobile}
            alt="manwithLaptop"
            className=" h-auto w-full sm:hidden mt-4 "
            sizes="(min-width:640px)"
          />
          <img
            src={heroDesktop}
            alt="heroDesktop"
            className="hidden sm:block object-contain lg:h-[40rem] absolute lg:top-24 lg:right-[8rem] md:right-[2rem] md:h-[18rem] md:top-[10rem]"
          />
          {/* Text Section */}
          <div className="pl-4 pr-4 flex flex-col justify-center items-center sm:w-[30rem] sm:h-[30rem] sm:ml-20 sm:block">
            <h1 className="pt-10 text-4xl sm:text-6xl tracking-wide font-bold">
              Make <span className="flex">remote work</span>
            </h1>
            <p className="text-center text-xl font-semibold text-[color:var(--gray)] pt-5 sm:text-left sm:pt-10">
              Get your team in sync, no matter your location. Streamline
              processes. create team rituals, and watch productivity soar.
            </p>
            <button className="py-4 sm:mt-12 px-10 text-white text-xl font-bold bg-black rounded-2xl mt-10">
              Learn more
            </button>
          </div>
          {/* Footer Images Section */}
          <div className="flex pl-3 gap-4 mt-12 sm:ml-20 sm:gap-8">
            <img src={databliz} alt="databliz" className="h-5" />
            <img src={audiophile} alt="audiophile" className="h-5" />
            <img src={meet} alt="meet" className="h-5" />
            <img src={maker} alt="maker" className="h-5" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Navbar;
