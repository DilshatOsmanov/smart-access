module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#fff',
    workboxOptions: {
      swSrc: 'service-worker.js',
      strategy: 'CacheFirst',
    },
    appleMobileWebAppCapable: 'yes',
  },
};
