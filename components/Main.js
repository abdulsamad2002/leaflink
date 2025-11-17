"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Main = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="min-h-screen bg-emerald-600 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your{" "}
            <span className="text-yellow-300">
              one-stop place
            </span>
            <br />
            to share all your links
          </h1>

          <p className="text-xl md:text-2xl text-green-50 mb-12 font-light max-w-2xl mx-auto">
            Create a beautiful landing page for all your social links in seconds
          </p>

          {session ? (
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <Link href={"/dashboard"}>
                <button className="cursor-pointer group relative px-10 py-4 bg-white text-green-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Your Dashboard
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
                  <div className="absolute inset-0 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <Link href={"/login"}>
                <button className="cursor-pointer group relative px-10 py-4 bg-white text-green-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-300/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Get your link page
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
                  <div className="absolute inset-0 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;