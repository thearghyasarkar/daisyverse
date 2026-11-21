# Letter archive generation manifest

## Source corpora

| Volume | IDs        | Source of truth                                                                                      | Knowledge index                     |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- |
| v1     | L001–L400  | `C:\Users\Arghya Sarkar\Documents\Studio\funfolders\opencode_tempfiles_conversations_with_her`       | `docs/LETTER_KNOWLEDGE_INDEX.md`    |
| v2     | L401–L800  | `C:\Users\Arghya Sarkar\Documents\Studio\second brain\Her\99_Archive\source-extraction\`             | `docs/LETTER_KNOWLEDGE_INDEX_V2.md` |
| v3     | L801–L2400 | `C:\Users\Arghya Sarkar\Documents\Studio\funfolders\opencode_tempfiles_conversations_with_her_siggy` | `docs/LETTER_KNOWLEDGE_INDEX_V3.md` |
| added  | L2401      | User-supplied MacBook bet, preserved as written                                                      | —                                   |

The v1 and v2 corpora abut with a nine-minute seam (v1 ends 23/08/26 13:14; v2
begins 23/08/26 13:23). The v3 Signal corpus overlaps both until early October and
extends to 21/11/26. v3 letters must be grounded in v3 anchors and must not restage
v1 or v2 scenes as newly discovered. `docs/LETTER_V1_INDEX.md` lists all titles,
slugs, openings and tags as a deduplication reference; regenerate it with
`npm run export:letter-index`.

Voice rules: `docs/LETTER_VOICE.md`, the v2 addendum in `docs/LETTER_BATCH_BRIEF_V2.md`,
and the v3 addendum in `docs/LETTER_BATCH_BRIEF_V3.md`.

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

## Batches — volume v3 (new Signal source corpus)

| Batch | File                      | IDs         | Category allocation                                                                        | QC   |
| ----- | ------------------------- | ----------- | ------------------------------------------------------------------------------------------ | ---- |
| 33    | `src/letters/batch-33.ts` | L801–L825   | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 34    | `src/letters/batch-34.ts` | L826–L850   | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 35    | `src/letters/batch-35.ts` | L851–L875   | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 36    | `src/letters/batch-36.ts` | L876–L900   | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 37    | `src/letters/batch-37.ts` | L901–L925   | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 38    | `src/letters/batch-38.ts` | L926–L950   | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 39    | `src/letters/batch-39.ts` | L951–L975   | confession 5, little-things 4, playful 4, gratitude 3, growing 4, milestones 5             | PASS |
| 40    | `src/letters/batch-40.ts` | L976–L1000  | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 41    | `src/letters/batch-41.ts` | L1001–L1025 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 42    | `src/letters/batch-42.ts` | L1026–L1050 | long-distance 5, longing 4, future 4, philosophical 4, literary 3, reassurance 3, night 2  | PASS |
| 43    | `src/letters/batch-43.ts` | L1051–L1075 | long-distance 5, longing 4, future 3, philosophical 4, literary 3, reassurance 3, night 3  | PASS |
| 44    | `src/letters/batch-44.ts` | L1076–L1100 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 45    | `src/letters/batch-45.ts` | L1101–L1125 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 46    | `src/letters/batch-46.ts` | L1126–L1150 | long-distance 5, longing 4, future 3, philosophical 3, literary 5, reassurance 3, night 2  | PASS |
| 47    | `src/letters/batch-47.ts` | L1151–L1175 | long-distance 4, longing 3, future 3, philosophical 3, literary 5, reassurance 4, night 3  | PASS |
| 48    | `src/letters/batch-48.ts` | L1176–L1200 | long-distance 4, longing 2, future 3, philosophical 2, literary 5, reassurance 7, night 2  | PASS |
| 49    | `src/letters/batch-49.ts` | L1201–L1225 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 50    | `src/letters/batch-50.ts` | L1226–L1250 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 51    | `src/letters/batch-51.ts` | L1251–L1275 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 52    | `src/letters/batch-52.ts` | L1276–L1300 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 53    | `src/letters/batch-53.ts` | L1301–L1325 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 54    | `src/letters/batch-54.ts` | L1326–L1350 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 55    | `src/letters/batch-55.ts` | L1351–L1375 | confession 5, little-things 4, playful 4, gratitude 3, growing 4, milestones 5             | PASS |
| 56    | `src/letters/batch-56.ts` | L1376–L1400 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 57    | `src/letters/batch-57.ts` | L1401–L1425 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 58    | `src/letters/batch-58.ts` | L1426–L1450 | long-distance 5, longing 4, future 4, philosophical 4, literary 3, reassurance 3, night 2  | PASS |
| 59    | `src/letters/batch-59.ts` | L1451–L1475 | long-distance 5, longing 4, future 3, philosophical 4, literary 3, reassurance 3, night 3  | PASS |
| 60    | `src/letters/batch-60.ts` | L1476–L1500 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 61    | `src/letters/batch-61.ts` | L1501–L1525 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 62    | `src/letters/batch-62.ts` | L1526–L1550 | long-distance 5, longing 4, future 3, philosophical 3, literary 5, reassurance 3, night 2  | PASS |
| 63    | `src/letters/batch-63.ts` | L1551–L1575 | long-distance 4, longing 3, future 3, philosophical 3, literary 5, reassurance 4, night 3  | PASS |
| 64    | `src/letters/batch-64.ts` | L1576–L1600 | long-distance 4, longing 2, future 3, philosophical 2, literary 5, reassurance 7, night 2  | PASS |
| 65    | `src/letters/batch-65.ts` | L1601–L1625 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 66    | `src/letters/batch-66.ts` | L1626–L1650 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 67    | `src/letters/batch-67.ts` | L1651–L1675 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 68    | `src/letters/batch-68.ts` | L1676–L1700 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 69    | `src/letters/batch-69.ts` | L1701–L1725 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 70    | `src/letters/batch-70.ts` | L1726–L1750 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 71    | `src/letters/batch-71.ts` | L1751–L1775 | confession 5, little-things 4, playful 4, gratitude 3, growing 4, milestones 5             | PASS |
| 72    | `src/letters/batch-72.ts` | L1776–L1800 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 73    | `src/letters/batch-73.ts` | L1801–L1825 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 74    | `src/letters/batch-74.ts` | L1826–L1850 | long-distance 5, longing 4, future 4, philosophical 4, literary 3, reassurance 3, night 2  | PASS |
| 75    | `src/letters/batch-75.ts` | L1851–L1875 | long-distance 5, longing 4, future 3, philosophical 4, literary 3, reassurance 3, night 3  | PASS |
| 76    | `src/letters/batch-76.ts` | L1876–L1900 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 77    | `src/letters/batch-77.ts` | L1901–L1925 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 78    | `src/letters/batch-78.ts` | L1926–L1950 | long-distance 5, longing 4, future 3, philosophical 3, literary 5, reassurance 3, night 2  | PASS |
| 79    | `src/letters/batch-79.ts` | L1951–L1975 | long-distance 4, longing 3, future 3, philosophical 3, literary 5, reassurance 4, night 3  | PASS |
| 80    | `src/letters/batch-80.ts` | L1976–L2000 | long-distance 4, longing 2, future 3, philosophical 2, literary 5, reassurance 7, night 2  | PASS |
| 81    | `src/letters/batch-81.ts` | L2001–L2025 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 82    | `src/letters/batch-82.ts` | L2026–L2050 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 83    | `src/letters/batch-83.ts` | L2051–L2075 | everyday 8, confession 5, little-things 4, playful 3, gratitude 2, growing 1, milestones 2 | PASS |
| 84    | `src/letters/batch-84.ts` | L2076–L2100 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 85    | `src/letters/batch-85.ts` | L2101–L2125 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 86    | `src/letters/batch-86.ts` | L2126–L2150 | everyday 7, confession 5, playful 4, little-things 3, gratitude 2, growing 1, milestones 3 | PASS |
| 87    | `src/letters/batch-87.ts` | L2151–L2175 | confession 5, little-things 4, playful 4, gratitude 3, growing 4, milestones 5             | PASS |
| 88    | `src/letters/batch-88.ts` | L2176–L2200 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 89    | `src/letters/batch-89.ts` | L2201–L2225 | long-distance 6, longing 5, future 4, philosophical 3, literary 3, reassurance 2, night 2  | PASS |
| 90    | `src/letters/batch-90.ts` | L2226–L2250 | long-distance 5, longing 4, future 4, philosophical 4, literary 3, reassurance 3, night 2  | PASS |
| 91    | `src/letters/batch-91.ts` | L2251–L2275 | long-distance 5, longing 4, future 3, philosophical 4, literary 3, reassurance 3, night 3  | PASS |
| 92    | `src/letters/batch-92.ts` | L2276–L2300 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 93    | `src/letters/batch-93.ts` | L2301–L2325 | long-distance 5, longing 4, future 3, philosophical 4, literary 4, reassurance 3, night 2  | PASS |
| 94    | `src/letters/batch-94.ts` | L2326–L2350 | long-distance 5, longing 4, future 3, philosophical 3, literary 5, reassurance 3, night 2  | PASS |
| 95    | `src/letters/batch-95.ts` | L2351–L2375 | long-distance 4, longing 3, future 3, philosophical 3, literary 5, reassurance 4, night 3  | PASS |
| 96    | `src/letters/batch-96.ts` | L2376–L2400 | long-distance 4, longing 2, future 3, philosophical 2, literary 5, reassurance 7, night 2  | PASS |

## Batches — added letters

| Batch | File                      | IDs   | Category allocation | QC   |
| ----- | ------------------------- | ----- | ------------------- | ---- |
| 97    | `src/letters/batch-97.ts` | L2401 | future 1            | PASS |

## Target totals (all three volumes and added letters)

| Category                     |    Target |
| ---------------------------- | --------: |
| Everyday affection           |       270 |
| Deep confessions             |       210 |
| Long-distance correspondence |       270 |
| Missing her and longing      |       210 |
| Future dreams and promises   |       181 |
| Philosophical reflections    |       180 |
| Literary and poetic letters  |       210 |
| Reassurance and support      |       180 |
| Playful and teasing          |       150 |
| Little things                |       150 |
| Milestones and anniversaries |       120 |
| Night-time thoughts          |       120 |
| Gratitude and admiration     |        90 |
| Growing together             |        60 |
| **Total**                    | **2,401** |

## Per-batch QA

After each batch: unique titles, slugs and openings; no repeated passages; no
collision with `docs/LETTER_V1_INDEX.md`; factual consistency with the assigned
volume's knowledge index and hard filter; literary-reference accuracy; exact
category allocation; an identifiable emotional premise; and no AI-pattern phrasing.

Final automated QA: `npm run check:letters`, which writes `docs/LETTER_QA_REPORT.md`.
It checks all 2,401 records together, so cross-volume duplicates fail the build.
