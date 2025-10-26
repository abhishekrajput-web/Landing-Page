import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import StatsCard from "@/components/cards/StatsCard";
import CountrySalesChart from "@/components/charts/CountrySalesSchart";
import CustomerProfileChart from "@/components/charts/CustomerProfileChart";
import CustomerGrowthChart from "@/components/charts/CustomerGrowthChart";
import SummaryCard from "@/components/cards/SummaryCard";
import { useState } from "react";

export default function Dashboard() {
  const [period, setPeriod] = useState("daily");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const stats = [
    {
      title: "New Customers",
      value: 1,
      sub: "2 total active customers",
      accent: "from-[#06b6d4] to-[#3b82f6]",
    },
    {
      title: "Orders",
      value: 1,
      sub: "Orders created in this period",
      accent: "from-[#7c3aed] to-[#06b6d4]",
    },
    {
      title: "Sales",
      value: 1,
      sub: "Sales completed in this period",
      accent: "from-[#10b981] to-[#06b6d4]",
    },
  ];

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Period Buttons + Date Picker */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            {["daily", "weekly", "monthly", "yearly"].map((p) => (
              <button
                key={p}
                className={`px-3 py-1 rounded-md text-sm ${
                  period === p
                    ? "bg-white shadow-sm font-medium"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                onClick={() => setPeriod(p)}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          />
        </div>

        <main className="px-4 sm:px-6 lg:px-8 py-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {stats.map((s) => (
              <StatsCard
                key={s.title}
                title={s.title}
                value={s.value}
                subtext={s.sub}
                accent={s.accent}
              />
            ))}
          </div>

          {/* Charts */}
          <div className="mb-6">
            <CountrySalesChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <CustomerProfileChart />
            <CustomerGrowthChart />
          </div>
          <div className="mb-6">
            <SummaryCard />
          </div>
        </main>
      </div>
    </div>
  );
}
