"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <p className="text-white text-sm font-semibold uppercase tracking-wide">
                About Us
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              One Link,{" "}
              <span className="text-yellow-300">Infinite Possibilities</span>
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto font-light">
              Leaflink makes it simple to share all your important links in one
              beautiful place
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  What is Leaflink?
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leaflink is a powerful link management platform that allows you
                to create a personalized landing page for all your social media
                profiles, websites, and important links. Share one simple URL
                and give your audience access to everything you offer.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Leaflink?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">
                    Simple & Fast
                  </h3>
                  <p className="text-gray-600">
                    Create your link page in seconds. No technical skills
                    required.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-teal-700 mb-2">
                    Beautiful Design
                  </h3>
                  <p className="text-gray-600">
                    Modern, responsive design that looks great on any device.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">
                    Secure & Reliable
                  </h3>
                  <p className="text-gray-600">
                    Your data is safe with us. Built with modern security
                    practices.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-100">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-teal-700 mb-2">
                    Always Free
                  </h3>
                  <p className="text-gray-600">
                    Create unlimited links and share them with the world,
                    completely free.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Sign Up
                    </h3>
                    <p className="text-gray-600">
                      Create your free account using Google sign-in. Quick and
                      secure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Add Your Links
                    </h3>
                    <p className="text-gray-600">
                      Add all your social media, websites, and important links
                      to your dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Share Your Page
                    </h3>
                    <p className="text-gray-600">
                      Get your unique Leaflink URL and share it everywhere. One
                      link to rule them all!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-green-50 text-lg mb-6">
                Join thousands of users who trust Leaflink for their link
                management
              </p>
              <Link href="/login">
                <button className="group relative px-10 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Create Your Link Page
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
                  <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition-colors duration-200 font-semibold inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
