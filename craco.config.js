const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
    plugins: {
      add: [
        // Enable bundle analysis when ANALYZE=true environment variable is set
        ...process.env.ANALYZE ? [new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: 'bundle-report.html',
        })] : [],
        // Add compression in production mode
        ...(process.env.NODE_ENV === 'production' ? [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
          })
        ] : [])
      ]
    },
    configure: (webpackConfig) => {
      // Split chunks for better caching
      if (process.env.NODE_ENV === 'production') {
        if (!webpackConfig.optimization) {
          webpackConfig.optimization = {};
        }

        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          name: false,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              chunks: 'all',
              reuseExistingChunk: true,
            },
          }
        };
      }
      return webpackConfig;
    }
  },
};
