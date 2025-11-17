"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const url = "api/add";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: data,
          email: session.user.email,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      setIsRedirecting(true);
      router.replace("/login");
      return;
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 text-white text-2xl font-light">
          Loading...
        </div>
      </div>
    );
  }

  if (!session || isRedirecting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 text-white text-2xl font-light">
          Redirecting to login...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-600 mb-3">
                Welcome Back!
              </h1>
              <p className="text-xl text-gray-600">
                Hello,{" "}
                <span className="font-semibold text-emerald-600">
                  {session.user.name}
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100">
              {submitSuccess && (
                <div className="mb-6 bg-green-100 border-2 border-green-400 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-fade-in">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-semibold">
                    Link added successfully!
                  </span>
                </div>
              )}

              <h2 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-3">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add New Link
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      URL
                    </label>
                    <input
                      placeholder="https://example.com"
                      {...register("url", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                    {errors.url && (
                      <p className="text-red-500 text-sm mt-1">
                        URL is required
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Link Name
                    </label>
                    <input
                      placeholder="My Website"
                      {...register("siteName", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                    {errors.siteName && (
                      <p className="text-red-500 text-sm mt-1">
                        Name is required
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-emerald-300/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Add Link
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
