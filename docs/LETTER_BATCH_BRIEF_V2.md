# v2 batch writer brief

You are writing one batch of the **second** volume of the archive: IDs L401–L800,
grounded only in the v2 source corpus. Do not write all 400. Do not touch the
existing 400.

## Read first, in this order

1. `docs/LETTER_VOICE.md` — voice, banned language, punctuation and shape rules.
2. `docs/LETTER_KNOWLEDGE_INDEX_V2.md` — the curated index for this volume, if
   present. The authoritative source is the raw extraction directory below; the
   index is a convenience layer over it, never a substitute for checking a quote.
3. `docs/LETTER_V1_INDEX.md` — all 400 existing titles, slugs, openings and tags.
4. `src/letter-types.ts` and `docs/LETTERS_MANIFEST.md`.
5. Raw source (UTF-8), `C:\Users\Arghya Sarkar\Documents\Studio\second brain\Her\99_Archive\source-extraction\`:
   `mem_v2_pA.md`, `mem_v2_pB.md`, `mem_v2_pC.md`, `mem_v2_pD.md`, `mem_v2_pE.md`,
   `mem_v2_pF1.md`, `mem_v2_pF2.md`, `mem_v2_pG.md`, `mem_v2_pH1.md`,
   `mem_v2_pH2.md`, `mem_v2_pI.md`, `Source Extraction Index.md`.
   Entries look like `- [TYPE] | H/M/L | Category | Description with verbatim
quotes | DD/MM/YY | L<refs>`. Prefer `[FACT]`/`[PATTERN]`; `H` entries are the
   most durable. Footer counts in these files are stale in places — trust the
   entry lines, not the footers.

## Source boundary

The v2 corpus covers **23 August – 8 October 2026**. The first 400 letters came
from a different corpus ending 23 August 2026. The two share no source lines.

- Ground every concrete detail in `LETTER_KNOWLEDGE_INDEX_V2.md`. Prefer `[FACT]`
  and `[PATTERN]`. `[INTERPRETATION]` may shape tone but must never become a
  claimed event. `[UNCERTAIN]` must not be asserted.
- **Do not re-stage v1 scenes as newly discovered.** In particular: the paper
  with marginal notes, bill 314, x3000 declarations, the bus and photobooth,
  matching bios, the poem anthology, KBC, Coffee House/Novak, the Odyssey
  cipher, the hairtie promise, sunrise photos, the yellow Nexon, the Red Bull
  can, EM-waves at 2 a.m., "random apologies", and the Deal. Check
  `LETTER_V1_INDEX.md` before finalising a title or opening.
- Private language that genuinely recurs in both eras — `daisy`, the check-ins
  ritual, first-person-plural "we", "I love you" — is allowed **only inside a
  new v2 situation** with a new v2 anchor.
- Long-distance letters in this volume are anticipatory or imagined. Use
  `setting: 'Imagined: ...'` and never claim a separation that has happened.

## Output

Overwrite exactly one file: `src/letters/batch-NN.ts` for your assigned batch.
No other files. Exactly:

```ts
import type { LetterDraft } from '../letter-types';

export const letters: LetterDraft[] = [
  // exactly 25 objects
];
```

Fields: `id`, `title`, `slug`, `category`, `content`, `setting?`, `tags`,
`literaryReferences`, `mood`, `featured`. Omit `date` and `readingTime`; the
aggregator supplies them. `setting` is a **fictional narrative setting**, never
a composition date. `featured: true` for at most one letter per batch.

## Dedup rules (hard requirements)

- IDs in exact assigned sequence (e.g. L401–L425).
- Titles, slugs and first six words must be unique **across all 800 letters**,
  not just your batch. Check both your batch and `LETTER_V1_INDEX.md`.
- No near-duplicate passages. A six-word shingle overlap above 30% with any
  other letter fails the whole archive.
- One identifiable emotional premise per letter; no two letters in your batch
  may share the same premise even if the anchors differ.
- Vary paragraph structure. Some letters are one dense block, some fragments,
  some almost flat until the last line lands. Do not end with a grand eternal
  declaration.
- Use `daisy` in **at most 3 of your 25 letters**, and rotate the other v2 names
  (`buttercup`, `bebsie`, `cutu`, `qtpu`, `babygirl`, `sweetie`, `valedictorian
wife`) so no single pet name exceeds 3 per batch. Most letters should use none.
  The validator allows each name at most 60 times across all 800 letters.

## Shape

Aim for 3 short (100–150 words), 20–21 medium (200–350), 1–2 long (400–550).
Hard bounds 90–650 words. At most two `?`, two `—`, two `;` per letter. No raw
HTML. Optional `*emphasis*` only. Approved literary works and exact
author strings are in `docs/LETTER_VOICE.md`.

## Sensitive filter

Never turn these into decorative romance: intimate/consent lines in pH2 and
pF1, family hostility, the father-drunk safety call, the ID-card leak anxiety,
deleted-message flags, the 04/07 vs 06/07 start-date contradiction, the
`xnxx` joke, health specifics, self-harm, ex comparisons, academic shame.
A single restrained allusion is allowed only where the emotion requires it.

## Batch themes

The early v2 batches follow the chronology; later ones work thematically across
the whole v2 corpus. Each row gives the raw material, not a premise to copy.

| Batch | IDs       | Raw material to mine                                                                                                                                                                                                                                                 |
| ----- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17    | L401–L425 | The nine-minute seam; daily check-ins; "robin" the local LLM; first-person-plural "we"; cranberry coffee; "best thing in two decades"; "oxygen / sustenance"; marriage joke.                                                                                         |
| 18    | L426–L450 | Both tests on 27/08; pre-test chocolate; "we love you daisy"; "that's a given in our profession"; grade-10 boards; maggi recipe; Korean food and gochujang.                                                                                                          |
| 19    | L451–L475 | The PDF accusation; "you are me and I'm yours"; "marriage material"; sleepover invitation; small public declarations; the awkwardness of being new again.                                                                                                            |
| 20    | L476–L500 | Rakhi chocolates and brozone teasing; "chintu" co-parenting joke; matchmaking candidates; "okay fuck. sorry"; study calls; the four-hour meetup and long debrief.                                                                                                    |
| 21    | L501–L525 | "kaleshi aatma" and "aajka clips" haggling; "i misshey nishey you"; the 1 a.m. call request; "productivity princess"; "kisses till you sleep"; Kolkata libraries. Keep family hostility flagged, not staged.                                                         |
| 22    | L526–L550 | "too fast"; zero versus 0.5; "people dont meet peoples parents in two months"; "i want my wall"; "i fucking love you. in 2 months"; meeting her father; the "womanizer" verdict.                                                                                     |
| 23    | L551–L575 | The thirteen reasons list; "saviour complex for you and adhd for me"; the small circle of five; burned art; "morning's empty without you"; the apology/boundary conflict; MIT OpenCourseWare. Restrain intimacy.                                                     |
| 24    | L576–L600 | The heavy dream conversation; "thank you daisy, for allowing me to live"; rain day; the near-kiss in the lab; "we built this house of memories"; "valedictorian wife"; AI-security talk at 2 a.m.                                                                    |
| 25    | L601–L625 | "When you're bored and you've a boyfriend"; alfredo versus pesto; "what did we have for lunch"; "i know babygirl"; openagift and geoscassette links; the refrigerator plan; the PIR sensor argument.                                                                 |
| 26    | L626–L650 | Sleep logs (six hours vs four); "good girl, we got rest"; phoneless protocol and timeblocks; the cancelled café; "happy daughter's day"; the terrace "peak"; "to have someone do it without having to ask is historic"; Instagram main-story flex; 20-minute repair. |
| 27    | L651–L675 | "Can I steal your voice for 5"; the five-venues answer ending "a place with you"; the Ahan auto ride; "lock and key"; the family cover story; "if i want you to know the truth, youll know the truth"; deleted messages handled obliquely.                           |
| 28    | L676–L700 | Birthday fit and taser gift; Ariyana kalesh; Maha Panchami; pre-birthday dread; "you're 18 tomorrow"; midnight wish VC; the I LOVE YOU spam; nightmare-in-cubism. Migraine night only as restraint.                                                                  |
| 29    | L701–L725 | The toothache and "gws from my side"; jalebis and malpuas; the family sweet-shop story; the soft toy for Lucy; "i like holding you / i like breathing in your hair"; "meinurjacket"; physics-equation banter.                                                        |
| 30    | L726–L750 | Breakfast-skipping nagging; "sounds perfect i love you more"; "we fit"; the 08/10 endpoint; small objects that carry the autumn; the quiet arithmetic of days.                                                                                                       |
| 31    | L751–L775 | Imagined extensions from v2 anchors: the five-venue home, meeting her father again, career and portfolio, a future separation. Every such letter needs an explicit `Imagined:` setting.                                                                              |
| 32    | L776–L800 | Reassurance from real v2 friction: phoneless boundaries, "i want my wall" honoured, the pace dispute answered without denial, permission to be quiet. No grand finale; end practically.                                                                              |

## QA before returning

Check exact count and IDs, exact category allocation from the manifest, unique
titles/slugs/openings against **both** volumes, no banned phrases, no raw HTML,
at most two `?`/`—`/`;` per letter, word bounds, one identifiable premise each,
and whitelisted literary references. Return only: output path, count, category
counts, and any concern.
