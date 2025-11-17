"use client";

import React, { useEffect, useState } from "react";
import List from "@/components/List";

const Page = ({ params }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function dataFetch() {
      try {
        setLoading(true);
        const resolvedParams = await params;
        const user = resolvedParams.username[0];
        setUsername(user);

        const res = await fetch(`/api/add?username=${user}`);

        if (!res.ok) {
          throw new Error("Failed to fetch links");
        }

        const resJson = await res.json();
        setLinks(resJson.links || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLinks([]);
      } finally {
        setLoading(false);
      }
    }

    dataFetch();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <div className="text-white text-2xl font-light">Loading links...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md mx-4">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Oops!</h2>
            <p className="text-red-600 text-center">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden py-12 px-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
            <p className="text-white text-lg font-semibold">@{username}</p>
          </div>
          <p className="text-green-50 text-2xl">
            Check out all my important links below
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 min-h-[400px]">
          {links.length > 0 ? (
            <div className="space-y-3">
              {links.map((item) => (
                <List key={item._id} name={item.name} url={item.url} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No Links Yet</h3>
              <p className="text-gray-500 text-center">
                This user hasn't added any links yet.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-white/80 text-sm">
            Powered by <span className="font-bold text-yellow-300">Leaflink</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;