import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import React from "react";

const Loading = ({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <Loader
      size={size || 20}
      className={cn("mr-2 animate-spin", className)}
      color="#EA5326"
    />
  );
};

export default Loading;
