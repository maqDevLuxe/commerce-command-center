/**
 * ComingSoon - Placeholder for pages under development
 */
import React from "react";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import { useLocation } from "react-router-dom";

const ComingSoon: React.FC = () => {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-4"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Construction className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">{pageName}</h1>
        <p className="text-muted-foreground max-w-sm">
          This section is under development. Check back soon for updates.
        </p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
