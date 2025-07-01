const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-wrap justify-center">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-[210px] h-[280px] bg-white p-3 m-2 rounded-2xl border border-gray-200 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full h-[130px] bg-gray-300 rounded-xl mb-3" />

          {/* Title Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

          {/* Cuisine Placeholder */}
          <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>

          {/* Rating + Time Placeholder */}
          <div className="flex space-x-2">
            <div className="h-3 bg-gray-300 rounded w-1/4" />
            <div className="h-3 bg-gray-300 rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

//{Array(10).fill("").map((e,i) => <div key={i} className="shimmer-card"></div>)}
