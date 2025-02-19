/** @format */

import React from "react";
import { StaffsCustomTable } from "../staff/components";
import { managePayrollHeader, managePayrollData } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";

const ManagePayrollComponent = () => {
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Payroll List</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
            Create Payroll
          </Button>
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={managePayrollHeader}
          data={managePayrollData}
        />
      </Card>
    </section>
  );
};

export default ManagePayrollComponent;
