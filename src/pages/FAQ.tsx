/**
 * FAQ - Frequently asked questions with searchable accordion
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      { q: "How do I add my first product?", a: "Navigate to the Products page from the sidebar, then click 'Add Product'. Fill in the product details including name, description, price, and images. You can also bulk import products using a CSV file." },
      { q: "How do I set up my store profile?", a: "Go to Settings → Profile to configure your store name, logo, contact information, currency, and timezone. This information will be displayed to your customers." },
      { q: "Can I customize the storefront theme?", a: "Yes! Navigate to Settings → Appearance to choose from our pre-built themes or create a custom theme with your brand colors, fonts, and layout preferences." },
    ],
  },
  {
    category: "Orders & Payments",
    questions: [
      { q: "How do I process a refund?", a: "Go to Orders, find the order you want to refund, click on it to open the details, then click 'Issue Refund'. You can choose to refund the full amount or a partial amount. The refund will be processed within 5-10 business days." },
      { q: "What payment methods are supported?", a: "We support all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers. You can enable/disable payment methods from Settings → Billing." },
      { q: "How do I set up automatic tax calculation?", a: "Navigate to Settings → Tax, enable automatic tax calculation, and configure your tax regions. We support tax rules for US states, EU VAT, and many other jurisdictions." },
    ],
  },
  {
    category: "Vendors & Marketplace",
    questions: [
      { q: "How do I invite a new vendor?", a: "Go to the Multi-vendor Hub and click 'Invite Vendor'. Enter the vendor's email address and they'll receive an invitation to set up their store. You can also set commission rates and approval workflows." },
      { q: "How are vendor payouts handled?", a: "Vendor payouts are processed automatically based on your configured schedule (weekly, bi-weekly, or monthly). You can also trigger manual payouts from the vendor's profile page." },
      { q: "Can I review products before they go live?", a: "Yes! Enable 'Product Approval' in Settings → Marketplace. All new vendor products will require your approval before being published to the storefront." },
    ],
  },
  {
    category: "Account & Security",
    questions: [
      { q: "How do I enable two-factor authentication?", a: "Go to Settings → Security and toggle on Two-Factor Authentication. You'll be guided through setting up an authenticator app. We recommend using Google Authenticator or Authy." },
      { q: "Can I add team members to my account?", a: "Yes! Go to Settings → Team to invite team members. You can assign roles like Admin, Editor, or Viewer, each with different permission levels to control access to your store's features." },
    ],
  },
];

const FAQ: React.FC = () => {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allQuestions = faqs.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  );

  const filtered = search
    ? allQuestions.filter(
        (q) =>
          q.q.toLowerCase().includes(search.toLowerCase()) ||
          q.a.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions about your store</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="h-11 w-full rounded-lg border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Search results */}
      {filtered ? (
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-muted-foreground">
              <HelpCircle className="h-10 w-10 mb-3" />
              <p className="font-medium">No results found</p>
              <p className="text-sm">Try different keywords or browse categories below</p>
            </div>
          ) : (
            filtered.map((item) => (
              <FAQItem
                key={item.q}
                question={item.q}
                answer={item.a}
                isOpen={openItems.has(item.q)}
                onToggle={() => toggleItem(item.q)}
              />
            ))
          )}
        </div>
      ) : (
        /* Categorized view */
        <div className="space-y-6">
          {faqs.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.questions.map((item) => (
                  <FAQItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    isOpen={openItems.has(item.q)}
                    onToggle={() => toggleItem(item.q)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="stat-card flex items-center gap-4"
      >
        <div className="rounded-lg bg-primary/10 p-3">
          <MessageCircle className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-card-foreground">Still have questions?</p>
          <p className="text-sm text-muted-foreground">Our support team is here to help you 24/7</p>
        </div>
        <Button>Contact Support</Button>
      </motion.div>
    </div>
  );
};

/** Single FAQ accordion item */
const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => (
  <div className="stat-card !p-0 overflow-hidden">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/30"
    >
      <span className="text-sm font-medium text-card-foreground pr-4">{question}</span>
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="border-t px-4 py-3">
            <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FAQ;
