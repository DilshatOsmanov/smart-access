module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    themeColor: '#f8f9fb',
    appleMobileWebAppCapable: 'yes',
    workboxOptions: {
      navigateFallback: '/',
    },
    workboxConfig: {
      globPatterns: ['**/*.{js,jpg,png,html,css}'],
    },
  },
};
