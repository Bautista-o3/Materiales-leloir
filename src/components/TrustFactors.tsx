import React from "react";
import { Award, Truck, UserCheck, TrendingDown, Package, Zap, CheckCircle2 } from "lucide-react";
import { VALUE_PROPOSITIONS } from "../data";

export default function TrustFactors() {
  // Mapper to map icon names from the database directly to Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Award":
        return <Award className="h-6 w-6 text-brand" />;
      case "Truck":
        return <Truck className="h-6 w-6 text-brand" />;
      case "UserCheck":
        return <UserCheck className="h-6 w-6 text-brand" />;
      case "TrendingDown":
        return <TrendingDown className="h-6 w-6 text-brand" />;
      case "Package":
        return <Package className="h-6 w-6 text-brand" />;
      case "Zap":
        return <Zap className="h-6 w-6 text-brand" />;
      default:
        return <CheckCircle2 className="h-6 w-6 text-brand" />;
    }
  };

  return (
    <section className="py-20 bg-cement border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section with Commercial copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-black block">
            Nuestros Diferenciales
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal tracking-tight uppercase">
            Todo lo que necesitás para avanzar tu obra
          </h2>
          <div className="h-1.5 w-20 bg-brand mx-auto rounded mt-4" />
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-6 font-medium">
            “Sabemos que en una obra el tiempo importa. Por eso te ayudamos a elegir bien, resolver rápido y recibir los materiales cuando los necesitás.”
          </p>
        </div>

        {/* Grid of Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 hover:border-brand/70 p-6 rounded-2xl shadow-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 bg-[#F3F4F6] border border-gray-200 group-hover:border-brand rounded-xl flex items-center justify-center mb-5 transition-colors shadow-sm">
                  {getIcon(prop.iconName)}
                </div>
                <h3 className="font-display font-black text-lg text-charcoal mb-2 tracking-tight uppercase group-hover:text-brand transition-colors">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Sub-CTA for assurance */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">
            ¿Tenés dudas sobre los materiales adecuados para tu estructura?
            <a href="#contacto-seccion" className="text-brand hover:text-brand/80 font-black ml-1 hover:underline inline-flex items-center gap-0.5">
              Consultá a nuestros expertos &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
