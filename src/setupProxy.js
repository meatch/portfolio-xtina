const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://mitchellgohman.com:6001',
            changeOrigin: true
        })
    );
};