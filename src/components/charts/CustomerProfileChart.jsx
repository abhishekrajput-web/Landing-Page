// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
// import { Card, CardContent } from "@/components/ui/card";

// const data = [{ name: "B2B", value: 100 }];
// const COLORS = ["#00C49F"];

// export default function CustomerProfileChart() {
//   return (
//     <Card>
//       <CardContent className="p-4">
//         <h3 className="font-semibold mb-2">Customer Profile</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
//               {data.map((_, i) => (
//                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }


import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "B2B", value: 85 },
  { name: "B2C", value: 15 },
];

const COLORS = ["#10b981", "#06b6d4"];

export default function CustomerProfileChart() {
  return (
    <div className="bg-white rounded-lg card-shadow p-4">
      <h3 className="text-slate-800 font-semibold mb-3">Customer Profile</h3>
      <div className="flex items-center gap-6">
        <div style={{ width: 180, height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                label={(entry) => `${Math.round(entry.percent * 100)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1">
          <div className="text-sm text-slate-500">Distribution</div>
          <div className="mt-3 space-y-2">
            {data.map((d, idx) => (
              <div key={d.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div style={{ width: 12, height: 12, background: COLORS[idx], borderRadius: 4 }} />
                  <div className="text-sm text-slate-700">{d.name}</div>
                </div>
                <div className="text-sm font-medium text-slate-700">{d.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
