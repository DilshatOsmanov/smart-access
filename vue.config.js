module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    themeColor: '#fff',
    workboxOptions: {
      swSrc: 'service-worker.js',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://smart-access-pi.vercel.app/'), // ваш API URL
          handler: 'CacheFirst',
        },
        {
          urlPattern: /\.(js|css|png|jpg|jpeg|svg)$/,
          handler: 'CacheFirst',
        },
      ],
    },
    appleMobileWebAppCapable: 'yes',
  },
};
