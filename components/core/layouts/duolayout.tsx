export default function DuoLayout() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-36 rounded-sm bg-[#FFF9F1] p-2 shadow-md sm:w-40">
        <div className="flex flex-col gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="aspect-[4/3] w-full bg-[#F4C7D0]" />
          ))}
        </div>
      </div>
    </div>
  );
}
