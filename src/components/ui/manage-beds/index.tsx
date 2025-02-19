/** @format */
"use client";

import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
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
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";
import { Label } from "@/components/_shared/label";

import { bedData, bedHeader } from "@/_shared/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_shared/select";

const formSchema = z.object({
  ward: z.string().min(2).max(50),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" }),
  bedNumber: z.string().min(2).max(50),
});

const ManageBedComponent = () => {
  const [isActionDialogOpen, setActionDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ward: "",
      description: "",
      bedNumber: "",
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
        ward: selectedRow.ward || "",
        description: selectedRow.description || "",
        bedNumber: selectedRow.bedNumber || "",
      });
    }
  }, [selectedRow, reset]);
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Manage Beds</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Add Bed
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>7thCare Demo Hospital</DialogTitle>
              </DialogHeader>
              <h2>Add Bed</h2>
              <div>
                {" "}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3 w-full pb-4">
                      <FormField
                        control={form.control}
                        name="bedNumber"
                        render={({ field }) => (
                          <FormItem className="space-y-1  mb-2 w-full">
                            <Label>Bed Number</Label>
                            <FormControl>
                              <Input
                                placeholder="Enter number of beds"
                                className="h-12 w-full"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="ward"
                        render={({ field }) => (
                          <FormItem className="space-y-1 mb-2 w-full">
                            <Label>Select Ward</Label>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select ward" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ward-1">Ward 1</SelectItem>
                                  <SelectItem value="ward-2">Ward 2</SelectItem>
                                  <SelectItem value="ward-3">Ward 3</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="space-y-1  mb-2 w-full">
                            <Label>Description</Label>
                            <FormControl>
                              <Input
                                placeholder="Enter department description"
                                className="h-12 w-full"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      variant="secondary"
                      className="w-full py-3 font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={bedHeader}
          data={bedData}
          onActionClick={handleActionClick}
        />
      </Card>

      {/* Action Dialog */}
      <Dialog open={isActionDialogOpen} onOpenChange={setActionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>7thCare Demo Hospital</DialogTitle>
          </DialogHeader>
          <h2>Edit Bed</h2>
          <div>
            {" "}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-full pb-4">
                  <FormField
                    control={form.control}
                    name="bedNumber"
                    render={({ field }) => (
                      <FormItem className="space-y-1  mb-2 w-full">
                        <Label>Bed Number</Label>
                        <FormControl>
                          <Input
                            placeholder="Enter number of beds"
                            className="h-12 w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ward"
                    render={({ field }) => (
                      <FormItem className="space-y-1 mb-2 w-full">
                        <Label>Select Ward</Label>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select ward" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ward-1">Ward 1</SelectItem>
                              <SelectItem value="ward-2">Ward 2</SelectItem>
                              <SelectItem value="ward-3">Ward 3</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="space-y-1  mb-2 w-full">
                        <Label>Description</Label>
                        <FormControl>
                          <Input
                            placeholder="Enter department description"
                            className="h-12 w-full"
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
            variant="secondary"
            className="w-full py-3 font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ManageBedComponent;
