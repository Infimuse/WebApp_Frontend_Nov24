"use client";
import SignIn from "@/components/Signin";
import { useState } from "react";

const Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div className="text-gray-700">
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      <article className="flex w-full h-full justify-center items-center">
        <div className="flex flex-col gap-3 mt-5">
          Login to see Messages
          <button
            className="px-3 py-2 mt-3 bg-[#13BAEF] text-white rounded-lg"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </button>
        </div>
      </article>
    </div>
  );
};

export default Page;
