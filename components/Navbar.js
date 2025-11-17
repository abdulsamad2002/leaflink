"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full bg-yellow-100 border-b border-yellow-300 shadow-md py-4 px-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-3 group">
            <Image
              alt="LeafLink Logo"
              src={"/leaf.png"}
              height={45}
              width={45}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Leaflink
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-base font-medium">
            {session && (
              <li>
                <Link
                  href={"/dashboard"}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                href={"/about"}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/abdulsamad2002"}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Github
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  className="bg-gradient-to-r cursor-pointer from-green-500 to-emerald-600 text-white rounded-full py-2.5 px-8 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                  onClick={() => signOut()}
                >
                  Log Out
                </button>
              ) : (
                <Link href={"/login"}>
                  <button className="bg-gradient-to-r cursor-pointer from-green-500 to-emerald-600 text-white rounded-full py-2.5 px-8 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-base font-medium pb-4">
            {session && (
              <li>
                <Link
                  href={"/dashboard"}
                  className="block text-gray-700 hover:text-green-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                href={"/about"}
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/abdulsamad2002"}
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </Link>
            </li>
            <li>
              {session ? (
                <button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full py-2.5 px-8 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  Log Out
                </button>
              ) : (
                <Link href={"/login"} onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full py-2.5 px-8 font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
