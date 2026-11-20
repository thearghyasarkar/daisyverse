// DAISY
//
// This is the visible layer of the atlas. The science underneath is untouched:
// every orbit, frame, distance and shader still means exactly what it meant
// before. What changes is what a visitor *sees* — names, captions, scale
// language, and a trail of hidden notes for Daisy to find.
//
// Nothing here changes a number used by the simulation. Slugs are deliberately
// left alone, so shared links, deep links and the tour keep working.

import type { Target } from './scene';

export const SITE_TITLE = 'DAISY';

type RenamedTarget = Target & { __atiraOriginal?: string };

/** Hand-written names for the places the tour actually visits. */
const RENAMES: Record<string, { name: string; source: string }> = {
  universe: {
    name: 'EVERYWHERE I LOOK FOR YOU',
    source: 'I built a whole atlas just to put your name in more places',
  },
  web: { name: 'EVERY ROAD FINDS YOU', source: 'even the wrong turns ended at your check-in' },
  galaxy: {
    name: 'THE ONLY SPIRAL I WATCH',
    source: 'of all the arms out there, I only look for the one where you are',
  },
  system: {
    name: 'OUR FIVE PLACES',
    source: 'home, beach, library, supermarket, you. I keep choosing the last one',
  },
  sun: {
    name: 'THE WAY THE ROOM CHANGES',
    source: 'you laugh, and suddenly every ordinary hour has a temperature',
  },
  mars: {
    name: 'THIRTY MINUTES, TOO FAR',
    source: 'half an hour between us and I behave like you moved to another planet',
  },
  jezero: {
    name: 'THE QUIET THING I KEPT',
    source: 'somewhere far away, I can finally say the line I keep editing out',
  },
  moon: {
    name: 'SAME LIGHT, DIFFERENT ROOMS',
    source: 'you send the sunrise. I send the shadow under my eyes. We call it even',
  },
  tranquility: {
    name: 'WHERE I PUT THE UNSAID',
    source: 'the quietest place I know, and it is full of you',
  },
  earth: {
    name: 'THE PLACE CALLED YOU',
    source: 'you told me home was a person. I have not argued since',
  },
  surface: {
    name: 'ONE METRE, ALL OF IT',
    source: 'one metre of ground and you in it. I have never needed a larger date',
  },
  roam: {
    name: 'TAKE THE LONG WAY',
    source: 'I do not care where we go as long as you complain about the route beside me',
  },
  moonroam: {
    name: 'BORROWED GROUND',
    source: 'brighter than it has any right to be, because you are standing on it',
  },
  marsroam: {
    name: 'A RED HORIZON, YOURS',
    source: 'I would learn every crater if you asked. I would complain the whole way',
  },
  weave: {
    name: 'EVERY SMALL THING, YOU',
    source: 'the stained shirt, the journal, the blue hairtie. I keep finding you in the evidence',
  },
  fiber: {
    name: 'HMM, NOT PROMISE',
    source: 'you made me say it that way, then kept it anyway. I smile at the loophole every time',
  },
  molecule: {
    name: 'WHAT DOES NOT BREAK',
    source: 'we are fucking adamant, you said. I have been carrying the whole sentence',
  },
  atom: {
    name: 'THE PART THAT SHOWS UP',
    source: 'even on the tired days, especially those, it shows up for you',
  },
  nucleus: {
    name: 'WHEN, NOT IF',
    source: 'you asked for that word. I have not answered another way since',
  },
  proton: {
    name: 'FOLDED SMALL, STILL YOURS',
    source: 'fold every feeling I have into the smallest thing there is. It takes up the whole room',
  },
  mercury: {
    name: 'MY HEART, BEFORE MY BRAIN',
    source: 'you walk in and I forget the sentence I was holding',
  },
  venus: {
    name: 'THE ROOM CHANGES',
    source: 'pink helmet, blue hairtie, that laugh. I notice everything, and I am not sorry',
  },
  jupiter: {
    name: 'ROOM FOR ALL OF IT',
    source: 'a hundred worries, the bill that came to 314, and still room for you',
  },
  saturn: {
    name: 'SLOWLY, ON PURPOSE',
    source: 'you told me not to rush. I am learning to make when sound patient',
  },
  uranus: {
    name: 'THE WAY YOU GO QUIET',
    source: 'you get still, and suddenly I want to hear nothing else',
  },
  neptune: {
    name: 'THE HOUR I MISS YOU',
    source: 'blue is the colour of the message I reread after midnight',
  },
  ceres: {
    name: 'THE CHECK-IN LIGHT',
    source: 'you ask whether I ate. That is the whole navigation system',
  },
  halley: {
    name: 'THE ONE THAT CAME BACK',
    source: 'once in a lifetime, and I check the calendar for the next visit',
  },
  'sgr-a': {
    name: 'EVEN LIGHT LEANS IN',
    source: 'I have been leaning that way since the first day you asked me a question',
  },
  iss: {
    name: 'GOING AROUND YOUR WORLD',
    source: 'a tiny light over the planet you are on. I keep timing my messages to it',
  },
  hubble: {
    name: 'THE ONE THAT KEPT LOOKING',
    source: 'it spent its life looking outward. I spent mine looking for a reason to text you first',
  },
  tiangong: {
    name: 'HOME, EVEN UP THERE',
    source: 'in orbit or anywhere, home is the place where someone waits for your reply',
  },
  'voyager-1': {
    name: 'THE ONE THAT CALLS BACK',
    source: 'it learned to leave home and call back. I would do the same, badly, every night',
  },
  'voyager-2': {
    name: 'TWO, SO NEITHER IS LONELY',
    source: 'two of them went so neither would be alone. I like that more than I should',
  },
  'new-horizons': {
    name: 'PAST THE FAR EDGE',
    source: 'it passed the far edge and kept looking. So do I when the day goes quiet',
  },
  jwst: {
    name: 'THE ONE THAT LOOKS FORWARD',
    source: 'it looks back in time. I look forward to the next time you call me sir',
  },
};

const ADJECTIVES = [
  'A PATIENT',
  'A QUIET',
  'A GOLDEN',
  'A RESTLESS',
  'A GENTLE',
  'A BRAVE',
  'A SOFT',
  'A BRIGHT',
  'A LONELY',
  'A WARM',
  'A SECRET',
  'AN ENDLESS',
];
const NOUNS = [
  'LIGHT FOR YOU',
  'PROMISE',
  'THOUGHT OF YOU',
  'PLACE TO WAIT',
  'PIECE OF HOME',
  'SIGNAL',
  'DAYDREAM',
  'WORD FOR YOU',
  'SILENCE',
  'PATH TO YOU',
  'WISH',
  'LITTLE MIRACLE',
];

/** Unique, stable, romantic names for the hundreds of catalogue targets. */
export function poeticName(index: number): string {
  const adjective = ADJECTIVES[index % ADJECTIVES.length];
  const noun = NOUNS[Math.floor(index / ADJECTIVES.length) % NOUNS.length];
  return `${adjective} ${noun} · ${index + 1}`;
}

/** Rename a target in place. Safe to call more than once (satellites and
 *  probes are added to the target list asynchronously). */
export function romanceTarget(t: Target, index: number): void {
  const r = t as RenamedTarget;
  if (r.__atiraOriginal === undefined) r.__atiraOriginal = t.name;
  const handWritten = RENAMES[t.slug];
  if (handWritten) {
    t.name = handWritten.name;
    t.source = handWritten.source;
  } else {
    t.name = poeticName(index);
    t.source = 'a place I imagined so that I could leave you a note';
  }
}

export function applyRomance(targets: Target[]): void {
  targets.forEach(romanceTarget);
}

/** The original catalogue name, kept so search still finds "arcturus". */
export function originalName(t: Target): string | undefined {
  return (t as RenamedTarget).__atiraOriginal;
}

/** Constellation labels are living in the sky; give them soft names too. */
export function poeticConstellation(index: number): string {
  const adjective = ADJECTIVES[(index + 3) % ADJECTIVES.length];
  const noun = NOUNS[(index * 5 + 2) % NOUNS.length];
  return `${adjective} ${noun}`;
}

// ---- the notes -----------------------------------------------------------

export type NoteGroup = 'journey' | 'places' | 'hidden';

export interface Note {
  id: string;
  group: NoteGroup;
  title: string;
  body: string;
}

export const NOTES: Note[] = [
  {
    id: 'universe',
    group: 'journey',
    title: 'The fixed hour',
    body: 'The Little Prince says the hour you come back matters more than what you say when you do. You ask whether I ate, then whether I drank water, then whether I slept. I used to think it was nagging. It is the closest thing to being expected I have ever known.',
  },
  {
    id: 'web',
    group: 'journey',
    title: 'Four nights on one street',
    body: 'In White Nights, a man meets a woman once and then walks the same streets for four nights because she might be there. I read that before I met you and thought it was sad. You asked me about AI and robotics on an ordinary day, and I walked home understanding the streets.',
  },
  {
    id: 'galaxy',
    group: 'journey',
    title: 'Which door',
    body: 'Pride and Prejudice spends half its time on who is allowed into which room. You keep a circle of five. I am still working out which door I came through.',
  },
  {
    id: 'system',
    group: 'journey',
    title: 'The itinerary',
    body: 'The Odyssey is a list of places that mean nothing until one of them is home. You named five and ended with “a place with you.” That is the whole itinerary. I would still take the detours.',
  },
  {
    id: 'sun',
    group: 'journey',
    title: 'What the rose cost',
    body: 'The student in The Nightingale and the Rose wants a red rose and does not understand what it cost. You kept roses until they decayed. I have been trying to understand what that kind of keeping costs, and why you do it so quietly.',
  },
  {
    id: 'mars',
    group: 'journey',
    title: 'Measuring, honestly',
    body: 'Love in the Time of Cholera makes waiting look almost grand. Mine is less grand: I check the time, I count the kilometres, I get tired of both. You live half an hour away and I still catch myself measuring. I would rather measure than pretend it costs nothing.',
  },
  {
    id: 'jezero',
    group: 'journey',
    title: 'Saying it',
    body: 'The Sonnets keep a person alive by saying their name over and over. You told me you did not like your name from other people. I say “Atira” like it is mine to say. You have never once corrected me.',
  },
  {
    id: 'moon',
    group: 'journey',
    title: 'One instruction',
    body: 'Orpheus had one instruction and still lost the thing he loved by looking back. I am not brave enough for that story. You mangle “i misshey nishey you” and it lands better than anything correct I could write. I keep rereading it.',
  },
  {
    id: 'tranquility',
    group: 'journey',
    title: 'The daylight rule',
    body: 'Psyche was told not to look at Eros in daylight. We broke that rule with a sunrise photo after an all-nighter, and you turned the whole thing into a joke I still laugh at. Dawn has never felt less like an ending.',
  },
  {
    id: 'earth',
    group: 'journey',
    title: 'The person at the end',
    body: 'Jane Eyre keeps walking away from houses that do not fit and ends up choosing a person. You told me home was more a person than a place. I have been carrying that sentence around ever since.',
  },
  {
    id: 'surface',
    group: 'journey',
    title: 'Enough terrain',
    body: 'Siddhartha learns everything from a river he can stand beside. One metre of ground is all I get here. Maggi with egg and green chillis, the butter-sauce joke, and you answering for both of us with “we” — that is enough terrain.',
  },
  {
    id: 'weave',
    group: 'journey',
    title: 'Threads I keep pulling',
    body: 'Wuthering Heights is all weather and threads someone keeps pulling. The white shirt that got stained, the journal you gave me when my old one ended, the word you let me say. I am not good at letting go of any of it.',
  },
  {
    id: 'fiber',
    group: 'journey',
    title: 'What survives the show',
    body: 'The Tempest says even the grandest show melts into thin air. You said “hmm, not promise” and then kept every one anyway. I have stopped trying to correct you.',
  },
  {
    id: 'molecule',
    group: 'journey',
    title: 'A large, uncomfortable sentence',
    body: 'The Brothers Karamazov says we are responsible for each other, which is a large, uncomfortable sentence. You said I am the reason you are you to you. That is the same idea, said quietly.',
  },
  {
    id: 'atom',
    group: 'journey',
    title: 'The nicer word',
    body: 'The man in Notes from Underground is stubborn about the smallest things and calls it spite. You called us adamant. I am choosing to hear it as the nicer word.',
  },
  {
    id: 'nucleus',
    group: 'journey',
    title: 'The part that is kept',
    body: 'Raskolnikov spends Crime and Punishment arguing himself into a theory and then failing to live by it. You said soulmates are chosen and kept. I am trying to be the part that is kept.',
  },
  {
    id: 'proton',
    group: 'journey',
    title: 'Forty thousand brothers',
    body: 'Hamlet says forty thousand brothers could not make up his sum for Ophelia, which is the sort of number you would understand. You called your love “x6000.” I have never been good at arithmetic where you are concerned.',
  },
  {
    id: 'mercury',
    group: 'places',
    title: 'The kind thing at the wrong time',
    body: 'Prince Myshkin is called an idiot because he says the kind thing at the wrong time. You called me your first organic relationship. I am still deciding whether that was the kind thing or the honest thing. It was probably both.',
  },
  {
    id: 'venus',
    group: 'places',
    title: 'I notice everything',
    body: 'The Little Mermaid trades her voice and still cannot tell the prince what she gave up. You wore a pink helmet twice and a blue hairtie in a screenshot. I notice everything. It is becoming a problem.',
  },
  {
    id: 'jupiter',
    group: 'places',
    title: 'Smaller than a war',
    body: 'War and Peace can make a whole war feel smaller than one person noticing another. You take up more room in my head than Jupiter, and “missing you was the only sad constant” has its own weather in there.',
  },
  {
    id: 'saturn',
    group: 'places',
    title: 'When, not if',
    body: 'Dante only gets through by following someone who knows the way. You asked for “when, not if.” I have been answering in that tense since, though I still check the word “when” like it might be a trap.',
  },
  {
    id: 'uranus',
    group: 'places',
    title: 'Nothing happened',
    body: 'In The Cherry Orchard, a whole life can pass in a room where nobody says the thing they mean. I used to think that was wasted time. Then we had a four-hour meetup where almost nothing happened, and I understood the play differently: nothing happening was exactly the point.',
  },
  {
    id: 'neptune',
    group: 'places',
    title: 'The third reread',
    body: 'Anna Karenina opens by saying happy families are all alike. Mine has been unhappy in the same small way: “more. obsessively. frankly inconvenient.” You said it as a joke. I stopped laughing around the third reread.',
  },
  {
    id: 'ceres',
    group: 'places',
    title: 'The battle I did not fight',
    body: 'The Art of War says the best battle is the one you do not fight. A thirty-five-minute call with you ends something in me that was trying to start an argument. That is the only strategy I have ever believed in.',
  },
  {
    id: 'halley',
    group: 'places',
    title: 'A plot twist',
    body: 'Beauty and the Beast is a story about being seen properly by someone who expects not to be. You told me I treat you like you matter. I did not know that was a plot twist until you said it out loud.',
  },
  {
    id: 'sgr-a',
    group: 'places',
    title: 'Correcting each other',
    body: 'Fathers and Sons is mostly two people correcting each other until they notice they are on the same side. You corrected my physics and called it flirting. I have not recovered, and I am not sure I want to.',
  },
  {
    id: 'iss',
    group: 'places',
    title: 'Proof someone was looking',
    body: 'In the Sonnets, a small thing — a star, an eye — becomes proof that someone was looking. You made me send a photo in HQ for no reason. I have been looking at it ever since, which is probably the point.',
  },
  {
    id: 'voyager-1',
    group: 'places',
    title: 'Answering early',
    body: 'Sleeping Beauty waits a hundred years and the prince arrives late. You said that if I need you, you are just a call away. Voyager left the solar system and still calls home. I would rather be the one who answers early.',
  },
  {
    id: 'secret-atira',
    group: 'hidden',
    title: 'A name handled carefully',
    body: 'Even Romeo and Juliet, which you called overhyped, turns a name into the whole problem. You told me you did not like yours from other people, then let me say it anyway. Atira. I have never treated a name more carefully.',
  },
  {
    id: 'secret-dewan',
    group: 'hidden',
    title: 'What a name means',
    body: 'Pride and Prejudice opens with a neighbourhood that has already decided what a man’s name means. Dewan. Yours always sounded like a door closing softly and a home opening. I have been quietly proud of saying it.',
  },
  {
    id: 'secret-love',
    group: 'hidden',
    title: 'The exactness',
    body: 'Wuthering Heights has people saying they love someone like a verdict and then spending years proving it badly. You said “i fucking love you. in 2 months.” I have been trying to keep that exactness ever since.',
  },
  {
    id: 'secret-universe',
    group: 'hidden',
    title: 'The margins',
    body: 'Dante gets to the stars by being led through everything he would rather skip. The annotated 33-page research paper, the corrections in the margin, the journal that arrived when my old one ended — that is my version of the climb. I reread the margins more than the poem.',
  },
];

const FINAL_LETTER = `Atira,

If you have found all of these, then you have been everywhere I could think to put a piece of my heart. Some of these places are enormous. Some are smaller than an atom. I put notes in both, because that is the truth of it: there is no size of thing that does not remind me of you.

You asked me to remember 26/06, and I have. I do not need the date to mean anything more than that.

I still laugh about the bill that came to ₹314 and the way you made it mean pi.

When I see you again I want to say the plain thing first: I missed you, I am proud of you, and you do not have to have it all figured out.

I made all of this to be mapped. But the only map I have ever wanted is the one that ends with you — and starts there too.

Yours, in every direction,
Arghya`;

const SECRET_PHRASES: Record<string, string> = {
  atira: 'secret-atira',
  dewan: 'secret-dewan',
  'i love you': 'secret-love',
  'my entire universe': 'secret-universe',
  'you are my universe': 'secret-universe',
};

const STORE_KEY = 'atira-universe-notes-v1';

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escape note bodies; a bracketed aside would render as a private italic line. */
const renderBody = (body: string): string =>
  escapeHtml(body).replace(/\[([^\]]+)\]/g, '<em class="placeholder">[$1]</em>');

const GROUP_LABELS: Record<NoteGroup, string> = {
  journey: 'THE GRAND TOUR — THE BIG PLACES',
  places: 'THE SIDE ROADS',
  hidden: 'HIDDEN LETTERS',
};

export class Journey {
  private found = new Set<string>();
  private panel: HTMLElement | null = null;
  private countEl: HTMLElement | null = null;
  private totalEl: HTMLElement | null = null;
  private progressEl: HTMLElement | null = null;
  private listEl: HTMLElement | null = null;
  private finalEl: HTMLElement | null = null;
  private popTimer = 0;
  private titleClicks = 0;

  constructor() {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(STORE_KEY) ?? '[]');
      if (Array.isArray(saved)) for (const id of saved) if (typeof id === 'string') this.found.add(id);
    } catch {
      /* storage blocked: notes still work for this visit */
    }
  }

  init(): void {
    this.panel = document.getElementById('atira-journal');
    this.countEl = document.getElementById('atira-count');
    this.totalEl = document.getElementById('atira-total');
    this.progressEl = document.querySelector('#atira-journal .progress-bar');
    this.listEl = document.getElementById('atira-notes');
    this.finalEl = document.getElementById('atira-final');
    document.getElementById('atira-counter')?.addEventListener('click', () => this.toggle());
    document.getElementById('atira-journal-close')?.addEventListener('click', () => this.close());
    document.getElementById('atira-open-final')?.addEventListener('click', () => {
      this.open();
      this.finalEl?.scrollIntoView({ behavior: 'smooth' });
    });
    this.panel?.addEventListener('pointerdown', (e) => {
      if (e.target === this.panel) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      const typing = document.activeElement instanceof HTMLInputElement;
      if (!typing && (e.key === 'n' || e.key === 'N')) {
        e.preventDefault();
        this.toggle();
      }
    });
    // Search is a map of names — so let the map itself hide letters.
    document.querySelector<HTMLInputElement>('#search input')?.addEventListener('input', (e) => {
      const q = (e.target as HTMLInputElement).value.trim().toLowerCase().replace(/\s+/g, ' ');
      const id = SECRET_PHRASES[q];
      if (id) this.discover(id);
    });
    // A third tap on the title opens nothing you can see — until it does.
    document.getElementById('title')?.addEventListener('click', () => {
      if (++this.titleClicks >= 3) {
        this.titleClicks = 0;
        this.discover('secret-universe');
      }
    });
    this.render();
  }

  /** Called when the camera arrives anywhere. Repeated visits are harmless. */
  discover(id: string): void {
    if (!NOTES.some((n) => n.id === id) || this.found.has(id)) return;
    this.found.add(id);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify([...this.found]));
    } catch {
      /* fine */
    }
    this.render();
    this.popNote(NOTES.find((n) => n.id === id)!);
  }

  private popNote(note: Note): void {
    document.getElementById('atira-note-pop')?.remove();
    const pop = document.createElement('button');
    pop.id = 'atira-note-pop';
    pop.className = 'atira-note-pop';
    pop.innerHTML = `<span class="eyebrow">a note for you, Daisy</span><strong>${escapeHtml(note.title)}</strong><span class="teaser">${escapeHtml(
      note.body.split(/[.!?]/)[0] + '.',
    )}</span><span class="open">open the journal · N</span>`;
    pop.addEventListener('click', () => {
      this.open();
      document.getElementById(`note-${note.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    document.body.appendChild(pop);
    window.clearTimeout(this.popTimer);
    this.popTimer = window.setTimeout(() => pop.classList.add('fade'), 7000);
    window.setTimeout(() => pop.remove(), 7800);
  }

  private render(): void {
    if (this.countEl) this.countEl.textContent = String(this.found.size);
    if (this.totalEl) this.totalEl.textContent = String(NOTES.length);
    if (this.progressEl) this.progressEl.style.width = `${(100 * this.found.size) / NOTES.length}%`;
    if (!this.listEl) return;
    this.listEl.innerHTML = '';
    let lastGroup: NoteGroup | null = null;
    for (const note of NOTES) {
      if (note.group !== lastGroup) {
        lastGroup = note.group;
        const h = document.createElement('h3');
        h.className = 'note-group';
        h.textContent = GROUP_LABELS[note.group];
        this.listEl.appendChild(h);
      }
      const has = this.found.has(note.id);
      const card = document.createElement('article');
      card.id = `note-${note.id}`;
      card.className = `note ${has ? 'found' : 'locked'}`;
      card.innerHTML = has
        ? `<h4>${escapeHtml(note.title)}</h4><p>${renderBody(note.body)}</p>`
        : '<h4>???</h4><p>Not found yet. Keep mapping — it is somewhere between a place and a memory.</p>';
      this.listEl.appendChild(card);
    }
    if (this.finalEl) {
      const complete = this.found.size === NOTES.length;
      this.finalEl.classList.toggle('sealed', !complete);
      this.finalEl.innerHTML = complete
        ? `<h3>One last letter — opened</h3><div class="letter">${renderBody(FINAL_LETTER)}</div>`
        : `<h3>One last letter — still folded shut</h3><p>${
            NOTES.length - this.found.size
          } more notes to find before this one opens. Keep exploring; you are doing beautifully.</p>`;
    }
  }

  private open(): void {
    this.panel?.classList.add('open');
    this.panel?.setAttribute('aria-hidden', 'false');
  }

  private close(): void {
    this.panel?.classList.remove('open');
    this.panel?.setAttribute('aria-hidden', 'true');
  }

  private toggle(): void {
    if (this.panel?.classList.contains('open')) this.close();
    else this.open();
  }
}

export const journey = new Journey();
