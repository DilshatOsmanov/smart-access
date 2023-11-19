module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
  },
};
