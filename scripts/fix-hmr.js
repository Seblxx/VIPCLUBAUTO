// Patches webpack to fix HMR error in development
const fs = require('fs');
const path = require('path');

// Patch 1: Change throw to console.warn in webpack/hot/dev-server.js
const devServerPath = path.join(
  __dirname, '..', 'node_modules', 'webpack', 'hot', 'dev-server.js'
);
if (fs.existsSync(devServerPath)) {
  let content = fs.readFileSync(devServerPath, 'utf8');
  if (content.includes('throw new Error("[HMR] Hot Module Replacement is disabled.")')) {
    content = content.replace(
      'throw new Error("[HMR] Hot Module Replacement is disabled.")',
      'console.warn("[HMR] Hot Module Replacement is disabled.")'
    );
    fs.writeFileSync(devServerPath, content, 'utf8');
    console.log('[fix-hmr] Patched webpack/hot/dev-server.js');
  }
}

// Patch 2: Ensure hot: true in webpackDevServer config
const wdsConfigPath = path.join(
  __dirname, '..', 'node_modules', 'react-scripts', 'config', 'webpackDevServer.config.js'
);
if (fs.existsSync(wdsConfigPath)) {
  let content = fs.readFileSync(wdsConfigPath, 'utf8');
  if (!content.includes('hot: true')) {
    content = content.replace(
      /https:\s*getHttpsConfig\(\)/,
      'hot: true,\n    https: getHttpsConfig()'
    );
    fs.writeFileSync(wdsConfigPath, content, 'utf8');
    console.log('[fix-hmr] Patched webpackDevServer.config.js with hot: true');
  }
}
