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
  FormMessage,
} from "@/components/_shared/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shared/dialog";
import { StaffsCustomTable } from "../staff/components";
import { staff_headers, staffData } from "@/_shared/data";
import { Card } from "@/components/_shared/card";
import { Button } from "@/components/_shared/button";
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
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/_shared/popover";
// import { cn } from "@/_shared";
// import { CalendarIcon } from "lucide-react";
// import { Calendar } from "@/components/_shared/calendar";
import { Input } from "@/components/_shared/input";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().min(2, { message: "email must be a valid email address" }),

  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" }),
  department: z.string().min(2, { message: "You must select a gender" }),
  role: z.string().min(2, { message: "You must select a blood group" }),

  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  lga: z.string().min(2, { message: "Lga must be at least 2 characters" }),
  state: z.string().min(2, { message: "You must select a state" }),
  password: z
    .string()
    .min(4, { message: "Password must have at least 4 characters" }),
  confirm_password: z
    .string()
    .min(4, { message: "Password must have at least 4 characters" }),
});

const StaffComponent = () => {
  const [isActionDialogOpen, setActionDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [selectedRole, setSelectedRole] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      department: "",
      role: "",
      address: "",
      city: "",
      lga: "",
      state: "",
      password: "",
      confirm_password: "",
    },
  });

  const { reset } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // Get a unique list of roles from staffData for dropdown options
  const uniqueRoles = Array.from(new Set(staffData.map((staff) => staff.role)));

  // Filter staff data based on the selected role
  const filteredData = selectedRole
    ? staffData.filter((staff) => staff.role === selectedRole)
    : staffData;

  const handleActionClick = (row: any) => {
    setSelectedRow(row);
    setActionDialogOpen(true);
  };

  useEffect(() => {
    if (selectedRow) {
      reset({
        firstName: selectedRow.firstName || "",
        lastName: selectedRow.lastName || "",
        email: selectedRow.email || "",
        phoneNumber: selectedRow.phoneNumber || "",
        department: selectedRow.department || "",
        role: selectedRow.role || "",
        address: selectedRow.address || "",
        city: selectedRow.city || "",
      });
    }
  }, [selectedRow, reset]);

  return (
    <section className="">
      <h1 className=" font-semibold text-2xl"> Hospital Staff</h1>

      <div className="my-3 flex flex-row justify-between flex-wrap shrink-0 gap-3">
        <div className="flex items-center">
          <Label htmlFor="roleFilter" className="mr-2 text-sm font-medium">
            Filter by Role:
          </Label>
          <select
            id="roleFilter"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">All Staff</option>
            {uniqueRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <section>
          <Dialog>
            <DialogTrigger>
              <Button
                className="rounded-md h-12 text-sm "
                variant={"secondary"}
              >
                Add Staff
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>7thCare Demo Hospital</DialogTitle>
              </DialogHeader>
              <h2>Add Staff</h2>
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
                          className="hover:bg-gray-200 transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-semibold rounded-md "
                        >
                          Step 1
                        </TabsTrigger>
                        <TabsTrigger
                          value="address"
                          className="hover:bg-gray-200 transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:font-semibold rounded-md"
                        >
                          Step 2
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="user_details">
                        <div className="flex flex-col gap-3 w-full pb-4">
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
                                      type="email"
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
                              name="department"
                              render={({ field }) => (
                                <FormItem className="space-y-1 mb-2 w-full">
                                  <Label>Select Department</Label>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Department" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="general-surgery">
                                          General Surgery
                                        </SelectItem>
                                        <SelectItem value="nursing-services-division">
                                          Nursing Services Division
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
                              name="role"
                              render={({ field }) => (
                                <FormItem className="space-y-1 mb-2 w-full">
                                  <Label>Select Role</Label>
                                  <FormControl>
                                    <Select
                                      onValueChange={field.onChange}
                                      value={field.value}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Role" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="A+"></SelectItem>
                                        <SelectItem value="A-"></SelectItem>
                                      </SelectContent>
                                    </Select>
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
                          <div className="flex gap-5">
                            {" "}
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem className="space-y-1  mb-2 w-full">
                                  <Label>Password</Label>
                                  <FormControl>
                                    <Input
                                      type="password"
                                      placeholder=""
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
                              name="confirm_password"
                              render={({ field }) => (
                                <FormItem className="space-y-1 mb-2 w-full">
                                  <Label>Confirm Password</Label>
                                  <FormControl>
                                    <Input
                                      type="password"
                                      placeholder=""
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
                      <Button variant="secondary" className=" w-full">
                        Submit
                      </Button>
                    </Tabs>
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      <Card className="p-4 rounded-md">
        <StaffsCustomTable
          headers={staff_headers}
          data={filteredData}
          onActionClick={handleActionClick}
        />
      </Card>

      <Dialog open={isActionDialogOpen} onOpenChange={setActionDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>7thCare Demo Hospital</DialogTitle>
          </DialogHeader>
          <h2>Edit Hospital Staff</h2>
          <div>
            {" "}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Tabs defaultValue="user_details" className="mx-auto w-full">
                  {" "}
                  <TabsList className="mx-auto w-full flex gap-14 mt-3 mb-6 active:bg-gray-400">
                    <TabsTrigger
                      value="user_details"
                      className="p-5 border rounded-md "
                    >
                      Step 1
                    </TabsTrigger>
                    <TabsTrigger
                      value="address"
                      className="p-5 border rounded-md"
                    >
                      Step 2
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="user_details">
                    <div className="flex flex-col gap-3 w-full pb-4">
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
                                  type="email"
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
                          name="department"
                          render={({ field }) => (
                            <FormItem className="space-y-1 mb-2 w-full">
                              <Label>Select Department</Label>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Department" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="general-surgery">
                                      General Surgery
                                    </SelectItem>
                                    <SelectItem value="nursing-services-division">
                                      Nursing Services Division
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
                          name="role"
                          render={({ field }) => (
                            <FormItem className="space-y-1 mb-2 w-full">
                              <Label>Select Role</Label>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Role" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="A+"></SelectItem>
                                    <SelectItem value="A-"></SelectItem>
                                  </SelectContent>
                                </Select>
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
                                    <SelectItem value="lagos">Lagos</SelectItem>
                                    <SelectItem value="abuja">Abuja</SelectItem>
                                    <SelectItem value="borno">Borno</SelectItem>
                                    <SelectItem value="benue">Benue</SelectItem>
                                    <SelectItem value="oyo">Oyo</SelectItem>
                                    <SelectItem value="osun">Osun</SelectItem>
                                    <SelectItem value="enugu">Enugu</SelectItem>
                                    <SelectItem value="imo">Imo</SelectItem>
                                  </SelectContent>
                                </Select>
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
                          name="password"
                          render={({ field }) => (
                            <FormItem className="space-y-1  mb-2 w-full">
                              <Label>Password</Label>
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder=""
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
                          name="confirm_password"
                          render={({ field }) => (
                            <FormItem className="space-y-1 mb-2 w-full">
                              <Label>Confirm Password</Label>
                              <FormControl>
                                <Input
                                  type="password"
                                  placeholder=""
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
  );
};

export default StaffComponent;
