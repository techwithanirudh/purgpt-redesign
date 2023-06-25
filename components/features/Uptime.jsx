export default function Uptime() {
  return (
    <div className="flex p-8 relative items-center justify-center pb-48">
        <div className="bg-emerald-500 absolute top-9 animate-ping flex items-center justify-center aspect-square rounded-full font-bold w-full max-w-[150px]" />
        <div className="bg-emerald-600 absolute top-4 flex items-center justify-center aspect-square rounded-full font-bold w-full max-w-[175px]" />
        <span className="text-6xl font-bold absolute top-16">99%</span>
    </div>
  );
}
