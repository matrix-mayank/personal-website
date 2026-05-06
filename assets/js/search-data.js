// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experience",
          title: "experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-awards",
          title: "awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-data-design",
          title: "data design",
          description: "Select infographics and visual communication projects for international organizations, working at the intersection of data and design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data-science-design/";
          },
        },{id: "nav-more",
          title: "more",
          description: "a little more about me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about-me/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-decoding-actionability-a-computational-analysis-of-teacher-observation-feedback-with-jason-zhang-accepted-at-20th-bea-acl-2025-tada",
          title: 'Decoding Actionability: A Computational Analysis of Teacher Observation Feedback (with Jason Zhang) accepted...',
          description: "",
          section: "News",},{id: "news-awarded-stanford-peking-university-fellowship-on-generative-ai-healthcare-heading-to-beijing-shenzhen-for-2-week-bootcamp-cn",
          title: 'Awarded Stanford-Peking University Fellowship on Generative AI + Healthcare. Heading to Beijing+Shenzhen for...',
          description: "",
          section: "News",},{id: "news-selected-as-an-nlp-mentor-for-high-school-students-at-stanford-ai4all-2025-robot",
          title: 'Selected as an NLP mentor for high school students at Stanford AI4ALL 2025...',
          description: "",
          section: "News",},{id: "news-heading-to-vienna-for-acl-2025-workshops-supported-by-a-stanford-travel-scholarship",
          title: 'Heading to Vienna 🇦🇹 for ACL 2025 workshops, supported by a Stanford travel...',
          description: "",
          section: "News",},{id: "news-selected-to-present-beyond-blind-spots-mitigating-intersectional-bias-in-student-dropout-prediction-at-the-stanford-education-data-science-conference-mortar-board",
          title: 'Selected to present “Beyond Blind Spots: Mitigating Intersectional Bias in Student Dropout Prediction”...',
          description: "",
          section: "News",},{id: "news-unesco-study-with-delhi-schools-on-empathy-and-global-citizenship-published-in-nature-scientific-reports-globe-with-meridians",
          title: 'UNESCO study with Delhi schools on empathy and global citizenship, published in Nature...',
          description: "",
          section: "News",},{id: "news-cantotalk-probing-teacher-expertise-from-fine-tuned-talk-move-representations-accepted-to-edm-2026-with-xinman-liu-and-gordon-yeung-sparkles",
          title: 'CantoTalk: Probing Teacher Expertise From Fine-Tuned Talk Move Representations accepted to EDM 2026...',
          description: "",
          section: "News",},{id: "news-convolearn-work-accepted-at-stanford-causal-science-center-conference-on-frontiers-in-ai-evaluation-chart-with-upwards-trend",
          title: 'ConvoLearn work accepted at Stanford Causal Science Center Conference on Frontiers in AI...',
          description: "",
          section: "News",},{id: "news-attending-asu-gsv-2026-in-san-diego-on-stanford-gse-scholarship-airplane",
          title: 'Attending ASU+GSV 2026 in San Diego on Stanford GSE scholarship :airplane:',
          description: "",
          section: "News",},{id: "news-convolearn-dataset-40k-turns-post-training-data-for-dialogic-alignment-of-llm-tutors-released-on-hugging-face-sparkles",
          title: 'ConvoLearn dataset (40K turns, post-training data for dialogic alignment of LLM tutors) released...',
          description: "",
          section: "News",},{id: "news-claimclaire-a-trust-aware-multi-component-fact-checking-agent-for-open-world-claims-with-xinman-liu-accepted-for-oral-presentation-at-6th-trustnlp-acl-2026-speech-balloon",
          title: 'ClaimCLAIRE: A Trust-Aware Multi-Component Fact-Checking Agent for Open-World Claims (with Xinman Liu) accepted...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-21st-bea-acl-2026-a-bigger-catch-fine-grained-curriculum-standards-alignment-on-the-mathfish-benchmark-with-xinman-liu-amp-amp-teah-shi-and-predicting-item-difficulty-and-generating-reading-comprehension-items-via-an-annotated-repository-with-collaborators-books",
          title: 'Two papers accepted at 21st BEA @ ACL 2026: A Bigger Catch: Fine-Grained...',
          description: "",
          section: "News",},{id: "news-returning-at-stanford-ai4all-2026-and-the-stanford-aimi-summer-research-internship-2026-as-an-nlp-mentor-for-high-school-students-robot",
          title: 'Returning at Stanford AI4ALL 2026 and the Stanford AIMI Summer Research Internship 2026...',
          description: "",
          section: "News",},{id: "projects-decoding-actionability-in-teacher-observation-feedback",
          title: 'Decoding Actionability in Teacher Observation Feedback',
          description: "Fine-tuned RoBERTa on 662 annotated feedback examples to classify actionability, then scaled to 12,000+ instances to identify linguistic patterns distinguishing actionable from vague feedback.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/actionability-teacher-feedback/";
            },},{id: "projects-cantotalk-probing-teacher-expertise-from-fine-tuned-representations",
          title: 'CantoTalk: Probing Teacher Expertise From Fine-Tuned Representations',
          description: "Fine-tuned five LLMs on 7,518 Cantonese teacher utterances to classify talk moves (micro-F1=0.81). Probed embeddings to show teacher expertise is linearly separable and clustering reveals three distinct discourse styles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cantotalk-teacher-expertise/";
            },},{id: "projects-claimclaire-trust-aware-multi-component-fact-checking",
          title: 'ClaimCLAIRE: Trust-Aware Multi-Component Fact-Checking',
          description: "Built a fact-checking agent integrating component-aware decomposition, trust-modulated retrieval, and adaptive gap-filling. Achieved 84.27% accuracy on AVeriTeC by balancing evidence comprehensiveness with source reliability. Accepted for oral presentation at TrustNLP @ ACL 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/claimclaire-fact-checking/";
            },},{id: "projects-convolearn-fine-tuning-dialogic-ai-tutors",
          title: 'CONVOLEARN: Fine-Tuning Dialogic AI Tutors',
          description: "Dataset of 2,134 teacher-student dialogues labeled across six learning-sciences dimensions to train and evaluate dialogic tutoring behavior in LLMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/convolearn-dialogic-tutors/";
            },},{id: "projects-dipecos-digital-pedagogy-competence-scale",
          title: 'DiPeCoS: Digital Pedagogy Competence Scale',
          description: "Created an 8-item scenario-based assessment of teachers&#39; digital pedagogy competence, validated with 1,315 teachers using IRT. Items show good discrimination and appropriate difficulty, forming a unidimensional construct grounded in UDL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dipecos-digital-pedagogy/";
            },},{id: "projects-game-based-learning-building-knowledge-and-sel-competencies",
          title: 'Game-Based Learning: Building Knowledge and SEL Competencies',
          description: "Designed a course centered on &#39;Bury me, my Love&#39; and tested it with 201 adolescents across India and UAE. Found significant increases in both migration knowledge (p&lt;0.001) and empathy/compassion, with interesting gender effects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game-based-learning-course/";
            },},{id: "projects-global-citizenship-identity-mediates-knowledge-skills-and-engagement",
          title: 'Global Citizenship Identity Mediates Knowledge, Skills, and Engagement',
          description: "Mediation analysis with 249 participants showing global citizenship identification accounts for 70.7% of critical inquiry&#39;s effect on engagement, 39.9% of awareness&#39;s effect, and 33.6% of empathy&#39;s effect. Critical inquiry has no direct effect without identity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/global-citizenship-identity-mediation/";
            },},{id: "projects-equilibrium-in-empathic-response-predicts-iwah",
          title: 'Equilibrium in Empathic Response Predicts IWAH',
          description: "Used polynomial regression with response surface analysis on 634 Indian adolescents to show that equilibrium in empathic concern and personal distress predicts identification with all humanity, while directional disequilibrium (EC&gt;PD) provides no additional benefit.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iwah-empathic-equilibrium/";
            },},{id: "projects-a-bigger-catch-fine-grained-curriculum-alignment-on-mathfish",
          title: 'A Bigger Catch: Fine-Grained Curriculum Alignment on MathFish',
          description: "Built a three-stage pipeline (hard negatives, cross-encoder reranking, ReAct agent) to predict which of 385 Common Core standards a math problem aligns to, achieving 31.3% exact match (6.5× baseline). Accepted at 21st BEA @ ACL 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mathfish-curriculum-alignment/";
            },},{id: "projects-psychometric-analysis-of-mrbench-v2",
          title: 'Psychometric Analysis of MRBench V2',
          description: "Applied CFA, IRT, G-theory, and measurement invariance testing to validate MRBench V2. Found six of eight dimensions form a coherent scale (CFI=0.998, Grel=0.974) but detected non-equivalence across model sizes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mrbench-psychometric-analysis/";
            },},{id: "projects-csel-measuring-teacher-beliefs-about-classroom-sel",
          title: 'CSEL: Measuring Teacher Beliefs About Classroom SEL',
          description: "Developed a scale measuring teachers&#39; beliefs about classroom SEL with 2,097 teachers. Factor analysis revealed three dimensions (management, culture, relationships) that predict teacher well-being and correlate with emotional intelligence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/csel-teacher-beliefs/";
            },},{id: "projects-selos-social-and-emotional-learning-and-orientation-scale",
          title: 'SELOS: Social and Emotional Learning and Orientation Scale',
          description: "Developed and validated an 8-item SEL scale in Hindi with 4,352 students. EFA and CFA revealed a two-factor structure with strong reliability and partial measurement invariance across gender.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/selos-hindi-sel-scale/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%73%68%61%72%6D%61@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mayankds", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=j7NKBKIAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/matrix-mayank", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
