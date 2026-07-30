---
title: "Arquitetura serverless aplicada à regularização fundiária"
description: "Como isolamento multi-tenant, rastreabilidade e validação pública orientaram as decisões do Nexus Urbano."
category: "Engenharia de software"
publishedAt: 2026-06-18
readingTime: 5
tags:
  - "Arquitetura"
  - "Serverless"
  - "Segurança"
sourceUrl: "https://github.com/rhuanovski/nexusurbano"
accent: "violet"
---

Digitalizar um processo público não significa apenas trocar papel por
formulários. Quando o domínio envolve títulos de propriedade, dados pessoais e
diferentes administrações municipais, a arquitetura precisa tornar as
fronteiras de segurança explícitas.

## Isolamento desde o banco

No Nexus Urbano, cada município representa um tenant. O isolamento não depende
somente do que a interface decide exibir: políticas de Row Level Security no
PostgreSQL restringem as linhas acessíveis em cada contexto autenticado.

Essa escolha reduz a quantidade de regras duplicadas na aplicação e aproxima a
garantia de segurança da própria fonte dos dados.

## Documento verificável, informação protegida

Um título emitido precisa ser verificável, mas isso não autoriza a exposição do
processo completo. Por isso, os documentos incorporam um QR Code que conduz a
uma consulta pública controlada. O visitante confirma a autenticidade sem
receber acesso às informações internas usadas na emissão.

## Rastreabilidade como parte do produto

Auditoria não deve ser um relatório construído depois do problema. Eventos
relevantes são registrados como parte do fluxo do produto e recebem hashes que
ajudam a identificar alterações indevidas.

## A interface também é arquitetura

Gerar o PDF no cliente reduz processamento centralizado e mantém a experiência
responsiva. Cloudflare protege a borda, enquanto Supabase concentra
autenticação, banco e políticas de acesso.

O resultado é uma arquitetura em que segurança, custo operacional e experiência
do usuário são tratados como partes do mesmo problema.
