"use client";

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute left-20 top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[160px] animate-pulse" />

      <div
        className="absolute right-10 bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[220px]" />
    </div>
  );
}