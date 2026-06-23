# 术语表

## Base Model

基础模型。常用于说明 checkpoint 或 LoRA 基于哪个生态训练，例如 SD1.5、SDXL、Pony、FLUX。

## Checkpoint

保存模型权重的文件。AI 绘画里常见扩展名是 `.safetensors` 或 `.ckpt`。

## CFG

提示词引导强度。数值越高不代表越好，过高可能让画面变硬、变脏或结构异常。

## CLIP

常见文本/图像编码模型。在 AI 绘画中经常负责把提示词编码成模型可用的信息。

## ControlNet

结构控制模块，可以用姿势、线稿、深度图等条件控制生成结果。

## Denoise

去噪强度。在图生图和局部重绘中常见。数值越高，改动越大。

## Embedding

也叫 Textual Inversion。是一种小型提示词嵌入，用来触发特定概念或改善负面效果。

## Latent

模型内部的压缩图像表示。扩散模型常在 latent 空间里生成，再通过 VAE 解码成图片。

## LoRA

低秩适配模型。用于给底模追加角色、画风、服装、姿势或概念。

## Prompt

提示词。分为正向提示词和负向提示词。

## Sampler

采样器，控制扩散模型去噪时的算法路径。

## Scheduler

调度器，控制去噪过程中噪声强度的变化方式。

## Seed

随机种子。固定 seed 可以复现相近结果，便于比较参数。

## Text Encoder

文本编码器，把提示词转换成模型可以理解的数字表示。

## VAE

变分自编码器。负责在 latent 和最终图片之间转换。

## WebUI

AI 绘画图形界面。常用于指 Stable Diffusion WebUI，也可以泛指浏览器里的本地绘图界面。

## Workflow

工作流。把模型、提示词、采样器、VAE、LoRA、ControlNet 等节点连接起来的执行流程。
