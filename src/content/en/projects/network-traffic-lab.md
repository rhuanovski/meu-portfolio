---
title: "Network Traffic Lab"
description: "A safe public version of an academic cybersecurity study, focused on visualizing fully synthetic load scenarios."
eyebrow: "Cybersecurity • Observability • College"
publishedAt: 2026-07-31
status: "Safe public version"
featured: false
stack:
  - "SwiftUI"
  - "Swift Charts"
  - "Python"
  - "macOS"
  - "Simulation"
highlights:
  - "No real traffic is sent"
  - "Synthetic load profiles"
  - "Rate, latency, and error metrics"
github: "https://github.com/rhuanovski/network-traffic-lab"
accent: "amber"
---

This work began in a college cybersecurity course as a study of load
generation and its effects on network services. For publication, I rebuilt the
project as a safe observability lab.

## Academic purpose

The goal was to understand how request spikes can change throughput, latency,
and errors, while exploring how an interface could make those changes visible
during a controlled experiment.

## The public version

The SwiftUI application offers profiles such as normal traffic, TCP bursts,
UDP bursts, and simulated DNS amplification. Every value is generated locally
and presented with Swift Charts.

The repository also includes a small Python simulator that produces the same
synthetic metrics in the terminal.

## Safe by design

The published version does not open sockets, accept target addresses, create
packets, or execute external scripts. It preserves the observability and user
interface lessons without providing mechanisms capable of affecting real
systems.

## What this project represents

Beyond the technical content, this project records an important responsible
engineering decision: adapting an academic experiment so it can be explained
and shared transparently without turning knowledge into operational risk.
