/**
 * AdminHeader - Top bar with search, theme toggle, direction toggle, notifications
 */
import React, { useState } from "react";
import { Moon, Sun, Globe, Bell, Search, Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import NotificationPanel from "./NotificationPanel";

interface HeaderProps {
  onMenuToggle: () => void;
}

const AdminHeader: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const { theme, toggleTheme, direction, setDirection } = useTheme();
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card/80 backdrop-blur-lg px-4 lg:px-8">
      {/* Mobile menu trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuToggle}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products, orders, customers..."
          className="h-10 w-full rounded-lg border bg-secondary/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Direction toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDirection(direction === "ltr" ? "rtl" : "ltr")}
          title={`Switch to ${direction === "ltr" ? "RTL" : "LTR"}`}
        >
          <Globe className="h-5 w-5" />
        </Button>

        {/* Theme toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setNotifOpen(!notifOpen)}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
          </Button>
          <NotificationPanel open={notifOpen} onClose={() => setNotifOpen(false)} />
        </div>

        {/* Avatar */}
        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-semibold text-primary">JD</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
