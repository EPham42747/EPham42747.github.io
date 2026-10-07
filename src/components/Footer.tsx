import { portfolioData } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 py-8">
      <div className="w-[92%] sm:w-[88%] lg:w-[75%] max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-start text-xs text-neutral-500 dark:text-neutral-400">
        <span>&copy; {currentYear} {portfolioData.name}. All rights reserved.</span>
      </div>
    </footer>
  )
}
