This is the [assistant-ui](https://github.com/assistant-ui/assistant-ui) starter project.

## Getting Started

First, add your Google Gemini API key to the `.env.local` file:

```
GOOGLE_GENERATIVE_AI_API_KEY=your-google-gemini-api-key
```

The app uses the faster `gemini-3.6-flash` model with minimal thinking by default. To select another available Gemini model, optionally add:

```
GEMINI_MODEL=gemini-3.6-flash
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
