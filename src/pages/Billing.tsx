/**
 * Billing - Billing & subscriptions management page
 */
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Download, Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const invoices = [
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$99.00", status: "Paid" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$99.00", status: "Paid" },
  { id: "INV-2026-001", date: "Jan 1, 2026", amount: "$99.00", status: "Paid" },
  { id: "INV-2025-012", date: "Dec 1, 2025", amount: "$79.00", status: "Paid" },
  { id: "INV-2025-011", date: "Nov 1, 2025", amount: "$79.00", status: "Paid" },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    icon: Zap,
    features: ["Up to 100 products", "1 vendor account", "Basic analytics", "Email support"],
    current: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/mo",
    icon: Crown,
    features: ["Unlimited products", "Up to 25 vendors", "Advanced analytics", "Priority support", "Custom domain"],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/mo",
    icon: Rocket,
    features: ["Everything in Pro", "Unlimited vendors", "White-label branding", "Dedicated account manager", "SLA guarantee", "API access"],
    current: false,
  },
];

const Billing: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Billing & Subscriptions</h1>
        <p className="text-muted-foreground">Manage your plan, payment methods, and invoices</p>
      </div>

      {/* Current plan & payment */}
      <div className="grid gap-4 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="stat-card"
        >
          <p className="text-sm text-muted-foreground">Current Plan</p>
          <p className="mt-1 text-2xl font-bold text-card-foreground">Professional</p>
          <p className="text-sm text-muted-foreground">$99/month · Renews Apr 1, 2026</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span>Usage this period</span>
              <span>68%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: "68%" }} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="stat-card"
        >
          <p className="text-sm text-muted-foreground">Payment Method</p>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-10 w-14 items-center justify-center rounded-lg border bg-muted">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-card-foreground">•••• •••• •••• 4242</p>
              <p className="text-xs text-muted-foreground">Expires 12/2028</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="mt-4">
            Update Payment Method
          </Button>
        </motion.div>
      </div>

      {/* Plans */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Available Plans</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`stat-card relative ${plan.current ? "border-primary ring-1 ring-primary/20" : ""}`}
            >
              {plan.current && (
                <span className="absolute -top-3 left-4 badge-success px-3 py-1 text-xs">Current Plan</span>
              )}
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <plan.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground">{plan.name}</h4>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-card-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-success shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.current ? "outline" : "default"}
                className="w-full"
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </Button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Invoices */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="stat-card"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-card-foreground">Invoice History</h3>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
            Export All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="pb-3 text-left font-medium">Invoice</th>
                <th className="pb-3 text-left font-medium">Date</th>
                <th className="pb-3 text-right font-medium">Amount</th>
                <th className="pb-3 text-right font-medium">Status</th>
                <th className="pb-3 text-right font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="py-3 font-mono text-xs font-medium">{inv.id}</td>
                  <td className="py-3 text-muted-foreground">{inv.date}</td>
                  <td className="py-3 text-right font-semibold">{inv.amount}</td>
                  <td className="py-3 text-right">
                    <span className="badge-success">{inv.status}</span>
                  </td>
                  <td className="py-3 text-right">
                    <button className="text-xs font-medium text-primary hover:underline">
                      <Download className="h-3.5 w-3.5" />
                    </button>
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

export default Billing;
