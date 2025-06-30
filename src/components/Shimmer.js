const Shimmer = () => {
    return (
        <div data-testid = "shimmer" className="flex flex-wrap">
          {Array.from({ length: 20 }).map((e,i) => (
            <div key={i} className="h-28 w-[210px] bg-gray-500 shadow-xl rounded-xl  p-2 m-2"></div>
          ))}
        </div>
      );

};

export default Shimmer;
//{Array(10).fill("").map((e,i) => <div key={i} className="shimmer-card"></div>)}
