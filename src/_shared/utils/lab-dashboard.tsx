import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { CardInfo } from "@/types/types";

export const labDashboardInfo: CardInfo[] = [
  {
    id: "1",
    user: "Test Requests",
    count: "42",
    icon: <FaPrescriptionBottleAlt />,
    color: "#0D47A1", // Dark blue
  },
  {
    id: "2",
    user: "New Requests",
    count: "27",
    icon: <FcSalesPerformance />,
    color: "#D32F2F", // Deep red
  },
  {
    id: "3",
    user: "Awaiting Results",
    count: "4",
    icon: <GiMedicines />,
    color: "#FF6F00", // Bright orange
  },
  {
    id: "4",
    user: "Completed Tests",
    count: "10",
    icon: <AiTwotoneMedicineBox />,

    color: "#4CAF50", // Vibrant green
  },
];
