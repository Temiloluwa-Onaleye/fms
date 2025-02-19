import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { CardInfo } from "@/types/types";

export const radiologistDashboardInfo: CardInfo[] = [
  {
    id: "1",
    user: "Total Scans",
    count: "11",
    icon: <FaPrescriptionBottleAlt />,
    color: "#0D47A1", // Dark blue
  },
  {
    id: "2",
    user: "New Requests",
    count: "10",
    icon: <FcSalesPerformance />,
    color: "#FF6F00", // Bright orange
  },
  {
    id: "3",
    user: "Awaiting Results",
    count: "2",
    icon: <GiMedicines />,
    color: "#D32F2F", // Deep red
  },
  {
    id: "4",
    user: "Completed Scans",
    count: "33",
    icon: <AiTwotoneMedicineBox />,
    color: "#4CAF50", // Vibrant green
  },
];
