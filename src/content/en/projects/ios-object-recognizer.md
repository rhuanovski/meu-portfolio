---
title: "iPhone Object Recognizer"
description: "An academic SwiftUI app that uses the camera, Vision, and a trained Core ML model to recognize objects in real time."
eyebrow: "iOS • Computer vision • College"
publishedAt: 2026-07-31
status: "Functional prototype"
featured: false
stack:
  - "SwiftUI"
  - "Vision"
  - "Core ML"
  - "AVFoundation"
  - "PyTorch"
highlights:
  - "Live camera classification"
  - "Custom-trained model"
  - "PyTorch-to-Core ML pipeline"
github: "https://github.com/rhuanovski/ios-object-recognizer"
accent: "violet"
---

This college project connects two stages I wanted to understand in practice:
training a computer vision model and embedding it in a real iPhone application.

## The application

The interface is built with SwiftUI and uses AVFoundation to capture camera
frames. Vision prepares each image and runs inference with a Core ML model
bundled with the application.

The prototype was trained to recognize classes such as person, phone,
notebook, and bottle, displaying classifications and confidence levels while
the camera is active.

## Training and conversion

Training starts from MobileNetV3 in PyTorch. The model is then converted to Core
ML and integrated into the Xcode project. The repository includes the app, the
model package, and a reproducible training and conversion script.

## Publication choices

The training photographs are not included in the public repository in order to
protect privacy and image rights. The code remains available to demonstrate the
architecture and allow a different dataset to be used.

## Current state

It is a functional academic prototype with room to improve dataset quality,
the number of classes, model evaluation, and the overall on-device experience.
