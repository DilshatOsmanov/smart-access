module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#000',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'transparent',
  },
};
