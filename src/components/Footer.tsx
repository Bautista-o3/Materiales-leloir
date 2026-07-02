import React from "react";
import { Award, ShieldCheck, Phone, MapPin, MessageSquare, ChevronUp } from "lucide-react";
import { COMPANY_INFO } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-zinc-850 text-zinc-400">
      
      {/* Top Banner with Motto */}
      <div className="bg-zinc-900 border-b border-zinc-850 py-8 text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
              <Award className="h-5 w-5 text-brand stroke-[2.5px]" />
            </div>
            <p className="text-sm font-black text-white text-left leading-tight">
              Un corralón de la zona, con historia y compromiso. <br />
              <span className="text-zinc-400 font-semibold text-xs">70 años construyendo confianza en la zona.</span>
            </p>
          </div>
          
          <button
            onClick={handleScrollTop}
            className="bg-zinc-800 hover:bg-zinc-750 text-white border border-zinc-700 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <span>Volver arriba</span>
            <ChevronUp className="h-3.5 w-3.5 stroke-[2.5px]" />
          </button>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="bg-brand text-charcoal px-2.5 py-1.5 rounded-xl font-black text-xs tracking-tighter uppercase font-display">
                ML
              </div>
              <span className="font-display font-black text-base tracking-tight text-white uppercase">
                MATERIALES LELOIR
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-semibold">
              Fundado en 1956, Materiales Leloir es sinónimo de trayectoria, seriedad y entrega garantizada en materiales de construcción gruesos para obras residenciales, comerciales e industriales en Parque Leloir y todo Zona Oeste.
            </p>

            <div className="pt-2 flex gap-3">
              <span className="text-[10px] font-black uppercase tracking-wider bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded-xl text-brand">
                Loma Negra Distribuidor
              </span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded-xl text-brand">
                Acindar Distribuidor
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navegación Rápida
            </h4>
            <div className="h-1.5 w-8 bg-brand rounded" />
            
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a href="#inicio" className="hover:text-brand transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#materiales" className="hover:text-brand transition-colors">Materiales de Obra</a>
              </li>
              <li>
                <a href="#calculador-seccion" className="hover:text-brand transition-colors">Calculador Técnico</a>
              </li>
              <li>
                <a href="#entregas" className="hover:text-brand transition-colors">Zona de Entregas</a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-brand transition-colors">Opiniones Google</a>
              </li>
              <li>
                <a href="#contacto-seccion" className="hover:text-brand transition-colors">Ubicación y Contacto</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Help (4 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Datos Comerciales
            </h4>
            <div className="h-1.5 w-8 bg-brand rounded" />

            <div className="space-y-3 text-xs sm:text-sm font-semibold">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5 stroke-[2px]" />
                <span className="text-zinc-400 font-semibold leading-relaxed">
                  {COMPANY_INFO.address} <br />
                  <span className="text-zinc-500 block mt-0.5 font-semibold">Villa Udaondo, Ituzaingó, Prov. de Buenos Aires.</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1.5 border-t border-zinc-900">
                <Phone className="h-4 w-4 text-brand shrink-0 stroke-[2px]" />
                <a href={COMPANY_INFO.phoneLink} className="font-black text-white hover:text-brand transition-all">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1.5 border-t border-zinc-900">
                <WhatsAppIcon className="h-4 w-4 text-[#10B981] shrink-0" />
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-black text-white hover:text-brand transition-all">
                  WhatsApp: +54 9 11 4621-1467
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-500 font-semibold">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Materiales Leloir. Todos los derechos reservados. <br />
            <span className="text-zinc-600 font-medium">70 años construyendo historia junto a los vecinos de Ituzaingó.</span>
          </p>
          <div className="flex gap-4">
            <a href="#inicio" className="hover:text-brand hover:underline transition-all">Políticas de Venta</a>
            <span>&middot;</span>
            <a href="#contacto-seccion" className="hover:text-brand hover:underline transition-all">Flete Directo</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
