/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import { bloodBankData, bloodBankHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";

const BloodBankComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Blood Bank</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          {/* <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
            Add Ward
          </Button> */}
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable headers={bloodBankHeader} data={bloodBankData} />
      </Card>
    </section>
  );
};

export default BloodBankComponent;
