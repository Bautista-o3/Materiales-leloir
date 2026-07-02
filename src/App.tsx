import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustFactors from "./components/TrustFactors";
import MaterialCategories from "./components/MaterialCategories";
import MaterialEstimator from "./components/MaterialEstimator";
import Reviews from "./components/Reviews";
import ClientsInfo from "./components/ClientsInfo";
import DeliverySection from "./components/DeliverySection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Calculator } from "lucide-react";

export default function App() {
  // Global state for selected materials in quote sheet
  const [selectedMaterials, setSelectedMaterials] = useState<
    { name: string; quantity: number; unit: string }[]
  >([]);

  // Callback to add single material from category list
  const handleAddSingleItem = (item: { name: string; quantity: number; unit: string }) => {
    setSelectedMaterials((prev) => {
      const existingIdx = prev.findIndex((i) => i.name === item.name);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
  };

  // Callback to add multiple materials from Estimator calculations
  const handleAddMultipleItems = (items: { name: string; quantity: number; unit: string }[]) => {
    setSelectedMaterials((prev) => {
      const updated = [...prev];
      items.forEach((newItem) => {
        const existingIdx = updated.findIndex((i) => i.name === newItem.name);
        if (existingIdx > -1) {
          updated[existingIdx].quantity += newItem.quantity;
        } else {
          updated.push(newItem);
        }
      });
      return updated;
    });

    // Auto scroll down to contact form so user sees their pre-filled materials
    setTimeout(() => {
      const contactSec = document.getElementById("contacto-seccion");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  // Callback to remove item from quote list
  const handleRemoveItem = (index: number) => {
    setSelectedMaterials((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Callback to update quantity from contact form list
  const handleUpdateQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setSelectedMaterials((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  // Clear quote list completely
  const handleClearAll = () => {
    setSelectedMaterials([]);
  };

  // Helper map for active items dictionary
  const selectedItemsDict: { [key: string]: number } = {};
  selectedMaterials.forEach((item) => {
    selectedItemsDict[item.name] = item.quantity;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500 selection:text-zinc-950 antialiased overflow-x-hidden pb-16 md:pb-0">
      {/* 1. Header Fijo */}
      <Header />

      {/* 2. Hero Principal */}
      <Hero />

      {/* 3. Propuesta de Valor */}
      <TrustFactors />

      {/* 4. Sección de Categorías de Materiales */}
      <MaterialCategories
        onAddItem={handleAddSingleItem}
        selectedItems={selectedItemsDict}
      />

      {/* 5. Sección de Estimador Técnico */}
      <section id="calculador-seccion" className="py-20 bg-zinc-950 scroll-mt-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold block">
              Pre-Dimensionamiento Técnico
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Calculá tus materiales al instante
            </h2>
            <p className="text-zinc-400 text-sm">
              ¿No sabés cuántos ladrillos, bolsas de cemento o mallas necesitás? Ingresá las medidas de tus paredes, contrapisos o columnas y obtené el cálculo exacto de materiales gruesos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <MaterialEstimator onAddMaterials={handleAddMultipleItems} />
          </div>
        </div>
      </section>

      {/* 6. Sección de Opiniones Reales (Google Reviews) */}
      <Reviews />

      {/* 8. Sección de Diferenciación de Clientes */}
      <ClientsInfo />

      {/* 7. Sección de Entregas y Logística */}
      <DeliverySection />

      {/* 9. Sección de Contacto Fuerte, Presupuestos y Mapa */}
      <ContactForm
        selectedItems={selectedMaterials}
        onRemoveItem={handleRemoveItem}
        onUpdateQty={handleUpdateQty}
        onClearAll={handleClearAll}
      />

      {/* 10. Footer */}
      <Footer />

      {/* Floating CTA Widgets (Always Visible) */}
      <WhatsAppButton />
    </div>
  );
}

