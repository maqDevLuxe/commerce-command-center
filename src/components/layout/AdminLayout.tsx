/**
 * AdminLayout - Main layout wrapper with sidebar + header
 * Handles responsive sidebar collapse
 */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          collapsed ? "ml-[68px]" : "ml-64"
        }`}
      >
        <AdminHeader onMenuToggle={() => setCollapsed(!collapsed)} />

        <main className="page-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
