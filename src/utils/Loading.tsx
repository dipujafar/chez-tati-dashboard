import { Loader } from "lucide-react";
import React from "react";

const Loading = ({ size }: { size?: number }) => {
  return (
    <Loader size={size || 20} className="mr-2 animate-spin" color="#EA5326" />
  );
};

export default Loading;
