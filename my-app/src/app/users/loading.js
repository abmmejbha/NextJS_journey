export default function loading() {
  const skeletonCards = Array(10).fill(0);

  return (
    <div className="p-8">
      <div className="animate-pulse rounded mb-6 h-8 w-48 bg-gray-300 "></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skeletonCards.map((_, index) => (
            <div key={index} className="p-4 border rounded shadow-sm space-y-3">
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

    </div>
  );
}
