import React from "react";
import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <div className="text-lg font-semibold text-slate-800">Analytics Dashboard</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-2 h-4 w-4 text-slate-400" />
              <input
                className="pl-10 pr-3 py-2 w-60 rounded-md bg-slate-50 text-sm border border-transparent focus:border-slate-200"
                placeholder="Search anything..."
              />
            </div>

            <div className="flex items-center gap-3">

              <Bell className="h-5 w-5 text-slate-500" />
              <div className="h-9 w-9 rounded-full bg-[#10b981] text-white flex items-center justify-center font-medium">A</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}



