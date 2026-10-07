import { FolderGit2 } from 'lucide-react'
import { GithubIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'
import { FadeIn } from './FadeIn'

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-neutral-100 dark:border-neutral-800">
      <div className="w-[92%] sm:w-[88%] lg:w-[75%] max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Projects
            </h2>
          </div>
        </FadeIn>

        {/* Project Cards Grid - Uniform equal height matching tallest card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {portfolioData.projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 70} className="h-full">
              <div className="flex flex-col justify-between h-full p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/60 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all hover:-translate-y-1 hover:shadow-lg group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 border border-neutral-200 dark:border-neutral-700">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/60 dark:border-neutral-700/60">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
