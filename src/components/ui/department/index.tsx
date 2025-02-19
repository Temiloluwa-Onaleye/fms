/** @format */
"use client";

import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shared/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/_shared/form";
import { Input } from "@/components/_shared/input";
import { StaffsCustomTable } from "../staff/components";
import { departmentData, departmentHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";

import { Label } from "@/components/_shared/label";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" }),
});

const DepartmentComponent = () => {
  const [isActionDialogOpen, setActionDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { reset } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleActionClick = (row: any) => {
    setSelectedRow(row);
    setActionDialogOpen(true);
  };

  useEffect(() => {
    if (selectedRow) {
      reset({
        name: selectedRow.name || "",
        description: selectedRow.description || "",
      });
    }
  }, [selectedRow, reset]);

  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Department</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Add Department
              </Button>
            </DialogTrigger>
            <DialogContent className="p-6 rounded-lg bg-white shadow-lg max-w-lg w-full mx-auto">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-semibold text-gray-800">
                  7thCare Demo Hospital
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Fill out the details below to manage the department
                  effectively.
                </DialogDescription>
              </DialogHeader>

              <h2 className="text-lg font-medium text-gray-700 mb-3">
                Create Department
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <Label className="font-medium text-gray-600">
                          Department Name
                        </Label>
                        <FormControl>
                          <Input
                            placeholder="Enter department name"
                            className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <Label className="font-medium text-gray-600">
                          Description
                        </Label>
                        <FormControl>
                          <Input
                            placeholder="Enter department description"
                            className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="h-12 w-full font-medium text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={departmentHeader}
          data={departmentData}
          onActionClick={handleActionClick}
        />
      </Card>
      {/* Action Dialog */}
      <Dialog open={isActionDialogOpen} onOpenChange={setActionDialogOpen}>
        <DialogContent>
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold text-gray-800">
              7thCare Demo Hospital
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Fill out the details below to manage the department effectively.
            </DialogDescription>
          </DialogHeader>

          <h2 className="text-lg font-medium text-gray-700 mb-3">
            Edit Department
          </h2>
          <div>
            {" "}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-full pb-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1  mb-2 w-full">
                        <Label className="font-medium text-gray-600">
                          Department Name
                        </Label>
                        <FormControl>
                          <Input
                            placeholder="Enter department name"
                            className="h-12 rounded-lg w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="space-y-1   w-full">
                        <Label className="font-medium text-gray-600">
                          Description
                        </Label>
                        <FormControl>
                          <Input
                            placeholder="Enter department description"
                            className="h-12 rounded-lg w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
          <Button
            type="submit"
            variant="secondary"
            className="h-12 w-full font-bold text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DepartmentComponent;
