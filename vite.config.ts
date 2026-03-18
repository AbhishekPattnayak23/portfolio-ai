import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      // Minify output
      minify: 'terser',
      // Terser options
      terserOptions: {
        compress: {
          // Remove console logs in production
          drop_console: mode === 'production',
          // Remove debugger statements
          drop_debugger: true
        }
      },
      // Add integrity hashes for improved security
      assetsInlineLimit: 4096,
      // Sourcemap handling
      sourcemap: mode === 'development'
    },
    server: {
      // Security headers for development server
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        // Add CSP header if defined in env
        ...(env.VITE_CSP_HEADER ? { 'Content-Security-Policy': env.VITE_CSP_HEADER } : {})
      }
    },
    preview: {
      // Security headers for preview server
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
        ...(env.VITE_CSP_HEADER ? { 'Content-Security-Policy': env.VITE_CSP_HEADER } : {})
      }
    }
  };
});
