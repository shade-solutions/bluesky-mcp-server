# Client Setup

Use these snippets to add the server to desktop IDEs and MCP-aware clients.

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

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
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