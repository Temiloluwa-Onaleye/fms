/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import { appointmentData, appointmentHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";

const AppointmentComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Appointment</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
            Add Appointment
          </Button>
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable headers={appointmentHeader} data={appointmentData} />
      </Card>
    </section>
  );
};

export default AppointmentComponent;
