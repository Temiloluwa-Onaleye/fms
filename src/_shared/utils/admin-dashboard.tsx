import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { PiBuildingThin } from "react-icons/pi";
import { CardInfo } from "@/types/types";

export const adminDashboardInfo: CardInfo[] = [
  {
    id: "1",
    user: "Doctors",
    count: "9",
    icon: <FaUserDoctor />,
    color: "#0D47A1", // Dark blue
  },
  {
    id: "2",
    user: "Nurses",
    count: "10",
    icon: <FaUserNurse />,
    color: "#1976D2", // Medium blue
  },
  {
    id: "3",
    user: "Pharmacists",
    count: "10",
    icon: <MdLocalPharmacy />,
    color: "#42A5F5", // Light blue
  },
  {
    id: "4",
    user: "Radiologists",
    count: "3",
    icon: <CgAddR />,
    color: "#1565C0", // Medium-dark blue
  },
  {
    id: "6",
    user: "Laboratorians",
    count: "4",
    icon: <FaUsers />,
    color: "#1E88E5", // Slightly lighter blue
  },
  {
    id: "7",
    user: "Accountants",
    count: "6",
    icon: <FaUsers />,
    color: "#2196F3", // Regular blue
  },
  {
    id: "8",
    user: "Medical Personnel",
    count: "10",
    icon: <PiBuildingThin />,
    color: "#64B5F6", // Lighter blue
  },
];
