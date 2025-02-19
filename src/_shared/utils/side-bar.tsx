/** @format */

import {
  IoCreateSharp,
  IoDocumentTextOutline,
  IoShieldHalf,
} from "react-icons/io5";
import {
  FaHospitalUser,
  FaListOl,
  FaRegHospital,
  FaUsers,
} from "react-icons/fa";
import {
  MdLocalPharmacy,
  MdOutlineBloodtype,
  MdOutlineCalendarMonth,
  MdWorkHistory,
} from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { PiBuildingThin } from "react-icons/pi";
import { BiLogOutCircle, BiSolidDonateBlood } from "react-icons/bi";
import { FaBed } from "react-icons/fa6";
import {
  TbRadioactiveFilled,
  TbReport,
  TbReportAnalytics,
  TbReportMedical,
} from "react-icons/tb";

import { SlChemistry } from "react-icons/sl";
import { GiMedicines } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { NavLink } from "@/types/types";

export const navigationOptions: NavLink[] = [
  {
    id: "1",
    title: "Dashboard",
    href: `/dashboard`,
    icon: <AiFillDashboard />,
  },
  {
    id: "2",
    title: "Department",
    href: `/department`,
    icon: <FaUsers />,
  },
  {
    id: "3",
    title: "Insurance",
    href: `/`,
    icon: <IoShieldHalf />,
    children: [
      {
        id: "3-1",
        title: "Manage Hmo",
        href: `/manage-hmo`,
        icon: <IoShieldHalf />,
      },
      {
        id: "3-2",
        title: "Manage Family",
        href: `/manage-family`,
        icon: <IoShieldHalf />,
      },
      {
        id: "3-3",
        title: "Manage Company",
        href: `/manage-company`,
        icon: <IoShieldHalf />,
      },
    ],
  },
  {
    id: "4",
    title: "Theatre",
    href: `/theatre`,
    icon: <CgAddR />,
    children: [
      {
        id: "4-1",
        title: "Operations List",
        href: `/operations-list`,
        icon: <CgAddR />,
      },
      {
        id: "4-2",
        title: "Surgery Queue",
        href: `/surgery-queue`,
        icon: <CgAddR />,
      },
    ],
  },

  {
    id: "5",
    title: "Referrer",
    href: `/referrer`,
    icon: <CgAddR />,
    children: [
      {
        id: "5-1",
        title: "Direct Requests",
        href: `/direct-requests`,
        icon: <CgAddR />,
      },
      {
        id: "5-2",
        title: "Departmental Referrals",
        href: `/departmental-referrals`,
        icon: <CgAddR />,
      },
      {
        id: "5-3",
        title: "Hospital Referrals",
        href: `/hospital-referrals`,
        icon: <CgAddR />,
      },
    ],
  },
  {
    id: "6",
    title: "Billing",
    href: `/`,
    icon: <CgAddR />,
    children: [
      {
        id: "6-1",
        title: "Invoices",
        href: `/invoices`,
        icon: <CgAddR />,
      },
      {
        id: "6-2",
        title: "Collate Invoice",
        href: `/collate-invoice`,
        icon: <CgAddR />,
      },
      {
        id: "6-3",
        title: "Collated Invoices",
        href: `/collated-invoices`,
        icon: <CgAddR />,
      },
    ],
  },
  {
    id: "7",
    title: "Staff",
    href: `/staff`,
    icon: <FaUsers />,
    // children: [
    //   {
    //     id: "13",
    //     title: "Doctors",
    //     href: `/doctors`,
    //     icon: <FaUserDoctor />,
    //   },
    //   {
    //     id: "14",
    //     title: "Nurses",
    //     href: `/nurses`,
    //     icon: <FaUserNurse />,
    //   },
    //   {
    //     id: "15",
    //     title: "Pharmacist",
    //     href: `/pharmacists`,
    //     icon: <MdLocalPharmacy />,
    //   },
    //   {
    //     id: "16",
    //     title: "Laboratorian",
    //     href: `/laboratorians`,
    //     icon: <SlChemistry />,
    //   },
    //   {
    //     id: "17",
    //     title: "Radiologist",
    //     href: `/radiologists`,
    //     icon: <TbRadioactiveFilled />,
    //   },
    //   {
    //     id: "18",
    //     title: "Medical Personnel",
    //     href: `/medical-personnels`,
    //     icon: <IoMdPerson />,
    //   },
    //   {
    //     id: "19",
    //     title: "Accountants",
    //     href: `/accountants`,
    //     icon: <FaMoneyBillAlt />,
    //   },
    // ],
  },
  {
    id: "8",
    title: "Pharmacy",
    href: `/pharmacy`,
    icon: <MdLocalPharmacy />,
    children: [
      {
        id: "8-1",
        title: "Medicine Categories",
        href: `/medicine-categories`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-2",
        title: "Manage Medicines",
        href: `/manage-medicines`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-3",
        title: "Medicine Sale",
        href: `/medicine-sale`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-4",
        title: "Expired Medicines",
        href: `/expired-medicines`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-5",
        title: "Drug Transfer",
        href: `/drug-transfer`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-6",
        title: "Prescriptions",
        href: `/prescriptions`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-7",
        title: "Nurse Inventory",
        href: `/nurse-inventory`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-8",
        title: "Emergency Inventory",
        href: `/emergency-inventory`,
        icon: <MdLocalPharmacy />,
      },
      {
        id: "8-9",
        title: "Used Drugs",
        href: `/used-drugs`,
        icon: <MdLocalPharmacy />,
      },
    ],
  },

  {
    id: "13",
    title: "Retailing",
    href: `/retail`,
    icon: <MdLocalPharmacy />,
    children: [
      {
        id: "13-1",
        title: "Retail",
        href: `/retail`,
        icon: <SlChemistry />,
      },
      {
        id: "13-2",
        title: "Retail Requests",
        href: `/retail-requests`,
        icon: <SlChemistry />,
      },
      {
        id: "13-3",
        title: "Retail Results",
        href: `/retail-results`,
        icon: <SlChemistry />,
      },
    ],
  },
  {
    id: "14",
    title: "Laboratory",
    href: `/laboratory`,
    icon: <SlChemistry />,
    children: [
      {
        id: "14-1",
        title: "Blood Bank",
        href: `/blood-bank`,
        icon: <SlChemistry />,
      },
      {
        id: "14-2",
        title: "Laboratory Test Results",
        href: `/laboratory-test-results`,
        icon: <SlChemistry />,
      },
      {
        id: "14-3",
        title: "Laboratory Test Requests",
        href: `/laboratory-test-requests`,
        icon: <SlChemistry />,
      },
      {
        id: "14-4",
        title: "Blood Donor",
        href: `/blood-donor`,
        icon: <SlChemistry />,
      },
      {
        id: "14-5",
        title: "Blood Dispatched",
        href: `/blood-dispatched`,
        icon: <SlChemistry />,
      },
      {
        id: "14-6",
        title: "Manage Refunds",
        href: `/manage-refunds`,
        icon: <SlChemistry />,
      },
      {
        id: "14-7",
        title: "Tests",
        href: `/tests`,
        icon: <SlChemistry />,
      },
      {
        id: "14-8",
        title: "Tests Category",
        href: `/tests-category`,
        icon: <SlChemistry />,
      },
    ],
  },
  {
    id: "15",
    title: "Radiology & Scans",
    href: `/radiology`,
    icon: <TbRadioactiveFilled />,
    children: [
      {
        id: "15-1",
        title: " Radiology Scan Requests",
        href: `/radiology-scan-request`,
        icon: <TbRadioactiveFilled />,
      },
      {
        id: "15-2",
        title: "Radiology Scan Results",
        href: `/radiology-scan-results`,
        icon: <TbRadioactiveFilled />,
      },
      {
        id: "15-3",
        title: "Scans",
        href: `/scans`,
        icon: <TbRadioactiveFilled />,
      },
      {
        id: "15-4",
        title: "Scans Category",
        href: `/scans-category`,
        icon: <TbRadioactiveFilled />,
      },
    ],
  },

  {
    id: "18",
    title: "Billables",
    href: `/billables`,
    icon: <FaUsers />,
    children: [
      {
        id: "18-1",
        title: "Billable Items",
        href: `/billable-items`,
        icon: <FaUsers />,
      },
      {
        id: "18-2",
        title: " Billable Categories",
        href: `/billable-categories`,
        icon: <FaUsers />,
      },
      {
        id: "18-3",
        title: "Manage Billable Items",
        href: `/manage-billable-items`,
        icon: <FaUsers />,
      },
      {
        id: "18-4",
        title: "Billable Invoices",
        href: `/billable-invoices`,
        icon: <FaUsers />,
      },
    ],
  },
  {
    id: "19",
    title: "Wallet",
    href: `/`,
    icon: <FaUsers />,
    children: [
      {
        id: "19-1",
        title: "Family / Company Wallet",
        href: `/family-wallet`,
        icon: <FaUsers />,
      },
      {
        id: "19-2",
        title: "Patient Wallet",
        href: `/patient-wallet`,
        icon: <FaUsers />,
      },
      {
        id: "19-3",
        title: "Hospital Staff Wallet",
        href: `/hospital-staff-wallet`,
        icon: <FaUsers />,
      },
    ],
  },
  {
    id: "20",
    title: "Revenue",
    href: `/revenue`,
    icon: <FaUsers />,
  },
  {
    id: "21",
    title: "Refunds",
    href: `/refunds`,
    icon: <FaUsers />,
    children: [
      {
        id: "21-1",
        title: "Initiate Refund",
        href: `/initiate-refunds`,
        icon: <FaUsers />,
      },
      {
        id: "21-2",
        title: "Manage Refunds",
        href: `/manage-refunds`,
        icon: <FaUsers />,
      },
    ],
  },
  {
    id: "22",
    title: "Discounts",
    href: `/discounts`,
    icon: <FaUsers />,
    children: [
      {
        id: "22-1",
        title: "Initiate Discount",
        href: `/initiate-discount`,
        icon: <FaUsers />,
      },
      {
        id: "22-2",
        title: "Manage Discounts",
        href: `/manage-discounts`,
        icon: <FaUsers />,
      },
    ],
  },

  {
    id: "25",
    title: "Patients",
    href: `/patients`,
    icon: <FaUsers />,
    children: [
      {
        id: "25-1",
        title: "All Patients",
        href: `/patients`,
        icon: <FaUsers />,
      },
      {
        id: "25-2",
        title: " Inpatients",
        href: `/inpatients`,
        icon: <FaUsers />,
      },
      {
        id: "25-3",
        title: "Outpatients",
        href: `/outpatients`,
        icon: <FaUsers />,
      },
    ],
  },
  {
    id: "26",
    title: "Appointments",
    href: `/appointments`,
    icon: <FaUsers />,
    children: [
      {
        id: "26-1",
        title: "Appointments",
        href: `/appointments`,
        icon: <FaUsers />,
      },
      {
        id: "26-2",
        title: "Appointment Request",
        href: `/appointment-request`,
        icon: <FaUsers />,
      },
      {
        id: "26-3",
        title: "Telemedicine",
        href: `/telemedicine`,
        icon: <FaUsers />,
      },
    ],
  },
  {
    id: "27",
    title: "Wards",
    href: ``,
    icon: <PiBuildingThin />,
    children: [
      {
        id: "27-1",
        title: "Manage Wards",
        href: `/manage-wards`,
        icon: <FaHospitalUser />,
      },
      {
        id: "27-2",
        title: "Manage Beds",
        href: `/manage-beds`,
        icon: <FaBed />,
      },
    ],
  },
  {
    id: "28",
    title: "Monitor Hospital",
    href: ``,
    icon: <FaRegHospital />,
    children: [
      {
        id: "28-1",
        title: "Payment History",
        href: `/payment-history`,
        icon: <MdWorkHistory />,
      },
      {
        id: "28-2",
        title: "Bed Allotment",
        href: `/bed-allotment`,
        icon: <FaBed />,
      },
      {
        id: "28-3",
        title: "Blood Bank",
        href: `/blood-bank`,
        icon: <MdOutlineBloodtype />,
      },
      {
        id: "28-4",
        title: "Blood Donor",
        href: `/blood-donor`,
        icon: <BiSolidDonateBlood />,
      },
      {
        id: "28-5",
        title: "Medicine",
        href: `/medicine`,
        icon: <GiMedicines />,
      },
      {
        id: "28-6",
        title: "Operation Report",
        href: `/operation-report`,
        icon: <TbReportMedical />,
      },

      {
        id: "28-7",
        title: "Birth Report",
        href: `/birth-report`,
        icon: <TbReport />,
      },
      {
        id: "28-8",
        title: "Death Report",
        href: `/death-report`,
        icon: <TbReportAnalytics />,
      },
    ],
  },
  {
    id: "29",
    title: "Reports",
    href: ``,
    icon: <TbReportAnalytics />,
    children: [
      {
        id: "29-1",
        title: "Financial Reports",
        href: `/financial-reports`,
        icon: <TbReportAnalytics />,
      },
      {
        id: "29-2",
        title: "Medical Reports",
        href: `/Medical-reports`,
        icon: <TbReportAnalytics />,
      },
      {
        id: "29-3",
        title: "Theatre Reports",
        href: `/theatre-reports`,
        icon: <TbReportAnalytics />,
      },
      {
        id: "29-4",
        title: "Referrals",
        href: `/referrals`,
        icon: <TbReportAnalytics />,
      },
      {
        id: "29-5",
        title: "Departmental Reports",
        href: `/departmental-reports`,
        icon: <TbReportAnalytics />,
      },
    ],
  },

  {
    id: "31",
    title: "Personnel Management",
    href: ``,
    icon: <FaUsers />,
    children: [
      {
        id: "31-1",
        title: "Manage Users (Doctors,Nurses, etc.)",
        href: `/manage-users`,
        icon: <FaUsers />,
      },
      {
        id: "31-2",
        title: "Manage Roles",
        href: `/manage-roles`,
        icon: <FaUsers />,
      },
      {
        id: "31-4",
        title: "Manage User-type",
        href: `/manage-usertype`,
        icon: <FaUsers />,
      },
      {
        id: "31-3",
        title: "Manage Departments",
        href: `/manage-departments`,
        icon: <FaUsers />,
      },
    ],
  },

  {
    id: "33",
    title: "Ambulance Service",
    href: `/ambulance-service`,
    icon: <FaUsers />,
  },
  {
    id: "34",
    title: "Payroll",
    href: ``,
    icon: <IoDocumentTextOutline />,
    children: [
      {
        id: "34-1",
        title: "Create Payrolls",
        href: `/create-payroll`,
        icon: <IoCreateSharp />,
      },
      {
        id: "34-2",
        title: "Manage Payrolls",
        href: `/manage-payrolls`,
        icon: <FaListOl />,
      },
    ],
  },
  {
    id: "35",
    title: "Message Center",
    href: `/message`,
    icon: <TiMessages />,
    children: [
      {
        id: "35-1",
        title: "Message Inbox",
        href: `/message-inbox`,
        icon: <TiMessages />,
      },
      {
        id: "35-2",
        title: "Notifications",
        href: `/notifications`,
        icon: <TiMessages />,
      },
    ],
  },
  {
    id: "36",
    title: "Noticeboard",
    href: ``,
    icon: <MdOutlineCalendarMonth />,
    children: [
      {
        id: "36-1",
        title: "Announcements",
        href: `/announcements`,
        icon: <MdOutlineCalendarMonth />,
      },
      {
        id: "36-2",
        title: "Notifications",
        href: `/notifications`,
        icon: <MdOutlineCalendarMonth />,
      },
    ],
  },
  {
    id: "37",
    title: "Personal Account",
    href: `/`,
    icon: <FaUsers />,
    children: [
      {
        id: "37-1",
        title: "Profile",
        href: `/profile`,
        icon: <FaUsers />,
      },
      {
        id: "37-2",
        title: "Settings",
        href: `/settings`,
        icon: <BiLogOutCircle />,
      },
      {
        id: "37-3",
        title: "Logout",
        href: `/logout`,
        icon: <BiLogOutCircle />,
      },
    ],
  },
];
