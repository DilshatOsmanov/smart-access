module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#fff',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'rgba(128, 128, 128, 0.5)',
  },
};
