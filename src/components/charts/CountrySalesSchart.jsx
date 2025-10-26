import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { country: "Algeria", Sales: 1.0, Orders: 0.1 },
  { country: "Egypt", Sales: 0.95, Orders: 0.2 },
  { country: "India", Sales: 0.8, Orders: 0.5 },
  { country: "Nepal", Sales: 0.6, Orders: 0.8 },
  { country: "Unknown", Sales: 0.1, Orders: 1.0 },
];

export default function CountrySalesChart() {
  return (
    <div className="bg-white rounded-lg card-shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-slate-800 font-semibold">Country Wise Sales</h3>
        <div className="text-sm text-slate-500">Sales Count <span className="ml-4 text-sky-500">•</span> Orders Count <span className="ml-1 text-emerald-500">•</span></div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 24, left: 0, bottom: 6 }}>
            <defs>
              <linearGradient id="gradSales" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={1}/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.6}/>
              </linearGradient>
              <linearGradient id="gradOrders" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.6}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e6edf3" />
            <XAxis dataKey="country" tick={{ fill: "#475569" }} />
            <YAxis tick={{ fill: "#475569" }} />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="Sales" stroke="url(#gradSales)" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Orders" stroke="url(#gradOrders)" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
