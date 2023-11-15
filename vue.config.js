module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#fff',
    workboxOptions: {
      skipWaiting: true,
      swSrc: 'service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'auto',
  },
};
