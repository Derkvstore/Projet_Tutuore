import React from 'react';

function CenteredLayout({ children }) {
  return (
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col items-center">
      <img
        src="/assets/logo.jpg"
        alt="Logo Techno-Lab"
        className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-md object-cover mb-4"
      />
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Techno-Lab ISTA</h1>
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}

export default CenteredLayout;
