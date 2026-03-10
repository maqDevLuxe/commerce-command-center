/**
 * RevenueChart - Area chart showing monthly revenue with tooltip hover reveal
 */
import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4200, orders: 320 },
  { month: "Feb", revenue: 5800, orders: 410 },
  { month: "Mar", revenue: 6400, orders: 480 },
  { month: "Apr", revenue: 5900, orders: 390 },
  { month: "May", revenue: 7200, orders: 520 },
  { month: "Jun", revenue: 8100, orders: 610 },
  { month: "Jul", revenue: 7600, orders: 560 },
  { month: "Aug", revenue: 9200, orders: 680 },
  { month: "Sep", revenue: 8800, orders: 640 },
  { month: "Oct", revenue: 10400, orders: 750 },
  { month: "Nov", revenue: 11200, orders: 830 },
  { month: "Dec", revenue: 12600, orders: 920 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card rounded-lg px-4 py-3 shadow-xl">
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-sm text-primary">Revenue: ${payload[0]?.value?.toLocaleString()}</p>
      <p className="text-sm text-info">Orders: {payload[1]?.value}</p>
    </div>
  );
};

const RevenueChart: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="stat-card"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue & order trends</p>
        </div>
        <span className="badge-success">+23.5% YoY</span>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(173, 58%, 39%)"
            strokeWidth={2.5}
            fill="url(#revenueGrad)"
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth={2}
            fill="url(#ordersGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueChart;
