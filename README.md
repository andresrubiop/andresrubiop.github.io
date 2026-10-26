# Andrés Rubio Proaño · Engineering portfolio

**[Visit the site →](https://andresrubiop.github.io/)**

A bilingual English/Spanish presentation of my work in high-performance computing and AI: selected open-source projects, research, experience and teaching. The dark aubergine and orange palette follows [my main website](https://www.andresrubiop.com).

## Run locally

No build tools or external JavaScript dependencies are required.

```bash
python3 -m http.server 4180 --bind 127.0.0.1
```

Open <http://127.0.0.1:4180>. Use `?lang=en` or `?lang=es` to choose a language; the language buttons remember a preference locally when browser storage is available. The complete English content and navigation also work without JavaScript.

## Publishing

GitHub Pages serves `main` from the repository root. `.nojekyll` makes this a plain static site. Pushing to `main` publishes updates through GitHub Pages. No custom domain, backend, analytics, secret or external font service is required.

## Content and assets

- Project descriptions link to their public repositories and reflect their documented scope. Research prototypes are identified as such.
- `assets/a100-throughput.svg` comes from [gpu-inference-benchmarks](https://github.com/andresrubiop/gpu-inference-benchmarks). Historical campaign: Andrés Rubio and Joel Morales, July 2026, CEDIA compute resources. Configurations use different models/quantization; the figure is not a controlled ranking of serving frameworks. See the source repository for data and methodology.
- `assets/leo.svg` comes from [leo-desktop](https://github.com/andresrubiop/leo-desktop), MIT-licensed original project artwork.
- The landmark pipeline and scheduling grid are explanatory illustrations, not screenshots of recorded participant data or real schedules.
- The portrait is the same public profile photograph used on my main website. Text and personal portrait remain © Andrés Rubio Proaño. Source code and original interface artwork are MIT-licensed; see [LICENSE](LICENSE).

Selected projects remain independently licensed and maintained in their own repositories.
