import React, { useState } from "react";
import { toast } from "sonner";
import SignIn from "./Signin"; // Import the SignIn component

interface Props {
  onClose: () => void;
}

function SignUp({ onClose }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between SignUp and SignIn

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://whatever.lat/api/v1/customers/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Sign-up successful!");
        localStorage.setItem("authToken", data.token); // Store the token in local storage
        onClose();
      } else {
        toast.error("Sign-up failed: " + data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred: ");
    } finally {
      setLoading(false);
    }
  };

  const handleClickOutside = () => {
    onClose();
  };

  if (isSignIn) {
    return <SignIn onClose={onClose} />;
  }

  return (
    <div
      id="sign-up-modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative text-black">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12B9f3]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#12B9f3] text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-[#12B9f3] cursor-pointer"
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
