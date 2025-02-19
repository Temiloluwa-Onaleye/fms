/** @format */
"use client";
import React from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shared/dialog";
import { Label } from "@/components/_shared/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/_shared/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_shared/select";
import { Input } from "@/components/_shared/input";
import { StaffsCustomTable } from "../staff/components";
import { hmoData, hmoHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";

const formSchema = z.object({
  insuranceName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  email: z.string().min(2, { message: "email must be a valid email address" }),
  hmoRegistrationNumber: z
    .string()
    .min(2, { message: "Hospital number must be at least 2 characters" }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" }),
  companyAddress: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  lga: z.string().min(2, { message: "Lga must be at least 2 characters" }),
  state: z.string().min(2, { message: "You must select a state" }),
});

const ManageFamilyComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      insuranceName: "",
      email: "",
      hmoRegistrationNumber: "",
      phoneNumber: "",
      companyAddress: "",
      city: "",
      lga: "",
      state: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Manage Family Hmo</h1>

      <div className="my-3 flex flex-row justify-end flex-wrap shrink-0 gap-3 ">
        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Add Hmo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>7thCare Demo Hospital</DialogTitle>
              </DialogHeader>
              <h2>Add Hmo</h2>
              <div>
                {" "}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Tabs
                      defaultValue="user_details"
                      className="mx-auto w-full"
                    >
                      {" "}
                      <TabsList className="grid grid-cols-2 w-full mb-6 bg-blue-100 rounded-md">
                        <TabsTrigger
                          value="user_details"
                          className="hover:bg-gray-200 transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-semibold rounded-md"
                        >
                          User Information
                        </TabsTrigger>
                        <TabsTrigger
                          value="address"
                          className="hover:bg-gray-200 transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-semibold rounded-md"
                        >
                          User Address
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="user_details">
                        <div className="flex flex-col gap-3 w-full pb-4">
                          <div className="flex gap-4 ">
                            <FormField
                              control={form.control}
                              name="insuranceName"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    Insurance Name
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter insurance name"
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
                              name="email"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    Email
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter email"
                                      className="h-12 w-full"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="flex gap-4 ">
                            <FormField
                              control={form.control}
                              name="hmoRegistrationNumber"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    Hmo Registration Number
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter hospital number"
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
                              name="phoneNumber"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    Phone Number
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter phone number"
                                      className="h-12 w-full"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="address">
                        <div className="flex flex-col gap-3 w-full pb-4">
                          <div className="flex gap-5 ">
                            <FormField
                              control={form.control}
                              name="companyAddress"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    {" "}
                                    Company Address
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter address"
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
                              name="city"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    City
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter city"
                                      className="h-12 w-full"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="flex gap-5">
                            {" "}
                            <FormField
                              control={form.control}
                              name="lga"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    Local Government Area
                                  </Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter lga"
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
                              name="state"
                              render={({ field }) => (
                                <FormItem className="space-y-1 mb-2 w-full">
                                  <Label className="font-medium text-gray-600">
                                    Select State
                                  </Label>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select State" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="lagos">
                                          Lagos
                                        </SelectItem>
                                        <SelectItem value="abuja">
                                          Abuja
                                        </SelectItem>
                                        <SelectItem value="borno">
                                          Borno
                                        </SelectItem>
                                        <SelectItem value="benue">
                                          Benue
                                        </SelectItem>
                                        <SelectItem value="oyo">Oyo</SelectItem>
                                        <SelectItem value="osun">
                                          Osun
                                        </SelectItem>
                                        <SelectItem value="enugu">
                                          Enugu
                                        </SelectItem>
                                        <SelectItem value="imo">Imo</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          className="w-full py-3 font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
                        >
                          Submit
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable headers={hmoHeader} data={hmoData} />
      </Card>
    </section>
  );
};

export default ManageFamilyComponent;
