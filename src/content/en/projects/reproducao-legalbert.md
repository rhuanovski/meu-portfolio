---
title: "Reproducing LegalBERT"
description: "A scientific reproduction of LoRA fine-tuning for named entity recognition in Portuguese legal documents."
eyebrow: "Applied AI • Research • NLP"
publishedAt: 2025-10-20
status: "Research completed"
featured: true
stack:
  - "Python"
  - "LegalBERT"
  - "LoRA"
  - "PyTorch"
  - "Jupyter"
highlights:
  - "73.47% F1-score"
  - "Only 1.02% trainable parameters"
  - "Reproducibility audit"
github: "https://github.com/rhuanovski/Reproducao_LegalBERT_SBC"
accent: "blue"
---

This project reproduces the method presented in *An Ensemble of LLMs finetuned
with LoRA for NER in Portuguese Legal Documents*, published at BRACIS 2024.

## Research question

The goal was not merely to run a notebook, but to determine whether the
published results could be reached using the documented data, models, and
infrastructure.

## Implementation

The pipeline applies Low-Rank Adaptation to LegalBERT for Named Entity
Recognition on the LeNER-Br corpus. The configuration kept only 1.0211% of the
parameters trainable, preserving LoRA's efficiency premise.

## Result

The experiment achieved a 73.47% F1-score, 15.02 percentage points below the
88.49% benchmark. The code worked, but the result showed how seeds, data
availability, and infrastructure details can compromise the reproducibility of
AI research.
