"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/utils/countries";

const BillingAddressForm = () => {
  return (
    <div className="dashboard-card" id="address">
      <h1 className="px-7 py-5 text-2xl font-medium">Billing Address</h1>
      <hr />
      <div className="px-7 py-5">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-1 flex-col space-y-1.5">
              <Label>Name</Label>
              <Input id="firstName" placeholder="Your first name" />
            </div>

            {/*input email */}
            <div className="flex flex-col space-y-1.5">
              <Label>Street Address</Label>
              <Input id="address" placeholder="address" />
            </div>
            {/* address */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              {/* countries   */}
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>Country / Region</Label>
                <Select>
                  <SelectTrigger className="min-w-[220px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="max-h-60 overflow-y-auto">
                      {countries.map((country, idx) => (
                        <SelectItem
                          key={idx}
                          value={country}
                          className="capitalize"
                        >
                          {country}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* States */}
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>States</Label>
                <Select>
                  <SelectTrigger className="min-w-[150px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem> */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Zip Code */}
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>Zip Code</Label>
                <Input id="zipCode" placeholder="Zip Code" />
              </div>
            </div>

            {/* input email and phone */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>Email</Label>
                <Input id="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>Phone</Label>
                <Input id="lastName" placeholder="Phone number" />
              </div>
            </div>
          </div>
          {/* submit button */}
          <Button className="mt-7 rounded-full bg-primary-color px-10">
            Save Change
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddressForm;
