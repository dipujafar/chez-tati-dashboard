"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { useForgetPassMutation } from "@/redux/api/authApi";
import { TError } from "@/types/types";
import { Error_Modal } from "@/utils/models";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

const ForgetPasswordFrom = () => {
  const router = useRouter();
  const [forgetPass, { isLoading }] = useForgetPassMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await forgetPass(data).unwrap();
      if (res?.data?.token) {
        sessionStorage.setItem("token", res?.data?.token);
        router.push("/verify-otp");
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
            Forgot password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Input email */}
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Login button */}
              <LoadingButton
                loading={isLoading}
                type="submit"
                className="rounded-full bg-primary-color"
              >
                Submit
              </LoadingButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgetPasswordFrom;
