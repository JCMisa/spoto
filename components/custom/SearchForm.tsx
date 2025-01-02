import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const FormSchema = z.object({
  arrivingon: z.string({
    required_error: "Date is required",
  }),
  //   gpscoords: z.object({
  //     lat: z.number(),
  //     lng: z.number(),
  //   }),
  arrivingtime: z.string({
    required_error: "Time is required",
  }),
  leavingtime: z.string({
    required_error: "Time is required",
  }),
});

const SearchForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      arrivingon: "",
      arrivingtime: "",
      leavingtime: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof FormSchema>) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      <div className="flex flex-col gap-y-1.5 lg:w-full">
        <Label htmlFor="parkingat">Address</Label>
        <Input
          id="parkingat"
          placeholder="Address"
          className="border border-primary-500"
        />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="items-end w-full"
        >
          <FormField
            control={form.control}
            name="arrivingon"
            render={({ field }) => (
              <FormItem className="lg:w-full flex flex-col">
                <FormLabel>Arriving on</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="date"
                    className="border border-primary-500"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex flex-row items-center justify-center gap-4 mt-5 w-full">
            <FormField
              control={form.control}
              name="arrivingtime"
              render={({ field }) => (
                <FormItem className="lg:w-full flex flex-col w-full">
                  <FormLabel>Arriving time</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="start"
                      className="border border-primary-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="leavingtime"
              render={({ field }) => (
                <FormItem className="lg:w-full flex flex-col w-full">
                  <FormLabel>Leaving time</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="end"
                      className="border border-primary-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-5 w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;
