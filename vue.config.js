module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    themeColor: '#f8f9fb',
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      navigateFallback: '/',
    },
  },
};
