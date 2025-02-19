import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMedicines } from "react-icons/gi";
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { CardInfo } from "@/types/types";

export const pharmacistDashboardInfo: CardInfo[] = [
  {
    id: "1",
    user: "Prescriptions",
    count: "66",
    icon: <FaPrescriptionBottleAlt />,
    color: "#0D47A1", // Dark blue
  },
  {
    id: "2",
    user: "Retail",
    count: "233",
    icon: <FcSalesPerformance />,
    color: "#FF6F00", // Bright orange
  },
  {
    id: "3",
    user: "Medicines",
    count: "568",
    icon: <GiMedicines />,
    color: "#4CAF50", // Vibrant green
  },
  {
    id: "4",
    user: "Medicine Category",
    count: "90",
    icon: <AiTwotoneMedicineBox />,
    color: "#D32F2F", // Deep red
  },
];
