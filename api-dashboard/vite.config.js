import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')

  console.log('Loaded ENV:', env.VITE_APP_API_KEY ? 'API Key Present' : 'API Key Missing')

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_APP_API_KEY': JSON.stringify(env.VITE_APP_API_KEY)
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://auto.dev',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})