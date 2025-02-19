/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import {
  radiologyScanResultsData,
  radiologyScanResultsHeader,
} from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const RadiologistScanResultsComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Radiology Scan Results</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          {/* <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
            Add Patient
          </Button> */}
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={radiologyScanResultsHeader}
          data={radiologyScanResultsData}
        />
      </Card>
    </section>
  );
};

export default RadiologistScanResultsComponent;
