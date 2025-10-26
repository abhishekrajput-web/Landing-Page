import React from "react";

export default function SummaryCard({ startDate = "10/18/2025", endDate = "10/25/2025" }) {
  return (
    <div className="bg-white rounded-lg card-shadow p-4">
      <h3 className="text-slate-800 font-semibold mb-3">Summary</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-700">
        <div>
          <div className="text-slate-500 text-xs">Date Range</div>
          <div className="font-medium">8 days</div>
          <div className="text-slate-400 text-xs mt-1">Start Date</div>
          <div>{startDate}</div>
        </div>

        <div>
          <div className="text-slate-500 text-xs">Countries</div>
          <div className="font-medium">2</div>
          <div className="text-slate-400 text-xs mt-1">End Date</div>
          <div>{endDate}</div>
        </div>

        <div>
          <div className="text-slate-500 text-xs">Total Order Amount</div>
          <div className="font-medium">₹1,200</div>
          <div className="text-slate-400 text-xs mt-1">B2B Orders</div>
          <div className="text-emerald-600 font-medium">100%</div>
        </div>

        <div>
          <div className="text-slate-500 text-xs">Period</div>
          <div className="font-medium">Weekly</div>
          <div className="text-slate-400 text-xs mt-1">Total Orders</div>
          <div className="font-medium">2</div>
        </div>
      </div>
    </div>
  );
}
