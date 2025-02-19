/** @format */
"use client";

import { NavBarComponent, SideBarComponent } from "@/components/ui";
import SideDrawer from "@/components/ui/side-drawer";
import Link from "next/link";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isTab = useMediaQuery({ query: "(max-width:768px)" });

  const [isOpen, setIsOpen] = useState(!isTab);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex w-full bg-[#F4F6F9] h-screen">
      <div>
        <SideBarComponent setIsOpen={setIsOpen} isOpen={isOpen} isTab={isTab} />
      </div>

      <div
        className={`${
          isOpen ? "ml-[15rem]" : isTab ? "" : "ml-[4rem]"
        } w-full flex flex-col`}
      >
        <NavBarComponent
          isOpen={isOpen}
          openSideBar={() => setIsOpen(!isOpen)}
          openSideBarMenu={() => setIsDrawerOpen(true)}
        />

        <div className="flex-grow px-5 pt-20 bg-white h-full ">{children}</div>

        <footer
          className={`w-full py-4 bg-white fixed bottom-0 right-0 mt-40 shadow-sm border-t border-t-gray-100 flex justify-between items-center px-5 ${
            isTab ? "left-0" : !isOpen ? "left-[4rem]" : "left-[15rem]"
          }`}
        >
          <p className="text-sm text-gray-500">
            {" "}
            © {new Date().getFullYear()} 7thCare Technology. All Rights
            Reserved.
          </p>
          <section
            className={`flex items-center gap-x-4  ${
              isTab ? "pr-0" : !isOpen ? "pr-[4rem]" : "pr-[15rem]"
            } `}
          >
            <Link
              href={"/dashboard"}
              className="text-[13px] hover:underline text-gray-500"
            >
              FAQ
            </Link>
            <Link
              href={"/dashboard"}
              className="text-[13px] hover:underline text-gray-500"
            >
              Talk To Us
            </Link>
          </section>
        </footer>
      </div>
      <SideDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </div>
  );
};

export default DashboardLayout;
