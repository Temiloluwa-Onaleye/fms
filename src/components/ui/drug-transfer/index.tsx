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
import { drugTransferData, drugTransferHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";

import { Label } from "@/components/_shared/label";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" }),
});

const DrugTransferComponent = () => {
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
      <h1 className=" font-semibold text-2xl">Drug Transfer Records</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Transfer Drugs
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>7thCare Demo Hospital</DialogTitle>
              </DialogHeader>
              <h2>Transfer Medicine</h2>
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
                            <Label> Name</Label>
                            <FormControl>
                              <Input
                                placeholder="Enter department name"
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
                    <Button variant="secondary" className=" w-full">
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
          headers={drugTransferHeader}
          data={drugTransferData}
        />
      </Card>
    </section>
  );
};

export default DrugTransferComponent;
