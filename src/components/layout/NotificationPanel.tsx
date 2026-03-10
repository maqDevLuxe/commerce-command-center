/**
 * NotificationPanel - Dropdown panel with notification list, triggered by bell icon
 */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ShoppingCart, Users, AlertTriangle, TrendingUp, Check, X } from "lucide-react";

interface Notification {
  id: number;
  icon: React.ElementType;
  iconClass: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

const notifications: Notification[] = [
  { id: 1, icon: ShoppingCart, iconClass: "bg-info/10 text-info", title: "New order received", description: "Order #ORD-7292 from Alex Rivera — $349.00", time: "2 min ago", unread: true },
  { id: 2, icon: AlertTriangle, iconClass: "bg-warning/10 text-warning", title: "Low stock alert", description: "USB-C Hub Premium has 0 units remaining", time: "18 min ago", unread: true },
  { id: 3, icon: Users, iconClass: "bg-primary/10 text-primary", title: "New customer signup", description: "Rachel Kim created an account", time: "1 hour ago", unread: true },
  { id: 4, icon: TrendingUp, iconClass: "bg-success/10 text-success", title: "Revenue milestone", description: "You've crossed $125,000 in monthly revenue!", time: "3 hours ago", unread: false },
  { id: 5, icon: Package, iconClass: "bg-primary/10 text-primary", title: "Product review", description: "Wireless Headphones Pro received a 5-star review", time: "5 hours ago", unread: false },
  { id: 6, icon: ShoppingCart, iconClass: "bg-info/10 text-info", title: "Order delivered", description: "Order #ORD-7288 was marked as delivered", time: "8 hours ago", unread: false },
];

interface NotificationPanelProps {
  open: boolean;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ open, onClose }) => {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-2 w-96 max-w-[calc(100vw-2rem)] glass-card rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs font-medium text-primary hover:underline">
                  Mark all read
                </button>
                <button
                  onClick={onClose}
                  className="rounded-md p-1 text-muted-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Notification list */}
            <div className="max-h-[420px] overflow-y-auto notification-scroll">
              {notifications.map((notif, i) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className={`flex gap-3 border-b px-5 py-3.5 transition-colors cursor-pointer hover:bg-muted/40 ${
                    notif.unread ? "bg-accent/40" : ""
                  }`}
                >
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${notif.iconClass}`}>
                    <notif.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm ${notif.unread ? "font-semibold text-foreground" : "font-medium text-foreground/80"}`}>
                        {notif.title}
                      </p>
                      {notif.unread && (
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{notif.description}</p>
                    <p className="text-[11px] text-muted-foreground/60 mt-1">{notif.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t px-5 py-3 text-center">
              <button className="text-xs font-medium text-primary hover:underline">
                View all notifications
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel;
