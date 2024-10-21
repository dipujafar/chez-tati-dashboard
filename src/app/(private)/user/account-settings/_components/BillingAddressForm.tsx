"use client";
import { Button } from "@/components/ui/button";
import CountryStateCitySelector from "@/components/ui/CountryStateCitySelector";
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
import { useGetProfileDataQuery } from "@/redux/api/profileApi";
import { countries } from "@/utils/countries";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {}

const BillingAddressForm = () => {
  const { data: userData } = useGetProfileDataQuery(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data)
  };

  // // Set react hook form default values
  // useEffect(() => {
  //   setValue("fname", user?.name?.firstName);
  //   setValue("lname", user?.name?.lastName);
  //   setValue("phoneNumber", user?.phoneNumber);
  //   setValue("email", user?.email);
  //   setValue("gender", user?.gender);
  //   setValue("area", user?.address?.area);
  //   setValue("house", user?.address?.house);

  //   // country, state and city default value are set inside <CountryStateCitySelector/>
  // }, [user?.name]);

  return (
    <div className="dashboard-card" id="address">
      <h1 className="px-7 py-5 text-2xl font-medium">Billing Address</h1>
      <hr />
      <div className="px-7 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="relative grid w-full items-center gap-1.5">
              <Label
                htmlFor="address"
                className="mb-1 block font-semibold text-primary-black"
              >
                Address :
              </Label>

              <CountryStateCitySelector
                control={control}
                userAddress={{
                  country: userData?.data?.country,
                  state: userData?.data?.state,
                  city: userData?.data?.city,
                }}
                register={register}
                setValue={setValue}
              />
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
