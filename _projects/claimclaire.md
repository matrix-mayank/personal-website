---
layout: page
title: "ClaimCLAIRE: Trust-Aware Multi-Component Fact-Checking"
description: "Built a fact-checking agent integrating component-aware decomposition, trust-modulated retrieval, and adaptive gap-filling. Achieved 84.27% accuracy on AVeriTeC by balancing evidence comprehensiveness with source reliability. Accepted for oral presentation at TrustNLP @ ACL 2026."
category: "AI system evaluation"
importance: 3
permalink: /projects/claimclaire-fact-checking/
img: /assets/img/projects/claimclaire/figure.png
github: https://github.com/yo-lxmmm/ClaimCLAIRE
---

<div class="mb-3">
  <a href="/assets/pdf/projects/claimclaire/paper.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary"><i class="ai ai-arxiv"></i> Paper</a>
  <a href="https://claimclaire.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary"><i class="fas fa-globe"></i> Demo</a>
</div>

Verifying complex claims against diverse, potentially unreliable open-web sources requires balancing evidence comprehensiveness with source reliability. Current fact-checking approaches handle this piecemeal: decomposition loses context, trust signals get applied crudely at document level. ClaimCLAIRE integrates decomposition, trust-aware retrieval, and adaptive gap-filling into one pipeline.

### What it does

Four key innovations:

1. **Iterative component-aware decomposition** with exhaustiveness validation
2. **Holistic evidence gathering** using a ReAct agent that maintains cross-component awareness
3. **Trust-modulated retrieval** weighting evidence by source credibility
4. **Adaptive gap-filling** addressing recall bottlenecks for under-supported sub-claims

Evaluated on AVeriTeC benchmark: 84.27% accuracy, macro-F1 = 0.806.

### Approach

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/claimclaire/figure.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Decompose claim → gather evidence with trust weighting → verify components → synthesize with AND-logic → fill gaps adaptively.
</div>

The system decomposes claims into atomic components, retrieves evidence with trust modulation (weighting by source credibility), verifies each component, and synthesizes verdicts using AND-logic. Crucially, it adaptively fills gaps for under-supported sub-claims. This integration ensures decomposition doesn't degrade performance—a common failure mode.

### Results

Systematic ablations show decomposition alone can hurt performance (loses context), but integration with trust-aware retrieval + adaptive gap-filling recovers and exceeds baseline. Trust modulation mitigates misinformation influence. Component-level verdicts + AND-logic synthesis support transparent, accountable verification. Source trust ratings expose how verdicts are reached.

### Why it matters

Trustworthy fact-checking requires integrating multiple signals: decomposition for precision, trust ratings for reliability, adaptive retrieval for recall. This challenges the "decompose everything" paradigm—showing decomposition works only when paired with mechanisms that preserve context and trust. For AI evaluation, accuracy alone isn't enough. Systems must be accountable (transparent reasoning), reliable (trust-aware), and adaptive (gap-filling).