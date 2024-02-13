export default function JokeSkeleton() {
  return (
    <div className="border shadow-xl rounded-md h-[220px] p-8 w-full">
      <div className="animate-pulse flex space-x-4 min-h-[inherit]">
        <div className="flex-1 flex space-y-6 justify-between flex-col">
          <div className="h-5 bg-gray-400 rounded" />
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-2.5 bg-gray-400 rounded col-span-2" />
              <div className="h-2.5 bg-transparent rounded col-span-1" />
              <div className="h-2.5 bg-gray-400 rounded col-span-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
