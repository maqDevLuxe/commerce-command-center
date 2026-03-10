/**
 * Vendors - Multi-vendor hub with vendor cards, stats, and performance overview
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Store, Star, Package, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VENDORS = [
  { id: 1, name: "TechNova Electronics", email: "contact@technova.com", category: "Electronics", products: 142, revenue: "$234,500", rating: 4.8, status: "Verified", logo: "TN", joined: "2024" },
  { id: 2, name: "Urban Style Co.", email: "hello@urbanstyle.com", category: "Fashion", products: 89, revenue: "$156,200", rating: 4.6, status: "Verified", logo: "US", joined: "2024" },
  { id: 3, name: "GreenLeaf Organics", email: "info@greenleaf.com", category: "Food & Beverage", products: 67, revenue: "$98,400", rating: 4.9, status: "Verified", logo: "GL", joined: "2025" },
  { id: 4, name: "HomeComfort Living", email: "sales@homecomfort.com", category: "Home & Garden", products: 203, revenue: "$312,800", rating: 4.5, status: "Verified", logo: "HC", joined: "2024" },
  { id: 5, name: "FitPro Gear", email: "team@fitpro.com", category: "Sports", products: 54, revenue: "$78,900", rating: 4.7, status: "Pending", logo: "FP", joined: "2025" },
  { id: 6, name: "BookWorm Press", email: "editor@bookworm.com", category: "Books & Media", products: 1240, revenue: "$189,600", rating: 4.4, status: "Verified", logo: "BW", joined: "2024" },
  { id: 7, name: "PetPals Supply", email: "woof@petpals.com", category: "Pet Supplies", products: 178, revenue: "$145,300", rating: 4.8, status: "Verified", logo: "PP", joined: "2025" },
  { id: 8, name: "ArtisanCraft Studio", email: "create@artisan.com", category: "Handmade", products: 35, revenue: "$42,100", rating: 4.3, status: "Pending", logo: "AC", joined: "2026" },
];

const Vendors: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = VENDORS.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalRevenue = "$1,257,800";
  const activeVendors = VENDORS.filter((v) => v.status === "Verified").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Multi-Vendor Hub</h1>
          <p className="text-muted-foreground">Manage your marketplace vendors</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Invite Vendor
        </Button>
      </div>

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Vendors", value: String(VENDORS.length), icon: Store },
          { label: "Active Vendors", value: String(activeVendors), icon: TrendingUp },
          { label: "Combined Revenue", value: totalRevenue, icon: Package },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="stat-card flex items-center gap-4"
          >
            <div className="rounded-lg bg-primary/10 p-3">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search vendors or categories..."
          className="h-10 w-full rounded-lg border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Vendor cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((vendor, i) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="stat-card group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {vendor.logo}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{vendor.name}</p>
                  <p className="text-xs text-muted-foreground">{vendor.category}</p>
                </div>
              </div>
              <span className={vendor.status === "Verified" ? "badge-success" : "badge-warning"}>
                {vendor.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-bold text-card-foreground">{vendor.products}</p>
                <p className="text-xs text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-lg font-bold text-card-foreground">{vendor.revenue}</p>
                <p className="text-xs text-muted-foreground">Revenue</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                  <p className="text-lg font-bold text-card-foreground">{vendor.rating}</p>
                </div>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <span className="text-xs text-muted-foreground">Since {vendor.joined}</span>
              <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                View Store <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
