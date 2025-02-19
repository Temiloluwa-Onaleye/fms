/** @format */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/_shared/card";
import React, { useState } from "react";
import { adminDashboardInfo } from "@/_shared/utils/admin-dashboard";
import { pharmacistDashboardInfo } from "@/_shared/utils/pharmacist-dashboard";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { labDashboardInfo } from "@/_shared/utils/lab-dashboard";
import { radiologistDashboardInfo } from "@/_shared/utils/radiologist-dashboard";
import { accountsDashboardInfo } from "@/_shared/utils/account-dashboard";

// Dynamically import the Bar chart component
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

// Dummy data for different roles (replace with actual data)
const doctorDashboardInfo: any[] = [
  // Add doctor-specific dashboard data here
];
const nurseDashboardInfo: any[] = [
  // Add nurse-specific dashboard data here
];

const appointments = [
  {
    title: "Dr. Smith - Routine Check-up",
    description: "Today at 10:00 AM",
  },
  {
    title: "Dr. Johnson - Dental Cleaning",
    description: "Tomorrow at 2:30 PM",
  },
  {
    title: "Dr. Lee - Eye Examination",
    description: "Friday at 11:00 AM",
  },
  {
    title: "Dr. Brown - Follow-up Consultation",
    description: "Next Monday at 9:00 AM",
  },
  {
    title: "Dr. White - Physical Therapy",
    description: "Next Wednesday at 1:00 PM",
  },
];
const inpatients = [
  {
    admission_date: "October 18, 2024",
    name: "John Doe - Cardiac Surgery",
  },
  {
    admission_date: "October 17, 2024",
    name: "Jane Smith - Orthopedic Surgery",
  },
  {
    admission_date: "October 16, 2024",
    name: "Michael Johnson - Neurological Consultation",
  },
  {
    admission_date: "October 15, 2024",
    name: "Emily Brown - General Check-up",
  },
  {
    admission_date: "October 14, 2024",
    name: "William White - Gastroenterology Treatment",
  },
];

const DashboardComponent = () => {
  // State to store the logged-in user's role
  const [userRole, setUserRole] = useState("admin"); // Change this based on the logged-in user

  // Function to get dashboard data based on role
  const getDashboardData = () => {
    switch (userRole) {
      case "admin":
        return adminDashboardInfo;
      case "doctor":
        return doctorDashboardInfo;
      case "nurse":
        return nurseDashboardInfo;
      // Add more cases for other roles
      default:
        return [];
    }
  };

  const dashboardData = getDashboardData();

  const chartData = {
    labels: dashboardData.map((item: { user: any }) => item.user),
    datasets: [
      {
        label: "Hospital Staff",
        data: dashboardData.map((item) => item.count),
        backgroundColor: dashboardData.map((item) => item.color),
        borderColor: dashboardData.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  // Function to render the section based on user role
  const renderRoleBasedContent = () => {
    switch (userRole) {
      case "admin":
        return (
          <div className="flex flex-col gap-5">
            <div className="flex w-full  gap-28">
              <div className="w-[50%] my-auto">
                <Bar data={chartData} />
              </div>
              <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]">
                {dashboardData.map((data) => (
                  <div key={data?.id} className="">
                    <Card className="w-[200px] h-[135px] hover:bg-slate-200">
                      <CardHeader>
                        <CardTitle
                          className="text-center font-bold text-[40px] leading-[40px]"
                          style={{ color: data?.color }}
                        >
                          {data?.count}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center font-bold text-base text-wrap">
                          {data?.user}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full gap-10  pt-10">
              {/* Doctor-specific content here */}
              <div className="w-[50%] my-auto">
                <Card>
                  {" "}
                  <CardHeader>
                    <CardTitle>Appointments</CardTitle>
                    <CardDescription>You have 5 Appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      {appointments.map((appointment, index) => (
                        <div
                          key={index}
                          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {appointment.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {appointment.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className=" flex flex-row flex-wrap shrink-0 gap-3 w-[50%]">
                <Card>
                  {" "}
                  <CardHeader>
                    <CardTitle>Inpatients</CardTitle>
                    <CardDescription>You have 5 Inpatients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr>
                            <th className="border-b-2 px-4 py-3 text-left text-base font-semibold text-gray-700">
                              Admission Date
                            </th>
                            <th className="border-b-2 px-4 py-3 text-left text-base font-semibold text-gray-700">
                              Patient
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {inpatients.map((inpatient, index) => (
                            <tr
                              key={index}
                              className="border-b last:border-b-0 hover:bg-gray-100 transition-colors"
                            >
                              <td className="px-4 py-3 text-sm text-gray-900">
                                {inpatient.admission_date}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-900">
                                {inpatient.name}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex flex-col ">
              {/* Pharmacist content here */}
              <div className="pt-10">
                <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-5">
                  {pharmacistDashboardInfo.map((data) => (
                    <div key={data?.id} className="">
                      <Card
                        className="w-[250px] h-[150px] hover:bg-slate-100 p-2"
                        style={{ borderBottom: `4px solid ${data?.color}` }}
                      >
                        <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
                          <div className="">{data?.icon}</div>
                        </CardHeader>
                        <CardContent className="pl-14">
                          <div>
                            <p className="font-bold text-2xl ">
                              {" "}
                              {data?.count}
                            </p>

                            <p className=" font-bold text-base text-wrap">
                              {data?.user}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
            </div>
            <div className="flex flex-col ">
              {/* Laboratorian content here */}
              <div className="pt-10">
                <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-5">
                  {labDashboardInfo.map((data) => (
                    <div key={data?.id} className="">
                      <Card
                        className="w-[250px] h-[150px] hover:bg-slate-100 p-2"
                        style={{ borderBottom: `4px solid ${data?.color}` }}
                      >
                        <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
                          <div className="">{data?.icon}</div>
                        </CardHeader>
                        <CardContent className="pl-14">
                          <div>
                            <p className="font-bold text-2xl ">
                              {" "}
                              {data?.count}
                            </p>

                            <p className=" font-bold text-base text-wrap">
                              {data?.user}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
            </div>
            <div className="flex flex-col ">
              {/* Radiologist content here */}
              <div className="pt-10">
                <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-5">
                  {radiologistDashboardInfo.map((data) => (
                    <div key={data?.id} className="">
                      <Card
                        className="w-[250px] h-[150px] hover:bg-slate-100 p-2"
                        style={{ borderBottom: `4px solid ${data?.color}` }}
                      >
                        <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
                          <div className="">{data?.icon}</div>
                        </CardHeader>
                        <CardContent className="pl-14">
                          <div>
                            <p className="font-bold text-2xl ">
                              {" "}
                              {data?.count}
                            </p>

                            <p className=" font-bold text-base text-wrap">
                              {data?.user}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
            </div>
            <div className="flex flex-col ">
              {/* Accountant content here */}
              <div className="pt-10">
                <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-4">
                  {accountsDashboardInfo.map((data) => (
                    <div key={data?.id} className="">
                      <Card
                        className="w-[260px] h-[150px] hover:bg-slate-100 p-2"
                        style={{ borderBottom: `4px solid ${data?.color}` }}
                      >
                        <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
                          <div className="">{data?.icon}</div>
                        </CardHeader>
                        <CardContent className="pl-14">
                          <div>
                            <p className="font-bold text-2xl ">
                              {" "}
                              {data?.count}
                            </p>

                            <p className=" font-bold text-base text-wrap">
                              {data?.user}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
            </div>
          </div>
        );

      // case "doctor":
      //   return (
      //     <div className="flex w-full gap-10 pl-7 pt-10">
      //       {/* Doctor-specific content here */}
      //       <div className="w-[50%] my-auto">
      //         <Card>
      //           {" "}
      //           <CardHeader>
      //             <CardTitle>Appointments</CardTitle>
      //             <CardDescription>You have 5 Appointments</CardDescription>
      //           </CardHeader>
      //           <CardContent>
      //             <div>
      //               {appointments.map((appointment, index) => (
      //                 <div
      //                   key={index}
      //                   className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
      //                 >
      //                   <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
      //                   <div className="space-y-1">
      //                     <p className="text-sm font-medium leading-none">
      //                       {appointment.title}
      //                     </p>
      //                     <p className="text-sm text-muted-foreground">
      //                       {appointment.description}
      //                     </p>
      //                   </div>
      //                 </div>
      //               ))}
      //             </div>
      //           </CardContent>
      //         </Card>
      //       </div>
      //       <div className=" flex flex-row flex-wrap shrink-0 gap-3 w-[50%]">
      //         <Card>
      //           {" "}
      //           <CardHeader>
      //             <CardTitle>Inpatients</CardTitle>
      //             <CardDescription>You have 5 Inpatients</CardDescription>
      //           </CardHeader>
      //           <CardContent>
      //             <div className="overflow-x-auto">
      //               <table className="min-w-full table-auto border-collapse">
      //                 <thead>
      //                   <tr>
      //                     <th className="border-b-2 px-4 py-3 text-left text-base font-semibold text-gray-700">
      //                       Admission Date
      //                     </th>
      //                     <th className="border-b-2 px-4 py-3 text-left text-base font-semibold text-gray-700">
      //                       Patient
      //                     </th>
      //                   </tr>
      //                 </thead>
      //                 <tbody>
      //                   {inpatients.map((inpatient, index) => (
      //                     <tr
      //                       key={index}
      //                       className="border-b last:border-b-0 hover:bg-gray-100 transition-colors"
      //                     >
      //                       <td className="px-4 py-3 text-sm text-gray-900">
      //                         {inpatient.admission_date}
      //                       </td>
      //                       <td className="px-4 py-3 text-sm text-gray-900">
      //                         {inpatient.name}
      //                       </td>
      //                     </tr>
      //                   ))}
      //                 </tbody>
      //               </table>
      //             </div>
      //           </CardContent>
      //         </Card>
      //       </div>
      //     </div>
      //   );

      // case "nurse":
      //   return (
      //     <div className="flex w-full gap-28">
      //       {/* Nurse-specific content here */}
      //       <div className="w-[50%] my-auto"></div>
      //       <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
      //     </div>
      //   );

      // case "pharmacist":
      //   return (
      //     <div className="flex flex-col pl-7">
      //       {/* Pharmacist content here */}
      //       <div className="pt-10">
      //         <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-5">
      //           {pharmacistDashboardInfo.map((data) => (
      //             <div key={data?.id} className="">
      //               <Card
      //                 className="w-[250px] h-[150px] hover:bg-slate-100 p-2"
      //                 style={{ borderBottom: `4px solid ${data?.color}` }}
      //               >
      //                 <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
      //                   <div className="">{data?.icon}</div>
      //                 </CardHeader>
      //                 <CardContent className="pl-14">
      //                   <div>
      //                     <p className="font-bold text-2xl "> {data?.count}</p>

      //                     <p className=" font-bold text-base text-wrap">
      //                       {data?.user}
      //                     </p>
      //                   </div>
      //                 </CardContent>
      //               </Card>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //       <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
      //     </div>
      //   );
      // case "laboratorian":
      //   return (
      // <div className="flex flex-col pl-7">
      //   {/* Laboratorian content here */}
      //   <div className="pt-10">
      //     <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-5">
      //       {labDashboardInfo.map((data) => (
      //         <div key={data?.id} className="">
      //           <Card
      //             className="w-[250px] h-[150px] hover:bg-slate-100 p-2"
      //             style={{ borderBottom: `4px solid ${data?.color}` }}
      //           >
      //             <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
      //               <div className="">{data?.icon}</div>
      //             </CardHeader>
      //             <CardContent className="pl-14">
      //               <div>
      //                 <p className="font-bold text-2xl "> {data?.count}</p>

      //                 <p className=" font-bold text-base text-wrap">
      //                   {data?.user}
      //                 </p>
      //               </div>
      //             </CardContent>
      //           </Card>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      //   <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
      // </div>
      // );
      // case "radiologist":
      //   return (
      //     <div className="flex flex-col pl-7">
      //       {/* Radiologist content here */}
      //       <div className="pt-10">
      //         <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-5">
      //           {radiologistDashboardInfo.map((data) => (
      //             <div key={data?.id} className="">
      //               <Card
      //                 className="w-[250px] h-[150px] hover:bg-slate-100 p-2"
      //                 style={{ borderBottom: `4px solid ${data?.color}` }}
      //               >
      //                 <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
      //                   <div className="">{data?.icon}</div>
      //                 </CardHeader>
      //                 <CardContent className="pl-14">
      //                   <div>
      //                     <p className="font-bold text-2xl "> {data?.count}</p>

      //                     <p className=" font-bold text-base text-wrap">
      //                       {data?.user}
      //                     </p>
      //                   </div>
      //                 </CardContent>
      //               </Card>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //       <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
      //     </div>
      //   );
      // case "accountant":
      //   return (
      //     <div className="flex flex-col pl-7">
      //       {/* Accountant content here */}
      //       <div className="pt-10">
      //         <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-4">
      //           {accountsDashboardInfo.map((data) => (
      //             <div key={data?.id} className="">
      //               <Card
      //                 className="w-[260px] h-[150px] hover:bg-slate-100 p-2"
      //                 style={{ borderBottom: `4px solid ${data?.color}` }}
      //               >
      //                 <CardHeader className="bg-gray-200 w-5 h-5 rounded-full items-center justify-center">
      //                   <div className="">{data?.icon}</div>
      //                 </CardHeader>
      //                 <CardContent className="pl-14">
      //                   <div>
      //                     <p className="font-bold text-2xl "> {data?.count}</p>

      //                     <p className=" font-bold text-base text-wrap">
      //                       {data?.user}
      //                     </p>
      //                   </div>
      //                 </CardContent>
      //               </Card>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //       <div className="mt-4 flex flex-row flex-wrap shrink-0 gap-3 w-[40%]"></div>
      //     </div>
      //   );

      // Add more cases for other user roles

      default:
        return <div>No data available for this user role</div>;
    }
  };

  return (
    <section className="">
      <h1 className="font-semibold  text-2xl">
        {/* {`${
        userRole.charAt(0).toUpperCase() + userRole.slice(1)
      } Dashboard`} */}
        Dashboard
      </h1>
      {renderRoleBasedContent()}
    </section>
  );
};

export default DashboardComponent;
