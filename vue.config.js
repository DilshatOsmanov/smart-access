module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#fff',
    workboxOptions: {
      swSrc: 'service-worker.js',
      cachingStrategy: 'CacheFirst',
    },
    appleMobileWebAppCapable: 'yes',
  },
};
