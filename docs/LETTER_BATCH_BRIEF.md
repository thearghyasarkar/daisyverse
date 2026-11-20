# Batch writer brief

You are writing one batch of the 400-letter archive. Do not write all 400.

## Read first

1. `docs/LETTER_VOICE.md`
2. `docs/LETTER_KNOWLEDGE_INDEX.md`
3. `src/letter-types.ts`
4. `docs/LETTERS_MANIFEST.md`

Use the memory folder only through the knowledge index unless an index entry is ambiguous.

## Output

Overwrite exactly one file: `src/letters/batch-NN.ts` for your assigned batch. It must contain:

```ts
import type { LetterDraft } from '../letter-types';

export const letters: LetterDraft[] = [
  // exactly 25 objects
];
```

No other exports. No imports besides the type import.

## Fields

Each object needs: `id`, `title`, `slug`, `category`, `content`, `tags`, `literaryReferences`, `mood`, `featured`. Omit `date` and `readingTime`; `src/letters.ts` supplies them.

- `id`: exact assigned IDs in sequence, e.g. `L001` through `L025`.
- `title`: unique, specific, lowercase or sentence case as you prefer, never generic.
- `slug`: unique kebab-case, derived from title but unambiguous.
- `category`: exactly the assigned category string.
- `content`: Markdown, blank-line-separated paragraphs. No raw HTML. Optional `*emphasis*`.
- `setting`: optional. Use it when the letter is set in an imagined future or fictional narrative moment. Phrase it as `Imagined: ...` or `Fictional narrative setting: ...`. Never imply it really happened.
- `tags`: 2–4 useful lowercase tags.
- `literaryReferences`: usually `[]`. Use only when a comparison genuinely carries the letter. Exact work/author strings from `docs/LETTER_VOICE.md`.
- `mood`: one short lowercase word or phrase.
- `featured`: true for at most one letter in the batch, false for the rest.

## Length and shape per batch

Aim for 2–3 short letters (100–150 words), 20–22 medium letters (200–350 words), and 1–2 long letters (400–550 words). Hard bounds: 90–650 words. Vary paragraph structures. Do not begin two letters with the same six words. Do not end with a grand eternal-love declaration.

## Grounding and truth

- The relationship began in Kolkata; first met 26/06/2026, he proposed 06/07/2026, one-month mark 06/08/2026, first kiss around 31/07/2026. Treat these as anchors, not things to repeat.
- She lives about half an hour away now. Future different-city separation is anticipatory or imagined, not an accomplished fact. Long-distance letters must say so through `setting` or phrasing.
- Do not assert uncertain details: exact first-kiss date, her exact exam target, meanings of `181980`, name spellings, numbers whose meaning is unknown.
- Sensitive material is off-limits as decoration: family conflict, health specifics, self-harm, intimacy specifics, ex comparisons, academic shame.
- Avoid the banned phrases and repeated language in `docs/LETTER_VOICE.md`. The validator will fail the archive for them.

## Batch themes

| Batch | IDs       | Focus                                                                                                                       |
| ----- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| 01    | L001–L025 | Early days, 13–19 July. Reading her paper, trust, pet names, bus and photobooth, bill 314, x3000 declarations.              |
| 02    | L026–L050 | 19–24 July. Matching bios, poem anthology, KBC, outsiders betting against them, first copy of her book, vault of his words. |
| 03    | L051–L075 | 24–28 July. Chrysalis, study partnership, food lexicon, name lore, gifts, The Deal, quiet domesticity.                      |
| 04    | L076–L100 | 31 July–8 Aug. First-kiss aftermath, Spider-Man date, one-month mark, sunrise photos, yellow Nexon, small city rituals.     |
| 05    | L101–L125 | 8–16 Aug. Ciphers, detox, handmade gifts, pink aesthetic, hairtie promise, Coffee House, cryptomaster jokes.                |
| 06    | L126–L150 | 16–19 Aug. Closeness, dogs, Kashmir dream, Olivia Rodrigo, first lunch, sleep pact, Marks app, career goals.                |
| 07    | L151–L175 | 19–23 Aug. Mocks, check-ins, trust milestone, conflict repair, Red Bull can, final slice, ordinary late August.             |
| 08    | L176–L200 | Distance begins: half an hour still feels too far, calls, commutes, different desks, small objects.                         |
| 09    | L201–L225 | Imagined future cities, university/portfolio plans, packing, not knowing which city, staying honest about uncertainty.      |
| 10    | L226–L250 | Bad days at a distance: bad tests, illness restrained, silence, repair, not demanding constant availability.                |
| 11    | L251–L275 | Objects that carry presence: journal, hairtie, key, can, screenshots, annotated paper, old messages.                        |
| 12    | L276–L300 | Routines apart: deviceless grind, sleep pact, sunrise photos, water check-ins, schedules that do not align.                 |
| 13    | L301–L325 | Anticipation: planning visits, tickets, heritage cinema, meeting after a gap, traffic and impatience.                       |
| 14    | L326–L350 | Learning love without proximity: trust, boredom, ordinary updates, no constant performance, quieter devotion.               |
| 15    | L351–L375 | Time passing: months moving faster, anniversaries, change, fear of becoming strangers, growing without drifting.            |
| 16    | L376–L400 | Building a future despite separation: promises, career, home, reassurance-heavy letters, no grand finale.                   |

## QA before returning

Check: exact count and IDs, exact category allocation from the manifest, unique titles and slugs, no banned phrases, no raw HTML, at most two `?`/`—`/`;` per letter, word bounds, every letter has one identifiable emotional premise, and literary references are accurate. Return only: output path, count, category counts, and any concern.
