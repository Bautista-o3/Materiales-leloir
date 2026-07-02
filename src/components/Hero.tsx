import React from "react";
import { Phone, MapPin, Star, ShieldCheck, ChevronRight, Truck, Award, UserCheck } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-12 bg-cement overflow-hidden">
      {/* Background visual styling (construction grids, ambient warm/amber accents) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Technical drafting grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Body */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Hero Card - Left Column */}
          <div className="lg:col-span-7 bg-charcoal rounded-3xl relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 border border-zinc-800 shadow-2xl min-h-[480px]">
            {/* Ambient image overlay */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1590060419131-40911850119b?auto=format&fit=crop&q=80&w=1024')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent"></div>
            
            {/* Top row */}
            <div className="relative z-10 self-start">
              <span className="inline-block bg-brand text-charcoal px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded mb-6">
                Líderes en Construcción • Desde 1956
              </span>
            </div>

            {/* Bottom row (text content & CTAs) */}
            <div className="relative z-10 space-y-6 mt-12">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tighter uppercase italic">
                Materiales para construir<br />
                <span className="text-brand">con confianza</span> en la zona.
              </h2>
              
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
                Corralón líder en Parque Leloir y Villa Udaondo. Brindamos atención directa por sus propios dueños, precios altamente competitivos y entrega veloz coordinada en obra.
              </p>

              {/* Confidence metrics row */}
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-brand italic">70</span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-none">
                    Años de<br />Trayectoria
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-brand italic">4.5★</span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-none">
                    35 Opiniones<br />en Google
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#contacto-seccion"
                  className="bg-brand hover:bg-brand/90 active:bg-brand/85 text-charcoal font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl text-center flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer border-b-2 border-black/20"
                >
                  <span>Pedir Cotización</span>
                  <ChevronRight className="h-4 w-4 stroke-[3px]" />
                </a>

                <a
                  href={COMPANY_INFO.phoneLink}
                  className="bg-zinc-900/60 hover:bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl border border-zinc-800 text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  <span>Llamar: {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href="#contacto-seccion"
                  className="text-zinc-400 hover:text-white font-bold text-[11px] uppercase tracking-wider py-2 text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-brand" />
                  <span>Ubicación</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bento Right Column - Logistics highlight card */}
          <div className="lg:col-span-5 bg-charcoal border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Accent ribbon */}
            <div className="absolute top-0 right-0 bg-brand text-charcoal text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md">
              OBRA SEGURA
            </div>

            <div className="space-y-5">
              <div className="border-b border-zinc-800 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-bold block mb-1">
                  Logística Materiales Leloir
                </span>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  “La obra no espera”
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Sabemos que el tiempo es plata. Coordinamos entregas rápidas con nuestra flota en Parque Leloir, Udaondo y alrededores.
                </p>
              </div>

              {/* Steps/Features lists */}
              <div className="space-y-3">
                <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl flex items-start gap-3">
                  <span className="text-xs font-black font-mono text-brand px-2 py-1 bg-zinc-950 border border-zinc-800 rounded">01</span>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Flota Propia de Camiones</h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Listos para despachar piedra, arena, ladrillos y cemento.</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl flex items-start gap-3">
                  <span className="text-xs font-black font-mono text-brand px-2 py-1 bg-zinc-950 border border-zinc-800 rounded">02</span>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Descarga con Hidrogrúa</h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Ubicamos los bolsones pesados dentro de tu lote con comodidad.</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-850 p-3 rounded-xl flex items-start gap-3">
                  <span className="text-xs font-black font-mono text-brand px-2 py-1 bg-zinc-950 border border-zinc-800 rounded">03</span>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Acopio para Congelar Precio</h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Congelás costo hoy y te lo entregamos a medida que avanza la obra.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand/10 border border-brand/20 rounded-2xl p-4 flex items-center justify-between mt-5">
              <div className="text-left">
                <span className="text-brand font-black text-xs block uppercase">¿Recalculando materiales?</span>
                <span className="text-[10px] text-zinc-400">Usá nuestro calculador de obra rápido.</span>
              </div>
              <a
                href="#calculador-seccion"
                className="bg-brand hover:bg-brand/90 text-charcoal font-black text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg shrink-0 transition-colors"
              >
                Calculador
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
