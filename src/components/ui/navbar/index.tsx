/** @format */
"use client";
import ImageSkeleton from "@/components/image-skeleton";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { IoIosNotifications, IoMdMail, IoMdSettings } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const Navbar = ({
  isOpen,
  openSideBar,
  openSideBarMenu,
}: {
  isOpen: boolean;
  openSideBar: () => void;
  openSideBarMenu: () => void;
}) => {
  const [bgColor, setBgColor] = useState<string>("");
  const isTab = useMediaQuery({ query: "(max-width:768px)" });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBgColor("bg-white ");
      } else {
        setBgColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (isTab) {
      openSideBarMenu();
    }
    return openSideBar();
  };

  return (
    <div>
      <div
        className={`bg-secondary-30 z-50 
         h-16  fixed left-0 right-0  flex justify-between items-center   transition-colors duration-300`}
      >
        <section className="flex items-center gap-x-24">
          <Logo />
          <Menu
            className="cursor-pointer text-white"
            size={18}
            onClick={handleClick}
          />
        </section>
        <div className="px-2 flex items-center gap-3">
          <IoMdMail className="text-white cursor-pointer" size={20} />
          <IoIosNotifications className="text-white cursor-pointer" size={20} />
          <ImageSkeleton width={24} height={24} />
          <IoMdSettings
            size={20}
            className="rotate-icon text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
