/**
 * Customers - Customer contacts management with search, filters, and detail cards
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Mail, Phone, MapPin, MoreHorizontal, ShoppingBag, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const CUSTOMERS = [
  { id: 1, name: "Sarah Chen", email: "sarah@example.com", phone: "+1 (555) 123-4567", location: "San Francisco, CA", orders: 24, spent: "$4,892", avatar: "SC", status: "Active", joined: "Jan 2025" },
  { id: 2, name: "Marcus Johnson", email: "marcus@example.com", phone: "+1 (555) 234-5678", location: "New York, NY", orders: 18, spent: "$3,210", avatar: "MJ", status: "Active", joined: "Mar 2025" },
  { id: 3, name: "Emily Rodriguez", email: "emily@example.com", phone: "+1 (555) 345-6789", location: "Austin, TX", orders: 31, spent: "$6,450", avatar: "ER", status: "VIP", joined: "Nov 2024" },
  { id: 4, name: "James Wilson", email: "james@example.com", phone: "+1 (555) 456-7890", location: "Chicago, IL", orders: 7, spent: "$890", avatar: "JW", status: "Active", joined: "Jun 2025" },
  { id: 5, name: "Aisha Patel", email: "aisha@example.com", phone: "+1 (555) 567-8901", location: "Seattle, WA", orders: 42, spent: "$8,720", avatar: "AP", status: "VIP", joined: "Aug 2024" },
  { id: 6, name: "David Kim", email: "david@example.com", phone: "+1 (555) 678-9012", location: "Los Angeles, CA", orders: 12, spent: "$2,140", avatar: "DK", status: "Active", joined: "Feb 2025" },
  { id: 7, name: "Lisa Thompson", email: "lisa@example.com", phone: "+1 (555) 789-0123", location: "Denver, CO", orders: 3, spent: "$340", avatar: "LT", status: "Inactive", joined: "Sep 2025" },
  { id: 8, name: "Omar Hassan", email: "omar@example.com", phone: "+1 (555) 890-1234", location: "Miami, FL", orders: 29, spent: "$5,670", avatar: "OH", status: "VIP", joined: "Dec 2024" },
  { id: 9, name: "Nina Petrova", email: "nina@example.com", phone: "+1 (555) 901-2345", location: "Boston, MA", orders: 15, spent: "$2,890", avatar: "NP", status: "Active", joined: "Apr 2025" },
  { id: 10, name: "Carlos Mendez", email: "carlos@example.com", phone: "+1 (555) 012-3456", location: "Phoenix, AZ", orders: 0, spent: "$0", avatar: "CM", status: "Inactive", joined: "Jan 2026" },
];

const statusStyles: Record<string, string> = {
  Active: "badge-success",
  VIP: "badge-info",
  Inactive: "badge-warning",
};

const Customers: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Active", "VIP", "Inactive"];

  const filtered = CUSTOMERS.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || c.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Customers</h1>
          <p className="text-muted-foreground">{CUSTOMERS.length} registered customers</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="h-10 w-full rounded-lg border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex gap-2">
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
      </div>

      {/* Customer cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((customer, i) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="stat-card group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {customer.avatar}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{customer.name}</p>
                  <p className="text-xs text-muted-foreground">Joined {customer.joined}</p>
                </div>
              </div>
              <span className={statusStyles[customer.status]}>{customer.status}</span>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-3.5 w-3.5" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>{customer.location}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 border-t pt-4">
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-card-foreground">{customer.orders}</span>
                <span className="text-xs text-muted-foreground">orders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-card-foreground">{customer.spent}</span>
                <span className="text-xs text-muted-foreground">spent</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
          <Search className="h-10 w-10 mb-3" />
          <p className="font-medium">No customers found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Customers;
