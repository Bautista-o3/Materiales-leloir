import React, { useState } from "react";
import { Calculator, Check, Plus, AlertTriangle, HelpCircle } from "lucide-react";
import { EstimationResult } from "../types";
import WhatsAppIcon from "./WhatsAppIcon";

interface MaterialEstimatorProps {
  onAddMaterials: (items: { name: string; quantity: number; unit: string }[]) => void;
}

export default function MaterialEstimator({ onAddMaterials }: MaterialEstimatorProps) {
  const [activeTab, setActiveTab] = useState<"walls" | "floors" | "columns">("walls");

  // Wall inputs
  const [wallLength, setWallLength] = useState<number>(10);
  const [wallHeight, setWallHeight] = useState<number>(3);
  const [brickType, setBrickType] = useState<"hueco12" | "hueco8" | "hueco18" | "comun">("hueco12");

  // Floor inputs
  const [floorLength, setFloorLength] = useState<number>(6);
  const [floorWidth, setFloorWidth] = useState<number>(4);
  const [floorThickness, setFloorThickness] = useState<number>(10); // in cm
  const [withMalla, setWithMalla] = useState<boolean>(true);

  // Column inputs
  const [colLength, setColLength] = useState<number>(12); // linear meters
  const [colSection, setColSection] = useState<"15x15" | "20x20">("15x15");

  // Success indicator
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  // Calculations
  const calculateMaterials = (): EstimationResult[] => {
    const results: EstimationResult[] = [];

    if (activeTab === "walls") {
      const area = wallLength * wallHeight;
      if (area <= 0) return [];

      let bricksPerM2 = 15;
      let brickName = "Ladrillo Hueco 12x18x33";
      let cementPerM2 = 3.5; // kg
      let limePerM2 = 2.5; // kg
      let sandPerM2 = 0.018; // m3

      if (brickType === "hueco8") {
        bricksPerM2 = 15;
        brickName = "Ladrillo Hueco 8x18x33";
        cementPerM2 = 3.0;
        limePerM2 = 2.0;
        sandPerM2 = 0.015;
      } else if (brickType === "hueco18") {
        bricksPerM2 = 15;
        brickName = "Ladrillo Hueco 18x18x33";
        cementPerM2 = 5.0;
        limePerM2 = 3.5;
        sandPerM2 = 0.024;
      } else if (brickType === "comun") {
        bricksPerM2 = 120; // common bricks per m2 for a double-layer or simple wall
        brickName = "Ladrillo Común de Obra";
        cementPerM2 = 15;
        limePerM2 = 10;
        sandPerM2 = 0.06;
      }

      const totalBricks = Math.ceil(area * bricksPerM2 * 1.05); // +5% wastage
      const totalCementKgs = area * cementPerM2;
      const totalLimeKgs = area * limePerM2;
      const totalSandM3 = area * sandPerM2;

      const cementBags = Math.ceil(totalCementKgs / 50);
      const limeBags = Math.ceil(totalLimeKgs / 25);
      const sandBolsones = Math.ceil(totalSandM3 / 1); // 1 bolsón is approx 1m3

      results.push({
        itemName: brickName,
        quantity: totalBricks,
        unit: "Unidades",
        description: `Mampostería de ${area.toFixed(1)} m² de pared (incluye 5% desperdicio)`
      });

      if (cementBags > 0) {
        results.push({
          itemName: "Cemento Loma Negra (50kg)",
          quantity: cementBags,
          unit: "Bolsas",
          description: `Mezcla de asiento para pared`
        });
      }

      if (limeBags > 0) {
        results.push({
          itemName: "Cal Hidratada Cacique (25kg)",
          quantity: limeBags,
          unit: "Bolsas",
          description: `Mezcla de asiento para ligar`
        });
      }

      if (sandBolsones > 0) {
        results.push({
          itemName: "Bolsón de Arena Fina",
          quantity: sandBolsones,
          unit: "Bolsones",
          description: `Árido para mortero de asiento`
        });
      }
    } else if (activeTab === "floors") {
      const area = floorLength * floorWidth;
      const volume = area * (floorThickness / 100);
      if (volume <= 0) return [];

      // Standard Concrete proportion 1:3:3 (cement, sand, stone)
      // Per m3 of concrete: ~320kg cement (6.4 bags), ~0.65 m3 sand, ~0.65 m3 stone
      const cementBags = Math.ceil(volume * 6.5);
      const sandBolsones = Math.ceil(volume * 0.7);
      const stoneBolsones = Math.ceil(volume * 0.7);

      results.push({
        itemName: "Cemento Loma Negra (50kg)",
        quantity: cementBags,
        unit: "Bolsas",
        description: `Para ${volume.toFixed(2)} m³ de hormigón (espesor ${floorThickness}cm)`
      });

      results.push({
        itemName: "Bolsón de Arena Fina",
        quantity: sandBolsones,
        unit: "Bolsones",
        description: `Para la mezcla del contrapiso/platea`
      });

      results.push({
        itemName: "Bolsón de Piedra Partida (1-3)",
        quantity: stoneBolsones,
        unit: "Bolsones",
        description: `Para dar resistencia estructural al hormigón`
      });

      if (withMalla) {
        // Malla Sima size: 2m x 3m = 6m2. 10% overlap
        const mallasNeeded = Math.ceil(area / 5.2);
        results.push({
          itemName: "Malla Sima 15x15 (4.2mm - 2x3m)",
          quantity: mallasNeeded,
          unit: "Planchas",
          description: `Armadura de acero para platea/contrapiso (${area.toFixed(1)} m²)`
        });
      }
    } else if (activeTab === "columns") {
      if (colLength <= 0) return [];

      // Let's calculate reinforcement for columns/encadenados
      // Column of 12m length needs 4 vertical bars.
      // Standard bars are 12m. If colLength is 12m, we need exactly 4 bars of Hierro del 10.
      const totalVerticalMeters = colLength * 4;
      const barsOf10 = Math.ceil(totalVerticalMeters / 12 * 1.05); // +5% safety

      // Estribos every 20cm (0.2m). So (colLength / 0.2) = number of estribos.
      // Each estribo of 15x15 column needs approx (0.15*4) + 0.1m overlap = 0.7m.
      const estribosCount = Math.ceil(colLength / 0.2);
      const estriboLength = colSection === "15x15" ? 0.7 : 0.9;
      const iron6Meters = estribosCount * estriboLength;
      const barsOf6 = Math.ceil(iron6Meters / 12 * 1.05);

      // Binding wire: ~0.5kg per 50m of structure
      const wireKgs = Math.max(1, Math.ceil(colLength * 0.1));

      // Concrete: volume of columns
      const areaSection = colSection === "15x15" ? 0.15 * 0.15 : 0.2 * 0.2;
      const volume = colLength * areaSection;
      const cementBags = Math.ceil(volume * 7.5); // Richer mix for columns (350kg/m3)
      const sandBolsones = Math.ceil(volume * 0.7);
      const stoneBolsones = Math.ceil(volume * 0.7);

      results.push({
        itemName: "Hierro Aletado del 10 (Acindar - 12m)",
        quantity: barsOf10,
        unit: "Barras",
        description: `Barras principales longitudinales para armar ${colLength}m lineales`
      });

      results.push({
        itemName: "Hierro Aletado del 6 (Acindar - 12m)",
        quantity: barsOf6,
        unit: "Barras",
        description: `Para confeccionar ${estribosCount} estribos (distanciados cada 20cm)`
      });

      results.push({
        itemName: "Alambre Recocido Negro",
        quantity: wireKgs,
        unit: "Kg",
        description: `Para ataduras de estribos y hierros principales`
      });

      results.push({
        itemName: "Cemento Loma Negra (50kg)",
        quantity: cementBags,
        unit: "Bolsas",
        description: `Hormigón estructural para columnas (vaciado)`
      });

      results.push({
        itemName: "Bolsón de Arena Fina",
        quantity: sandBolsones,
        unit: "Bolsones",
        description: `Arena para el hormigón estructural`
      });

      results.push({
        itemName: "Bolsón de Piedra Partida (1-3)",
        quantity: stoneBolsones,
        unit: "Bolsones",
        description: `Piedra partida para hormigón de alta resistencia`
      });
    }

    return results;
  };

  const results = calculateMaterials();

  const handleAddClick = () => {
    if (results.length === 0) return;
    const itemsToAdd = results.map(r => ({
      name: r.itemName,
      quantity: r.quantity,
      unit: r.unit
    }));
    onAddMaterials(itemsToAdd);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 3000);
  };

  return (
    <div id="calculador" className="bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-sm text-charcoal">
      {/* Header of Card */}
      <div className="bg-brand px-6 py-5 flex items-center gap-3 border-b border-black/10">
        <Calculator className="h-6 w-6 text-charcoal stroke-[2.5px]" />
        <div className="text-left">
          <h3 className="font-display font-black text-lg text-charcoal uppercase tracking-wide">
            Calculador Técnico de Materiales
          </h3>
          <p className="text-xs text-charcoal/80 font-bold">
            Estimá el grueso de tu obra con parámetros reales de corralón.
          </p>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => setActiveTab("walls")}
          className={`flex-1 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer ${
            activeTab === "walls"
              ? "bg-white text-brand border-b-2 border-brand"
              : "text-gray-500 hover:text-charcoal hover:bg-gray-100/50"
          }`}
        >
          Paredes / Mampostería
        </button>
        <button
          onClick={() => setActiveTab("floors")}
          className={`flex-1 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer ${
            activeTab === "floors"
              ? "bg-white text-brand border-b-2 border-brand"
              : "text-gray-500 hover:text-charcoal hover:bg-gray-100/50"
          }`}
        >
          Contrapisos / Plateas
        </button>
        <button
          onClick={() => setActiveTab("columns")}
          className={`flex-1 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors cursor-pointer ${
            activeTab === "columns"
              ? "bg-white text-brand border-b-2 border-brand"
              : "text-gray-500 hover:text-charcoal hover:bg-gray-100/50"
          }`}
        >
          Columnas / Vigas
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Input Panel */}
        <div className="lg:col-span-5 p-6 border-r border-gray-200 bg-white">
          <h4 className="font-display text-xs uppercase tracking-widest text-charcoal font-black mb-4 text-left">
            Parámetros de Obra
          </h4>

          {activeTab === "walls" && (
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                  Largo de la pared (Metros)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={wallLength}
                    onChange={(e) => setWallLength(Number(e.target.value))}
                    className="w-full accent-brand"
                  />
                  <span className="font-mono text-sm font-black bg-[#F3F4F6] border border-gray-200 px-2 py-1 rounded-lg w-16 text-center text-brand shrink-0">
                    {wallLength}m
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                  Alto de la pared (Metros)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={wallHeight}
                    onChange={(e) => setWallHeight(Number(e.target.value))}
                    className="w-full accent-brand"
                  />
                  <span className="font-mono text-sm font-black bg-[#F3F4F6] border border-gray-200 px-2 py-1 rounded-lg w-16 text-center text-brand shrink-0">
                    {wallHeight}m
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1 font-semibold text-left">
                  Superficie total estimada: <strong className="text-charcoal">{(wallLength * wallHeight).toFixed(1)} m²</strong>
                </p>
              </div>

              <div>
                <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                  Tipo de Ladrillo
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setBrickType("hueco12")}
                    className={`px-3 py-2 text-xs rounded-xl border text-left transition-all cursor-pointer ${
                      brickType === "hueco12"
                        ? "border-brand bg-brand/10 text-brand font-bold"
                        : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                    }`}
                  >
                    <div className="font-black text-charcoal">Hueco del 12</div>
                    <div className="text-[9px] text-gray-500 font-semibold">Pared ext / int (12x18x33)</div>
                  </button>
                  <button
                    onClick={() => setBrickType("hueco8")}
                    className={`px-3 py-2 text-xs rounded-xl border text-left transition-all cursor-pointer ${
                      brickType === "hueco8"
                        ? "border-brand bg-brand/10 text-brand font-bold"
                        : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                    }`}
                  >
                    <div className="font-black text-charcoal">Hueco del 8</div>
                    <div className="text-[9px] text-gray-500 font-semibold">Tabique divisor (8x18x33)</div>
                  </button>
                  <button
                    onClick={() => setBrickType("hueco18")}
                    className={`px-3 py-2 text-xs rounded-xl border text-left transition-all cursor-pointer ${
                      brickType === "hueco18"
                        ? "border-brand bg-brand/10 text-brand font-bold"
                        : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                    }`}
                  >
                    <div className="font-black text-charcoal">Hueco del 18</div>
                    <div className="text-[9px] text-gray-500 font-semibold">Pared portante (18x18x33)</div>
                  </button>
                  <button
                    onClick={() => setBrickType("comun")}
                    className={`px-3 py-2 text-xs rounded-xl border text-left transition-all cursor-pointer ${
                      brickType === "comun"
                        ? "border-brand bg-brand/10 text-brand font-bold"
                        : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                    }`}
                  >
                    <div className="font-black text-charcoal">Ladrillo Común</div>
                    <div className="text-[9px] text-gray-500 font-semibold">Tradicional de obra</div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "floors" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                    Largo (M)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={floorLength}
                    onChange={(e) => setFloorLength(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-3 py-2 font-mono text-brand text-lg focus:outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                    Ancho (M)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={floorWidth}
                    onChange={(e) => setFloorWidth(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-3 py-2 font-mono text-brand text-lg focus:outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                  Espesor del Contrapiso / Platea
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[8, 10, 15].map((cms) => (
                    <button
                      key={cms}
                      onClick={() => setFloorThickness(cms)}
                      className={`py-2 text-xs font-mono font-black rounded-xl border transition-all cursor-pointer ${
                        floorThickness === cms
                          ? "border-brand bg-brand/10 text-brand"
                          : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                      }`}
                    >
                      {cms} cm
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-500 mt-2 text-left font-semibold">
                  Sugeridos: <strong className="text-charcoal">8cm</strong> tránsito peatonal, <strong className="text-charcoal">10cm</strong> estándar doméstico, <strong className="text-charcoal">15cm</strong> cocheras/plateas.
                </p>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer group justify-start">
                  <input
                    type="checkbox"
                    checked={withMalla}
                    onChange={(e) => setWithMalla(e.target.checked)}
                    className="h-5 w-5 rounded border-gray-300 text-brand accent-brand focus:ring-0 focus:ring-offset-0"
                  />
                  <div className="text-left">
                    <span className="text-xs font-black text-charcoal group-hover:text-brand transition-colors">
                      Incluir Malla Sima de Refuerzo
                    </span>
                    <p className="text-[10px] text-gray-500 font-semibold">Malla de acero electrosoldada (diámetro 4.2mm)</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeTab === "columns" && (
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                  Metros Lineales de Columna / Viga
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={colLength}
                    onChange={(e) => setColLength(Number(e.target.value))}
                    className="w-full accent-brand"
                  />
                  <span className="font-mono text-sm font-black bg-[#F3F4F6] border border-gray-200 px-2 py-1 rounded-lg w-16 text-center text-brand shrink-0">
                    {colLength}m
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1 font-semibold text-left">
                  Ejemplo: 4 columnas de 3 metros de alto equivalen a 12m lineales.
                </p>
              </div>

              <div>
                <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider mb-2 text-left">
                  Sección / Tamaño del Encofrado
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setColSection("15x15")}
                    className={`py-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                      colSection === "15x15"
                        ? "border-brand bg-brand/10 text-brand font-black"
                        : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                    }`}
                  >
                    15 cm x 15 cm
                    <span className="block text-[9px] text-gray-500 font-semibold mt-1">Paredes del 12</span>
                  </button>
                  <button
                    onClick={() => setColSection("20x20")}
                    className={`py-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                      colSection === "20x20"
                        ? "border-brand bg-brand/10 text-brand font-black"
                        : "border-gray-300 bg-white text-gray-500 hover:border-brand"
                    }`}
                  >
                    20 cm x 20 cm
                    <span className="block text-[9px] text-gray-500 font-semibold mt-1">Paredes portantes</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 border-t border-gray-200 pt-5 text-[11px] text-gray-500 flex items-start gap-2 bg-[#F3F4F6] p-3 rounded-xl border">
            <p className="text-left font-medium">
              Los cálculos son estimativos y de uso orientativo para materiales gruesos. Siempre sugerimos validar con el albañil o director de obra.
            </p>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-7 p-6 bg-charcoal text-white flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 text-left">
              <h4 className="font-display text-xs uppercase tracking-widest text-zinc-400 font-bold">
                Materiales Estimados Necesarios
              </h4>
              <span className="text-[10px] font-bold bg-zinc-850 text-brand px-2.5 py-1 rounded uppercase tracking-wide">
                Cálculo Corralón
              </span>
            </div>

            {results.length > 0 ? (
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 text-left">
                {results.map((mat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-zinc-900 border border-zinc-800 p-3 rounded-xl transition-all hover:border-zinc-700"
                  >
                    <div className="pr-3 text-left">
                      <div className="font-bold text-sm text-white">{mat.itemName}</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5 font-medium">{mat.description}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-base font-black text-brand leading-none mb-1">
                        {mat.quantity}
                      </div>
                      <div className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
                        {mat.unit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-zinc-500 font-medium">
                Ajustá los metros para ver los materiales sugeridos.
              </div>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-zinc-800">
            {addedSuccess ? (
              <div className="bg-emerald-950/50 border border-emerald-500 text-emerald-400 text-xs font-bold rounded-xl px-4 py-3 flex items-center justify-center gap-2">
                <Check className="h-4 w-4 stroke-[3.5px]" />
                ¡Materiales cargados al Presupuesto listo para WhatsApp!
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddClick}
                  disabled={results.length === 0}
                  className="w-full bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-950 text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-zinc-800 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus className="h-4 w-4 text-brand stroke-[3px]" />
                  Cargar al Presupuesto
                </button>
                <a
                  href={`https://wa.me/5491146211467?text=${encodeURIComponent(
                    `Hola Materiales Leloir, calculé estos materiales en su web para un proyecto en la zona de:\n\n${results
                      .map((r) => `- ${r.itemName}: ${r.quantity} ${r.unit}`)
                      .join("\n")}\n\n¿Me podrían pasar precio y costo de flete? ¡Muchas gracias!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-center border-b-2 border-black/20"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-white" />
                  Cotizar por WhatsApp
                </a>
              </div>
            )}
            <p className="text-[10px] text-zinc-500 text-center mt-3 font-semibold uppercase tracking-wider">
              Podés sumarlos a tu lista de arriba y enviar un único pedido detallado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
