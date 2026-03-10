/**
 * Login - Elegant split-screen authentication page
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Brand panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-sidebar p-12"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary">
            <Sparkles className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-sidebar-accent-foreground">CommerceHQ</span>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-sidebar-accent-foreground">
            Manage your<br />
            <span className="text-gradient">entire commerce</span><br />
            from one place.
          </h2>
          <p className="max-w-md text-sidebar-foreground/70">
            A powerful admin dashboard for multi-vendor stores. Track revenue, manage products, and grow your business.
          </p>
        </div>

        <p className="text-sm text-sidebar-muted">© 2026 CommerceHQ. All rights reserved.</p>
      </motion.div>

      {/* Right - Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex w-full items-center justify-center p-8 lg:w-1/2"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CommerceHQ</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your admin account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@commercehq.com"
                  className="h-11 w-full rounded-lg border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Password</label>
                <button type="button" className="text-xs text-primary hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-lg border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-11">
              Sign In
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button className="font-medium text-primary hover:underline">Create one</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
