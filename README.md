# Clinton Adabanya — conversational portfolio

Responsive portfolio with original project screenshots, résumé-backed experience, project details, and a local conversational guide.

## Run

Node.js 22+; no dependency installation required.

```sh
npm start
```

Open http://127.0.0.1:5173. Use `PORT=5174 npm start` to choose another port. No API keys or AI providers are needed or used.

## How the local guide works

The browser imports `chat.mjs` and calls it directly against `portfolio.json`. Questions and conversation history stay in memory in the current tab; the composer makes no chat requests. Refreshing clears the conversation. Initial page, image, font, and portfolio-data requests still occur normally.

The engine combines:

- Structured facts and question facets for location, education, employment dates, contact, interests, résumé, and project contributions.
- Entity resolution for named projects, employers, and universities, with clarification for ambiguous names such as “Octave”.
- Recent conversational context for follow-ups such as “When did he join?” and “What technologies did it use?” Explicit topic changes take precedence.
- Normalised vocabulary, synonyms, conservative typo correction, and document-frequency-weighted evidence retrieval over the résumé and project descriptions.
- Separate answers to multiple independently phrased questions and suggested follow-ups.
- A local presentation layer (`formats.mjs`) for concise summaries, one-sentence answers, bullet points, and short word-count summaries. Follow-ups such as “make that shorter” resolve the previous user topic. Exact word summaries support up to six evidence-backed keywords; larger or unsupported requests are disclosed rather than padded with invented content.
- Source links tied to retrieved facts, and explicit missing-information responses rather than inferred salary, citizenship, birthplace, or availability.

This is a bounded, retrieval-based guide, not a general-purpose language model. It may ask for a clearer question when the local facts do not support an answer. Edit `portfolio.json` and refresh to update its knowledge; no retraining or external service is required.

`POST /api/chat` remains a local-only compatibility/test endpoint using the same engine. The browser does not call it. `/api/status` always reports local mode. The server restricts public files, validates request input, bounds request sizes, and rate-limits the compatibility endpoint. No model integration remains.

## Content

- `portfolio.json`: shared content for pages, experience, education, featured order, résumé link, and guide facts.
- `assets/`: original project images from `AdabanyaC/newportfolio`; source URLs in `assets/sources.json`. Portrait copied from its `src/assets/clinton.jpg`.
- Résumé: https://drive.google.com/file/d/1i-DxbbGJr4An8FpMEm3BtiFUr-3qxTPd/view?usp=sharing
- Featured projects are Breed, Logg, and Landlord, using their original images from the local Octave Labs project. SmartMatch and InstaClone are no longer in the project listing or sidebar; their résumé facts remain available to the guide.
- Seven original website project screenshots are reused on matching projects.

## Verification

`npm run check` validates JavaScript modules. `npm test` exercises the reported location regression, paraphrases and typos, current facts, project and employer follow-ups, context switches, multiple questions, unknown facts, source attribution, local-only behaviour, browser module serving, and endpoint safeguards.

The composer supports Enter to send, Shift+Enter for a new line, Cmd/Ctrl+K focus, retry, and a new conversation. It uses the same engine tested in Node.

## Production deployment

Run `npm ci`, `npm run check`, `npm test`, and `npm run build`. The build creates an allowlisted static `dist/` directory for Vercel or any static host. Vercel settings are defined in `vercel.json`; no environment variables are required. Navigation uses hash routes. The browser guide runs locally; the optional development server API is not deployed.
