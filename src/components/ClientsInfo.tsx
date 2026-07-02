import React from "react";
import { User, Hammer, ClipboardList, RefreshCw, MessageSquare } from "lucide-react";
import { CLIENT_SEGMENTS, COMPANY_INFO } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ClientsInfo() {
  const getIcon = (title: string) => {
    if (title.includes("Familias")) {
      return <User className="h-5 w-5 text-brand stroke-[2.5px]" />;
    } else if (title.includes("Albañiles")) {
      return <Hammer className="h-5 w-5 text-brand stroke-[2.5px]" />;
    } else if (title.includes("Arquitectos")) {
      return <ClipboardList className="h-5 w-5 text-brand stroke-[2.5px]" />;
    } else {
      return <RefreshCw className="h-5 w-5 text-brand stroke-[2.5px]" />;
    }
  };

  return (
    <section id="clientes" className="py-20 bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-black block">
            Especialización Local
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal tracking-tight uppercase">
            Soluciones para cada tipo de obra
          </h2>
          <div className="h-1.5 w-20 bg-brand mx-auto rounded mt-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-6 font-medium">
            No todas las obras son iguales, ni todos los clientes necesitan la misma atención. Adaptamos nuestra logística, precios y asesoramiento a tu medida.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_SEGMENTS.map((segment, idx) => (
            <div
              key={idx}
              className="bg-[#F9FAFB] border border-gray-300 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-brand/40 transition-all shadow-sm"
            >
              <div className="space-y-4">
                {/* Header card info */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-[#F3F4F6] rounded-xl flex items-center justify-center border border-gray-200 shrink-0">
                      {getIcon(segment.title)}
                    </div>
                    <h3 className="font-display font-black text-lg text-charcoal text-left tracking-tight">
                      {segment.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-brand/10 border border-brand/20 text-brand px-2.5 py-1 rounded-xl">
                    {segment.badge}
                  </span>
                </div>

                {/* Body details */}
                <p className="text-sm text-gray-600 text-left leading-relaxed font-semibold">
                  {segment.description}
                </p>

                {/* Phrase bubble */}
                <div className="bg-white border-l-4 border-brand px-4 py-3 rounded-r-2xl border border-gray-200 border-l-0 shadow-sm">
                  <p className="text-xs text-gray-700 italic text-left leading-relaxed font-semibold">
                    {segment.phrase}
                  </p>
                </div>
              </div>

              {/* Action Button for specific WhatsApp pre-filled query */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hola Materiales Leloir, soy ${segment.title.replace("Para ", "")} y tengo una obra en Parque Leloir / alrededores. ¿Me podrían dar asesoramiento y presupuesto?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#F3F4F6] text-charcoal hover:text-charcoal/90 border border-gray-300 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Consultar como {segment.title.replace("Para ", "")}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
