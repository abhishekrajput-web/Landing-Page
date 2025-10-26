// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { Card, CardContent } from "@/components/ui/card";

// const data = [{ name: "Current Weekly", growth: 2 }];

// export default function CustomerGrowthChart() {
//   return (
//     <Card>
//       <CardContent className="p-4">
//         <h3 className="font-semibold mb-2">Customer Growth</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={data}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="growth" stroke="#00C49F" />
//           </LineChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }



import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

/* sample growth points */
const data = [
  { name: "Week -3", growth: 0.8 },
  { name: "Week -2", growth: 1.2 },
  { name: "Week -1", growth: 1.8 },
  { name: "Current Weekly", growth: 2.0 },
];

export default function CustomerGrowthChart() {
  return (
    <div className="bg-white rounded-lg card-shadow p-4">
      <h3 className="text-slate-800 font-semibold mb-3">Customer Growth</h3>
      <div style={{ width: "100%", height: 230 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fill: "#475569" }} />
            <YAxis tick={{ fill: "#475569" }} />
            <Tooltip />
            <Line type="monotone" dataKey="growth" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
