---
title: "Reprodução do LegalBERT"
description: "Reprodução científica de fine-tuning com LoRA para reconhecimento de entidades em documentos jurídicos em português."
eyebrow: "IA aplicada • Pesquisa • NLP"
publishedAt: 2025-10-20
status: "Pesquisa concluída"
featured: true
stack:
  - "Python"
  - "LegalBERT"
  - "LoRA"
  - "PyTorch"
  - "Jupyter"
highlights:
  - "F1-score de 73,47%"
  - "Apenas 1,02% dos parâmetros treináveis"
  - "Auditoria de reprodutibilidade"
github: "https://github.com/rhuanovski/Reproducao_LegalBERT_SBC"
accent: "blue"
---

Este trabalho reproduz a metodologia apresentada no artigo *An Ensemble of
LLMs finetuned with LoRA for NER in Portuguese Legal Documents*, publicado na
BRACIS 2024.

## Pergunta de pesquisa

O objetivo não era apenas executar um notebook, mas descobrir se os resultados
publicados poderiam ser alcançados com os dados, modelos e infraestrutura
documentados.

## Implementação

O pipeline aplica Low-Rank Adaptation ao LegalBERT na tarefa de Named Entity
Recognition sobre o corpus LeNER-Br. A configuração manteve apenas 1,0211% dos
parâmetros treináveis, preservando a proposta de eficiência do LoRA.

## Resultado

O experimento alcançou F1-score de 73,47%, uma diferença de 15,02 pontos
percentuais em relação ao benchmark de 88,49%. O código ficou funcional, mas o
resultado evidenciou como seeds, disponibilidade de dados e detalhes de
infraestrutura podem comprometer a reprodutibilidade de pesquisas em IA.
