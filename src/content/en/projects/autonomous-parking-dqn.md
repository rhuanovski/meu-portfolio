---
title: "Autonomous Parking with DQN"
description: "An academic reinforcement-learning prototype where an agent learns to park a car in a custom 2D environment."
eyebrow: "AI • Reinforcement learning • College"
publishedAt: 2026-07-31
status: "Experimental prototype"
featured: false
stack:
  - "Python"
  - "PyTorch"
  - "Pygame"
  - "NumPy"
  - "Dueling DQN"
highlights:
  - "Custom 2D environment"
  - "Kinematic vehicle model"
  - "Replay buffer and target network"
github: "https://github.com/rhuanovski/autonomous-parking-dqn"
accent: "blue"
---

This college project explores a direct question: can an agent learn to park by
observing the car's state and receiving rewards for its decisions?

## The experiment

Instead of relying on a ready-made environment, I built a 2D simulation with
Pygame. The car follows a simplified kinematic model and can accelerate, brake,
and steer through a discrete action set.

The observation space summarizes position, orientation, speed, and the car's
relationship to the parking spot. The reward function combines proximity,
alignment, collision penalties, and successful parking.

## Reinforcement learning

Training uses a Dueling DQN architecture implemented in PyTorch, with a replay
buffer, an epsilon-greedy policy, and a gradually updated target network. The
repository also includes a checkpoint from one of the training sessions.

## What I learned

The prototype made topics such as environment modeling, reward design,
exploration versus exploitation, and training stability concrete. It also
showed that improving an agent depends as much on the rules that describe the
problem as it does on the neural network.

## Current state

This is an academic experiment, not an autonomous-driving system. Behavior may
still vary across training runs, and there is room to improve sensors, rewards,
scenarios, and quantitative evaluation.
