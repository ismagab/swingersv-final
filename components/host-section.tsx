import { Instagram, Link as LinkIcon } from "lucide-react"

export function HostSection() {
  return (
    <section className="py-16 bg-zinc-950/50 border-t border-yellow-500/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Fondo decorativo (Opcional, le da un toque premium) */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            
            {/* Foto de los Hosts */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative">
              <div className="absolute inset-0 bg-yellow-500 rounded-full animate-pulse opacity-20 blur-xl" />
              <img 
                src="/isma-gab.jpg" 
                alt="Isma y Gab - Hosts de SwingerSV" 
                className="w-full h-full object-cover rounded-full border-4 border-yellow-500/30 shadow-xl relative z-10"
              />
            </div>

            {/* Información sobre los Hosts */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-500 uppercase">
                Conoce a los Hosts
              </h2>
              <h3 className="text-3xl sm:text-4xl font-[var(--font-playfair)] text-white">
                Isma & Gab
              </h3>
              
              <div className="w-12 h-1 bg-yellow-500 mx-auto md:mx-0 rounded-full my-4" />

              <p className="text-gray-400 leading-relaxed text-lg">
                Somos una pareja apasionada por crear espacios seguros, exclusivos y llenos de respeto. 
                Nuestra misión es guiar a nuevas y experimentadas parejas a vivir sus fantasías en un 
                ambiente de confianza total. ¡Bienvenidos a nuestra comunidad!
              </p>

              {/* Botón de Redes Sociales */}
              <div className="pt-4 flex justify-center md:justify-start">
                <a 
                  href="https://www.atom.bio/ismagab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-yellow-500 hover:text-black text-white border border-yellow-500/30 px-6 py-3 rounded-full font-medium transition-all duration-300 group"
                >
                  <LinkIcon className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Nuestras Redes Personales</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
