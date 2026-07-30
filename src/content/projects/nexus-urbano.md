---
title: "Nexus Urbano"
description: "SaaS serverless para gestão multilocatária e validação forense de títulos de propriedade em processos de regularização fundiária urbana."
eyebrow: "GovTech • SaaS • Trabalho de conclusão"
publishedAt: 2026-06-17
status: "Concluído — PFC1"
featured: true
stack:
  - "JavaScript"
  - "Supabase"
  - "PostgreSQL"
  - "Cloudflare"
  - "AES-256"
highlights:
  - "Arquitetura multi-tenant"
  - "RLS e trilha de auditoria"
  - "Validação pública por QR Code"
image: "/images/projects/nexus-urbano-dashboard.webp"
imageAlt: "Dashboard administrativo do sistema Nexus Urbano"
github: "https://github.com/rhuanovski/nexusurbano"
live: "https://nexusurbano.com.br"
accent: "violet"
---

O Nexus Urbano nasceu para modernizar fluxos de Regularização Fundiária Urbana
(REURB) que dependiam de processos manuais, documentos dispersos e validações
difíceis de auditar.

## O desafio

O sistema precisava atender diferentes jurisdições sem misturar dados, proteger
informações pessoais e permitir que um título emitido fosse verificado
publicamente sem expor o conteúdo sensível do processo.

## A solução de engenharia

A plataforma foi desenhada como um SaaS serverless com Supabase e PostgreSQL.
Políticas de Row Level Security isolam cada município, enquanto criptografia
AES-256 e hashes SHA-256 apoiam a proteção de dados e a rastreabilidade dos
eventos relevantes.

Os documentos são gerados no cliente e incluem QR Codes que direcionam para um
portal público de validação. A borda usa Cloudflare para disponibilidade e
proteção da aplicação.

## O que este projeto representa

Mais que uma interface, o Nexus Urbano reúne decisões de arquitetura, segurança,
experiência do usuário e conformidade em torno de um problema público real. O
repositório disponibiliza diagramas, modelos e exemplos arquiteturais; o
código-fonte integral permanece restrito por envolver protocolos e dados
sensíveis.
