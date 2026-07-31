---
title: "Reconhecimento de Objetos no iPhone"
description: "Aplicativo acadêmico em SwiftUI que usa a câmera, Vision e um modelo Core ML treinado para reconhecer objetos em tempo real."
eyebrow: "iOS • Visão computacional • Faculdade"
publishedAt: 2026-07-31
status: "Protótipo funcional"
featured: false
stack:
  - "SwiftUI"
  - "Vision"
  - "Core ML"
  - "AVFoundation"
  - "PyTorch"
highlights:
  - "Classificação pela câmera"
  - "Modelo treinado pelo autor"
  - "Pipeline PyTorch para Core ML"
github: "https://github.com/rhuanovski/ios-object-recognizer"
accent: "violet"
---

Este projeto de faculdade conecta duas etapas que eu queria compreender na
prática: treinar um modelo de visão computacional e colocá-lo dentro de um
aplicativo real para iPhone.

## O aplicativo

A interface foi construída em SwiftUI e usa AVFoundation para capturar os
quadros da câmera. O framework Vision prepara cada imagem e executa a inferência
com um modelo Core ML embarcado no aplicativo.

O protótipo foi treinado para reconhecer classes como pessoa, celular, caderno
e garrafa, exibindo classificações e níveis de confiança durante o uso da
câmera.

## Treinamento e conversão

O treinamento parte de uma MobileNetV3 no PyTorch. Depois, o modelo é convertido
para Core ML e integrado ao projeto do Xcode. O repositório publica o aplicativo,
o modelo compilável e um script reproduzível de treinamento e conversão.

## Decisões de publicação

As fotografias usadas no treinamento não fazem parte do repositório público
para preservar privacidade e direitos de imagem. O código permanece disponível
para demonstrar a arquitetura e permitir que outro conjunto de dados seja
utilizado.

## Estado atual

É um protótipo acadêmico funcional, com oportunidades de evolução em qualidade
do conjunto de dados, quantidade de classes, avaliação do modelo e acabamento
da experiência no dispositivo.
