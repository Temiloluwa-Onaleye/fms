/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/_shared/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shared/dialog";
import { Input } from "@/components/_shared/input";
import { StaffsCustomTable } from "../staff/components";
import { patientData, patientHeader } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";
import { Label } from "@/components/_shared/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/_shared/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/_shared/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_shared/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/_shared/popover";
import { cn } from "@/_shared";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/_shared/calendar";

const formSchema = z.object({
  patientType: z.string({ message: "You must select a patient type" }),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  middleName: z
    .string()
    .min(2, { message: "Middle name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().min(2, { message: "email must be a valid email address" }),
  hospitalNumber: z
    .string()
    .min(2, { message: "Hospital number must be at least 2 characters" }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" }),
  gender: z.string().min(2, { message: "You must select a gender" }),
  bloodGroup: z.string().min(2, { message: "You must select a blood group" }),
  dob: z.date({ required_error: "A date of birth is required" }),
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  lga: z.string().min(2, { message: "Lga must be at least 2 characters" }),
  state: z.string().min(2, { message: "You must select a state" }),
});

const PatientComponent = () => {
  const [creatorFilter, setCreatorFilter] = useState("");
  const [dateRange, setDateRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientType: "",
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      hospitalNumber: "",
      phoneNumber: "",
      gender: "",
      bloodGroup: "",
      // dob: "",
      address: "",
      city: "",
      lga: "",
      state: "",
    },
  });

  // // Filtered patient data based on filters
  // const filteredData = patientData.filter((patient) => {
  //   const matchesCreator = creatorFilter
  //     ? patient?.createdBy === creatorFilter
  //     : true;
  //   const matchesDateRange =
  //     dateRange.from && dateRange.to
  //       ? new Date(patient.createdAt) >= dateRange.from &&
  //         new Date(patient.createdAt) <= dateRange.to
  //       : true;

  //   return matchesCreator && matchesDateRange;
  // });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="">
      <h1 className=" font-semibold text-2xl">Patients</h1>

      <div className="my-3 flex flex-row justify-between flex-wrap shrink-0 gap-3 ">
        {/* Creator Filter */}
        <div className=" flex gap-5">
          {" "}
          <section>
            <Select onValueChange={setCreatorFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by Creator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="allMedicalPersonnel">
                  All Medical Personnel
                </SelectItem>
                <SelectItem value="temiloluwa">Temiloluwa</SelectItem>
                <SelectItem value="ivor">Ivor</SelectItem>

                <SelectItem value="adewale">Adewale</SelectItem>
                <SelectItem value="stephen">Stephen</SelectItem>
                {/* Add more creators dynamically if available */}
              </SelectContent>
            </Select>
          </section>
          {/* Date Range Filter */}
          <section>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[250px] rounded-md justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from && dateRange.to
                    ? `${format(dateRange.from, "PPP")} - ${format(
                        dateRange.to,
                        "PPP"
                      )}`
                    : "Filter by Date Range"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                {/* <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  initialFocus
                /> */}
              </PopoverContent>
            </Popover>
          </section>
        </div>

        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Add Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>7thCare Demo Hospital</DialogTitle>
              </DialogHeader>
              <h2>Add Patient</h2>
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
                          Patient Information
                        </TabsTrigger>
                        <TabsTrigger
                          value="address"
                          className="hover:bg-gray-200 transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-semibold rounded-md"
                        >
                          Patient Address
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="user_details">
                        <div className="flex flex-col gap-3 w-full pb-4">
                          <FormField
                            control={form.control}
                            name="patientType"
                            render={({ field }) => (
                              <FormItem className="space-y-1  mb-2 w-full">
                                <Label>Patient Type</Label>
                                <FormControl>
                                  <RadioGroup
                                    defaultValue="individual"
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex justify-between"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="individual"
                                        id="individual"
                                      />
                                      <Label htmlFor="individual">
                                        Individual
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="family-company"
                                        id="family-company"
                                      />
                                      <Label htmlFor="family-company">
                                        Family / Company
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="hmo" id="hmo" />
                                      <Label htmlFor="hmo">HMO</Label>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex gap-4 ">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>First Name</Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter first name"
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
                              name="middleName"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>Middle Name</Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter middle name"
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
                              name="lastName"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>Last Name</Label>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter last name"
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
                              name="email"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>Email</Label>
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
                            <FormField
                              control={form.control}
                              name="hospitalNumber"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>Hospital Number</Label>
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
                                  <Label>Phone Number</Label>
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
                          <div className="flex gap-4 ">
                            <FormField
                              control={form.control}
                              name="gender"
                              render={({ field }) => (
                                <FormItem className="space-y-1 mb-2 w-full">
                                  <Label>Select Gender</Label>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Gender" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="male">
                                          Male
                                        </SelectItem>
                                        <SelectItem value="female">
                                          Female
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="bloodGroup"
                              render={({ field }) => (
                                <FormItem className="space-y-1 mb-2 w-full">
                                  <Label>Select Blood Group</Label>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Blood Group" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="A+">A+</SelectItem>
                                        <SelectItem value="A-">A-</SelectItem>
                                        <SelectItem value="B+">B+</SelectItem>
                                        <SelectItem value="B-">B-</SelectItem>
                                        <SelectItem value="AB+">AB+</SelectItem>
                                        <SelectItem value="AB-">AB-</SelectItem>
                                        <SelectItem value="O+">O+</SelectItem>
                                        <SelectItem value="O-">O-</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="dob"
                              render={({ field }) => (
                                <FormItem className="flex flex-col pt-1.5">
                                  <FormLabel>Date of birth</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-[200px] justify-start text-left rounded-md font-normal",
                                            !field.value &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(field.value, "PPP")
                                          ) : (
                                            <span>Pick a date</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                          date > new Date() ||
                                          date < new Date("1900-01-01")
                                        }
                                      />
                                    </PopoverContent>
                                  </Popover>

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
                              name="address"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>Address</Label>
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
                                  <Label>City</Label>
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
                                  <Label>Local Government Area</Label>
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
                                  <Label>Select State</Label>
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
        <StaffsCustomTable headers={patientHeader} data={patientData} />
      </Card>
    </section>
  );
};

export default PatientComponent;
