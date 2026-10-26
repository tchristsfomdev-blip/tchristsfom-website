# UX test log

## Content sync from tchrists.com — 2026-10-15

Imported live company details from [tchrists.com](https://tchrists.com/): legal name, Sharjah address, emails, phones, social links, regions, industries, mission/vision, consultancy services, published impact figures, and case blurbs. White layout retained. Contact TODOs closed for email/phone/address. Hours and social URLs now live. Blog remains a placeholder route; primary nav is About · Services · Courses · Contact.

## Phase 1 — Foundation

**Date:** 2026-10-14
**Gate:** Pass. No open severity 3 or 4 issues.

### What was tested

Shell only: header, footer, skip link, mobile menu, placeholder routes, and the home canvas. Marketing page layouts, motion, and the enquiry form are later phases.

Reviewed in Playwright at 320, 390, 768, 1280, and 1440, plus full-page screenshots at 320, 390, and 1280. Chromium, Firefox, and WebKit, with Pixel 7 and iPhone 13 emulations. No physical iPhone or Android pass in this phase.

### Quality gate

| Check                   | Result                                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `npm run lint`          | Pass                                                                                                     |
| `npm run format:check`  | Pass                                                                                                     |
| `npm run typecheck`     | Pass                                                                                                     |
| Unit tests              | 9 passed                                                                                                 |
| Production build        | Static routes for `/`, `/courses`, `/blog`, `/contact`, `/privacy-policy`, `/terms`, `/icon.svg`         |
| Playwright              | 33 passed, 7 skipped (desktop projects skip the mobile-only menu; the no-JS check runs once on Chromium) |
| axe serious/critical    | 0 on `/`, `/courses`, `/blog`, `/contact`, `/privacy-policy`, `/terms`                                   |
| Lighthouse mobile, home | Performance 98, Accessibility 100, Best Practices 100, SEO 100                                           |
| LCP / CLS               | 2.46s / 0                                                                                                |

Lighthouse is above the Phase 1 bar of 95. LCP is inside the 2.5s target but close to it. Later phases have to keep fonts and client JavaScript in check.

### Contrast (measured, not estimated)

| Pair                    | Ratio   | Decision                                           |
| ----------------------- | ------- | -------------------------------------------------- |
| White on navy `#020826` | 19.71:1 | Body text                                          |
| Ivory on navy           | 18.57:1 | Body text                                          |
| Mist `#C9C3B4` on navy  | 11.22:1 | Secondary text                                     |
| Gold `#E8B923` on navy  | 10.70:1 | Accent text and focus                              |
| Gold `#B8860B` on navy  | 6.06:1  | Accent text; navy text on the gold CTA also passes |
| Ink on ivory            | 17.95:1 | Text on light sections, when those sections exist  |
| Gold `#E8B923` on ivory | 1.74:1  | Lines and ornaments only                           |
| Gold `#B8860B` on ivory | 3.07:1  | Not used for text                                  |

### UI checklist

- Tokens, Fraunces, and Manrope are in use. Spacing follows a 4px grid.
- Header links, the enquire control, and the menu expose hover and a gold focus ring. The enquire control uses navy text on the gold gradient.
- 320, 390, and 1280 screenshots show the same alignment. No horizontal scroll at the checked widths.
- The emblem is an SVG stand-in, so it stays sharp. It is not the client logo file.
- Gold is not used as text on ivory. There is no ivory section in this phase.
- Motion is limited to a 1px press on the enquire control, removed under reduced motion. Content is not hidden in CSS.
- Reduced motion was checked in Playwright. No custom cursor is mounted.
- The navy page and the slightly lifted navy footer are separated by a 1px gold rule.

### UX checklist

- Loading state is the document itself. The menu opens, closes on Escape, and closes when a link is chosen.
- Courses and Contact are in the header. Enquire Now goes to Contact. Footer course names jump to anchors on `/courses`.
- One H1 on each page. Line length is capped around 68ch.
- Nothing in this phase delays the heading or the enquire control.

### Issues

| ID    | Severity | Issue                                                                                                  | Fix                                                                                                                             | Status                               |
| ----- | -------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| P1-01 | 2        | `logo.png` was not in the project. Colours are the brief's starting values, not samples from the file. | SVG stand-in in the header. Replace it when the file arrives, then re-sample tokens if the golds differ.                        | Open, waiting on the client          |
| P1-02 | 2        | The emblem wordmark is TchristsFoM. The approved name is RA British Global Academy.                    | `src/config/site.ts` is the only name source. The mark is unnamed; the wordmark beside it is `shortName`.                       | Open, client decision                |
| P1-03 | 2        | The logo file spells the tagline "Empowring".                                                          | Site text uses "Empowering".                                                                                                    | Open, client should correct the file |
| P1-04 | 2        | Email, phone, address, hours, and social URLs are TODO placeholders.                                   | Shown as text, not links, so they are not dead controls.                                                                        | Open, waiting on the client          |
| P1-05 | 2        | Course rows are titles only. The directory layout, descriptions, and detail pages are Phase 3.         | Anchors exist so footer links resolve.                                                                                          | Open, scheduled                      |
| P1-06 | 1        | Playwright WebKit does not deliver Tab to the page.                                                    | The skip-link test focuses the link directly on WebKit. Chromium and Firefox still press Tab. Enter then moves focus to `main`. | Closed for this phase                |
| P1-07 | 1        | LCP is 2.46s on the shell.                                                                             | No code change. Watch it when motion and imagery arrive.                                                                        | Open, watch                          |

### Task scenarios

Scenarios 1–5 need the course detail pages, blog, and form. They were not run. The shell path for scenario 1 exists: Payroll is on `/courses#hr-payroll-management`, and Contact is one header action away.
