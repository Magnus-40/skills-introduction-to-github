const http = require('http');

const createApp = () =>
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from your basic app!' }));
  });

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createApp().listen(port, () => {
    console.log(`Basic app running on http://localhost:${port}`);
  });
}

module.exports = { createApp };
