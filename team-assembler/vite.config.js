import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')

  console.log('Loaded ENV:', env.VITE_APP_API_KEY ? 'API Key Present' : 'API Key Missing')

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_APP_API_KEY': JSON.stringify(env.VITE_APP_API_KEY),
      'import.meta.env.VITE_APP_API_URL': JSON.stringify(env.VITE_APP_API_URL)
    }
  }
})
