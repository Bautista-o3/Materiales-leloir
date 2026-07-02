import React, { useState } from "react";
import { Phone, MapPin, MessageSquare, ClipboardList, Trash2, Calendar, Check, ArrowRight, Map } from "lucide-react";
import { COMPANY_INFO } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

interface ContactFormProps {
  selectedItems: { name: string; quantity: number; unit: string }[];
  onRemoveItem: (index: number) => void;
  onUpdateQty: (index: number, newQty: number) => void;
  onClearAll: () => void;
}

export default function ContactForm({ selectedItems, onRemoveItem, onUpdateQty, onClearAll }: ContactFormProps) {
  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryZone, setDeliveryZone] = useState("");
  const [additionalMsg, setAdditionalMsg] = useState("");

  // Submission success
  const [submittedWeb, setSubmittedWeb] = useState(false);

  // Generate WhatsApp text
  const getWhatsAppMessage = () => {
    let msg = `Hola Materiales Leloir! Mi nombre es *${name || "Cliente"}* (Tel: ${phone || "No especificado"}).\n`;
    msg += `Quiero pedir cotización para entregar en la zona de: *${deliveryZone || "Parque Leloir/alrededores"}*.\n\n`;

    if (selectedItems.length > 0) {
      msg += `*Lista de materiales solicitados:*\n`;
      selectedItems.forEach((item) => {
        msg += `• ${item.quantity} ${item.unit} de *${item.name}*\n`;
      });
    } else {
      msg += `*Consulta de materiales:* (No seleccioné materiales específicos de la lista, necesito asesoramiento/presupuesto general)\n`;
    }

    if (additionalMsg) {
      msg += `\n*Detalles adicionales / Mensaje:*\n${additionalMsg}`;
    }

    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Por favor, completá tu Nombre y Teléfono antes de enviar por WhatsApp.");
      return;
    }
    const link = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppMessage()}`;
    window.open(link, "_blank");
  };

  const handleWebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !deliveryZone) {
      alert("Por favor completá los campos obligatorios: Nombre, Teléfono y Zona de entrega.");
      return;
    }
    setSubmittedWeb(true);
  };

  const handleResetForm = () => {
    setName("");
    setPhone("");
    setDeliveryZone("");
    setAdditionalMsg("");
    onClearAll();
    setSubmittedWeb(false);
  };

  return (
    <section id="contacto-seccion" className="py-20 bg-cement border-t border-gray-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-black block">
            Contacto Directo & Presupuestos
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal tracking-tight uppercase">
            ¿Necesitás materiales para tu obra?
          </h2>
          <div className="h-1.5 w-20 bg-brand mx-auto rounded mt-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-6 font-medium">
            “Llamanos o pedí presupuesto. Te asesoramos rápido y sin dar vueltas.”
          </p>
        </div>

        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-sm text-charcoal">
            
            {submittedWeb ? (
              <div className="py-10 text-center space-y-6">
                <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Check className="h-8 w-8 stroke-[3.5px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl text-charcoal uppercase tracking-wide">
                    ¡Solicitud Recibida Correctamente!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed font-semibold">
                    Un asesor técnico de la familia de <strong>Materiales Leloir</strong> se pondrá en contacto con vos en los próximos 15 minutos para formalizar el presupuesto y coordinar la logística.
                  </p>
                </div>

                <div className="bg-[#F9FAFB] border border-gray-300 p-4 rounded-2xl max-w-md mx-auto text-left space-y-3">
                  <span className="text-xs font-black text-brand uppercase tracking-wider block">Resumen de tu pedido:</span>
                  <div className="text-xs text-gray-600 font-bold">
                    <span className="block mb-1"><strong>Nombre:</strong> {name}</span>
                    <span className="block mb-1"><strong>Teléfono:</strong> {phone}</span>
                    <span className="block mb-1"><strong>Zona de entrega:</strong> {deliveryZone}</span>
                    {selectedItems.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <strong className="block text-gray-500 mb-1">Materiales:</strong>
                        {selectedItems.map((item, idx) => (
                          <span key={idx} className="block font-mono text-[11px] text-brand">
                            - {item.quantity} {item.unit} x {item.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleResetForm}
                  className="bg-brand hover:bg-brand/90 text-charcoal font-black text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer border-b-2 border-black/20"
                >
                  Cargar otra Consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleWebSubmit} className="space-y-6">
                <div className="border-b border-gray-200 pb-3 text-left">
                  <h3 className="font-display font-black text-base text-charcoal uppercase tracking-wide">
                    Presupuestador Express
                  </h3>
                  <p className="text-[11px] text-gray-500 font-semibold leading-tight mt-0.5">
                    Cargá tus datos básicos. Podés enviar la lista directamente a nuestro WhatsApp o procesarla de forma interna.
                  </p>
                </div>

                {/* Form fields layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider">
                      Tu Nombre y Apellido <span className="text-brand">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider">
                      Teléfono de Contacto <span className="text-brand">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 11 4621 1467"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider">
                    Zona de Entrega de Obra <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Barrio Parque Leloir / Martín Fierro al 3800"
                    value={deliveryZone}
                    onChange={(e) => setDeliveryZone(e.target.value)}
                    className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand"
                  />
                </div>

                {/* Selected materials panel (pre-filled dynamic quote sheet) */}
                <div className="space-y-2 text-left">
                  <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider flex items-center justify-between">
                    <span>Lista de Materiales Solicitados</span>
                    <span className="text-[9px] font-mono font-bold text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/20 uppercase">
                      {selectedItems.length} seleccionados
                    </span>
                  </label>

                  {selectedItems.length > 0 ? (
                    <div className="border border-gray-300 rounded-2xl overflow-hidden bg-[#F9FAFB]">
                      <div className="divide-y divide-gray-200 max-h-[220px] overflow-y-auto pr-1">
                        {selectedItems.map((item, index) => (
                          <div key={index} className="px-4 py-3 flex items-center justify-between gap-4 text-xs hover:bg-gray-100/50 transition-colors">
                            <div className="text-left">
                              <span className="font-bold text-charcoal block">{item.name}</span>
                              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5 block">
                                {item.unit}
                              </span>
                            </div>

                            <div className="flex items-center gap-4 shrink-0">
                              {/* Inline quantity adjuster */}
                              <div className="flex items-center bg-white border border-gray-300 rounded-lg h-7 overflow-hidden">
                                <button
                                  type="button"
                                  onClick={() => onUpdateQty(index, item.quantity - 1)}
                                  className="px-2 text-gray-500 hover:text-charcoal hover:bg-gray-100 font-mono"
                                >
                                  -
                                </button>
                                <span className="w-8 text-center font-mono font-bold text-brand text-xs">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => onUpdateQty(index, item.quantity + 1)}
                                  className="px-2 text-gray-500 hover:text-charcoal hover:bg-gray-100 font-mono"
                                >
                                  +
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => onRemoveItem(index)}
                                className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition-all cursor-pointer"
                                title="Quitar de la lista"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Summary indicator */}
                      <div className="bg-[#F3F4F6] px-4 py-2.5 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                        <span>¿Querés agregar más materiales? Buscalos arriba.</span>
                        <button
                          type="button"
                          onClick={onClearAll}
                          className="text-red-500 hover:text-red-600 font-bold underline cursor-pointer"
                        >
                          Limpiar Lista
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-dashed border-gray-300 rounded-2xl p-5 text-center bg-[#F9FAFB]">
                      <ClipboardList className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                        No seleccionaste materiales específicos aún. Podés tocar <strong className="text-charcoal">“Sumar”</strong> en el catálogo de arriba o usar el calculador técnico, o simplemente describir lo que necesitás en la casilla de abajo.
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-[10px] font-black text-charcoal uppercase tracking-wider">
                    Mensaje Adicional o Comentarios
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos más sobre tu obra. Ej: 'Necesito entrega para este viernes', '¿Tienen acopio por 6 meses?', 'Presupuestar también maderas y clavos'."
                    value={additionalMsg}
                    onChange={(e) => setAdditionalMsg(e.target.value)}
                    className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand resize-y"
                  />
                </div>

                {/* CTAs Submit Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-zinc-900/10 hover:bg-zinc-900/15 active:bg-zinc-900/20 text-charcoal font-black text-xs uppercase tracking-wider py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-gray-300"
                  >
                    <span>Enviar por Web</span>
                    <ArrowRight className="h-4 w-4 stroke-[2.5px]" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer border-b-2 border-black/20"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5 text-white" />
                    <span>Enviar por WhatsApp</span>
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    * Al enviar por WhatsApp se generará un pedido automático listo en tu celular.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details and Static Maps Representation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Details Card */}
            <div className="bg-charcoal border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-left text-white">
              <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">
                Información del Corralón
              </h3>
              
              <div className="h-1.5 w-10 bg-brand rounded" />

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">DIRECCIÓN FÍSICA</span>
                    <span className="text-sm font-semibold text-white block mt-0.5">{COMPANY_INFO.address}</span>
                    <span className="text-[11px] text-zinc-400 mt-1 block">Esquina sobre Av. Martín Fierro. Fácil acceso para camiones de carga y particulares.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-zinc-800 pt-4">
                  <Phone className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">TELÉFONO FIJO</span>
                    <a href={COMPANY_INFO.phoneLink} className="text-sm font-black text-brand block mt-0.5 hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-[11px] text-zinc-400 mt-1 block">Atención telefónica comercial inmediata por sus dueños.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-zinc-800 pt-4">
                  <Calendar className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">HORARIOS DE ATENCIÓN</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">Lunes a Viernes: 08:00 a 12:00 y 13:30 a 17:30</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">Sábados: 08:00 a 13:00</span>
                    <span className="text-[10px] text-zinc-400 block mt-1">Sugerimos consultar feriados o variaciones previamente por teléfono.</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-850 p-4 rounded-2xl flex items-center justify-between">
                <div className="text-left text-xs">
                  <span className="font-extrabold text-white block">¿Estás en camino?</span>
                  <span className="text-zinc-400 font-semibold">Indicaciones de navegación directo.</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Martin+Fierro+4361+Villa+Udaondo+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand hover:bg-brand/90 text-charcoal font-black text-[10px] uppercase tracking-wider px-3.5 py-2.5 rounded-lg shrink-0 transition-all inline-flex items-center gap-1 border-b border-black/20"
                >
                  <Map className="h-3.5 w-3.5" />
                  Cómo Llegar
                </a>
              </div>
            </div>

            {/* Google Maps Embed representation */}
            <div className="bg-charcoal border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-850 flex justify-between items-center">
                <span className="font-display font-black text-xs uppercase tracking-wider text-zinc-300">
                  Ubicación en Parque Leloir / Udaondo
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Styled Interactive Embed Frame or Mock map representation */}
              <div className="relative h-64 bg-zinc-900 flex flex-col items-center justify-center p-4">
                <iframe
                  title="Ubicación Materiales Leloir"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4735391217646!2d-58.68341642425916!3d-34.61746777294975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbc3557ba32f3%3A0x7a797bb0878f735f!2sMart%C3%ADn%20Fierro%204361%2C%20B1714%20Villa%20Udaondo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1714578912345!5m2!1ses-419!2sar"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
