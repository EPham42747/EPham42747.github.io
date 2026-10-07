import { MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { FadeIn } from './FadeIn'

export const Hero = () => {
  return (
    <section id="about" className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-neutral-100 dark:border-neutral-800">
      <div className="w-[92%] sm:w-[88%] lg:w-[75%] max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Text & Bio */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-3">
                Hey, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">{portfolioData.name}</span> here!
              </h1>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-lg font-medium text-neutral-600 dark:text-neutral-400 mb-6">
                <MapPin className="w-5 h-5 text-neutral-400 shrink-0" />
                <span>{portfolioData.contact.location}</span>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
                {portfolioData.bio}
              </p>
            </div>

            {/* Right Column: Headshot / Avatar */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-black/20 dark:bg-black/60 rounded-3xl blur-md opacity-70 group-hover:opacity-90 transition duration-500"></div>
              
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-700 shadow-xl shadow-black/15 dark:shadow-black/40 flex items-center justify-center">
                {portfolioData.avatarUrl ? (
                  <img
                    src={portfolioData.avatarUrl}
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-white p-6 text-center select-none">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl font-bold font-mono tracking-wider mb-2">
                      EP
                    </div>
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Headshot</span>
                    <span className="text-[11px] text-neutral-500 mt-1">Add image in portfolioData.ts</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
