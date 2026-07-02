import React from "react";
import { Star, MessageSquare, Check, Quote } from "lucide-react";
import { GOOGLE_REVIEWS, COMPANY_INFO } from "../data";

export default function Reviews() {
  return (
    <section id="opiniones" className="py-20 bg-cement border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-black block">
              Prueba Social Real
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal tracking-tight uppercase">
              Opiniones de Quienes nos Eligen
            </h2>
            <p className="text-gray-600 text-sm max-w-xl font-medium">
              Nuestra mayor garantía es el respaldo de nuestros clientes en 70 años. Mirá lo que opinan vecinos, contratistas y arquitectos de la zona sobre nuestro servicio.
            </p>
          </div>

          {/* Google Star Badge */}
          <div className="bg-white border border-gray-300 p-5 rounded-3xl flex items-center gap-4 shrink-0 text-left shadow-sm">
            <div className="bg-brand/10 h-12 w-12 rounded-2xl flex items-center justify-center font-black text-xl text-brand border border-brand/20 font-mono">
              {COMPANY_INFO.googleRating}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(COMPANY_INFO.googleRating)
                        ? "text-brand fill-brand"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal font-black block mt-1">
                Calificación Google My Business
              </span>
              <span className="text-[10px] text-gray-500 font-semibold block mt-0.5 uppercase tracking-wider">
                Basado en {COMPANY_INFO.googleReviewCount} opiniones reales
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 p-6 rounded-3xl flex flex-col justify-between shadow-sm relative group hover:border-brand/40 transition-colors"
            >
              {/* Quote visual element */}
              <div className="absolute top-4 right-6 text-gray-100 group-hover:text-brand/10 transition-colors">
                <Quote className="h-8 w-8 stroke-[1.5px]" />
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < review.rating ? "text-brand fill-brand" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic text-left font-semibold">
                  "{review.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="bg-brand/10 h-10 w-10 rounded-full border border-brand/20 flex items-center justify-center text-xs font-black text-brand uppercase tracking-wider font-display shrink-0">
                  {review.initials}
                </div>
                <div className="text-left leading-tight">
                  <span className="text-xs font-black text-charcoal block">
                    {review.author}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    {review.verified && (
                      <span className="bg-emerald-50 border border-emerald-200 text-emerald-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide inline-flex items-center gap-0.5">
                        <Check className="h-2 w-2 stroke-[3.5px]" />
                        Cliente Verificado
                      </span>
                    )}
                    <span className="text-[10px] text-gray-400 font-bold">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review callout */}
        <div className="mt-10 text-center">
          <span className="text-xs text-gray-500 font-semibold block">
            ¿Querés dejar tu opinión sobre Materiales Leloir?
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ8_K6VzXEvJURX3OPh7D7eXo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand/95 font-black ml-1 hover:underline"
            >
              Escribí una reseña en Google &rarr;
            </a>
          </span>
        </div>

      </div>
    </section>
  );
}
