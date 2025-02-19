import { FaFileInvoiceDollar } from "react-icons/fa";
import { CardInfo } from "@/types/types";

export const accountsDashboardInfo: CardInfo[] = [
  {
    id: "1",
    user: "Prescription Invoices",
    count: "62",
    icon: <FaFileInvoiceDollar />,

    color: "#0D47A1", // Dark blue
  },
  {
    id: "2",
    user: "Laboratory Invoices",
    count: "42",
    icon: <FaFileInvoiceDollar />,
    color: "#FF6F00", // Bright orange
  },
  {
    id: "3",
    user: "Radiology Invoices",
    count: "2",
    icon: <FaFileInvoiceDollar />,
    color: "#D32F2F", // Deep red
  },
  {
    id: "4",
    user: "Procedure Invoices",
    count: "22",
    icon: <FaFileInvoiceDollar />,
    color: "#4CAF50", // Vibrant green
  },
  {
    id: "5",
    user: "Billable Invoices",
    count: "10",
    icon: <FaFileInvoiceDollar />,
    color: "#0D47A1", // Dark blue
  },
];
