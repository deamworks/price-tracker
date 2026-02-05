import AddProductForm from "@/components/AddProductForm";
import { Button } from "@/components/ui/button";
import { LogIn, Rabbit, Shield, Bell } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const user = null;
  const products = [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-[#9792cb] via-white to-[#9792cb]">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo4.png"
              alt="Price Tracker logo"
              width={600}
              height={200}
              className="h-10 w-auto"
            />
          </div>

          <Button
            variant="default"
            size="sm"
            className="bg-[#414b9e] hover:bg-[#9792cb] gap-2"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#414b9e] font-bold text-white px-6 py-2 rounded-full text-sm mb-6">
            Crafted with 🤍 by Putita
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Track Prices. Save Smarter.
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get notified the moment prices drop.
            Never overpay again.
          </p>
          {/* add product form */}
          <AddProductForm user = { user }/>

          {/* features */}
          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#9792cb] rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-[#414b9e]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
