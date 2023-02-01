const cors_proxy = require("cors-anywhere");

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    // removeHeaders: ['cookie', 'cookie2']
  })
  .listen(PORT, HOST, () => {
    console.log(`Running CORS anywhere on ${HOST}:${PORT}`);
  });
