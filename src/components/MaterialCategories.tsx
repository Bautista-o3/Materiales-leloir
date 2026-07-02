import React, { useState } from "react";
import { Layers, Grid, Square, Hammer, Coins, Wrench, CheckCircle2, Plus, Check, Info } from "lucide-react";
import { MATERIAL_CATEGORIES } from "../data";
import { MaterialItem } from "../types";

interface MaterialCategoriesProps {
  onAddItem: (item: { name: string; quantity: number; unit: string }) => void;
  selectedItems: { [key: string]: number };
}

export default function MaterialCategories({ onAddItem, selectedItems }: MaterialCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="h-5 w-5 text-brand" />;
      case "Grid":
        return <Grid className="h-5 w-5 text-brand" />;
      case "Square":
        return <Square className="h-5 w-5 text-brand" />;
      case "Hammer":
        return <Hammer className="h-5 w-5 text-brand" />;
      case "Coins":
        return <Coins className="h-5 w-5 text-brand" />;
      case "Wrench":
        return <Wrench className="h-5 w-5 text-brand" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-brand" />;
    }
  };

  const handleQtyChange = (itemId: string, val: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, val)
    }));
  };

  const handleAddClick = (item: MaterialItem) => {
    const qty = quantities[item.id] || 1;
    onAddItem({
      name: item.name,
      quantity: qty,
      unit: item.unit
    });

    // Visual success transition
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const filteredCategories = activeCategory === "all"
    ? MATERIAL_CATEGORIES
    : MATERIAL_CATEGORIES.filter(cat => cat.id === activeCategory);

  return (
    <section id="materiales" className="py-20 bg-cement border-t border-gray-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-black block">
              Nuestro Catálogo Completo
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal tracking-tight uppercase">
              Materiales de Construcción de Primera Calidad
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Seleccioná los materiales que necesitás para armar tu lista y recibir una cotización a medida. Solo trabajamos marcas oficiales líderes para garantizar la resistencia de tu estructura.
            </p>
          </div>
          
          <div className="bg-white border border-gray-300 shadow-sm rounded-2xl px-5 py-4 shrink-0 text-left md:text-right md:max-w-xs">
            <span className="text-brand font-black text-sm uppercase block tracking-wider mb-1">
              Precio Actualizado al Día
            </span>
            <span className="text-xs text-gray-500 block leading-tight font-medium">
              Debido a la volatilidad, cotizamos de forma personalizada. Consultanos disponibilidad y precio actualizado al instante.
            </span>
          </div>
        </div>

        {/* Category Filters (Horizontal bar) */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shrink-0 transition-all border cursor-pointer ${
              activeCategory === "all"
                ? "bg-brand text-charcoal border-brand font-black"
                : "bg-white text-gray-600 border-gray-300 hover:border-brand hover:text-charcoal"
            }`}
          >
            Todos los Materiales
          </button>
          
          {MATERIAL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shrink-0 transition-all border flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand text-charcoal border-brand font-black"
                  : "bg-white text-gray-600 border-gray-300 hover:border-brand hover:text-charcoal"
              }`}
            >
              {getIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Material Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-sm hover:border-brand/60 transition-all flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className="bg-[#F3F4F6] px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                <div className="p-2 bg-white border border-gray-200 rounded-xl shadow-sm shrink-0">
                  {getIcon(category.iconName)}
                </div>
                <div className="text-left">
                  <h3 className="font-display font-black text-base text-charcoal uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight font-semibold">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-gray-100">
                {category.items.map((item) => {
                  const itemQty = quantities[item.id] || 1;
                  const isAdded = addedItemIds[item.id];
                  return (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F9FAFB] transition-colors"
                    >
                      {/* Left: Product Info */}
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-charcoal">{item.name}</span>
                          <span className="text-[9px] font-bold bg-[#F3F4F6] text-gray-500 border border-gray-200 px-1.5 py-0.5 rounded uppercase tracking-wide">
                            {item.unit}
                          </span>
                        </div>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex gap-1.5 flex-wrap">
                            {item.tags.map(tag => (
                              <span key={tag} className="text-[10px] text-brand font-bold">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Interactive Adder */}
                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <div className="flex items-center bg-[#F3F4F6] border border-gray-300 rounded-lg overflow-hidden h-9">
                          <button
                            onClick={() => handleQtyChange(item.id, itemQty - 1)}
                            className="px-2.5 text-gray-500 hover:bg-gray-200 hover:text-charcoal transition-colors h-full font-mono text-sm"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={itemQty}
                            onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value) || 1)}
                            className="w-12 bg-transparent text-center text-xs font-bold text-charcoal focus:outline-none h-full border-none font-mono"
                          />
                          <button
                            onClick={() => handleQtyChange(item.id, itemQty + 1)}
                            className="px-2.5 text-gray-500 hover:bg-gray-200 hover:text-charcoal transition-colors h-full font-mono text-sm"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => handleAddClick(item)}
                          className={`h-9 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                            isAdded
                              ? "bg-emerald-600 text-white border border-emerald-500"
                              : "bg-brand hover:bg-brand/90 text-charcoal font-black border-b-2 border-black/20"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5 stroke-[3px]" />
                              <span>Añadido</span>
                            </>
                          ) : (
                            <>
                              <Plus className="h-3.5 w-3.5 stroke-[2.5px]" />
                              <span>Sumar</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Call */}
              <div className="bg-[#F3F4F6]/50 p-4 border-t border-gray-200 text-center">
                <span className="text-[11px] text-gray-500 font-bold uppercase">
                  Marcas líderes oficiales: Loma Negra, Holcim, Acindar, Klaukol, Megaflex, Ceresita.
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Footer CTA */}
        <div className="mt-12 bg-white border border-gray-300 shadow-sm p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 text-left">
          <div className="space-y-1">
            <h4 className="font-display font-black text-lg text-charcoal uppercase">
              ¿No encontrás un material específico para tu obra?
            </h4>
            <p className="text-xs text-gray-500 leading-normal font-medium">
              Trabajamos una amplia variedad de productos fuera de catálogo (maderas para encofrado, alambres, clavos especiales, aditivos específicos, herramientas de mano, etc.).
            </p>
          </div>
          <a
            href={`https://wa.me/5491146211467?text=Hola%20Materiales%20Leloir%2C%20estoy%20buscando%20un%20material%20que%20no%20veo%20en%20su%20web%20para%20mi%20obra.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal hover:bg-charcoal/90 text-white hover:text-brand px-5 py-3 rounded-xl border border-zinc-800 text-xs font-black uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all cursor-pointer"
          >
            <Info className="h-4 w-4 text-brand" />
            Consultar Disponibilidad
          </a>
        </div>

      </div>
    </section>
  );
}
