module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@components': './src/components',
            '@config': './src/config',
            '@routes': './src/routes',
            '@services': './src/services',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};