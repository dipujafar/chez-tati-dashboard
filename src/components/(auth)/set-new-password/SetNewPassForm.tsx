"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

// Define form data types
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SetNewPassForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/sign-in");
  };

  return (
    <div>
      <Card className="md:w-[650px]">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-semibold">
            Set New Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Input password with eye icon to toggle visibility */}
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>

              {/* Input Confirm Password with eye icon to toggle visibility */}
              <div className="relative flex flex-col space-y-1.5">
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>

              {/* Login button */}
              <Button type="submit" className="rounded-full bg-primary-color">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetNewPassForm;
