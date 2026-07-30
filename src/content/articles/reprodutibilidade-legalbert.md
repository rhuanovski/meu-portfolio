---
title: "O que 15 pontos de diferença revelam sobre reprodutibilidade em IA"
description: "Uma reprodução do LegalBERT funcionou tecnicamente, mas não alcançou o benchmark — e essa diferença também é um resultado."
category: "Inteligência artificial"
publishedAt: 2025-10-22
readingTime: 6
tags:
  - "NLP"
  - "LegalBERT"
  - "LoRA"
  - "Pesquisa"
sourceUrl: "https://github.com/rhuanovski/Reproducao_LegalBERT_SBC"
accent: "blue"
---

Reproduzir um experimento científico não é apenas copiar código. É reconstruir
um ambiente: dados, versões, aleatoriedade, hardware e decisões que muitas vezes
aparecem apenas de forma implícita no artigo original.

## O experimento

O trabalho reproduziu o fine-tuning de um LegalBERT para reconhecimento de
entidades nomeadas em documentos jurídicos em português. A adaptação usou LoRA,
mantendo somente 1,0211% dos parâmetros como treináveis.

O pipeline executou corretamente e chegou a um F1-score de 73,47%. O benchmark
publicado era 88,49% — uma divergência de 15,02 pontos percentuais.

## Código funcional não garante o mesmo resultado

O modelo original indicado no trabalho não estava acessível nas mesmas
condições. O dataset exigiu preparação manual e parte das escolhas de ambiente
precisou ser reconstruída. Sem a seed e sem uma especificação completa da
infraestrutura, pequenas diferenças se acumulam.

## A divergência é evidência

Tratar a diferença apenas como falha descartaria a principal conclusão do
exercício. O experimento mostra que disponibilizar um notebook não é suficiente
para garantir reprodutibilidade.

Registrar versões, sementes, checkpoints, pré-processamento e características
do hardware deve ser parte do resultado científico, e não apenas uma nota de
execução.
