"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/models";
import { TError } from "@/types/types";
import { LoadingButton } from "@/components/ui/loading-button";

interface FormData {
  otp: string;
}

const VerifyOtpForm = () => {
  const [otp, setValue] = useState<string>("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async () => {
    const signUpToken = sessionStorage.getItem("signUpToken");
    try {
      const res = await verifyOtp({ otp }).unwrap();
      if (res?.data?.token && signUpToken) {
        router.push("/sign-in");
        Success_model({ title: "Otp verified successfully." });
        sessionStorage.removeItem("signUpToken");
        return;
      }

      if (res?.data?.token) {
        router.push("/set-new-password");
        sessionStorage.setItem("token", res?.data?.token);
        Success_model({ title: "Otp verified successfully." });
        return;
      }
    } catch (error: TError | any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <div>
      <Card className="lg:w-[650px]">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-semibold">
            Verify OTP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center justify-center gap-4">
              {/* OTP Input */}
              <div className="flex flex-col space-y-1.5">
                <InputOTP maxLength={6} onChange={(value) => setValue(value)}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }, (_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="border-primary-black/70"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            {/* Submit button */}
            <LoadingButton
              disabled={!otp}
              type="submit"
              className="mt-5 w-full rounded-full bg-primary-color"
              loading={isLoading}
            >
              Submit
            </LoadingButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOtpForm;
