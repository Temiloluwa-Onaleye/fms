/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import {
  laboratoryTestRequestsData,
  laboratoryTestRequestsHeader,
} from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const LaboratoryTestRequestsComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Laboratory Test Requests</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section></section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={laboratoryTestRequestsHeader}
          data={laboratoryTestRequestsData}
        />
      </Card>
    </section>
  );
};

export default LaboratoryTestRequestsComponent;
