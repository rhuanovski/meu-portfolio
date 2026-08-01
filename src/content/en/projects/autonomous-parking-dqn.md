---
title: Autonomous Parking with DQN
description: >-
  Academic reinforcement learning prototype in which an agent learns to park a
  car in a 2D environment built from scratch.
eyebrow: AI • Reinforcement Learning • University
publishedAt: '2026-07-31'
status: Experimental prototype
featured: false
stack:
  - Python
  - PyTorch
  - Pygame
  - NumPy
  - Dueling DQN
highlights:
  - Custom 2D environment
  - Vehicle kinematic model
  - Replay buffer and target network
github: 'https://github.com/rhuanovski/autonomous-parking-dqn'
accent: blue
image: /images/projects/estacionando-1785524222109.jpg
draft: false
---
This university project explores a straightforward question: can an agent learn to park by observing the car's state and receiving rewards for its decisions?

## The experiment

Instead of using a ready-made environment, I built a 2D simulation with Pygame. The car follows a simplified kinematic model and can accelerate, brake, and change direction through a discrete set of actions.

The state delivered to the agent summarizes position, orientation, velocity, and proximity to the parking spot. The reward function combines closeness, alignment, collision penalties, and successful parking.

## Reinforcement learning

Training uses a Dueling DQN architecture implemented in PyTorch, with a replay buffer, epsilon-greedy policy, and a gradually updated target network. The repository also includes a checkpoint to preserve the state achieved in one of the training sessions.

## What I learned

The prototype made topics such as environment modeling, reward design, exploration versus exploitation, and training stability concrete. It also showed that improving an agent depends on both the neural network and the quality of the rules that describe the problem.

## Current status

This is an academic experiment, not an autonomous driving system. Behavior can still vary between training runs, and there is room to evolve sensors, rewards, scenarios, and quantitative evaluation.
