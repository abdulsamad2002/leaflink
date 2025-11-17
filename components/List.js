import React from "react";

const List = (props) => {
  return (
    <div className="group bg-white border-2 border-emerald-100 rounded-xl p-5 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 mb-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-bold text-gray-800 truncate mb-1">
                {props.name}
              </h4>
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline truncate block"
              >
                {props.url}
              </a>
            </div>
          </div>
        </div>

        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
          title="Visit link"
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default List;