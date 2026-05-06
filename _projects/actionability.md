---
layout: page
title: "Decoding Actionability in Teacher Observation Feedback"
description: "Fine-tuned RoBERTa on 662 annotated feedback examples to classify actionability, then scaled to 12,000+ instances to identify linguistic patterns distinguishing actionable from vague feedback."
category: "Benchmarks and datasets"
importance: 2
permalink: /projects/actionability-teacher-feedback/
img: /assets/img/projects/actionability/figure1.png
github: https://github.com/matrix-mayank/actionability-classification-teacherfeedback
---

<div class="mb-3">
  <a href="/assets/pdf/projects/actionability/paper.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary"><i class="ai ai-arxiv"></i> Paper</a>
</div>

Teacher professional development depends on good observation feedback, but analyzing it at scale across thousands of classrooms isn't feasible manually. We developed a computational approach to classify feedback actionability—scaling analysis while uncovering what linguistic patterns distinguish actionable from non-actionable feedback.

### What we did

Fine-tuned RoBERTa on 662 manually annotated feedback examples from West African classrooms, then scaled to 12,000+ instances. The model achieved strong performance (accuracy = 0.94, precision = 0.90, recall = 0.96, F1 = 0.93), enabling large-scale analysis of linguistic features associated with actionability.

### Approach

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/actionability/figure1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Expert annotation → RoBERTa fine-tuning → large-scale classification → linguistic analysis.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/actionability/figure2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Actionable feedback shows distinct patterns: shorter but more readable, lexically diverse, with precise modifiers.
</div>

Starting with expert-annotated examples, we trained a transformer classifier to recognize actionability, then extracted linguistic features at scale. This enables both automated assessment and practical guidance for feedback writers.

### Results

Actionable feedback has consistent linguistic signatures: lower word count (conciseness), higher readability, greater lexical diversity, and more modifier usage. In short: precise, accessible language beats verbose explanation. The model scaled from 662 annotated examples to classify 12,000+ feedback instances reliably.

### Why it matters

This shows how computational methods can both measure and improve educational feedback quality at scale. Rather than black-box classification, we surface interpretable patterns practitioners can act on. The findings point to clarity over comprehensiveness in observation protocols—with implications for teacher development systems worldwide.
