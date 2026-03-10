/**
 * Analytics - Revenue analytics placeholder page
 */
import React from "react";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import RevenueChart from "@/components/dashboard/RevenueChart";

const Analytics: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Revenue Analytics</h1>
      <p className="text-muted-foreground">Detailed insights into your store performance</p>
    </div>
    <RevenueChart />
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="stat-card flex items-center gap-4 text-muted-foreground"
    >
      <BarChart3 className="h-8 w-8" />
      <div>
        <p className="font-semibold text-card-foreground">More analytics coming soon</p>
        <p className="text-sm">Conversion funnels, cohort analysis, and customer lifetime value</p>
      </div>
    </motion.div>
  </div>
);

export default Analytics;
