module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#fff',
    workboxOptions: {
      clientsClaim: true,
      swSrc: 'service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'auto',
  },
};
