/**
 * Products - Product catalog management page
 * Grid of product cards with search/filter
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones Pro", category: "Audio", price: "$299.99", stock: 142, status: "Active", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  { id: 2, name: "Smart Watch Ultra", category: "Wearables", price: "$499.00", stock: 89, status: "Active", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
  { id: 3, name: "Laptop Stand Deluxe", category: "Accessories", price: "$89.50", stock: 234, status: "Active", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop" },
  { id: 4, name: "USB-C Hub Premium", category: "Accessories", price: "$65.00", stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=200&h=200&fit=crop" },
  { id: 5, name: "Mechanical Keyboard RGB", category: "Peripherals", price: "$175.00", stock: 67, status: "Active", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=200&h=200&fit=crop" },
  { id: 6, name: "Noise Cancelling Earbuds", category: "Audio", price: "$199.00", stock: 198, status: "Active", image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=200&h=200&fit=crop" },
  { id: 7, name: "Portable Charger 20K", category: "Power", price: "$45.00", stock: 312, status: "Active", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop" },
  { id: 8, name: "Webcam 4K Ultra", category: "Peripherals", price: "$129.00", stock: 15, status: "Low Stock", image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=200&h=200&fit=crop" },
];

const Products: React.FC = () => {
  const [search, setSearch] = useState("");
  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Product Catalog</h1>
          <p className="text-muted-foreground">{PRODUCTS.length} products in your store</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="h-10 w-full rounded-lg border bg-card pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Product grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="stat-card group overflow-hidden p-0"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100">
                <button className="rounded-full bg-card p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="rounded-full bg-card p-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="rounded-full bg-card p-2 shadow-lg hover:bg-destructive hover:text-destructive-foreground transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-card-foreground">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
                <span className="text-lg font-bold text-primary">{product.price}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Stock: {product.stock}</span>
                <span
                  className={
                    product.status === "Active"
                      ? "badge-success"
                      : product.status === "Low Stock"
                      ? "badge-warning"
                      : "badge-destructive"
                  }
                >
                  {product.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
