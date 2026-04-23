# Bluesky MCP Server

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/workers/)
[![Hono](https://img.shields.io/badge/Hono-ultrafast-ff69b4)](https://hono.dev/)
[![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-111827)](https://modelcontextprotocol.io/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Visitors](https://visitor-badge.laobi.icu/badge?page_id=shade-solutions.bluesky-mcp-server)](https://github.com/shade-solutions/bluesky-mcp-server)

Cloudflare Worker MCP server for Bluesky/AT Protocol, built with Hono and the Model Context Protocol SDK.

## What It Does

The server exposes a broad set of Bluesky tools for LLM clients and agents:

- Authentication and session introspection
- Handle and DID resolution
- Profile lookup, timeline, author feeds, threads, followers, follows, notifications
- Search for posts and users
- Create posts, replies, quotes, and deletes
- Like, unlike, repost, and unrepost
- Follow, unfollow, mute, unmute, block, and unblock
- Blob uploads and image posts
- Bluesky chat conversation listing, retrieval, creation, and messaging

## Configuration

Set these as Cloudflare Worker secrets or vars:

- `BLUESKY_IDENTIFIER` - your Bluesky handle or DID
- `BLUESKY_APP_PASSWORD` - recommended app password
- `BLUESKY_PASSWORD` - fallback password variable
- `BLUESKY_SERVICE_URL` - optional custom PDS/service URL
- `BLUESKY_PDS_URL` - optional alias for the service URL

You can also pass per-request credentials using headers (useful for multi-user clients):

- `x-bluesky-identifier`
- `x-bluesky-app-password` (preferred) or `x-bluesky-password`
- `x-bluesky-service-url` or `x-bluesky-pds-url`

Example:

```bash
curl -X POST "https://bluesky-mcp-server.shraj.workers.dev/mcp" \
  -H "content-type: application/json" \
  -H "x-bluesky-identifier: your.handle.bsky.social" \
  -H "x-bluesky-app-password: your-app-password" \
  -H "x-bluesky-service-url: https://bsky.social" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

Example:

```bash
wrangler secret put BLUESKY_IDENTIFIER
wrangler secret put BLUESKY_APP_PASSWORD
```

## Quick Start

```bash
bun install
bun run dev
```

The MCP endpoint is available at `/mcp`.

## Deploy

```bash
bun run deploy
```

Deployed URL:

https://bluesky-mcp-server.shraj.workers.dev

The root URL redirects to this repository on GitHub; use `/mcp` for MCP clients.

## Client Setup

Copy-paste setup guides for IDEs and desktop clients live in [docs/clients.md](docs/clients.md).

### Cursor

Add this to your Cursor MCP config:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## Agent Setup

Copy-paste setup guides for agent-style clients live in [docs/agents.md](docs/agents.md).

## Development

```bash
bun run typecheck
bun run build
```

## Open Source Notes

This repo is set up to be easy to fork and run:

- TypeScript-first source
- Minimal runtime assumptions beyond Cloudflare Workers
- No hidden setup scripts
- Copyable client and agent config examples
- Clear environment variable naming for self-hosting

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow and repo conventions.

## Security

See [SECURITY.md](SECURITY.md) for responsible disclosure guidance.

## Inspiration

This server was shaped by common tool surfaces in Bluesky and AT Protocol MCP projects such as `brianellin/bsky-mcp-server`, `semioz/bluesky-mcp`, and `cameronrye/atproto-mcp`.