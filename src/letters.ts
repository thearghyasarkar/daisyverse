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
import { letters as b33 } from './letters/batch-33';
import { letters as b34 } from './letters/batch-34';
import { letters as b35 } from './letters/batch-35';
import { letters as b36 } from './letters/batch-36';
import { letters as b37 } from './letters/batch-37';
import { letters as b38 } from './letters/batch-38';
import { letters as b39 } from './letters/batch-39';
import { letters as b40 } from './letters/batch-40';
import { letters as b41 } from './letters/batch-41';
import { letters as b42 } from './letters/batch-42';
import { letters as b43 } from './letters/batch-43';
import { letters as b44 } from './letters/batch-44';
import { letters as b45 } from './letters/batch-45';
import { letters as b46 } from './letters/batch-46';
import { letters as b47 } from './letters/batch-47';
import { letters as b48 } from './letters/batch-48';
import { letters as b49 } from './letters/batch-49';
import { letters as b50 } from './letters/batch-50';
import { letters as b51 } from './letters/batch-51';
import { letters as b52 } from './letters/batch-52';
import { letters as b53 } from './letters/batch-53';
import { letters as b54 } from './letters/batch-54';
import { letters as b55 } from './letters/batch-55';
import { letters as b56 } from './letters/batch-56';
import { letters as b57 } from './letters/batch-57';
import { letters as b58 } from './letters/batch-58';
import { letters as b59 } from './letters/batch-59';
import { letters as b60 } from './letters/batch-60';
import { letters as b61 } from './letters/batch-61';
import { letters as b62 } from './letters/batch-62';
import { letters as b63 } from './letters/batch-63';
import { letters as b64 } from './letters/batch-64';
import { letters as b65 } from './letters/batch-65';
import { letters as b66 } from './letters/batch-66';
import { letters as b67 } from './letters/batch-67';
import { letters as b68 } from './letters/batch-68';
import { letters as b69 } from './letters/batch-69';
import { letters as b70 } from './letters/batch-70';
import { letters as b71 } from './letters/batch-71';
import { letters as b72 } from './letters/batch-72';
import { letters as b73 } from './letters/batch-73';
import { letters as b74 } from './letters/batch-74';
import { letters as b75 } from './letters/batch-75';
import { letters as b76 } from './letters/batch-76';
import { letters as b77 } from './letters/batch-77';
import { letters as b78 } from './letters/batch-78';
import { letters as b79 } from './letters/batch-79';
import { letters as b80 } from './letters/batch-80';
import { letters as b81 } from './letters/batch-81';
import { letters as b82 } from './letters/batch-82';
import { letters as b83 } from './letters/batch-83';
import { letters as b84 } from './letters/batch-84';
import { letters as b85 } from './letters/batch-85';
import { letters as b86 } from './letters/batch-86';
import { letters as b87 } from './letters/batch-87';
import { letters as b88 } from './letters/batch-88';
import { letters as b89 } from './letters/batch-89';
import { letters as b90 } from './letters/batch-90';
import { letters as b91 } from './letters/batch-91';
import { letters as b92 } from './letters/batch-92';
import { letters as b93 } from './letters/batch-93';
import { letters as b94 } from './letters/batch-94';
import { letters as b95 } from './letters/batch-95';
import { letters as b96 } from './letters/batch-96';

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
  ...b33,
  ...b34,
  ...b35,
  ...b36,
  ...b37,
  ...b38,
  ...b39,
  ...b40,
  ...b41,
  ...b42,
  ...b43,
  ...b44,
  ...b45,
  ...b46,
  ...b47,
  ...b48,
  ...b49,
  ...b50,
  ...b51,
  ...b52,
  ...b53,
  ...b54,
  ...b55,
  ...b56,
  ...b57,
  ...b58,
  ...b59,
  ...b60,
  ...b61,
  ...b62,
  ...b63,
  ...b64,
  ...b65,
  ...b66,
  ...b67,
  ...b68,
  ...b69,
  ...b70,
  ...b71,
  ...b72,
  ...b73,
  ...b74,
  ...b75,
  ...b76,
  ...b77,
  ...b78,
  ...b79,
  ...b80,
  ...b81,
  ...b82,
  ...b83,
  ...b84,
  ...b85,
  ...b86,
  ...b87,
  ...b88,
  ...b89,
  ...b90,
  ...b91,
  ...b92,
  ...b93,
  ...b94,
  ...b95,
  ...b96,
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
