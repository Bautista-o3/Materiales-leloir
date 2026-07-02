import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function WhatsAppButton() {
  return (
    <>
      {/* Desktop Floating WhatsApp Bubble (hidden on small devices, visible from md up) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Materiales%20Leloir!%20Quiero%20pedir%20un%20presupuesto%20de%20materiales%20para%20mi%20obra.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative border border-emerald-400"
          title="Consultar por WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10" />
          
          <MessageSquare className="h-6 w-6 fill-white text-emerald-500" />
          
          {/* Tooltip */}
          <span className="absolute right-14 bg-zinc-950 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-zinc-800">
            ¿Obra en marcha? Consultanos ahora
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar (hidden on md and larger, visible on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-4 py-3 shadow-lg flex gap-3">
        {/* Call Now button */}
        <a
          href={COMPANY_INFO.phoneLink}
          className="flex-1 bg-zinc-900 hover:bg-zinc-850 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-3 rounded-xl flex items-center justify-center gap-2 border border-zinc-800 active:bg-zinc-950 transition-all"
        >
          <Phone className="h-4 w-4 text-amber-500" />
          <span>Llamar Ahora</span>
        </a>

        {/* WhatsApp Quote button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Materiales%20Leloir!%20Quiero%20pedir%20un%20presupuesto%20de%20materiales%20para%20mi%20obra.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all active:bg-emerald-700 shadow-md shadow-emerald-950/20"
        >
          <MessageSquare className="h-4 w-4 fill-white text-emerald-600" />
          <span>WhatsApp Obra</span>
        </a>
      </div>
    </>
  );
}
