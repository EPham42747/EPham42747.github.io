import { GraduationCap, Calendar, MapPin, Bookmark } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { FadeIn } from './FadeIn'

export const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-neutral-100 dark:border-neutral-800">
      <div className="w-[92%] sm:w-[88%] lg:w-[75%] max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Education
            </h2>
          </div>
        </FadeIn>

        {/* Education Timeline Cards with Vertical Line */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 md:before:left-4 before:h-full before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800">
          {portfolioData.education.map((edu, idx) => {
            const additionalInfoList = Array.isArray(edu.additionalInfo)
              ? edu.additionalInfo
              : edu.additionalInfo
              ? [edu.additionalInfo]
              : []

            return (
              <FadeIn key={idx} delay={idx * 100}>
                {(isVisible) => (
                  <div className="relative pl-10 md:pl-12 group">
                    {/* Timeline dot in education indigo color, expands on scroll */}
                    <div
                      className={`absolute left-1.5 md:left-2 top-2 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-900 bg-indigo-600 dark:bg-indigo-400 group-hover:scale-125 transition-all duration-700 ease-out ${
                        isVisible ? 'scale-100' : 'scale-0'
                      }`}
                    ></div>

                    <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/60 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-600 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        
                        {/* Left: School Logo / Icon + Degree & School */}
                        <div className="flex items-start gap-3.5 flex-1 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                            {edu.logoUrl ? (
                              <img
                                src={edu.logoUrl}
                                alt={edu.school}
                                className="w-full h-full object-contain p-1"
                              />
                            ) : (
                              <GraduationCap className="w-6 h-6 text-neutral-400 dark:text-neutral-500" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                              {edu.degree}
                            </h3>
                            <div className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                              {edu.school}
                            </div>
                          </div>
                        </div>

                        {/* Right: Period & Location (2 stacked lines, right aligned, no box) */}
                        <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono shrink-0 sm:text-right">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                            {edu.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      {/* Lower description section (Additional Info: Minors, Concentrations, etc.) */}
                      {additionalInfoList.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-700/60 space-y-2">
                          {additionalInfoList.map((info, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300">
                              <Bookmark className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                              <span>{info}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </FadeIn>
            )
          })}
        </div>

      </div>
    </section>
  )
}
