/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import { bedAllotmentData, bedAllotmentHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const BedAllotmentComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Bed Allotment</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          {/* <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
            Add Ward
          </Button> */}
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={bedAllotmentHeader}
          data={bedAllotmentData}
        />
      </Card>
    </section>
  );
};

export default BedAllotmentComponent;
