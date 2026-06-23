# Prompt 入门

一句话：Prompt 是给模型的生成引导，不是绝对命令。好提示词要和模型生态、参数和工作流一起看。

## 正向提示词

正向提示词写你希望出现的内容，例如：

```text
a quiet street at sunset, warm light, detailed background, cinematic composition
```

常见信息包括：

- 主体：人物、动物、建筑、物体。
- 场景：室内、街道、森林、海边。
- 风格：摄影、插画、动画截图、概念设计。
- 光线：柔光、逆光、霓虹、自然光。
- 构图：特写、全身、广角、俯视。
- 质量描述：清晰、细节丰富、干净背景。

## 负向提示词

负向提示词写你希望减少的内容，例如：

```text
low quality, blurry, watermark, text, bad anatomy, extra fingers
```

负向提示词不是万能修复器。它更适合减少常见问题，而不是强行让模型学会没学过的内容。

## 标签式提示词

二次元模型常见标签式写法，例如：

```text
1girl, solo, school uniform, long hair, blue eyes, classroom, soft lighting
```

优点是简洁、可组合。缺点是需要了解模型训练时使用的标签体系。

## 自然语言提示词

新一代模型通常更适合自然语言，例如：

```text
Create an illustration of a small robot reading a book in a cozy library, with warm lighting and a calm atmosphere.
```

优点是描述清楚，适合复杂语义。缺点是如果模型不支持这种理解方式，效果可能不如标签。

## Prompt 不跟手怎么办

优先按顺序排查：

1. 底模是否适合这个题材。
2. 提示词是否互相冲突。
3. 是否需要触发词。
4. LoRA 权重是否过高。
5. CFG 是否过高或过低。
6. 图片尺寸是否符合模型推荐。
7. 是否需要 ControlNet、参考图或局部重绘。

## 常见误区

- 把所有好词都塞进去。过长提示词可能互相稀释。
- 复制别人的 prompt 但换了模型。不同模型理解方式不同。
- 忽略触发词。很多 LoRA 没有触发词就不明显。
- 只靠负向提示词修手。手部问题往往需要模型、LoRA、姿势控制或后期修复共同解决。
