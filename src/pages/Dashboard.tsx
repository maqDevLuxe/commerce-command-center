/**
 * Dashboard - Store Overview page
 * KPI stats, revenue chart, recent orders
 */
import React from "react";
import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentOrders from "@/components/dashboard/RecentOrders";

const stats = [
  { title: "Total Revenue", value: "$124,563", change: "+12.5%", trend: "up" as const, icon: DollarSign },
  { title: "Total Orders", value: "8,461", change: "+8.2%", trend: "up" as const, icon: ShoppingCart },
  { title: "Active Customers", value: "2,318", change: "+4.1%", trend: "up" as const, icon: Users },
  { title: "Products Sold", value: "12,847", change: "-2.3%", trend: "down" as const, icon: Package },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Store Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.title} {...stat} delay={i * 0.1} />
        ))}
      </div>

      {/* Charts & tables */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <TopProducts />
        </div>
      </div>

      {/* Recent orders */}
      <RecentOrders />
    </div>
  );
};

/** Top Products mini-widget */
const TopProducts: React.FC = () => {
  const products = [
    { name: "Wireless Headphones Pro", sales: 1247, revenue: "$374,100" },
    { name: "Smart Watch Ultra", sales: 983, revenue: "$490,517" },
    { name: "Laptop Stand Deluxe", sales: 876, revenue: "$78,340" },
    { name: "USB-C Hub Premium", sales: 654, revenue: "$42,510" },
    { name: "Mechanical Keyboard RGB", sales: 521, revenue: "$91,175" },
  ];

  return (
    <div className="stat-card h-full">
      <h3 className="text-lg font-semibold text-card-foreground mb-1">Top Products</h3>
      <p className="text-sm text-muted-foreground mb-4">By revenue this month</p>
      <div className="space-y-4">
        {products.map((p, i) => (
          <div key={p.name} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-card-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.sales} sales</p>
            </div>
            <span className="text-sm font-semibold text-card-foreground">{p.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
