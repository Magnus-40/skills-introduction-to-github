const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./app');

test('returns expected basic app response', async () => {
  const app = createApp();

  await new Promise((resolve) => app.listen(0, resolve));
  const { port } = app.address();

  const response = await fetch(`http://127.0.0.1:${port}`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, { message: 'Hello from your basic app!' });

  await new Promise((resolve, reject) => app.close((error) => (error ? reject(error) : resolve())));
});
