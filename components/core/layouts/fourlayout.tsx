export default function FullSetLayout() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-28 rounded-sm bg-[#FFF9F1] p-2 shadow-md sm:w-32">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="aspect-[4/3] w-full bg-[#F4C7D0]" />
          ))}
        </div>
        <div className="h-3" />
      </div>
    </div>
  );
}
