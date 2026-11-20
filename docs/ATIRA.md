# Daisy

A field guide to the love letter. The renamed visible layer lives in
[`src/atira.ts`](../src/atira.ts); the 800-letter archive lives in
[`src/letters/`](../src/letters/) and is aggregated by [`src/letters.ts`](../src/letters.ts).
The simulation, catalogues and deep links are the original Universe Atlas and
are untouched.

## Where the words live

| What                                               | Where                                                       |
| :------------------------------------------------- | :---------------------------------------------------------- |
| Site title, metadata, HUD copy, journal styling    | `index.html`                                                |
| First-visit intro, welcome animation, date counter | `#intro` / `#daisy-counter` in `index.html`                 |
| Renamed places and their captions                  | `RENAMES` in `src/atira.ts`                                 |
| Poetic names for catalogue objects                 | `poeticName()` / `poeticConstellation()` in `src/atira.ts`  |
| The 32 notes and the last letter                   | `NOTES` / `FINAL_LETTER` in `src/atira.ts`                  |
| Scale language and time phrasing                   | `src/hud.ts` (`CONTEXTS`, `formatDeepTime`, button labels)  |
| Tour time labels and share text                    | `src/main.ts` (`FWD_LABELS`, `shareView`)                   |
| The 800 letters, categories and filters            | `src/letters/batch-01.ts` … `batch-32.ts`, `src/letters.ts` |
| Archive UI, Markdown rendering and pagination      | `src/archive.ts`, `src/letter-render.ts`                    |
| Batch plan and QA report                           | `docs/LETTERS_MANIFEST.md`, `docs/LETTER_QA_REPORT.md`      |

To make a note yours, change its `title` or `body` in `NOTES`. No other file
needs to change. Names and captions can be changed in `RENAMES` the same way.
Keep the `id` and `slug` values identical — those are the addresses the notes
are discovered at.

## The 32 notes

### The grand tour — 17 stops (unfold automatically on arrival)

| Stop slug     | Note title                         | Personalise?                                  |
| :------------ | :--------------------------------- | :-------------------------------------------- |
| `universe`    | The first thing I want you to know | —                                             |
| `web`         | The threads                        | —                                             |
| `galaxy`      | A very small, very bright place    | —                                             |
| `system`      | The neighbourhood of us            | —                                             |
| `sun`         | What warmth means                  | —                                             |
| `mars`        | A world I would cross for you      | —                                             |
| `jezero`      | An empty crater, a full heart      | `[the day I first said your name out loud]`   |
| `moon`        | The moon we watch                  | —                                             |
| `tranquility` | Tranquility, but for two           | `[the night we did not want dawn]`            |
| `earth`       | The only address that matters      | —                                             |
| `surface`     | One metre                          | `[what we ate, what you wore, what you said]` |
| `weave`       | The threads of a feeling           | —                                             |
| `fiber`       | How thin a promise can be          | —                                             |
| `molecule`    | The thing that holds               | —                                             |
| `atom`        | Something small and stubborn       | —                                             |
| `nucleus`     | The centre                         | —                                             |
| `proton`      | The smallest place I know          | —                                             |

### The side roads — 11 notes

| Stop slug   | Note title                        | How to get there               |
| :---------- | :-------------------------------- | :----------------------------- |
| `mercury`   | The quick one                     | PLACES / search                |
| `venus`     | The one that glows                | PLACES / search                |
| `jupiter`   | The great, gentle one             | PLACES / search                |
| `saturn`    | The rings                         | PLACES / search                |
| `uranus`    | The quiet one                     | PLACES / search                |
| `neptune`   | The far blue                      | PLACES / search                |
| `ceres`     | A small, steady light             | search                         |
| `halley`    | Once in a lifetime                | search · `[the moment I knew]` |
| `sgr-a`     | Where light leans in              | search                         |
| `iss`       | A little light above us           | search                         |
| `voyager-1` | The farthest thing I would follow | search                         |

### Hidden letters — 4 notes

| Trigger                                                                           | Note title              |
| :-------------------------------------------------------------------------------- | :---------------------- |
| Type `atira` in the search box                                                    | Atira                   |
| Type `dewan` in the search box                                                    | Dewan                   |
| Type `i love you` in the search box                                               | Three words, not enough |
| Tap the title three times, or search `my entire universe` / `you are my universe` | You are the universe    |

### The last letter

Unlocks in the journal when all 32 notes are found. It contains three
placeholders:

- `[the date we began]`
- `[the thing I still laugh about]`
- `[what I want to say when I see you again]`

## Discovery mechanics

- `Journey.init()` runs when the app starts; it restores found notes from
  `localStorage` under `atira-universe-notes-v1`.
- `journey.discover(slug)` is called from `flyTo`, `retargetTo` and `jumpTo` in
  `src/main.ts`, so arriving by bookmark, click, search, tour or deep link all
  count. Repeat visits are harmless.
- Satellite and probe targets arrive asynchronously; `applyRomance()` is called
  again when they are added so their names are themed too.
- Original catalogue names are stored on each target as `__atiraOriginal`, so
  searching `arcturus` still works even though the visible name is poetic.

## The 800 letters

Press **L** or the `✉ letters` button to open the archive. It is a second sheet
beside the discovery journal, using the same type and colours. The left side has
search, category chips and 20-at-a-time pagination; the right side opens one
letter at a time. Nothing in the atlas has to be found to read them.

The records are `LetterDraft` objects in `src/letter-types.ts`, written in
thirty-two 25-letter batches under `src/letters/`. `src/letters.ts` adds
`date: 'undated'` and derives `readingTime` from the word count. A letter's
`setting`, when present, is explicitly a **fictional narrative setting**, never a
claimed composition date.

There are two source corpora, kept strictly separate. L001–L400 come from the
v1 conversation archive (13 July – 23 August 2026); L401–L800 come from the v2
`source-extraction` archive (23 August – 8 October 2026). Their working indexes
are `docs/LETTER_KNOWLEDGE_INDEX.md` and `docs/LETTER_KNOWLEDGE_INDEX_V2.md`;
`docs/LETTER_VOICE.md` and `docs/LETTER_BATCH_BRIEF_V2.md` are the voice guides.
`docs/LETTER_V1_INDEX.md` is the deduplication reference for the earlier volume.

After editing letters, run:

```bash
npm run check:letters        # schema, distribution, duplicates, banned phrases, QA report
npm run export:letter-index  # refresh the dedup reference after edits
npm run build
npm run lint
```

`docs/LETTERS_MANIFEST.md` records the batch plan; `docs/LETTER_QA_REPORT.md`
records the last automated check.

## Making it personal before you send the link

1. Replace every bracketed phrase in `src/atira.ts` with a real memory. They
   render in gold in the journal, so they are easy to spot with a find for `[`.
2. Optionally personalise the `RENAMES` captions — especially `sun`,
   `surface` and `moon`, which are the most likely to be read twice.
3. Change the social-card copy in `index.html` if you want a different first
   impression when the link is pasted into a chat.
4. `npm run build` and open the site. The journal counter starts at zero for a
   fresh visitor — to test the final letter, use the browser console:

   ```js
   localStorage.setItem(
     'atira-universe-notes-v1',
     JSON.stringify(['universe', 'web', 'galaxy']), // or all 32 ids
   );
   ```

   Reload to see the progress. Use `localStorage.removeItem(...)` to reset it
   before handing the site to Daisy.
