---
title: "What a 15-point gap reveals about reproducibility in AI"
description: "A LegalBERT reproduction worked technically but did not reach the benchmark—and that gap is a result in itself."
category: "Artificial intelligence"
publishedAt: 2025-10-22
readingTime: 6
tags:
  - "NLP"
  - "LegalBERT"
  - "LoRA"
  - "Research"
sourceUrl: "https://github.com/rhuanovski/Reproducao_LegalBERT_SBC"
accent: "blue"
---

Reproducing a scientific experiment is not simply copying code. It means
reconstructing an environment: data, versions, randomness, hardware, and
decisions that often appear only implicitly in the original paper.

## The experiment

The project reproduced the fine-tuning of LegalBERT for named entity
recognition in Portuguese legal documents. The adaptation used LoRA, keeping
only 1.0211% of the parameters trainable.

The pipeline ran correctly and reached a 73.47% F1-score. The published
benchmark was 88.49%—a difference of 15.02 percentage points.

## Working code does not guarantee the same result

The original model cited in the paper was not available under the same
conditions. The dataset required manual preparation, and part of the
environment had to be reconstructed. Without the seed and a complete
infrastructure specification, small differences accumulate.

## The gap is evidence

Treating the difference only as failure would discard the experiment's main
conclusion. It shows that making a notebook available is not enough to ensure
reproducibility.

Recording versions, seeds, checkpoints, preprocessing steps, and hardware
characteristics should be part of the scientific result—not merely an
execution note.
