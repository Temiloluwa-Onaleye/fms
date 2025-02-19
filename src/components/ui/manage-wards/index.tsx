/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { StaffsCustomTable } from "../staff/components";
import { wardData, wardHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shared/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/_shared/form";
import { Label } from "@/components/_shared/label";
import { Input } from "@/components/_shared/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  wardName: z.string().min(2).max(50),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" }),
});

const ManageWardComponent = () => {
  const [isActionDialogOpen, setActionDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wardName: "",
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
        wardName: selectedRow.wardName || "",
        description: selectedRow.description || "",
      });
    }
  }, [selectedRow, reset]);
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Manage Wards</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Add Ward
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>7thCare Demo Hospital</DialogTitle>
              </DialogHeader>
              <h2>Create Ward</h2>
              <div>
                {" "}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3 w-full pb-4">
                      <FormField
                        control={form.control}
                        name="wardName"
                        render={({ field }) => (
                          <FormItem className="space-y-1  mb-2 w-full">
                            <Label>Ward Name</Label>
                            <FormControl>
                              <Input
                                placeholder="Enter ward name"
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
                                placeholder="Enter ward description"
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
          headers={wardHeader}
          data={wardData}
          onActionClick={handleActionClick}
        />
      </Card>

      {/* Action Dialog */}
      <Dialog open={isActionDialogOpen} onOpenChange={setActionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>7thCare Demo Hospital</DialogTitle>
          </DialogHeader>
          <h2>Edit Ward</h2>
          <div>
            {" "}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-full pb-4">
                  <FormField
                    control={form.control}
                    name="wardName"
                    render={({ field }) => (
                      <FormItem className="space-y-1  mb-2 w-full">
                        <Label>Ward Name</Label>
                        <FormControl>
                          <Input
                            placeholder="Enter ward name"
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
                            placeholder="Enter ward description"
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

export default ManageWardComponent;
