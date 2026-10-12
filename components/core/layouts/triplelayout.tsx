export default function ClassicLayout() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-32 rounded-sm bg-[#FFF9F1] p-2 shadow-md sm:w-36">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="aspect-[4/3] w-full bg-[#DCE1CA]" />
          ))}
        </div>
        <div className="h-3" />
      </div>
    </div>
  );
}
