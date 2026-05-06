---
layout: page
title: "CONVOLEARN: Fine-Tuning Dialogic AI Tutors"
description: "Dataset of 2,134 teacher-student dialogues labeled across six learning-sciences dimensions to train and evaluate dialogic tutoring behavior in LLMs."
category: "Benchmarks and datasets"
importance: 1
permalink: /projects/convolearn-dialogic-tutors/
img: /assets/img/projects/convolearn/figure.png
---

<div class="mb-3">
  <a href="/assets/pdf/projects/convolearn/paper.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary"><i class="ai ai-arxiv"></i> Paper</a>
  <a href="https://huggingface.co/datasets/masharma/convolearn" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary"><i class="fas fa-database"></i> Dataset</a>
</div>

Most tutoring LLMs optimize for being "helpful"—which usually means giving answers directly. That's at odds with effective tutoring, which draws out student thinking rather than replacing it. This project builds training data grounded in learning-sciences theory of dialogic tutoring to both evaluate and improve AI tutor behavior.

### What's in it

**CONVOLEARN** is a dataset of 2,134 tutor-student dialogues (~20 turns each) with dimension-level labels across six core aspects of dialogic tutoring, grounded in knowledge-building theory:

- **Cognitive engagement** — prompting reasoning, not answers
- **Formative assessment** — probing understanding in real time
- **Accountability** — holding students to disciplinary norms
- **Cultural responsiveness** — recognizing diverse ways of knowing
- **Metacognition** — making thinking visible
- **Power dynamics** — distributing authority

These six dimensions break down into 21 subdimensions, all situated in middle school Earth Science. Teacher turns are authored by credentialed teachers; student turns are simulated.

### Approach

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/convolearn/figure.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dimension-labeled dialogues support classifier training, contrastive learning, and model fine-tuning.
</div>

Unlike binary "good/bad" labels, the dataset preserves quality spectra across dimensions. This supports multiple uses: training classifiers to evaluate dialogue quality, contrastive learning to surface pedagogical patterns, and direct model fine-tuning.

### Results

Classifiers trained on CONVOLEARN correlate with expert-coded instructional quality in authentic classroom transcripts (r = .118–.258, all p < .05)—evidence that semi-synthetic training data captures real pedagogical signal. Fine-tuned Mistral-7B shows measurably more dialogic behavior, rated by credentialed teachers as competitive with strong proprietary baselines.

### Why it matters

Most tutoring benchmarks measure correctness and fluency—not whether models actually support learning. CONVOLEARN provides open infrastructure for pedagogically aligned evaluation, with training signal to steer models away from "helpful assistant" defaults toward dialogue that builds understanding.
