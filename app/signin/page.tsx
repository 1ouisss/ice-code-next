"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const result = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password.");
    } else {
      // Check if the questionnaire is completed or redirect to Questionnaire
      router.push("/questionnaire");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <img
          src="/ICE_LOGO_DEF_NEG.png"
          alt="ICE CODE Logo"
          className="h-12 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Sign In
        </h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
