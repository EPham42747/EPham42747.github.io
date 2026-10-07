import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Determine base URL:
// In GitHub Actions, GITHUB_REPOSITORY is provided as 'owner/repo' (e.g. 'EPham42747/website').
// If the repository is a user site (ends with .github.io), the base is '/'.
// Otherwise for a project repo like 'website', the base is '/website/'.
const repository = process.env.GITHUB_REPOSITORY
const repoName = repository ? repository.split('/')[1] : ''
const isUserSite = repoName.endsWith('.github.io')
const base = repository && !isUserSite ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
})

