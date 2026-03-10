/**
 * StatCard - Reusable KPI widget with icon, value, trend indicator
 */
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="stat-card"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-card-foreground">{value}</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-2.5">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5">
        {trend === "up" ? (
          <TrendingUp className="h-4 w-4 text-success" />
        ) : (
          <TrendingDown className="h-4 w-4 text-destructive" />
        )}
        <span className={`text-sm font-medium ${trend === "up" ? "text-success" : "text-destructive"}`}>
          {change}
        </span>
        <span className="text-sm text-muted-foreground">vs last month</span>
      </div>
    </motion.div>
  );
};

export default StatCard;
