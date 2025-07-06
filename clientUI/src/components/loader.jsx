export const BounceLoader = () => {
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex space-x-2 justify-center items-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-[waveDot_1.2s_ease-in-out_infinite] [animation-delay:0ms]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-[waveDot_1.2s_ease-in-out_infinite] [animation-delay:0.2s]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-[waveDot_1.2s_ease-in-out_infinite] [animation-delay:0.4s]"></div>
    </div>
  );
};

export const Home_Skeleton = () => {
  return (
    <div className="mt-2 mb-4 animate-pulse">
      {/* NavBar */}
      <div className="h-14 bg-gray-300 rounded w-full mb-6" />
      <div className="px-5">
        {/* Gros titre */}
        <div className="h-6 w-[80%] bg-gray-300 rounded mb-6" />

        {/* Article */}
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        
        {/* Contenu */}
        <div className="h-8 bg-gray-300 rounded w-full" />
        <div className="w-full h-72 bg-gray-300 rounded my-6" />

        <div className="h-10 bg-gray-300 rounded w-full mt-6" />
        <div className="h-10 bg-gray-300 rounded w-full mt-6" />
        <div className="h-10 bg-gray-300 rounded w-full mt-6" />
      </div>
    </div>
  );
};

export const Home_MainSkeleton = () => {
  return (
    <div className="h-screen mt-2 mb-4 animate-pulse">
      <div className="px-5 mt-6">
        {/* Gros titre */}
        <div className="h-6 w-[80%] bg-gray-300 rounded mb-6" />

        {/* Article */}
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        <div className="w-full h-72 bg-gray-300 rounded mb-6" />
        
        {/* Contenu */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-9/12" />
          <div className="h-4 bg-gray-300 rounded w-full" />
        </div>

        <div className="h-10 bg-gray-300 rounded w-full mt-6" />
        <div className="h-10 bg-gray-300 rounded w-full mt-6" />
      </div>
    </div>
  );
};

export const Single_PageSkeleton = () => {
  return (
    <div className="h-screen pt-6 mb-4 animate-pulse">
      <div className="px-5">
        {/* Gros titre */}
        <div className="h-8 w-[80%] bg-gray-300 rounded mb-6" />

        {/* Article */}
        <div className="flex flex-col">
          <div className="flex gap-2">
              <div className="w-full h-72 bg-gray-300 rounded mb-6" />
              <div className="w-full h-72 bg-gray-300 rounded mb-6" />
          </div>
          <div className="flex gap-2">
              <div className="w-full h-72 bg-gray-300 rounded mb-6" />
              <div className="w-full h-72 bg-gray-300 rounded mb-6" />
          </div>
          <div className="flex gap-2">
              <div className="w-full h-72 bg-gray-300 rounded mb-6" />
              <div className="w-full h-72 bg-gray-300 rounded mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
};