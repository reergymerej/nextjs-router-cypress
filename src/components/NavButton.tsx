'use client';

import React from "react";
import { useRouter } from "@/helper";

export const NavButton: React.FC = () => {
  const router = useRouter();

  const goToAbout = () => {
    router.push("/about");
  };

  return (
    <button type="button" onClick={goToAbout} className="p-2 bg-blue-500 text-white rounded">
      Go to About
    </button>
  );
};

