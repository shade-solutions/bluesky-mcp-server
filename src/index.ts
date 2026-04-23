import { Hono } from 'hono';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { BlueskyService, type BlueskyEnv } from './bluesky.js';
import { buildMcpServer } from './tools.js';

type Bindings = BlueskyEnv;

type Variables = {
  parsedBody?: unknown;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.use('/mcp', async (c, next) => {
  if (c.req.method === 'POST' || c.req.method === 'PUT' || c.req.method === 'PATCH') {
    try {
      c.set('parsedBody', await c.req.json());
    } catch {
      c.set('parsedBody', undefined);
    }
  }

  await next();
});

app.get('/', (c) => {
  return c.json({
    name: 'bluesky-mcp-server',
    status: 'ok',
    endpoints: ['/mcp'],
  });
});

app.get('/health', (c) => c.json({ ok: true }));

app.all('/mcp', async (c) => {
  const service = new BlueskyService(c.env);
  const server = buildMcpServer(service);
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  await server.connect(transport);
  return transport.handleRequest(c.req.raw, {
    parsedBody: c.get('parsedBody'),
  });
});

export default app;
