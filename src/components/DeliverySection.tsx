import React from "react";
import { Truck, MapPin, Map, Clock, ShieldAlert, ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function DeliverySection() {
  return (
    <section id="entregas" className="py-20 bg-white border-t border-gray-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Panel */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-black block">
              Logística Certificada
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal tracking-tight uppercase">
              Pedí tus materiales y recibilos en tu obra rápido
            </h2>
            <div className="h-1.5 w-20 bg-brand rounded" />
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium mt-6">
              En una obra, esperar el camión es perder tiempo y dinero. Por eso coordinamos despachos ágiles para que tu cuadrilla nunca se quede sin cemento, arena ni ladrillos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F9FAFB] border border-gray-300 p-4 rounded-3xl space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-charcoal">
                  <Clock className="h-5 w-5 text-brand shrink-0 stroke-[2.5px]" />
                  <span className="font-black text-sm uppercase tracking-wider">Coordinación Exacta</span>
                </div>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  Fijamos fecha y rango horario para descargar. Te avisamos cuando el camión sale del corralón.
                </p>
              </div>

              <div className="bg-[#F9FAFB] border border-gray-300 p-4 rounded-3xl space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-charcoal">
                  <Truck className="h-5 w-5 text-brand shrink-0 stroke-[2.5px]" />
                  <span className="font-black text-sm uppercase tracking-wider">Descarga con Hidrogrúa</span>
                </div>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  Ideal para descargar bolsones pesados de arena/piedra y pallets enteros de ladrillos directo adentro del lote.
                </p>
              </div>
            </div>

            {/* Coverage Badges */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <h4 className="text-xs font-black text-charcoal uppercase tracking-widest flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand stroke-[2.5px]" />
                Zonas de entrega prioritaria diaria:
              </h4>
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.coverageZones.map((zone, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F3F4F6] border border-gray-300 text-charcoal font-black text-xs px-3.5 py-1.5 rounded-xl transition-all hover:border-brand cursor-default"
                  >
                    {zone}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 font-bold">
                * Si tu obra está en otra localidad de Zona Oeste, consultanos factibilidad técnica de flete y descarga.
              </p>
            </div>
          </div>

          {/* Graphical Right Panel */}
          <div className="lg:col-span-5 relative">
            <div className="bg-charcoal border border-zinc-850 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              {/* Decorative circle backdrop */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand/5 blur-xl" />

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-brand/10 border border-brand/20 text-brand rounded-xl flex items-center justify-center shrink-0">
                  <Map className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-white">
                    Consulta de Cobertura de Flete
                  </h3>
                  <p className="text-[11px] text-zinc-400 font-medium">Verificá el costo de flete para tu dirección de obra.</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-4 border border-zinc-850 rounded-2xl space-y-4 text-left">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand">
                    Flete Local Minimizado
                  </span>
                  <p className="text-xs text-zinc-300 leading-normal font-semibold">
                    Al estar ubicados estratégicamente sobre <strong className="text-white font-black">Av. Martín Fierro 4361 (Villa Udaondo)</strong>, reducimos los costos y tiempos de flete para obras en Leloir e Ituzaingó Norte.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 border-t border-zinc-800 pt-3 font-semibold">
                  <ShieldAlert className="h-4 w-4 text-brand shrink-0" />
                  <span>Aceptamos acopio para mantener congelados tus precios contra inflación.</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hola Materiales Leloir, quiero consultar si realizan envíos de materiales a mi zona. Mi obra queda en:`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer border-b-2 border-black/20"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-white text-[#10B981]" />
                  <span>Consultar Entrega en Mi Zona</span>
                </a>
                
                <a
                  href="#contacto-seccion"
                  className="w-full bg-zinc-800 hover:bg-zinc-750 text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center border border-zinc-700"
                >
                  <span>Pedir Cotización de Flete</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Industrial design drop accent */}
            <div className="absolute top-2 right-2 h-4 w-4 bg-brand rounded" />
          </div>
        </div>

      </div>
    </section>
  );
}
