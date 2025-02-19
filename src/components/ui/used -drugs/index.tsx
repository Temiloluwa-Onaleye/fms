/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import { usedDrugsData, usedDrugsHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const UsedDrugsComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Used Drugs</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          {/* <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
            Add Patient
          </Button> */}
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable headers={usedDrugsHeader} data={usedDrugsData} />
      </Card>
    </section>
  );
};

export default UsedDrugsComponent;
