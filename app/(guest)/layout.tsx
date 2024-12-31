import Banner from "@/components/custom/Banner";
import React from "react";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Banner />
      {children}
    </>
  );
};

export default GuestLayout;
