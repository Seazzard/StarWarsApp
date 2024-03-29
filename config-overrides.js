const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@Components': 'src/Components',
    '@ui': 'src/Components/UI',
    '@Containers': 'src/Containers',
    '@constants': 'src/constants',
    '@hoc-helper': 'src/hoc-helper',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@static': 'src/static',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@context': 'src/context',
  })(config);
  return config;
};
