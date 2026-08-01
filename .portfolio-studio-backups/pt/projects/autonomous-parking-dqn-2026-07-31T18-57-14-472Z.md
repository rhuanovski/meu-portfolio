---
title: "Estacionamento Autônomo com DQN"
description: "Protótipo acadêmico de aprendizado por reforço em que um agente aprende a estacionar um carro em um ambiente 2D criado do zero."
eyebrow: "IA • Aprendizado por reforço • Faculdade"
publishedAt: 2026-07-31
status: "Protótipo experimental"
featured: false
stack:
  - "Python"
  - "PyTorch"
  - "Pygame"
  - "NumPy"
  - "Dueling DQN"
highlights:
  - "Ambiente 2D próprio"
  - "Modelo cinemático do veículo"
  - "Replay buffer e target network"
github: "https://github.com/rhuanovski/autonomous-parking-dqn"
accent: "blue"
---

Este projeto de faculdade explora uma pergunta direta: um agente pode aprender
a estacionar observando o estado do carro e recebendo recompensas pelas suas
decisões?

## O experimento

Em vez de utilizar um ambiente pronto, construí uma simulação 2D com Pygame. O
carro segue um modelo cinemático simplificado e pode acelerar, frear e alterar
a direção por meio de um conjunto discreto de ações.

O estado entregue ao agente resume posição, orientação, velocidade e relação
com a vaga. A função de recompensa combina aproximação, alinhamento,
penalidades por colisão e sucesso no estacionamento.

## Aprendizado por reforço

O treinamento usa uma arquitetura Dueling DQN implementada em PyTorch, com
replay buffer, política epsilon-greedy e uma rede-alvo atualizada gradualmente.
O repositório também inclui um checkpoint para preservar o estado alcançado em
uma das sessões de treinamento.

## O que aprendi

O protótipo tornou concretos temas como modelagem de ambiente, desenho de
recompensas, exploração versus aproveitamento e estabilidade do treinamento.
Ele também mostrou que melhorar um agente depende tanto da rede neural quanto
da qualidade das regras que descrevem o problema.

## Estado atual

É um experimento acadêmico, não um sistema de direção autônoma. O comportamento
ainda pode variar entre treinamentos e há espaço para evoluir sensores,
recompensas, cenários e avaliação quantitativa.
