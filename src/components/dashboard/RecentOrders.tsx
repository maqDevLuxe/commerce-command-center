/**
 * RecentOrders - Table widget showing latest orders
 */
import React from "react";
import { motion } from "framer-motion";

const orders = [
  { id: "#ORD-7291", customer: "Sarah Chen", product: "Wireless Headphones Pro", amount: "$299.99", status: "Delivered", statusClass: "badge-success" },
  { id: "#ORD-7290", customer: "Marcus Johnson", product: "Smart Watch Ultra", amount: "$499.00", status: "Shipped", statusClass: "badge-info" },
  { id: "#ORD-7289", customer: "Emily Rodriguez", product: "Laptop Stand Deluxe", amount: "$89.50", status: "Processing", statusClass: "badge-warning" },
  { id: "#ORD-7288", customer: "James Wilson", product: "USB-C Hub Premium", amount: "$65.00", status: "Delivered", statusClass: "badge-success" },
  { id: "#ORD-7287", customer: "Aisha Patel", product: "Mechanical Keyboard", amount: "$175.00", status: "Cancelled", statusClass: "badge-destructive" },
];

const RecentOrders: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="stat-card overflow-hidden"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Recent Orders</h3>
        <p className="text-sm text-muted-foreground">Latest 5 transactions</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-muted-foreground">
              <th className="pb-3 text-left font-medium">Order</th>
              <th className="pb-3 text-left font-medium">Customer</th>
              <th className="pb-3 text-left font-medium hidden sm:table-cell">Product</th>
              <th className="pb-3 text-right font-medium">Amount</th>
              <th className="pb-3 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                <td className="py-3 font-mono text-xs font-medium">{order.id}</td>
                <td className="py-3">{order.customer}</td>
                <td className="py-3 hidden sm:table-cell text-muted-foreground">{order.product}</td>
                <td className="py-3 text-right font-semibold">{order.amount}</td>
                <td className="py-3 text-right">
                  <span className={order.statusClass}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default RecentOrders;
