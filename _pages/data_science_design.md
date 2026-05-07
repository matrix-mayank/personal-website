---
layout: page
title: data design
permalink: /data-science-design/
description: Select infographics and visual communication projects for international organizations, working at the intersection of data and design.
page_class: page-ds-design
nav: true
nav_order: 6
---

Select infographics and visual communication projects for international organizations, working at the intersection of data and design. [Behance](https://www.behance.net/mayank89){:target="_blank" rel="noopener noreferrer"}.

<div class="ds-design-gallery-breakout" role="region" aria-label="Infographics gallery">
  <div class="ds-design-gallery-inner">

    <section class="ds-design-gallery-group">
      <h3 class="ds-design-gallery-group-title">UNICEF · Nepal</h3>
      <div class="ds-design-gallery-grid">
        <div class="ds-design-gallery-item">
          {% include figure.liquid path="/assets/img/infographics/unicef-nepal/unicefnepal.jpg" alt="Infographic for UNICEF Nepal" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
        </div>
      </div>
    </section>

    <section class="ds-design-gallery-group">
      <h3 class="ds-design-gallery-group-title">UN Volunteers · DRC</h3>
      <div class="ds-design-gallery-grid">
        <div class="ds-design-gallery-item">
          {% include figure.liquid path="/assets/img/infographics/unv-drc/unvdrc.jpg" alt="Infographic for UN Volunteers DRC" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
        </div>
      </div>
    </section>

    <section class="ds-design-gallery-group">
      <h3 class="ds-design-gallery-group-title">UNESCO MGIEP</h3>
      <div class="ds-design-carousel">
        <button
          class="ds-design-carousel-btn ds-design-carousel-btn--prev"
          type="button"
          aria-label="Scroll UNESCO MGIEP gallery left"
          data-scroll-target="mgiep-carousel"
          data-scroll-direction="prev"
        >
          &#8592;
        </button>
        <div class="ds-design-carousel-track" id="mgiep-carousel">
          <div class="ds-design-gallery-item">
            {% include figure.liquid path="/assets/img/infographics/unesco-mgiep/mgiep1.png" alt="UNESCO MGIEP infographic 1" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
          </div>
          <div class="ds-design-gallery-item">
            {% include figure.liquid path="/assets/img/infographics/unesco-mgiep/mgiep2.png" alt="UNESCO MGIEP infographic 2" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
          </div>
          <div class="ds-design-gallery-item">
            {% include figure.liquid path="/assets/img/infographics/unesco-mgiep/mgiep3.png" alt="UNESCO MGIEP infographic 3" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
          </div>
          <div class="ds-design-gallery-item">
            {% include figure.liquid path="/assets/img/infographics/unesco-mgiep/mgiep4.png" alt="UNESCO MGIEP infographic 4" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
          </div>
          <div class="ds-design-gallery-item">
            {% include figure.liquid path="/assets/img/infographics/unesco-mgiep/mgiep5.png" alt="UNESCO MGIEP infographic 5" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
          </div>
          <div class="ds-design-gallery-item">
            {% include figure.liquid path="/assets/img/infographics/unesco-mgiep/mgiep6.png" alt="UNESCO MGIEP infographic 6" title="Click to enlarge" class="img-fluid infographic-thumb rounded shadow-sm" cache_bust=true zoomable=true %}
          </div>
        </div>
        <button
          class="ds-design-carousel-btn ds-design-carousel-btn--next"
          type="button"
          aria-label="Scroll UNESCO MGIEP gallery right"
          data-scroll-target="mgiep-carousel"
          data-scroll-direction="next"
        >
          &#8594;
        </button>
      </div>
    </section>

  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".ds-design-carousel-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        var targetId = button.getAttribute("data-scroll-target");
        var direction = button.getAttribute("data-scroll-direction");
        var track = document.getElementById(targetId);
        if (!track) return;
        var delta = Math.max(track.clientWidth * 0.82, 280);
        track.scrollBy({
          left: direction === "prev" ? -delta : delta,
          behavior: "smooth",
        });
      });
    });
  });
</script>
