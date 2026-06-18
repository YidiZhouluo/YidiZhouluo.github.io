---
title: "U-Net: Convolutional Networks for Biomedical Image Segmentation"
category: "paper-note"
authors: ["Olaf Ronneberger", "Philipp Fischer", "Thomas Brox"]
venue: "MICCAI 2015（CCF-B会议）"
date: "2015-11-18"
status: "精读"
tags: ["深度学习", "卷积神经网络", "生物医学图像分割"]
paperHref: "https://arxiv.org/abs/1505.04597"
codeHref: "https://github.com/LeeJunHyun/Image_Segmentation"
summary: "提出了用于生物医学图像分割的U-Net，一种对称的U型编码器-解码器结构，通过跳跃连接。"
---

## 阅读笔记

### 问题分析

- 传统卷积神经网络需要大规模数据集与较高的参数量来训练，而生物医学图像数据集规模有限。
- 目前的卷积神经网络主要适用于图像分类任务，但在生物医学图像中，输出应该包含定位，即每个像素都应该被分配一个类别（也就是计算机视觉任务中的语义分割任务）。
- 在ISBI 2012的EM挑战赛中，Ciresan等人构建了一种网络取得了冠军。但他们的方法有2个缺点：(1)它的运行非常的慢，受限于每个patch单独运行；(2)要使网络具备全局感受野，需要较多次数的最大池化。而多次池化后必然伴随着定位精度的下降。因此，定位精度与上下文的使用之间存在权衡。

### 本文贡献

- 提出了一种U型全卷积网络

## 关键图表记录
