/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import { surgeryQueueData, surgeryQueueHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const SurgeryQueueComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Waiting Surgeries</h1>

      <div className="my-4 flex flex-row justify-end flex-wrap shrink-0 gap-3 "></div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={surgeryQueueHeader}
          data={surgeryQueueData}
        />
      </Card>
    </section>
  );
};

export default SurgeryQueueComponent;
