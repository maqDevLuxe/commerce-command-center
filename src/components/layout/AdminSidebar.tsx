/**
 * AdminSidebar - Collapsible navigation sidebar
 * Features: icon-only collapsed state, grouped navigation, active route highlight
 */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Store,
  Package,
  ShoppingCart,
  Users,
  HelpCircle,
  UserCircle,
  Shield,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navGroups = [
  {
    label: "Dashboards",
    items: [
      { title: "Store Overview", path: "/", icon: LayoutDashboard },
      { title: "Revenue Analytics", path: "/analytics", icon: BarChart3 },
      { title: "Multi-vendor Hub", path: "/vendors", icon: Store },
    ],
  },
  {
    label: "Management",
    items: [
      { title: "Products", path: "/products", icon: Package },
      { title: "Orders", path: "/orders", icon: ShoppingCart },
      { title: "Customers", path: "/customers", icon: Users },
    ],
  },
  {
    label: "Settings",
    items: [
      { title: "Profile", path: "/profile", icon: UserCircle },
      { title: "Security", path: "/security", icon: Shield },
      { title: "Billing", path: "/billing", icon: CreditCard },
      { title: "FAQ", path: "/faq", icon: HelpCircle },
    ],
  },
];

const AdminSidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-screen flex-col bg-sidebar transition-all duration-300 ${
        collapsed ? "w-[68px]" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
          <Sparkles className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="overflow-hidden whitespace-nowrap text-lg font-bold text-sidebar-accent-foreground"
            >
              CommerceHQ
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll px-3 py-4 space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-muted">
                {group.label}
              </p>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={`nav-item ${isActive ? "active" : ""} ${
                        collapsed ? "justify-center px-0" : ""
                      }`}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={onToggle}
          className="nav-item w-full justify-center"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
