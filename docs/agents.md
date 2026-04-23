# Agent Setup

Use these snippets for agent-style clients and automation workflows.

Base endpoint for agent integrations:

```text
https://bluesky-mcp-server.shraj.workers.dev/mcp
```

## Claude Code

```bash
claude mcp add bluesky --url https://bluesky-mcp-server.shraj.workers.dev/mcp
```

If you want to point Claude Code at a local dev server instead:

```bash
claude mcp add bluesky --url http://127.0.0.1:8787/mcp
```

## Generic MCP Agent Config

If your agent reads JSON config, use this:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## Cursor Agent Mode

If Cursor is running in agent mode, use the same MCP URL:

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## LobeHub

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## Codex

```json
{
  "mcpServers": {
    "bluesky": {
      "url": "https://bluesky-mcp-server.shraj.workers.dev/mcp"
    }
  }
}
```

## OpenAI / Custom Agents

For a custom agent integration, treat the Worker endpoint as a standard MCP server and connect to:

```text
https://bluesky-mcp-server.shraj.workers.dev/mcp
```

If the agent supports tool calling over MCP transport, no additional adapter code is needed.

## Useful Tool Groups

Most agents will use these groups first:

- `whoami`
- `search_posts`
- `get_profile`
- `get_thread`
- `create_post`
- `reply_to_post`
- `like_post`
- `follow_user`
- `send_message`
