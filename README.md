# TchristsFoM

Marketing site for **TchristsFoM** professional training courses. White-background layout, gold accents from the supplied logo, British-standard / CPD-approved course copy.

The public brand name is **TchristsFoM** (from `logo.png`). The Word-document copy originally named RA British Global Academy / RABG Academy; those names remain available in `src/config/site.ts` as `academyName` / `academyShortName` until the client confirms one public identity.

Logo tagline typo ("Empoweriing") is corrected in site text to **Empowering**.

## Run

```bash
cp .env.example .env.local
npm install
npm run dev
```

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

Logo asset: `public/images/logo.png` (copied from project `logo.png`).
