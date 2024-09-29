"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import profile from "@/assets/images/profileImage.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/utils/countries";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const AccountSettings = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="space-y-7">
      {/* user personal information */}
      <div className="dashboard-card">
        <h1 className="px-7 py-5 text-2xl font-medium">Account Settings</h1>
        <hr />
        {/* user information  */}
        <div className="px-7 py-5">
          <form>
            <div className="flex flex-col-reverse gap-5 lg:flex-row">
              <div className="flex-1">
                {/* first name */}
                <div className="mb-2 space-y-1">
                  <Label> First name</Label>
                  <Input defaultValue={"Dianne"}></Input>
                </div>
                {/* last name */}
                <div className="mb-2 space-y-1">
                  <Label> Last Name</Label>
                  <Input defaultValue={"Russell"}></Input>
                </div>
                {/* user email */}
                <div className="mb-2 space-y-1">
                  <Label> Email</Label>
                  <Input defaultValue={"dianne.russell@gmail.com"}></Input>
                </div>
                {/* user phone number */}
                <div className="mb-2 space-y-1">
                  <Label> Phone Number</Label>
                  <Input defaultValue={"(603) 555-0123"}></Input>
                </div>
                <Button
                  type="submit"
                  className="mt-5 rounded-full bg-primary-color px-10"
                >
                  Save Changes
                </Button>
              </div>

              {/* profile image */}
              <div className="flex flex-1 flex-col items-center justify-center gap-y-5">
                <Image
                  src={profile}
                  alt="profile Image"
                  width={950}
                  height={700}
                  className="max-h-64 max-w-64"
                ></Image>

                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-2 border-primary-color text-primary-color"
                >
                  Chose Image
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Billing Address */}
      <div className="dashboard-card">
        <h1 className="px-7 py-5 text-2xl font-medium">Billing Address</h1>
        <hr />
        <div className="px-7 py-5">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col justify-between gap-4 lg:flex-row">
                <div className="flex flex-1 flex-col space-y-1.5">
                  <Label>First name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <Label>Last name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <Label>Company Name (optional)</Label>
                  <Input id="companyName" placeholder="Company name" />
                </div>
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

      {/* ____________ change password form _____________________ */}

      <div className="dashboard-card">
        <h1 className="px-7 py-5 text-2xl font-medium">Change Password</h1>
        <hr />
        <div className="px-7 py-5">
          <form className="space-y-5">
            {/* Current password */}
            <div className="relative flex flex-1 flex-col space-y-1.5">
              <Label>Current Password</Label>
              <Input
                type={showOldPassword ? "text" : "password"}
                id="currentPassword"
                placeholder="Current Password"
              />
              <div
                className="absolute right-3 top-1/3 transform cursor-pointer"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <EyeOff color="#1A1A1A" />
                ) : (
                  <Eye color="#1A1A1A" />
                )}
              </div>
            </div>

            {/* new and confirm password */}
            <div className="flex flex-col gap-5 lg:flex-row">
              {/* new password */}
              <div className="relative flex flex-1 flex-col space-y-1.5">
                <Label>New Password</Label>
                <Input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  placeholder="New Password"
                />
                <div
                  className="absolute right-3 top-1/3 transform cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>

              {/* confirm Password  */}
              <div className="relative flex flex-1 flex-col space-y-1.5">
                <Label>Confirm Password</Label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="confirm Password"
                />
                <div
                  className="absolute right-3 top-1/3 transform cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>
            </div>

            {/* submit button */}
            <Button className="mt-7 rounded-full bg-primary-color px-10">
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
