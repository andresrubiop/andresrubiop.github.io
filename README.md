# Andrés Rubio Proaño · GitHub Pages entry point

**[Website & CV →](https://www.andresrubiop.com/)** · **[Engineering portfolio →](https://www.andresrubiop.com/#portfolio)**

This GitHub Pages user site redirects to my main website. The open-source portfolio now lives there alongside my experience, publications and teaching, in Spanish, English, French, Catalan and Japanese.

## Behavior

- The root opens `https://www.andresrubiop.com/` with a browser redirect.
- Supported `?lang=es|en|fr|ca|ja` preferences are forwarded.
- Previous `#work` and `#about` links map to `#portfolio` and `#expertise`.
- Only predefined sections and languages are forwarded; the target origin is fixed.
- A meta refresh and visible links provide a fallback without JavaScript.
- This is a static browser redirect, not a server-side HTTP 301/302.

GitHub Pages serves the repository root on `main` with `.nojekyll`. No custom domain or CNAME is configured, so existing project sites such as [the operating systems course](https://andresrubiop.github.io/fso-uti/) keep their GitHub Pages URLs. The former standalone portfolio remains in Git history.

## Local check

```bash
python3 -m http.server 4180 --bind 127.0.0.1
```

Opening the root intentionally leaves the local server and navigates to the public website.

The interface source and favicon are MIT-licensed. Personal names and biographical text remain © Andrés Rubio Proaño.
