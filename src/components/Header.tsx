import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Materiales", href: "#materiales" },
    { name: "Calculador", href: "#calculador-seccion" },
    { name: "Entregas", href: "#entregas" },
    { name: "Opiniones", href: "#opiniones" },
    { name: "Clientes", href: "#clientes" },
    { name: "Ubicación", href: "#contacto-seccion" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 pt-4 pb-2`}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-6 py-3.5 rounded-3xl shadow-lg border-b-4 border-brand transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md"
          : "bg-charcoal"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="bg-brand text-charcoal p-2 rounded-xl font-black text-sm tracking-tighter uppercase font-display border border-brand/80 group-hover:bg-brand/90 transition-colors">
              ML
            </div>
            <div>
              <span className="font-display font-black text-lg tracking-tight text-white block leading-none">
                MATERIALES LELOIR
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand font-black block mt-1">
                Fundado en 1956
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-wider font-black text-zinc-300 hover:text-brand transition-colors py-1.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.phoneLink}
              className="text-zinc-300 hover:text-white bg-charcoal/40 border border-zinc-700 px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors hover:bg-zinc-800"
            >
              <Phone className="h-3.5 w-3.5 text-brand stroke-[2.5px]" />
              <span>Llamar</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Materiales%20Leloir%2C%20quiero%20pedir%20un%20presupuesto%20de%20materiales%20para%20una%20obra.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors border-b-2 border-black/20"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-white text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contacto-seccion"
              className="bg-brand hover:bg-brand/90 active:bg-brand/80 text-charcoal px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-brand/10 border-b-2 border-black/20"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Pedir Presupuesto</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none p-1.5 bg-charcoal/40 border border-zinc-700 rounded-xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 stroke-[2.5px]" /> : <Menu className="h-6 w-6 stroke-[2.5px]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal border-b-4 border-brand px-4 pt-2 pb-6 space-y-3 mt-2 rounded-3xl shadow-2xl mx-1 border border-zinc-800">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-brand font-black uppercase tracking-wider text-xs py-2.5 px-3 hover:bg-charcoal/80 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-2">
            <a
              href={COMPANY_INFO.phoneLink}
              className="bg-charcoal/50 border border-zinc-700 text-center text-white py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-zinc-800"
            >
              <Phone className="h-3.5 w-3.5 text-brand stroke-[2.5px]" />
              Llamar
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20Materiales%20Leloir%2C%20quiero%20pedir%20un%20presupuesto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-center text-white py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-500 border-b-2 border-black/20"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-white text-emerald-600" />
              WhatsApp
            </a>
            <a
              href="#contacto-seccion"
              onClick={() => setIsOpen(false)}
              className="col-span-2 bg-brand text-center text-charcoal py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 border-black/20"
            >
              <FileText className="h-3.5 w-3.5" />
              Pedir Presupuesto Formal
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
