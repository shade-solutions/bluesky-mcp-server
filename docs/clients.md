# Client Setup

Use these snippets to add the server to desktop IDEs and MCP-aware clients.

Base endpoint for agent integrations:

```text
https://bluesky-mcp-server.shraj.workers.dev/mcp
```

## Claude Desktop

Add this to your Claude Desktop MCP config:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

If you want Claude Desktop to launch a local build instead, use:

```json
{
  "mcpServers": {
    "bluesky": {
      "command": "bun",
      "args": ["run", "dev"],
      "cwd": "/Users/shaswatraj/Desktop/open-source/bluesky-mcp-server"
    }
  }
}
```

## VS Code

If you use an MCP extension or an agent panel in VS Code, point it at the deployed Worker URL:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## Cursor

Cursor can use the same MCP server URL directly:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

If your client supports custom headers, add these for authenticated tools:

```json
{
  "x-bluesky-identifier": "your.handle.bsky.social",
  "x-bluesky-app-password": "your-app-password"
}
```

Use an app password from Bluesky settings, not your account login password.

## LobeHub

LobeHub can point to the remote MCP server with the same URL:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

In LobeHub, set:

- Streamable HTTP Endpoint URL: `https://bluesky-mcp-server.shraj.workers.dev/mcp`
- Auth type: `No auth`
- Advanced > HTTP Headers:
  - `x-bluesky-identifier`: `your.handle.bsky.social`
  - `x-bluesky-app-password`: `your-app-password`

Optional custom server:

- `x-bluesky-service-url`: `https://bsky.social`

## Codex

If you are connecting Codex or another OpenAI-style coding agent that accepts MCP URLs, use:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

For authenticated actions, provide the same headers:

```json
{
  "x-bluesky-identifier": "your.handle.bsky.social",
  "x-bluesky-app-password": "your-app-password"
}
```

## Windsurf

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## Local Development Endpoint

If you run `bun run dev`, use the local Worker URL that Wrangler prints, then append `/mcp`.