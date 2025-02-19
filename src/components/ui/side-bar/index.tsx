/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/_shared/tooltip";
import { Label } from "@/components/_shared/label";
import { navigationOptions } from "@/_shared/utils/side-bar";
import { useMediaQuery } from "react-responsive";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

type Props = {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
  isTab: boolean;
};

const SideBar = ({ isOpen, isTab, setIsOpen }: Props) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathName = usePathname();
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const Sidebar_animation = isTab
    ? {
        open: {
          x: 0,
          width: "15rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "15rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleDropdownToggle = (id: string) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  useEffect(() => {
    if (isTab || isMd) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTab, isMd]);

  return (
    <motion.div
      initial={{ x: isTab ? -250 : 0 }}
      variants={Sidebar_animation}
      animate={isOpen ? "open" : "closed"}
      className="bg-secondary-30 pt-14 flex flex-col justify-between border-r h-full overflow-y-auto  w-60 fixed left-0"
    >
      <ul
        className={`flex flex-col ${
          isOpen ? "" : "px-3 "
        } mt-[30px] gap-3 w-full `}
      >
        {navigationOptions.map((data) => (
          <li key={data.id} className="w-full">
            {/* For parent links with children */}
            {data.children ? (
              <>
                <div
                  className={`flex hover:bg-white hover:text-primary-0 items-center h-[40px] hover:text-secondary-20 ${
                    isOpen
                      ? "justify-start gap-x-3 px-3"
                      : "justify-center rounded"
                  } ${
                    activeTab === data.id
                      ? `bg-[#9B9B9B]/20 border-white text-white ${
                          isOpen ? " border-l-[3px] " : "border-b-[3px]"
                        }`
                      : "text-white"
                  }`}
                  onClick={() => {
                    handleDropdownToggle(data.id);
                    handleTabClick(data.id);
                  }}
                >
                  <div>{data.icon}</div>
                  {isOpen && (
                    <p className="text-[13px] font-medium">{data.title}</p>
                  )}
                  <div className="ml-auto">
                    {openDropdown === data.id ? (
                      <FiChevronDown className="transition-transform duration-300" />
                    ) : (
                      <FiChevronRight className="transition-transform duration-300" />
                    )}
                  </div>
                </div>

                {/* Dropdown for children links */}
                {openDropdown === data.id && (
                  <ul className="ml-6">
                    {data.children.map((child: any) => (
                      <li key={child.id} className="w-full">
                        <Link href={child.href} passHref>
                          <div
                            className={`flex hover:bg-white hover:text-primary-0 items-center h-[40px] hover:text-secondary-20 ${
                              isOpen
                                ? "justify-start gap-x-3 px-3"
                                : "justify-center rounded"
                            } ${
                              activeTab === child.id
                                ? `bg-[#9B9B9B]/20 border-white text-white ${
                                    isOpen
                                      ? " border-l-[3px] "
                                      : "border-b-[3px]"
                                  }`
                                : "text-white"
                            }`}
                            onClick={() => handleTabClick(child.id)}
                          >
                            <div>{child.icon}</div>
                            {isOpen && (
                              <p className="text-[13px] font-medium">
                                {child.title}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={data.href} passHref>
                <div
                  className={`flex hover:bg-white hover:text-primary-0 items-center h-[40px] hover:text-secondary-20 ${
                    isOpen
                      ? "justify-start gap-x-3 px-3"
                      : "justify-center rounded"
                  } ${
                    activeTab === data.id
                      ? `bg-[#9B9B9B]/20 border-white text-white ${
                          isOpen ? " border-l-[3px] " : "border-b-[3px]"
                        }`
                      : "text-white"
                  }`}
                  onClick={() => handleTabClick(data.id)}
                >
                  {isOpen ? (
                    <>
                      <div>{data.icon}</div>
                      <p className="text-[13px] font-medium">{data.title}</p>
                    </>
                  ) : (
                    <>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger>{data.icon}</TooltipTrigger>
                          <TooltipContent>
                            <Label className="font-light text-xs text-black">
                              {data.title}
                            </Label>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </>
                  )}
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SideBar;
