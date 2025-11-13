import React from "react";
import { toast } from "react-toastify";

function OAuth() {
  const handleGoogleAuth = async () => {
    try {
      console.log("Goolge clicked");
    } catch (error) {
      toast.error(error?.message || "Error in google authentication");
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium text-sm transition-colors duration-200 flex items-center justify-center cursor-pointer"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
}

export default OAuth;
