# Letter archive generation manifest

## Source corpora

| Volume | IDs       | Source of truth                                                                                | Knowledge index                     |
| ------ | --------- | ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| v1     | L001–L400 | `C:\Users\Arghya Sarkar\Documents\Studio\funfolders\opencode_tempfiles_conversations_with_her` | `docs/LETTER_KNOWLEDGE_INDEX.md`    |
| v2     | L401–L800 | `C:\Users\Arghya Sarkar\Documents\Studio\second brain\Her\99_Archive\source-extraction\`       | `docs/LETTER_KNOWLEDGE_INDEX_V2.md` |

The two corpora abut with a nine-minute seam (v1 ends 23/08/26 13:14; v2 begins
23/08/26 13:23). They share no source lines. v2 letters must be grounded in v2
anchors, not re-stage v1 scenes. `docs/LETTER_V1_INDEX.md` lists all 400 existing
titles, slugs, openings and tags as a deduplication reference; regenerate it with
`npm run export:letter-index`.

Voice rules: `docs/LETTER_VOICE.md` plus the v2 addendum in `docs/LETTER_BATCH_BRIEF_V2.md`.

Schema: `LetterDraft` in `src/letter-types.ts`. The aggregator `src/letters.ts`
sets `date: 'undated'` and derives `readingTime` from word count. Any `setting`
is a **fictional narrative setting**, never a claimed composition date.

## Batches — volume v1 (PASS)

| Batch | File                      | IDs       | Category allocation                                                                        | QC   |
| ----- | ------------------------- | --------- | ------------------------------------------------------------------------------------------ | ---- |
| 01    | `src/letters/batch-01.ts` | L001–L025 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 02    | `src/letters/batch-02.ts` | L026–L050 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 03    | `src/letters/batch-03.ts` | L051–L075 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 04    | `src/letters/batch-04.ts` | L076–L100 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 05    | `src/letters/batch-05.ts` | L101–L125 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 06    | `src/letters/batch-06.ts` | L126–L150 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 07    | `src/letters/batch-07.ts` | L151–L175 | confession 5, little-things 4, playful 4, gratitude 3, growing 4, milestones 5             | PASS |
| 08    | `src/letters/batch-08.ts` | L176–L200 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 09    | `src/letters/batch-09.ts` | L201–L225 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 10    | `src/letters/batch-10.ts` | L226–L250 | long-distance 5, longing 4, future 4, philosophical 4, literary 3, reassurance 3, night 2  | PASS |
| 11    | `src/letters/batch-11.ts` | L251–L275 | long-distance 5, longing 4, future 3, philosophical 4, literary 3, reassurance 3, night 3  | PASS |
| 12    | `src/letters/batch-12.ts` | L276–L300 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 13    | `src/letters/batch-13.ts` | L301–L325 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 14    | `src/letters/batch-14.ts` | L326–L350 | long-distance 5, longing 4, future 3, philosophical 3, literary 5, reassurance 3, night 2  | PASS |
| 15    | `src/letters/batch-15.ts` | L351–L375 | long-distance 4, longing 3, future 3, philosophical 3, literary 5, reassurance 4, night 3  | PASS |
| 16    | `src/letters/batch-16.ts` | L376–L400 | long-distance 4, longing 2, future 3, philosophical 2, literary 5, reassurance 7, night 2  | PASS |

## Batches — volume v2 (new source corpus)

| Batch | File                      | IDs       | Category allocation                                                                        | QC   |
| ----- | ------------------------- | --------- | ------------------------------------------------------------------------------------------ | ---- |
| 17    | `src/letters/batch-17.ts` | L401–L425 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 18    | `src/letters/batch-18.ts` | L426–L450 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 19    | `src/letters/batch-19.ts` | L451–L475 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 20    | `src/letters/batch-20.ts` | L476–L500 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 21    | `src/letters/batch-21.ts` | L501–L525 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 22    | `src/letters/batch-22.ts` | L526–L550 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 23    | `src/letters/batch-23.ts` | L551–L575 | confession 5, little-things 4, playful 4, gratitude 3, growing 4, milestones 5             | PASS |
| 24    | `src/letters/batch-24.ts` | L576–L600 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 25    | `src/letters/batch-25.ts` | L601–L625 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 26    | `src/letters/batch-26.ts` | L626–L650 | long-distance 5, longing 4, future 4, philosophical 4, literary 3, reassurance 3, night 2  | PASS |
| 27    | `src/letters/batch-27.ts` | L651–L675 | long-distance 5, longing 4, future 3, philosophical 4, literary 3, reassurance 3, night 3  | PASS |
| 28    | `src/letters/batch-28.ts` | L676–L700 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 29    | `src/letters/batch-29.ts` | L701–L725 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 30    | `src/letters/batch-30.ts` | L726–L750 | long-distance 5, longing 4, future 3, philosophical 3, literary 5, reassurance 3, night 2  | PASS |
| 31    | `src/letters/batch-31.ts` | L751–L775 | long-distance 4, longing 3, future 3, philosophical 3, literary 5, reassurance 4, night 3  | PASS |
| 32    | `src/letters/batch-32.ts` | L776–L800 | long-distance 4, longing 2, future 3, philosophical 2, literary 5, reassurance 7, night 2  | PASS |

## Target totals (both volumes)

| Category                     |  Target |
| ---------------------------- | ------: |
| Everyday affection           |      90 |
| Deep confessions             |      70 |
| Long-distance correspondence |      90 |
| Missing her and longing      |      70 |
| Future dreams and promises   |      60 |
| Philosophical reflections    |      60 |
| Literary and poetic letters  |      70 |
| Reassurance and support      |      60 |
| Playful and teasing          |      50 |
| Little things                |      50 |
| Milestones and anniversaries |      40 |
| Night-time thoughts          |      40 |
| Gratitude and admiration     |      30 |
| Growing together             |      20 |
| **Total**                    | **800** |

## Per-batch QA

After each batch: unique titles, slugs and openings; no repeated passages; no
collision with `docs/LETTER_V1_INDEX.md`; factual consistency with the assigned
volume's knowledge index and hard filter; literary-reference accuracy; exact
category allocation; an identifiable emotional premise; and no AI-pattern phrasing.

Final automated QA: `npm run check:letters`, which writes `docs/LETTER_QA_REPORT.md`.
It checks all 800 records together, so cross-volume duplicates fail the build.
