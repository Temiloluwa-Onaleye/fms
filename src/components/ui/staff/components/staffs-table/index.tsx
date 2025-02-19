/** @format */
"use client";
import { Button } from "@/components/_shared/button";
import { Input } from "@/components/_shared/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_shared/table";
import { StaffsTableDataType, StaffsTableType } from "@/types/types";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const headerKeyMap: { [key: string]: keyof StaffsTableDataType } = {
  Image: "image",
  Name: "name",
  Description: "description",
  Action: "action",

  "First name": "firstName",
  "Last Name": "lastName",
  Address: "address",
  "Birth Date": "birthDate",
  "Full Name": "fullName",
  Role: "role",
  "User Type": "userType",
  Department: "department",
  Email: "email",
  City: "city",
  LGA: "lga",
  State: "state",
  "S/No": "serialNo",
  "Rc Number": "rcNumber",
  Phone: "phone",
  Group: "group",
  Options: "options",
  "#": "id",
  "Scheduled For": "scheduledFor",
  Operation: "operation",
  Indication: "indication",
  Anaesthesia: "anaesthesia",
  Patient: "patient",
  Age: "age",
  Gender: "gender",
  Ward: "ward",
  "Bed Number": "bedNumber",
  "Ward Id": "wardId",
  "Ward Name": "wardName",
  Consultant: "consultant",
  "House Officer": "houseOfficer",
  Resident: "resident",
  "Operation Location": "operationLocation",
  Schedule: "schedule",
  "Invoice Number": "invoiceNumber",
  Title: "title",
  "Creation Date": "creationDate",
  "Due Date": "dueDate",
  "Vat Percentage": "vatPercentage",
  "Discount Amount": "discountAmount",
  Status: "status",
  "Allotment Time": "allotmentTime",
  "Discharge Time": "dischargeTime",
  "Blood Group": "bloodGroup",
  "Last Donation Date": "lastDonationDate",
  "Medicine Category": "medicineCategory",
  Price: "price",
  "Manufacturing Company": "manufacturingCompany",
  Doctor: "doctor",
  Date: "date",
  "Date Of Entry": "dateOfEntry",
  Remark: "remark",
  Test: "test",
  Laboratorian: "laboratorian",
  "Test Requested": "testRequested",
  Item: "item",
  "Invoice Balance": "invoiceBalance",
  "Refund Amount": "refundAmount",
  "Created By": "createdBy",
  "Refund Approved By": "refundApprovedBy",
  "Patient Id": "patientId",
  Quantity: "quantity",
  "Total Price": "totalPrice",
  Clinic: "clinic",
  "Medicine Name": "medicineName",
  "Expiry Date": "expiryDate",
  "Date Entered": "dateEntered",
  "Declared By": "declaredBy",
  "Cost Price": "costPrice",
  "Selling Price": "sellingPrice",
  "Total Quantity": "totalQuantity",
  "Sold Quantity": "soldQuantity",
  "Transferred Quantity": "transferredQuantity",
  "Expired Quantity": "expiredQuantity",
  "Remaining Stock": "remainingStock",
  "Issued Quantity": "issuedQuantity",
  "Transfer Date": "transferDate",
  "Transferred By": "transferredBy",
  "Time Issued": "timeIssued",
  "Issued By": "issuedBy",
  "Billable Category": "billableCategory",
  "From Doctor": "fromDoctor",
  "Invoice Status": "invoiceStatus",
  "Invoice No": "invoiceNo",
  "No of Test": "noOfTest",
  "Test Status": "testStatus",
  Amount: "amount",
  "Invoice Total": "invoiceTotal",
  "Received By": "receivedBy",
  "Item Name": "itemName",
  "Payment Received By": "paymentReceivedBy",
  Telemedicine: "telemedicine",
  ID: "employeeId",
  "Invoice Amount": "invoiceAmount",
  "Discount Approved By": "discountApprovedBy",

  Account: "account",
  Summary: "summary",
};

interface StaffsCustomTableProps extends StaffsTableType {
  onActionClick?: (row: StaffsTableDataType) => void;
}

const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-green-500 text-white";
    case "unpaid":
      return "bg-red-500  text-white";
    case "pending":
      return "bg-yellow-500/50 text-black";
    default:
      return "bg-gray-300/50 text-black";
  }
};

const StaffsCustomTable = ({
  headers,
  data,
  onActionClick,
}: StaffsCustomTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="relative w-[25%]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 ">
            <BiSearch />
          </span>
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4  border border-gray-300 w-full rounded"
          />
        </div>
      </div>

      <Table className="border rounded-2xl ">
        <TableHeader className="">
          <TableRow className="bg-[#EAEAEA] ">
            {headers.map((header) => (
              <TableHead
                key={header}
                className="text-xs font-medium hover:bg-none text-gray-500 "
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {filteredData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header) => (
                <TableCell key={header} className="font-medium ">
                  {header === "Image" ? (
                    <img
                      src={row[headerKeyMap[header]] as string}
                      alt={row["firstName"] as string}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : header === "Action" || header === "Options" ? (
                    <section>
                      <Button
                        className="rounded-md h-8 text-xs"
                        variant={"secondary"}
                        onClick={() => onActionClick && onActionClick(row)}
                      >
                        {row[headerKeyMap[header]]}
                      </Button>
                    </section>
                  ) : header === "Status" ? (
                    <span
                      className={`px-2.5 w-[60px] inline-block text-center py-1 text-xs rounded-md ${getStatusStyles(
                        row[headerKeyMap[header]] as string
                      )}`}
                    >
                      {row[headerKeyMap[header]]}
                    </span>
                  ) : (
                    row[headerKeyMap[header]]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StaffsCustomTable;
