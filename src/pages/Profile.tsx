/**
 * Profile - Store profile settings page
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Save, Globe, MapPin, Mail, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile: React.FC = () => {
  const [form, setForm] = useState({
    storeName: "CommerceHQ",
    email: "admin@commercehq.com",
    phone: "+1 (555) 000-1234",
    website: "https://commercehq.com",
    address: "123 Commerce Street, San Francisco, CA 94102",
    description: "A powerful multi-vendor marketplace platform for modern commerce. We connect sellers with buyers worldwide.",
    currency: "USD",
    timezone: "America/Los_Angeles",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Store Profile</h1>
        <p className="text-muted-foreground">Manage your store information and branding</p>
      </div>

      {/* Avatar / Logo section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="stat-card"
      >
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Store Logo</h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
              CH
            </div>
            <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">Upload a new logo</p>
            <p className="text-xs text-muted-foreground">Recommended: 512×512px, PNG or SVG</p>
          </div>
        </div>
      </motion.div>

      {/* Store details form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="stat-card space-y-5"
      >
        <h3 className="text-lg font-semibold text-card-foreground">Store Details</h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <InputField icon={Building} label="Store Name" value={form.storeName} onChange={(v) => handleChange("storeName", v)} />
          <InputField icon={Mail} label="Email" value={form.email} onChange={(v) => handleChange("email", v)} type="email" />
          <InputField icon={Phone} label="Phone" value={form.phone} onChange={(v) => handleChange("phone", v)} />
          <InputField icon={Globe} label="Website" value={form.website} onChange={(v) => handleChange("website", v)} />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-muted-foreground" /> Address</span>
          </label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="h-10 w-full rounded-lg border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={3}
            className="w-full rounded-lg border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Currency</label>
            <select
              value={form.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="h-10 w-full rounded-lg border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="SAR">SAR - Saudi Riyal</option>
              <option value="AED">AED - UAE Dirham</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Timezone</label>
            <select
              value={form.timezone}
              onChange={(e) => handleChange("timezone", e.target.value)}
              className="h-10 w-full rounded-lg border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="Europe/London">London (GMT)</option>
              <option value="Asia/Dubai">Dubai (GST)</option>
              <option value="Asia/Riyadh">Riyadh (AST)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button>
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

/** Reusable input field with icon */
const InputField: React.FC<{
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}> = ({ icon: Icon, label, value, onChange, type = "text" }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-foreground">
      <span className="flex items-center gap-2"><Icon className="h-3.5 w-3.5 text-muted-foreground" /> {label}</span>
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-full rounded-lg border bg-card px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
    />
  </div>
);

export default Profile;
