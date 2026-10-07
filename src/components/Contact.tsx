import { MessageSquare } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'
import { FadeIn } from './FadeIn'

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="w-[92%] sm:w-[88%] lg:w-[75%] max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
              Contact
            </h2>
          </div>
        </FadeIn>

        {/* Contact Methods Cards - Centered 2-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          
          {/* LinkedIn Card */}
          <FadeIn delay={100}>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/60 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all hover:-translate-y-1 group text-center h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                LinkedIn
              </h3>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 group-hover:underline">
                View Profile &rarr;
              </span>
            </a>
          </FadeIn>

          {/* GitHub Card */}
          <FadeIn delay={180}>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/60 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-lg transition-all hover:-translate-y-1 group text-center h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                GitHub
              </h3>
              <span className="text-xs font-semibold text-neutral-900 dark:text-white inline-flex items-center gap-1 group-hover:underline">
                Visit GitHub &rarr;
              </span>
            </a>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
