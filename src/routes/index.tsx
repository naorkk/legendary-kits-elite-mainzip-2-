import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnnouncementBar } from "@/components/lk/AnnouncementBar";
import { Header } from "@/components/lk/Header";
import { Hero } from "@/components/lk/Hero";
import { TrustBadges } from "@/components/lk/TrustBadges";
import { Filters, type FilterValue } from "@/components/lk/Filters";
import { ProductCard } from "@/components/lk/ProductCard";
import { ProductModal } from "@/components/lk/ProductModal";
import { CartDrawer, type CartItem } from "@/components/lk/CartDrawer";
import { WhatsAppFloat } from "@/components/lk/WhatsAppFloat";
import { Footer } from "@/components/lk/Footer";
import { PRODUCTS, type Product } from "@/components/lk/products";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const filtered = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter]
  );

  const addToCart = (product: Product, size: string) => {
    setCart((c) => {
      const idx = c.findIndex((i) => i.product.id === product.id && i.size === size);
      if (idx >= 0) {
        const next = [...c];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...c, { product, size, qty: 1 }];
    });
    setCartOpen(true);
  };

  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero onShopClick={scrollToShop} />
        <TrustBadges />

        {/* Shop */}
        <section id="shop" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="flex flex-col items-center text-center mb-10 md:mb-14">
            <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#F3CF5D] mb-3">
              The Collection
            </p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.02em]">
              <span className="text-gold-shine">קולקציית</span> 24/25
            </h2>
            <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
              חולצות הכדורגל וגופיות ה-NBA המבוקשות בעולם — בגימור אגדי.
            </p>
            <div id="football" className="mt-8">
              <Filters value={filter} onChange={setFilter} />
            </div>
          </div>

          <div id="nba" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickBuy={setActiveProduct} />
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-y border-border bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              לא מתפשרים על <span className="text-gold-shine">סטייל אגדי</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              5 הראשונים בלבד — חולצה ב-₪70 במקום ₪150. אחרי שייגמרו, נחזור למחיר המלא.
            </p>
            <button
              onClick={scrollToShop}
              className="btn-gold mt-8 rounded-full px-8 py-4 text-sm md:text-base uppercase"
            >
              לתפוס מקום בקולקציה
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppFloat />

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onRemove={(idx) => setCart((c) => c.filter((_, i) => i !== idx))}
        onClear={() => setCart([])}
      />
    </div>
  );
}
