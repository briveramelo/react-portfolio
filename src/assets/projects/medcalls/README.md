# MedCalls AI portfolio media

Project content: `src/data/projects/medcalls.tsx`. Runtime media belongs under
`medcalls/` in `brandon-portfolio-448520.firebasestorage.app`. Only `logo.png` is
imported into the JavaScript bundle; the other files are editable/upload sources.

All call examples are synthetic. Any numbers visible in the reused public demo
screenshots are demonstration data, not company performance statistics.

| File                      | Origin                                                                                                                                 | Treatment                                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `logo.png`                | MedCalls public brand mark, CDN ID `6a6a9c8bbaa5a87f998b8cb2.png`                                                                      | Original bytes                                                                                                                        |
| `call-review-desktop.png` | https://medcalls.ai/dashboard/ — CDN ID `6a985b40efeed0ae259aab8d.png`                                                                 | Original public synthetic screenshot                                                                                                  |
| `call-review-mobile.png`  | Same page — CDN ID `6a985b404f0181579a21994d.png`                                                                                      | Original public synthetic screenshot                                                                                                  |
| `new-patient-demo.mp3`    | https://medcalls.ai/ — `home-audio-new-patient`, CDN ID `6a919106854f9696b3b4833c.mp3`                                                 | Original public synthetic demo                                                                                                        |
| `booking-schedule.png`    | Slite “Your booking schedule”, note `psiia2I-6zNrrx`, media `5v2q7QOdpPYrXK`; mirrored in the dedicated dashboard-changelog GCS bucket | Original synthetic calendar and rule editor screenshot                                                                                |
| `booking-demo.svg`        | Authored for this portfolio                                                                                                            | Listening card; original brand mark embedded                                                                                          |
| `cover.svg`               | Authored for this portfolio                                                                                                            | Project cover; original brand mark embedded                                                                                           |
| `system.svg`              | Authored from MedCalls architecture and service responsibilities                                                                       | Simplified conceptual diagram; no private infrastructure details                                                                      |
| `ownership.svg`           | User-confirmed responsibilities                                                                                                        | Qualitative diagram; no financial or compensation figures                                                                             |
| `flow-playback.mp4`       | Local call-transcript viewer in `medcalls-airtable-extensions`; local `inspection-walkthrough.json`                                    | Ten actual UI captures of the authored booking walkthrough, held 2.5 seconds each, encoded H.264; no live calls or provider execution |
| `security-excerpt.pdf`    | `medcalls-arch/docs/security-review/publicly-available/medcalls-security-technical-whitepaper.md`, v0.3, 2026-07-17                    | Two-page reflow of Executive Summary and Governance, with source caveats; selected excerpts, not a new security assessment            |

Quote source: Andrew Brewster, Chief Revenue Officer, in
https://www.healthcaretechoutlook.com/medcalls-ai-2026. This is an attributed
statement about the problem, not a testimonial about Brandon.

The Go runtime footage demonstrates development tooling, not production adoption.
The project date is its portfolio update date, not an employment start month.
MedCalls employment is recorded as 2025–Present.

`brandmark.svg` is the original horizontal MedCalls.ai mark from the local
`Logo + Brand Assets/Logo Assets/svg/medcalls-logo-horizontal.svg` file. It closes
the project; `logo.png` remains the small icon used elsewhere.

`inspection-walkthrough.json` is an authored, fictional demonstration fixture with
five exchanges, seven nodes, and two tool actions. Fixture assertions check route
references and confirmation before booking. It is not a model evaluation result,
a production call, or evidence of runtime adoption. The video captures the actual
viewer stepping through those events.

## Project card

- `card-loop.mp4`: original bytes from the user-supplied
  `MedCalls AI 2026-11-09 at 3.13.03 AM.mp4`; H.264, 770×434, about eight seconds.
  The existing card player supplies muted autoplay and looping.
- `card-still.png`: 771×434 composite of the user-supplied 03:19:32 output frame
  and the three call-input cards from the 03:19:44 frame. Soft masks retain their
  shadows; the horizontal connector strokes were cleaned and made consistent.
  No generative imagery, resizing, or replacement artwork was used.
- These replace `cover.svg` as the displayed project-card media.
