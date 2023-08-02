export default function Uptime() {
  return (
    <div className="flex p-8 relative items-center justify-center pb-48">
      <div className="bg-emerald-500 absolute top-14 animate-ping flex items-center justify-center aspect-square rounded-full font-bold w-full max-w-[125px]" />
      <div className="bg-emerald-500 absolute top-11 flex items-center justify-center aspect-square rounded-full font-bold w-full max-w-[150px]">
        <div>
          <span className="text-4xl text-white font-bold">99%</span>
          <p className="text-xs font-normal text-white">online</p>
        </div>
      </div>
    </div>
  );
}
