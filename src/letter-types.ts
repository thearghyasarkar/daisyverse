// Shared types for the letter archive. The simulation never imports these.

export type LetterCategory =
  | 'everyday'
  | 'confession'
  | 'long-distance'
  | 'longing'
  | 'future'
  | 'philosophical'
  | 'literary'
  | 'reassurance'
  | 'playful'
  | 'little-things'
  | 'milestones'
  | 'night'
  | 'gratitude'
  | 'growing';

export interface LiteraryReference {
  work: string;
  author: string;
  context: string;
}

export interface Letter {
  id: string;
  title: string;
  slug: string;
  category: LetterCategory;
  /** Markdown. Everything is escaped before the small renderer sees it. */
  content: string;
  /** Deliberately never a fabricated composition date. */
  date: 'undated';
  /** Clearly labelled fictional narrative setting, when the letter has one. */
  setting?: string;
  tags: string[];
  literaryReferences: LiteraryReference[];
  mood: string;
  /** Derived from word count by the aggregator. */
  readingTime: number;
  featured: boolean;
}

export type LetterDraft = Omit<Letter, 'date' | 'readingTime'> & {
  date?: Letter['date'];
  readingTime?: number;
};

export const CATEGORY_DEFS = [
  { id: 'everyday', label: 'Everyday affection', short: 'Everyday', target: 90 },
  { id: 'confession', label: 'Deep confessions', short: 'Confessions', target: 70 },
  { id: 'long-distance', label: 'Long-distance correspondence', short: 'Distance', target: 90 },
  { id: 'longing', label: 'Missing her and longing', short: 'Longing', target: 70 },
  { id: 'future', label: 'Future dreams and promises', short: 'Future', target: 60 },
  { id: 'philosophical', label: 'Philosophical reflections', short: 'Thoughts', target: 60 },
  { id: 'literary', label: 'Literary and poetic letters', short: 'Literary', target: 70 },
  { id: 'reassurance', label: 'Reassurance and support', short: 'Reassurance', target: 60 },
  { id: 'playful', label: 'Playful and teasing', short: 'Playful', target: 50 },
  { id: 'little-things', label: 'Letters about little things', short: 'Little things', target: 50 },
  { id: 'milestones', label: 'Milestones and anniversaries', short: 'Milestones', target: 40 },
  { id: 'night', label: 'Night-time thoughts', short: 'Night', target: 40 },
  { id: 'gratitude', label: 'Gratitude and admiration', short: 'Gratitude', target: 30 },
  { id: 'growing', label: 'Growing together', short: 'Growing', target: 20 },
] as const satisfies readonly { id: LetterCategory; label: string; short: string; target: number }[];

export const CATEGORY_LABELS: Record<LetterCategory, string> = Object.fromEntries(
  CATEGORY_DEFS.map((c) => [c.id, c.label]),
) as Record<LetterCategory, string>;

export const CATEGORY_SHORT: Record<LetterCategory, string> = Object.fromEntries(
  CATEGORY_DEFS.map((c) => [c.id, c.short]),
) as Record<LetterCategory, string>;
