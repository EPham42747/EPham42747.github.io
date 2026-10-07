import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { FadeIn } from './FadeIn'

export const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-neutral-100 dark:border-neutral-800">
      <div className="w-[92%] sm:w-[88%] lg:w-[75%] max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Experience
            </h2>
          </div>
        </FadeIn>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:h-full before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800">
          {portfolioData.experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 80}>
              {(isVisible) => (
                <div className="relative pl-10 md:pl-12 group">
                  {/* Timeline dot in experience blue color, expands on scroll */}
                  <div
                    className={`absolute left-1.5 md:left-2 top-2 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-900 bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-all duration-700 ease-out ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                  ></div>

                <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/60 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-600 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    
                    {/* Left: Logo/Icon + Role & Company */}
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      {/* Company Logo / Placeholder Icon */}
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                        {exp.logoUrl ? (
                          <img
                            src={exp.logoUrl}
                            alt={exp.company}
                            className="w-full h-full object-contain p-1"
                          />
                        ) : (
                          <Building2 className="w-6 h-6 text-neutral-400 dark:text-neutral-500" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                          {exp.role}
                        </h3>
                        <div className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    {/* Right: Period & Location (2 stacked lines, right aligned, no box) */}
                    <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono shrink-0 sm:text-right">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* 1-2 sentence summary, no bullets */}
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              </div>
            )}
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
