/**
 * Security - Security settings with 2FA, password, and active sessions
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Key, Smartphone, Monitor, Globe, LogOut, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const sessions = [
  { id: 1, device: "MacBook Pro", browser: "Chrome 120", location: "San Francisco, CA", ip: "192.168.1.1", lastActive: "Active now", current: true },
  { id: 2, device: "iPhone 15 Pro", browser: "Safari", location: "San Francisco, CA", ip: "192.168.1.2", lastActive: "2 hours ago", current: false },
  { id: 3, device: "Windows PC", browser: "Firefox 121", location: "New York, NY", ip: "10.0.0.45", lastActive: "3 days ago", current: false },
];

const Security: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Security</h1>
        <p className="text-muted-foreground">Manage your account security and authentication</p>
      </div>

      {/* Change Password */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="stat-card space-y-5"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2.5">
            <Key className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">Change Password</h3>
            <p className="text-sm text-muted-foreground">Update your password regularly for security</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Current Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-10 w-full rounded-lg border bg-card pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="h-10 w-full rounded-lg border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Confirm New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="h-10 w-full rounded-lg border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button>Update Password</Button>
        </div>
      </motion.div>

      {/* Two-Factor Authentication */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="stat-card"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2.5">
              <Smartphone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
          </div>
          <button
            onClick={() => setTwoFAEnabled(!twoFAEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              twoFAEnabled ? "bg-primary" : "bg-muted"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-card shadow-sm transition-transform ${
                twoFAEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        {twoFAEnabled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 rounded-lg bg-accent p-4"
          >
            <p className="text-sm text-accent-foreground">
              ✓ Two-factor authentication is enabled. You'll be asked for a verification code when signing in.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Active Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="stat-card space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2.5">
              <Monitor className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Active Sessions</h3>
              <p className="text-sm text-muted-foreground">Manage your active login sessions</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <LogOut className="h-4 w-4" />
            Revoke All
          </Button>
        </div>

        <div className="space-y-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-card-foreground">{session.device}</p>
                    {session.current && <span className="badge-success">Current</span>}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {session.browser} · {session.location} · {session.ip}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{session.lastActive}</p>
                {!session.current && (
                  <button className="mt-1 text-xs font-medium text-destructive hover:underline">
                    Revoke
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Security;
