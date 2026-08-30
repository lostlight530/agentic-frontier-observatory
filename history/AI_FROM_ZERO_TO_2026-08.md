# Artificial Intelligence from Zero to August 2026 / 人工智能从零到 2026 年 8 月

> This is a living historical baseline, not a claim of exhaustive coverage.  
> 这是一份持续更新的历史基线，不宣称穷尽全部人工智能史。

## 0｜Before the field had a name / 在“人工智能”命名之前

### 中文

人工智能并非在 1956 年凭空出现。它的前史来自多条长期汇流：形式逻辑试图把推理写成规则，概率与统计提供不确定性语言，机械自动装置证明复杂行为可以被结构化，神经生理学启发连接主义，控制论研究反馈与目标导向行为，计算理论则给出“什么可以被计算”的边界。

### English

AI did not appear from nothing in 1956. Its prehistory combined formal logic, probability, statistics, automata, neurophysiology, cybernetics, information theory, and the theory of computation. The field later inherited a permanent tension between explicit symbolic structure and learned representations.

## 1｜1950–1969: A field is named / 学科形成

Alan Turing's 1950 question about machine intelligence reframed the problem operationally. In 1956, the Dartmouth Summer Research Project on Artificial Intelligence named the field and proposed that aspects of learning and intelligence might be described precisely enough for machines to simulate them.

Early work developed search, theorem proving, symbolic problem solving, game playing, and perceptron-style learning. Optimism was high, but compute, data, memory, and representation were severely limited.

## 2｜1970–1979: Limits become visible / 第一次边界暴露

Systems that performed well in narrow demonstrations struggled with combinatorial explosion, brittle representations, incomplete world knowledge, and weak transfer. Funding contractions later became known as the first AI winter. The period established a recurring lesson: benchmark success inside a closed environment does not automatically become robust intelligence in the open world.

## 3｜1980–1989: Expert systems and knowledge engineering / 专家系统

Expert systems showed that encoded domain knowledge could create commercial value. They also exposed high maintenance costs, rule conflicts, narrow scope, and the knowledge-acquisition bottleneck. Connectionist research revived through backpropagation and distributed representations, preparing a later shift.

## 4｜1990–2009: The statistical turn / 统计学习转向

Probabilistic models, kernel methods, reinforcement learning, larger datasets, and the web pushed AI toward data-driven methods. Speech, vision, search, recommendation, and machine translation improved through statistical learning. AI became increasingly embedded in products even while public discussion often avoided the label.

## 5｜2010–2016: Deep learning becomes the dominant engine / 深度学习跃迁

Large datasets, GPUs, better optimization, and multilayer neural networks produced major gains in vision, speech, and language. The 2015 Nature review by LeCun, Bengio, and Hinton summarized the new representation-learning paradigm. Systems increasingly learned features instead of relying entirely on hand-written representations.

## 6｜2017–2021: Transformers and foundation models / Transformer 与基础模型

The 2017 paper *Attention Is All You Need* introduced the Transformer architecture. Large-scale pretraining, transfer learning, self-supervision, scaling laws, and specialized accelerators enabled increasingly general language and multimodal models. The unit of progress shifted from task-specific models toward reusable pretrained foundations.

## 7｜2022–2024: Generative AI becomes a mass interface / 生成式人工智能大众化

OpenAI released ChatGPT on 30 November 2022, making conversational generative AI a mass interface. Text, code, image, audio, and video generation accelerated. Retrieval, tool use, long context, and multimodal interaction moved from research topics into mainstream products.

Anthropic introduced the Model Context Protocol on 25 November 2024 as an open standard for connecting AI assistants to data sources and tools. This marked a move from isolated model capability toward standardized system integration.

## 8｜2025–August 2026: Agentic systems and infrastructure / 智能体系统与基础设施

By 2025–2026, the frontier increasingly centered on systems that can plan, call tools, operate computers, use memory, delegate work, recover from failure, and act over longer horizons. The important object was no longer only the model; it was the complete harness around the model.

On 9 December 2025, the Linux Foundation announced the Agentic AI Foundation, initially anchored by MCP, goose, and AGENTS.md. In 2026, NIST launched an AI Agent Standards Initiative focused on trusted, secure, and interoperable agents. A2A reached a stable 1.0 specification for communication between independent agent systems.

Stanford's 2026 AI Index described continued acceleration across models, technical performance, science, policy, and agentic systems, while also noting persistent transparency and measurement gaps.

## 9｜Durable historical interpretation / 长期历史判断

The history of AI is not a straight line from weak to strong machines. It is a repeated reorganization of five elements:

1. Representation — how the system encodes the world
2. Learning — how behavior changes with data or experience
3. Reasoning and control — how goals become decisions
4. Infrastructure — compute, data, tools, environments, and interfaces
5. Governance — who authorizes, measures, constrains, and benefits from the system

The agentic frontier of 2026 is historically significant because all five layers are becoming coupled. Models are embedded in systems that act, which makes protocols, identity, authorization, observability, recovery, and human judgment first-class research subjects.

## 10｜August 2026 observatory refinement / 2026 年 8 月观察站修正

The first continuous observatory month, 7–31 August 2026, turns the generic “agentic infrastructure” claim into a more stateful historical model.

```text
W32
model capability
→ protocol / discovery / identity / governance network

W33
capability
→ accountable principal
→ request identity
→ delegated scope
→ trust-domain boundary

W34
published Agent / session evidence
→ durable source change
→ artifact provenance
→ admission policy

W35
live trust
→ relying-resource denial
→ runtime stop
→ residual state
→ remediation
→ successor Task
→ request authorization

31 Aug
cross-task reference exists
→ typed recovery lineage remains open
→ referenced Task access remains authorization-scoped
```

The durable historical change is that **relationships themselves become system objects**. Context, Task identity, cross-task references, credentials, authorization decisions, provenance and remediation cannot be collapsed into one session flag.

August therefore adds these long-term historical boundaries:

```text
Capability ≠ Deployability
Identity ≠ Credential ≠ Authority
Protocol Publication ≠ Operational Maturity
Admission ≠ Continuous Authorization
Resource Denial ≠ Runtime Stop
Runtime Stop ≠ Rollback
Termination ≠ Remediation
Context Continuity ≠ Authority Continuity
referenceTaskIds ≠ typed recovery lineage
Task reference ≠ Task authority
```

The A2A Java SDK 1.2.0.Final release, published on 7 August and first observed by this repository on 31 August, is a useful implementation-history example: protocol relationship support created a real authorization-hardening requirement around referenced Task lookup. This is evidence that protocol maturity includes operational security correction, not merely specification publication.

## Primary references / 一手参考

See [`../SOURCE_REGISTRY.md`](../SOURCE_REGISTRY.md).
