---
title: Network Traffic Lab
description: >-
  Public and secure version of an academic cybersecurity study, with
  visualization of fully synthetic load scenarios.
eyebrow: Cybersecurity • Observability • College
publishedAt: '2026-07-31'
status: Safe public version
featured: false
stack:
  - SwiftUI
  - Swift Charts
  - Python
  - macOS
  - Simulação
highlights:
  - No real traffic is sent
  - Synthetic load profiles
  - 'Rate, latency, and error metrics'
github: 'https://github.com/rhuanovski/network-traffic-lab'
accent: amber
image: /images/projects/ddos-attack-1785609831884.png
draft: false
---
This work began in a college cybersecurity course as a study on load generation and its effects on network services. For the publication, I rebuilt the project as a safe observability lab.

## The academic proposal

The goal was to understand how request spikes can affect rate, latency, and errors, and to explore how an interface could make those changes visible during a controlled experiment.

## The public version

The SwiftUI app offers profiles such as normal traffic, TCP bursts, UDP bursts, and simulated DNS amplification. All numbers are generated locally and displayed with Swift Charts.

The repository also includes a small Python simulator to produce the same synthetic metrics from the terminal.

## Security by design

The published version does not open sockets, does not receive destination addresses, does not create packets, and does not execute external scripts. It preserves the learning of observability and interface without exposing mechanisms capable of affecting real systems.

## What this project represents

Beyond the technical content, this project documents an important responsible engineering decision: adapting an academic experiment so it can be explained and shared with transparency, without turning knowledge into operational risk.
