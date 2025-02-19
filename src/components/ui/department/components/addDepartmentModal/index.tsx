/** @format */
"use client";
import { Button } from "@/components/_shared/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shared/dialog";
import React from "react";

const AddDepartmentModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="rounded-sm h-12 text-sm " variant={"secondary"}>
          Add Department
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddDepartmentModal;
