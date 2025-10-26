import React from "react";
import { Home, ShoppingCart, Users, Info, Truck, Layers } from "lucide-react";

const links = [
  { name: "Home", icon: Home },
  { name: "Sales", icon: ShoppingCart },
  { name: "Orders", icon: Truck },
  { name: "Customers", icon: Users, children: ["All Customers", "Dashboard", "Add New Customer"] },
  { name: "Information Centre", icon: Info, children: ["Main Page", "Log History"] },
  { name: "Shipping Calculator", icon: Layers },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r hidden lg:flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[#10b981] rounded-md flex items-center justify-center text-white font-semibold">KO</div>
          <div>
            <div className="text-sm font-semibold">Katyayani Organics</div>
            <div className="text-xs text-slate-400">Enterprise</div>
          </div>
        </div>
      </div>

      <nav className="p-3 space-y-2 overflow-y-auto flex-1">
        {links.map((lk) => (
          <div key={lk.name}>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 cursor-pointer">
              <lk.icon className="h-5 w-5 text-slate-600" />
              <span className="text-sm text-slate-800">{lk.name}</span>
            </div>

            {lk.children && (
              <div className="ml-10 mt-1 text-sm text-slate-500 space-y-1">
                {lk.children.map((c) => (
                  <div key={c} className="py-1 px-2 hover:text-slate-800 cursor-pointer rounded">
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-700">A</div>
          <div className="text-sm">
            <div className="font-medium">abhishek</div>
            <div className="text-xs text-slate-400">abhishek@katy...</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
