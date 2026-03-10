/**
 * Orders - Order management page with filterable table
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORDERS = [
  { id: "#ORD-7291", customer: "Sarah Chen", email: "sarah@example.com", date: "2026-03-08", total: "$299.99", items: 1, status: "Delivered" },
  { id: "#ORD-7290", customer: "Marcus Johnson", email: "marcus@example.com", date: "2026-03-07", total: "$499.00", items: 2, status: "Shipped" },
  { id: "#ORD-7289", customer: "Emily Rodriguez", email: "emily@example.com", date: "2026-03-07", total: "$89.50", items: 1, status: "Processing" },
  { id: "#ORD-7288", customer: "James Wilson", email: "james@example.com", date: "2026-03-06", total: "$65.00", items: 3, status: "Delivered" },
  { id: "#ORD-7287", customer: "Aisha Patel", email: "aisha@example.com", date: "2026-03-06", total: "$175.00", items: 1, status: "Cancelled" },
  { id: "#ORD-7286", customer: "David Kim", email: "david@example.com", date: "2026-03-05", total: "$340.00", items: 4, status: "Delivered" },
  { id: "#ORD-7285", customer: "Lisa Thompson", email: "lisa@example.com", date: "2026-03-05", total: "$129.00", items: 1, status: "Shipped" },
  { id: "#ORD-7284", customer: "Omar Hassan", email: "omar@example.com", date: "2026-03-04", total: "$245.50", items: 2, status: "Processing" },
];

const statusMap: Record<string, string> = {
  Delivered: "badge-success",
  Shipped: "badge-info",
  Processing: "badge-warning",
  Cancelled: "badge-destructive",
};

const Orders: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Delivered", "Shipped", "Processing", "Cancelled"];
  const filtered = filter === "All" ? ORDERS : ORDERS.filter((o) => o.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Order Management</h1>
          <p className="text-muted-foreground">{ORDERS.length} orders total</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="stat-card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="pb-3 text-left font-medium">Order ID</th>
                <th className="pb-3 text-left font-medium">Customer</th>
                <th className="pb-3 text-left font-medium hidden md:table-cell">Date</th>
                <th className="pb-3 text-right font-medium">Items</th>
                <th className="pb-3 text-right font-medium">Total</th>
                <th className="pb-3 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors cursor-pointer">
                  <td className="py-3.5 font-mono text-xs font-medium">{order.id}</td>
                  <td className="py-3.5">
                    <div>
                      <p className="font-medium text-card-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-3.5 text-muted-foreground hidden md:table-cell">{order.date}</td>
                  <td className="py-3.5 text-right">{order.items}</td>
                  <td className="py-3.5 text-right font-semibold">{order.total}</td>
                  <td className="py-3.5 text-right">
                    <span className={statusMap[order.status]}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Orders;
