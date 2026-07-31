---
title: "Serverless architecture applied to urban land regularization"
description: "How multi-tenant isolation, traceability, and public validation shaped the engineering decisions behind Nexus Urbano."
category: "Software engineering"
publishedAt: 2026-06-18
readingTime: 5
tags:
  - "Architecture"
  - "Serverless"
  - "Security"
sourceUrl: "https://github.com/rhuanovski/nexusurbano"
accent: "violet"
---

Digitizing a public process is not simply a matter of replacing paper with
forms. When the domain involves property titles, personal data, and different
municipal administrations, the architecture must make security boundaries
explicit.

## Isolation at the database level

In Nexus Urbano, each municipality is a tenant. Isolation does not rely solely
on what the interface chooses to display: Row Level Security policies in
PostgreSQL restrict which rows are accessible in each authenticated context.

This choice reduces duplicated rules in the application and moves the security
guarantee closer to the data source itself.

## Verifiable document, protected information

An issued title must be verifiable, but that does not authorize exposure of the
entire process. The documents therefore include a QR Code leading to a
controlled public lookup. Visitors can confirm authenticity without gaining
access to the internal information used during issuance.

## Traceability as part of the product

An audit should not be a report assembled only after a problem occurs. Relevant
events are recorded as part of the product flow and receive hashes that help
identify unauthorized changes.

## The interface is architecture too

Generating the PDF on the client reduces centralized processing and keeps the
experience responsive. Cloudflare protects the edge, while Supabase
concentrates authentication, database, and access policies.

The result is an architecture where security, operating cost, and user
experience are treated as parts of the same problem.
