---
title: "Network Traffic Lab"
description: "Versão pública e segura de um estudo acadêmico de cibersegurança, com visualização de cenários de carga totalmente sintéticos."
eyebrow: "Cibersegurança • Observabilidade • Faculdade"
publishedAt: 2026-07-31
status: "Versão pública segura"
featured: false
stack:
  - "SwiftUI"
  - "Swift Charts"
  - "Python"
  - "macOS"
  - "Simulação"
highlights:
  - "Nenhum tráfego real é enviado"
  - "Perfis de carga sintéticos"
  - "Métricas de taxa, latência e erros"
github: "https://github.com/rhuanovski/network-traffic-lab"
accent: "amber"
---

Este trabalho começou em uma disciplina de cibersegurança da faculdade como um
estudo sobre geração de carga e seus efeitos em serviços de rede. Para a
publicação, reconstruí o projeto como um laboratório seguro de observabilidade.

## A proposta acadêmica

O objetivo era compreender como picos de requisições podem alterar taxa,
latência e erros, além de explorar como uma interface poderia tornar essas
mudanças visíveis durante um experimento controlado.

## A versão pública

A aplicação em SwiftUI oferece perfis como tráfego normal, rajadas TCP, rajadas
UDP e amplificação DNS simulada. Todos os números são gerados localmente e
apresentados com Swift Charts.

O repositório também inclui um pequeno simulador em Python para produzir as
mesmas métricas sintéticas pelo terminal.

## Segurança por projeto

A versão publicada não abre sockets, não recebe endereços de destino, não cria
pacotes e não executa scripts externos. Ela preserva o aprendizado de
observabilidade e interface sem disponibilizar mecanismos capazes de afetar
sistemas reais.

## O que este projeto representa

Além do conteúdo técnico, este projeto registra uma decisão importante de
engenharia responsável: adaptar um experimento acadêmico para que ele possa ser
explicado e compartilhado com transparência, sem transformar conhecimento em
risco operacional.
