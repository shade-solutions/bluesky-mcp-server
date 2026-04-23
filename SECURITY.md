# Security

## Reporting a Vulnerability

If you find a security issue, do not open a public issue.

Send a private report with:

- What you found
- How to reproduce it
- The impact
- Any suggested fix

## Secret Handling

- Use Cloudflare Worker secrets for credentials.
- Prefer app passwords over account passwords.
- Rotate credentials if they are ever exposed.