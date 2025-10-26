import React from "react";

export default function StatCard({ title, value, subtext, accent = "from-[#06b6d4] to-[#10b981]" }) {
  return (
    <div className="bg-white rounded-lg card-shadow p-4 flex-1 min-w-[180px]">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-slate-500">{title}</div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
          <div className="mt-1 text-sm text-emerald-600 font-medium">{subtext}</div>
        </div>
        <div className={`h-12 w-12 rounded-lg bg-[#10b981] ${accent} flex items-center justify-center text-white shadow-md`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10M21 7v10M7 7v10m10-10v10" />
          </svg>
        </div>
      </div>
    </div>
  );
}
