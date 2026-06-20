---
title: "A Survey on Visual Mamba"
category: "paper-note"
authors: ["Hanwei Zhang", "Ying Zhu", "Dan Wang", "Lijun Zhang", "Tianxiang Chen", "Zi Ye"]
venue: "arXiv:2404.15956"
date: "2024-04-24"
status: "选择性精读"
tags: ["深度学习", "状态空间模型", "Mamba", "综述"]
paperHref: "https://arxiv.org/abs/2404.15956"
summary: "系统综述 Mamba 与选择性状态空间模型在计算机视觉中的发展脉络、模型改进方式和视觉任务应用。"
---

## 阅读笔记

### 领域背景

- 深度神经网络在人工智能任务中取得了卓越的性能。卷积神经网络被用于处理图像相关的任务；RNN用于处理顺序或时间序列数据。Transformer通过自注意力机制对全局依赖关系进行建模解决了RNN与CNN只能捕获局部相关的缺点。但其因为自注意力等模块导致计算复杂度呈现随序列长度的二次方增长，因此近年来的研究主要集中于在保持Transformer高性能的同时降低其性能开销。状态空间模型（State Space Model, SSM）已经成为发展的焦点。从2024年开始，SSM的论文大幅度增加。而随着SSM的发展，一种被称为Mamba的选择性SSM开始受到关注，其在语言建模中凭借线性复杂度与良好的性能表现开始引起广泛关注。
- 自2023年12月Mamba发布以来，将Mamba用于视觉任务的研究数量逐步上升，有可能为Transformer提供可行的替代方案。

### 本文贡献

- 本文是首篇关于Mamba架构在计算机视觉领域的系统性研究综述，回顾并分析了目前各领域的研究方法与研究进展。

### 论述内容

- 本文第2章探讨Mamba架构的数学理论与概念。第3节讨论了朴素的 Mamba 视觉模型以及它们如何与最近提出的其他技术集成以提高性能。第 4 节探讨了 Mamba 技术在解决各种计算机视觉任务中的应用。最后，第 5 节总结了调查。
- 第二章通过介绍SSM、离散化、SSM近年不同架构形式、选择性SSM、选择性扫描机制。讨论部分阐述了RNN/LSTM的梯度消失与长程依赖问题，Transformer的计算成本问题。而Mamba通过提供选择性依赖机制、最佳GPU内存利用率、上下文长度的线性可扩展性等优势，为各种顺序数据处理任务提供了一种有前景的解决方案。
- 第三章介绍了视觉Mamba模块。指出视觉Mamba的开创性工作来自VMamba与Vision Mamba。二者分别通过引入视觉Mamba（Vision Mamba，ViM）模块与视觉状态空间（Visual State Space, VSS）模块来将Mamba迁移到视觉任务中。二者的主要区别在于ViM采用单独的一维卷积来扫描不同方向；相反的，VSS则在不同的扫描方案中共享深度可分离卷积。此外，研究人员还将视觉数据视为多维数据，本章节将介绍这3种研究方向派生的纯Mamba架构。其中，基于ViM的代表性方法有LocalMamba；基于VSS的代表性方法有PlainMamba、EfficientVMamba；基于多维数据的代表性方法有MambaMixer块、Mamba-ND、SiMBA块。
- 第三章还总结并分析了现有Mamba模块用于各个任务的改进方向，比较值得注意的有：将Mamba用于频域建模、与CNN/Transformer等架构融合、Mamba与递归结合、Mamba与自注意力/交叉注意力结合。此外，通过在图像分类任务上分析得到：CNN模型的参数和计算复杂度相对较低，适合资源有限的环境，但精度较差；Transformer模型精度较高，参数较高，计算复杂度高，需要大量资源，适合高性能计算环境；Mamba模型更加多样化，适合不同的计算资源和应用需求，许多模型在准确性方面具有竞争力。然而，研究人员必须根据具体的应用场景选择合适的模型。
- 第三章系统性的分析了基于CNN、Transformer和Mamba架构的模型在图像分类、目标检测与实例分割、语义分割任务上的性能对比，其数据如“关键图表记录”的表格所示。
- 第四章介绍了Mamba在视觉领域中的应用情况，包括一般视觉任务、医学视觉任务、遥感影像。其中一般视觉任务分为高/中级视觉任务（图片视频的分割、识别等）与低级视觉任务（恢复，生成等）。高/中级视觉任务中代表性方法有SSM-ViT；参考图像分割（Reference Image Segmentation, RIS）的代表性方法ReMamber；识别和分类长视频的代表性方法ViS4mer，该方法融合了SSM与Transformer，计算开销有所降低；以及用于视频任务中的Videa Mamba；多模态大语言模型（Multimodal Large Language Model, MLLM）领域通过将Mamba融入架构中，用于图像的视觉表示，如VL-Mamba；将MVSS模块与LSTM架构集成的VMRNN单元；以及用于图像识别的HARMamba。在低级视觉任务中，超分辨率的代表性方法有MMA；图像恢复领域的MambaIR与VmambaIR；图像去雾领域的UVM-Net；图像去雨的FreqMamba；图像去模糊的ALGNet；运动生成领域的Motion Mamba，以及扩散状态空间模型DiS；用于高分辨率视觉数据集的ZigMa;用于3DGS的GAMBA;以及引入SSM解决基于注意力的视频生成扩散模型中内存消耗随序列长度呈二次方增长的问题。在3D视觉任务中，点云数据的不规则性与稀疏性带来了障碍，该领域的代表性方法有SSPoint Mamba、3DMambaComplete、3DMambaIPF、PointMamba等。在医学视觉任务中，Mamba已被广泛使用，大多数研究的创新架构基于U-Net，如U-Mamba、Mamba UNet、UltraLight VM-UNet、VM-UNet、Mamba-HUNet、TM-UNet、Swin-UMamba；半监督学习任务中的医学视觉模型Semi-Mamba-UNet；用于弱监督学习任务的Weak-Mamba-UNet；以双分支结构为设计范式的P-Mamba用于儿科超声器官图像分割；用于息肉分割的PromptMamba；以及用于医学图像分类的MedMamba；用于医学图像重建的MambaMIR、MambaMIR-GAN；用于恢复内窥镜图片的FDVision Mamba，该架构结合了频域信息；用于预测放射治疗剂量的尖端扩散模型MD-Dose。在三维医学图像任务中，代表性方法有nnMamba、SegMamba、Light,-UNet、LMa-UNet、T-Mamba、Vivim、MambaMorph、、VMambaMorph。而遥感图像中的主要工作有用于红外微小目标检测、超高分辨率的密集遥感图像的预测、遥感变化检测、遥感语义分割；主要改方法有全向选择性扫描模块、通道切换Mamba与跨模态Mamba、双分支模型、编码器解码器架构、

### 讨论

- 挑战与限制：最初的Mamba采用一维选择性扫描，其难以捕获高维视觉数据中的空间信息。因为其最初是为因果数据设计的，很难适应图像等非因果数据。目前研究通过增强扫描机制解决这个问题，但部分增强增加了计算开销，未来还需探索更高效的建模方法。；当前Mamba的相关研究的可解释性不足，需要重点考察其泛化能力与改进的具体动机与可解释性。
- 未来方向：未来的研究方向包括：(1)创新扫描机制；(2)融合其他架构，如CNN、Transformer；(3)与其它方法集成，如扩散模型、视觉语言模型;(4)降低现有模型的计算开销，用Mamba实现高效的视觉建模;(5)探索不依赖大数据训练的Mamba模型，提升Mamba在各种任务中的适用性。

## 关键图表记录

### 1. Mamba 与 SSM 基础结构

![Mamba 模块的架构图](/images/notes/papers/visual-mamba-survey-2024/fig-01-mamba-block-architecture.png)

*图 1：Mamba 模块的架构图。该图用于理解 Mamba 如何在状态空间模型基础上引入选择机制，并通过硬件友好的实现方式提升长序列建模效率。*

![离散化 SSM 的架构图](/images/notes/papers/visual-mamba-survey-2024/fig-02-discretized-ssm-architecture.png)

*图 2：离散化 SSM 的架构图。该图适合放在背景知识部分，用来辅助理解连续状态空间模型如何转化为可在深度网络中使用的离散序列建模模块。*

### 2. 视觉 Mamba 的扫描机制

![不同的扫描示意图 a](/images/notes/papers/visual-mamba-survey-2024/fig-03a-scan-patterns.png)

*图 3(a)：不同扫描策略示意图。视觉 Mamba 需要将二维图像特征转换为可被序列模型处理的 token 序列，因此扫描方向会直接影响空间邻域关系的保留方式。*

![不同的扫描示意图 b](/images/notes/papers/visual-mamba-survey-2024/fig-03b-scan-patterns.png)

*图 3(b)：不同扫描策略示意图补充。该图可以和图 3(a) 一起用于比较单向、双向、交叉、多方向等扫描方式在二维视觉建模中的差异。*

![视觉 Mamba 使用的扫描机制总结](/images/notes/papers/visual-mamba-survey-2024/table-01-visual-mamba-scan-mechanisms.png)

*表 1：视觉 Mamba 使用的扫描机制总结。该表适合用于梳理不同 Visual Mamba 方法如何设计扫描路径，以及这些扫描设计分别服务于哪些视觉任务。*

### 3. Visual Mamba 模块与混合架构

![ViM 与 VSS 模块的架构图](/images/notes/papers/visual-mamba-survey-2024/fig-04-vim-vss-blocks.png)

*图 4：ViM 与 VSS 模块的架构图。ViM 和 VSS 是 Visual Mamba 方向中较有代表性的模块设计，可用于对比不同方法如何把 Mamba 引入视觉骨干网络。*

![Mamba 与其它架构的结合总结](/images/notes/papers/visual-mamba-survey-2024/table-02-mamba-hybrid-architectures.png)

*表 2：Mamba 与其它架构的结合总结。该表记录了 Mamba 与 CNN、Transformer、MLP 等架构结合的方式，有助于观察 Visual Mamba 并不是单一路线，而是逐渐形成了多种混合建模范式。*

### 4. 通用视觉任务性能比较

![ImageNet-1K 数据集上的性能比较](/images/notes/papers/visual-mamba-survey-2024/table-03-imagenet-1k-comparison.png)

*表 3：各模型架构代表方法在 ImageNet-1K 数据集上的性能比较。该表主要用于观察 Mamba、CNN、Transformer 等架构在图像分类任务中的性能与计算代价差异。*

![COCO 数据集上代表性方法性能比较](/images/notes/papers/visual-mamba-survey-2024/table-04-coco-representative-methods.png)

*表 4：COCO 数据集上不同架构模型最先进代表性方法的性能比较。该表可用于分析 Visual Mamba 在目标检测、实例分割等 COCO 任务中的位置。*

![COCO 数据集上不同架构模型最先进性能比较补充](/images/notes/papers/visual-mamba-survey-2024/table-05-coco-sota-comparison-2.png)

*表 5：COCO 数据集上不同架构模型最先进性能比较补充。该表与表 4 配合阅读，用于补充比较不同代表方法在 COCO 任务上的性能表现。*

![语义分割任务中不同模型的性能比较](/images/notes/papers/visual-mamba-survey-2024/table-06-semantic-segmentation-comparison.png)

*表 6：语义分割任务中不同模型的性能比较。该表对后续关注医学图像分割较有参考价值，因为语义分割是 Visual Mamba 从通用视觉迁移到医学视觉的重要桥梁任务。*

### 5. 代表性 Mamba 方法索引

![代表性 Mamba 方法表 a](/images/notes/papers/visual-mamba-survey-2024/table-07a-representative-mamba-methods.png)

*表 7(a)：代表性 Mamba 方法表。该表用于快速定位不同 Visual Mamba 方法的任务类型、核心设计和适用场景。*

![代表性 Mamba 方法表 b](/images/notes/papers/visual-mamba-survey-2024/table-07b-representative-mamba-methods.png)

*表 7(b)：代表性 Mamba 方法表补充。该表与表 7(a) 共同构成 Visual Mamba 方法索引，适合后续筛选值得精读或复现的工作。*

### 6. 医学视觉与遥感图像应用

![2D 医学图像分割中的代表性方法](/images/notes/papers/visual-mamba-survey-2024/fig-05-2d-medical-segmentation-methods.png)

*图 5：2D 医学图像分割中的代表性方法。该图与个人研究方向关联较强，可用于后续整理 Visual Mamba 在医学图像分割中的网络设计路线。*

![医学视觉 Mamba 的代表性方法 a](/images/notes/papers/visual-mamba-survey-2024/table-08a-medical-visual-mamba-methods.png)

*表 8(a)：医学视觉 Mamba 的代表性方法。该表记录了 Visual Mamba 在医学分类、分割、检测等任务中的应用，是后续医学图像方向重点阅读的入口。*

![医学视觉 Mamba 的代表性方法 b](/images/notes/papers/visual-mamba-survey-2024/table-08b-medical-visual-mamba-methods.png)

*表 8(b)：医学视觉 Mamba 的代表性方法补充。该表与表 8(a) 配合，用于补充医学视觉场景下更多 Mamba 相关工作。*

![Mamba 在遥感图像中的代表性方法](/images/notes/papers/visual-mamba-survey-2024/table-09-remote-sensing-mamba-methods.png)

*表 9：Mamba 在遥感图像中的代表性方法。遥感图像同样具有大尺寸、长程依赖和复杂空间结构等特点，可作为理解 Mamba 处理高分辨率视觉任务的参考。*
