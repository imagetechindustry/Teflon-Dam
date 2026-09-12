import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        We couldn't find the page you were looking for.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
