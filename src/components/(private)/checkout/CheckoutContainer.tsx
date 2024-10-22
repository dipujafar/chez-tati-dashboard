"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountryStateCitySelector from "@/components/ui/CountryStateCitySelector";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGetProfileDataQuery } from "@/redux/api/profileApi";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Define form input types
interface CheckoutFormInputs {
  name: string;
  email: string;
  phone: string;
  paymentMethod: string;
}

const CheckoutContainer = () => {
  const { data: userData, isLoading: isProfileDataLoading } =
    useGetProfileDataQuery(undefined);
  const router = useRouter();

  const {
    items: cart,
    totalAmount,
    subTotal,
  } = useAppSelector((state) => state.cart);

  // Setup useForm with default values
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<CheckoutFormInputs>({});

  // Form submission handler
  const onSubmit: SubmitHandler<CheckoutFormInputs> = (data) => {
    console.log("Form Data:", data);
  };

  // Set default values
  useEffect(() => {
    console.log(userData);
    setValue("name", userData?.data?.name);
    setValue("email", userData?.data?.email);
    setValue("phone", userData?.data?.phone);
  }, [userData]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-black lg:text-4xl">
        Billing Information
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid grid-cols-1 items-center justify-center gap-7 xl:grid-cols-3"
      >
        {/* form */}
        <div className="col-span-2 justify-start py-5">
          <div>
            <div className="grid w-full items-center gap-4">
              {/* Name input */}
              <div className="flex flex-1 flex-col space-y-1.5">
                <Label>Name</Label>
                <Input
                  id="name"
                  placeholder="Name"
                  {...register("name")}
                  defaultValue={userData?.data?.name}
                />
              </div>

              {/* address */}
              <div className="relative grid w-full items-center gap-1.5">
                <Label
                  htmlFor="address"
                  className="mb-1 block font-semibold text-primary-black"
                >
                  Address :
                </Label>

                {/* <CountryStateCitySelector
                  control={control}
                  userAddress={{
                    country: userData?.data?.country,
                    state: userData?.data?.states,
                    city: userData?.data?.city,
                    area: userData?.data?.address?.split(",")[0],
                    house: userData?.data?.address?.split(",")[1],
                  }}
                  register={register}
                  setValue={setValue}
                /> */}
              </div>

              {/* Email and Phone inputs */}
              <div className="flex flex-col justify-between gap-4 lg:flex-row">
                <div className="flex flex-1 flex-col space-y-1.5">
                  <Label>Email</Label>
                  <Input
                    id="email"
                    placeholder="Email Address"
                    {...register("email", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    defaultValue={userData?.data?.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-1 flex-col space-y-1.5">
                  <Label>Phone</Label>
                  {/* <Controller
                    // @ts-ignore
                    name="phoneNumber"
                    rules={{ required: "Phone number is required" }}
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        // @ts-ignore
                        value={userData?.data?.phoneNumber || field.value}
                        onChange={field.onChange}
                        international
                        defaultCountry="US"
                      />
                    )}
                  /> */}
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cart statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* products information */}
            <div>
              <div className="flex justify-between pb-5">
                <p>Product Price:</p>
                <p className="font-medium">${subTotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Discount:</p>
                <p className="font-medium">
                  ${(Number(subTotal) - Number(totalAmount)).toFixed(2)}
                </p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Total:</p>
                <p className="font-medium">${totalAmount.toFixed(2)}</p>
              </div>
            </div>

            {/* payment method */}
            <Label className="text-xl">Payment Method</Label>

            <RadioGroup {...register("paymentMethod")} className="mt-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stripe" id="r2" />
                <Label htmlFor="r2">Stripe</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cashOnDelivery" id="r1" />
                <Label htmlFor="r1">Cash on Delivery</Label>
              </div>
            </RadioGroup>
            {errors.paymentMethod && (
              <p className="text-sm text-red-500">
                {errors.paymentMethod.message}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full rounded-full bg-primary-color"
            >
              Place Order
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CheckoutContainer;
