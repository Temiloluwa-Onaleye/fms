/** @format */

import { navigationOptions } from "@/_shared/utils/side-bar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/components/_shared/drawer";
import { Logo } from "@/components/logo";
import { X, Link } from "lucide-react";
import React from "react";

const SideDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (val: boolean) => void;
}) => {
  return (
    <Drawer
      open={isDrawerOpen}
      onOpenChange={setIsDrawerOpen}
      direction="right"
    >
      <DrawerContent className="bg-white h-full">
        <DrawerHeader className="flex justify-between items-center">
          <Logo width={155} height={55} />
          <DrawerClose asChild>
            <X onClick={() => setIsDrawerOpen(false)} size={18} />
          </DrawerClose>
        </DrawerHeader>
        <nav className="">
          <ul className="space-y-4 p-4">
            {navigationOptions.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-lg text-[#7C8287] hover:text-primary"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.icon} {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
