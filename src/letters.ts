// The letter archive is data only. It never touches the simulation.
// Batches live in src/letters/ so each can be written and checked separately.

import type { Letter, LetterDraft } from './letter-types';
import { letters as b01 } from './letters/batch-01';
import { letters as b02 } from './letters/batch-02';
import { letters as b03 } from './letters/batch-03';
import { letters as b04 } from './letters/batch-04';
import { letters as b05 } from './letters/batch-05';
import { letters as b06 } from './letters/batch-06';
import { letters as b07 } from './letters/batch-07';
import { letters as b08 } from './letters/batch-08';
import { letters as b09 } from './letters/batch-09';
import { letters as b10 } from './letters/batch-10';
import { letters as b11 } from './letters/batch-11';
import { letters as b12 } from './letters/batch-12';
import { letters as b13 } from './letters/batch-13';
import { letters as b14 } from './letters/batch-14';
import { letters as b15 } from './letters/batch-15';
import { letters as b16 } from './letters/batch-16';
import { letters as b17 } from './letters/batch-17';
import { letters as b18 } from './letters/batch-18';
import { letters as b19 } from './letters/batch-19';
import { letters as b20 } from './letters/batch-20';
import { letters as b21 } from './letters/batch-21';
import { letters as b22 } from './letters/batch-22';
import { letters as b23 } from './letters/batch-23';
import { letters as b24 } from './letters/batch-24';
import { letters as b25 } from './letters/batch-25';
import { letters as b26 } from './letters/batch-26';
import { letters as b27 } from './letters/batch-27';
import { letters as b28 } from './letters/batch-28';
import { letters as b29 } from './letters/batch-29';
import { letters as b30 } from './letters/batch-30';
import { letters as b31 } from './letters/batch-31';
import { letters as b32 } from './letters/batch-32';

const DRAFTS: LetterDraft[] = [
  ...b01,
  ...b02,
  ...b03,
  ...b04,
  ...b05,
  ...b06,
  ...b07,
  ...b08,
  ...b09,
  ...b10,
  ...b11,
  ...b12,
  ...b13,
  ...b14,
  ...b15,
  ...b16,
  ...b17,
  ...b18,
  ...b19,
  ...b20,
  ...b21,
  ...b22,
  ...b23,
  ...b24,
  ...b25,
  ...b26,
  ...b27,
  ...b28,
  ...b29,
  ...b30,
  ...b31,
  ...b32,
];

const wordCount = (text: string): number => (text.trim().match(/\S+/g) ?? []).length;

/**
 * Dates are never invented. `setting` is a clearly labelled fictional
 * narrative place in time; `date` always says `undated`.
 */
function normalise(draft: LetterDraft): Letter {
  return {
    ...draft,
    date: 'undated',
    readingTime: draft.readingTime ?? Math.max(1, Math.round(wordCount(draft.content) / 180)),
  };
}

export const LETTERS: Letter[] = DRAFTS.map(normalise);

export * from './letter-types';
