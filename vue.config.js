module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#f8f9fb',
    workboxOptions: {
      swSrc: 'service-worker.js',
      navigatefallback: '/index.html',
    },
    appleMobileWebAppCapable: 'yes',
  },
};
