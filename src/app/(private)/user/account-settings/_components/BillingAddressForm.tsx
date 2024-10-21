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

  const { register, handleSubmit, control, reset, setValue } =
    useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
  };

  return (
    <div className="dashboard-card" id="address">
      <h1 className="px-7 py-5 text-2xl font-medium">Billing Address</h1>
      <hr />
      <div className="px-7 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
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
