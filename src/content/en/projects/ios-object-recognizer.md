---
title: Object Recognition on iPhone
description: >-
  Academic app in SwiftUI that uses the camera, Vision, and a trained Core ML
  model to recognize objects in real time.
eyebrow: iOS • Computer vision • University
publishedAt: '2026-07-31'
status: Working prototype
featured: false
stack:
  - SwiftUI
  - Vision
  - Core ML
  - AVFoundation
  - PyTorch
highlights:
  - Camera-based classification
  - Model trained by the author
  - PyTorch to Core ML pipeline
github: 'https://github.com/rhuanovski/ios-object-recognizer'
accent: violet
image: /images/projects/camera-1785609672282.jpg
draft: false
---
This university project connects two steps I wanted to understand in practice: training a computer vision model and putting it inside a real iPhone app.

## The app

The interface was built in SwiftUI and uses AVFoundation to capture camera frames. The Vision framework prepares each image and runs inference with a Core ML model embedded in the app.

The prototype was trained to recognize classes such as person, cellphone, notebook, and bottle, displaying classifications and confidence levels during camera use.

## Training and conversion

Training starts from a MobileNetV3 in PyTorch. The model is then converted to Core ML and integrated into the Xcode project. The repository publishes the app, the compiled model, and a reproducible training and conversion script.

## Publication decisions

The photographs used in training are not part of the public repository to preserve privacy and image rights. The code remains available to demonstrate the architecture and allow another dataset to be used.

## Current status

It is a functional academic prototype, with opportunities for improvement in dataset quality, number of classes, model evaluation, and polish of the on-device experience.
