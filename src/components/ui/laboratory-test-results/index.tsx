/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import {
  laboratoryTestResultsData,
  laboratoryTestResultsHeader,
} from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const LaboratoryTestResultsComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Laboratory Test Results</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section></section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={laboratoryTestResultsHeader}
          data={laboratoryTestResultsData}
        />
      </Card>
    </section>
  );
};

export default LaboratoryTestResultsComponent;
