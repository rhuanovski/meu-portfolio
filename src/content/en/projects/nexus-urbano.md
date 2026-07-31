---
title: "Nexus Urbano"
description: "A serverless SaaS for multi-tenant management and forensic validation of property titles in urban land regularization processes."
eyebrow: "GovTech • SaaS • Capstone project"
publishedAt: 2026-06-17
status: "Completed — PFC1"
featured: true
stack:
  - "JavaScript"
  - "Supabase"
  - "PostgreSQL"
  - "Cloudflare"
  - "AES-256"
highlights:
  - "Multi-tenant architecture"
  - "RLS and audit trail"
  - "Public validation via QR Code"
image: "/images/projects/nexus-urbano-dashboard.webp"
imageAlt: "Administrative dashboard of the Nexus Urbano system"
github: "https://github.com/rhuanovski/nexusurbano"
live: "https://nexusurbano.com.br"
accent: "violet"
---

Nexus Urbano was created to modernize Urban Land Regularization (REURB)
workflows that relied on manual processes, scattered documents, and validations
that were difficult to audit.

## The challenge

The system had to serve different jurisdictions without mixing their data,
protect personal information, and let the public verify an issued property
title without exposing sensitive case data.

## The engineering solution

The platform was designed as a serverless SaaS using Supabase and PostgreSQL.
Row Level Security policies isolate each municipality, while AES-256 encryption
and SHA-256 hashes support data protection and the traceability of relevant
events.

Documents are generated on the client and include QR Codes that lead to a
public validation portal. Cloudflare is used at the edge for application
availability and protection.

## What this project represents

More than an interface, Nexus Urbano brings architecture, security, user
experience, and compliance decisions together around a real public-sector
problem. The repository provides diagrams, models, and architectural examples;
the full source code remains restricted because it involves sensitive
protocols and data.
