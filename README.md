# Bluesky MCP Server

Cloudflare Worker MCP server for Bluesky/AT Protocol, built with Hono and the Model Context Protocol SDK.

## Features

The server supports a broad social tool surface:

- Authentication/session introspection
- Handle and DID resolution
- Profile lookup, timeline, author feeds, threads, followers, follows, notifications
- Search for posts and users
- Create posts, replies, quotes, deletes
- Like, unlike, repost, unrepost
- Follow, unfollow, mute, unmute, block, unblock
- Blob uploads and image posts
- Bluesky chat conversation listing, creation, retrieval, and messaging

## Environment Variables

Set these in Cloudflare Worker secrets or `wrangler.toml` vars:

- `BLUESKY_IDENTIFIER` - your Bluesky handle or DID
- `BLUESKY_APP_PASSWORD` - recommended app password
- `BLUESKY_PASSWORD` - optional fallback password variable
- `BLUESKY_SERVICE_URL` - optional custom PDS/service URL
- `BLUESKY_PDS_URL` - optional alias for the service URL

If credentials are omitted, the server still exposes public read tools, but write and chat tools require authentication.

## Development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

## Inspiration

This server was shaped by the common tool sets in existing Bluesky and AT Protocol MCP servers such as `brianellin/bsky-mcp-server`, `semioz/bluesky-mcp`, and `cameronrye/atproto-mcp`.# bluesky-mcp-server


https://bluesky-mcp-server.shraj.workers.dev/
