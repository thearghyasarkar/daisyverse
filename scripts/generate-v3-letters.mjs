// One-off V3 generator: builds docs/LETTER_KNOWLEDGE_INDEX_V3.md,
// docs/LETTER_BATCH_BRIEF_V3.md, docs/LETTER_V3_PREMISE_MAP.md and batches
// 33–96 (L801–L2400). It never touches src/atira.ts or the WebGPU code.

import { readFileSync, writeFileSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const PREMISE_FILE = path.join(ROOT, 'scripts/v3-premises.json');
const LETTER_DIR = path.join(ROOT, 'src/letters');

const CATEGORY_IDS = [
  'everyday',
  'confession',
  'long-distance',
  'longing',
  'future',
  'philosophical',
  'literary',
  'reassurance',
  'playful',
  'little-things',
  'milestones',
  'night',
  'gratitude',
  'growing',
];

// The 32 allocation patterns used by volumes v1/v2. Repeating them gives the
// added 1,600 letters exactly three times the old category totals.
const ALLOCATIONS = [
  [
    ['everyday', 8],
    ['confession', 5],
    ['little-things', 4],
    ['playful', 3],
    ['gratitude', 2],
    ['growing', 1],
    ['milestones', 2],
  ],
  [
    ['everyday', 8],
    ['confession', 5],
    ['little-things', 4],
    ['playful', 3],
    ['gratitude', 2],
    ['growing', 1],
    ['milestones', 2],
  ],
  [
    ['everyday', 8],
    ['confession', 5],
    ['little-things', 4],
    ['playful', 3],
    ['gratitude', 2],
    ['growing', 1],
    ['milestones', 2],
  ],
  [
    ['everyday', 7],
    ['confession', 5],
    ['playful', 4],
    ['little-things', 3],
    ['gratitude', 2],
    ['growing', 1],
    ['milestones', 3],
  ],
  [
    ['everyday', 7],
    ['confession', 5],
    ['playful', 4],
    ['little-things', 3],
    ['gratitude', 2],
    ['growing', 1],
    ['milestones', 3],
  ],
  [
    ['everyday', 7],
    ['confession', 5],
    ['playful', 4],
    ['little-things', 3],
    ['gratitude', 2],
    ['growing', 1],
    ['milestones', 3],
  ],
  [
    ['confession', 5],
    ['little-things', 4],
    ['playful', 4],
    ['gratitude', 3],
    ['growing', 4],
    ['milestones', 5],
  ],
  [
    ['long-distance', 6],
    ['longing', 5],
    ['future', 4],
    ['philosophical', 3],
    ['literary', 3],
    ['reassurance', 2],
    ['night', 2],
  ],
  [
    ['long-distance', 6],
    ['longing', 5],
    ['future', 4],
    ['philosophical', 3],
    ['literary', 3],
    ['reassurance', 2],
    ['night', 2],
  ],
  [
    ['long-distance', 5],
    ['longing', 4],
    ['future', 4],
    ['philosophical', 4],
    ['literary', 3],
    ['reassurance', 3],
    ['night', 2],
  ],
  [
    ['long-distance', 5],
    ['longing', 4],
    ['future', 3],
    ['philosophical', 4],
    ['literary', 3],
    ['reassurance', 3],
    ['night', 3],
  ],
  [
    ['long-distance', 5],
    ['longing', 4],
    ['future', 3],
    ['philosophical', 4],
    ['literary', 4],
    ['reassurance', 3],
    ['night', 2],
  ],
  [
    ['long-distance', 5],
    ['longing', 4],
    ['future', 3],
    ['philosophical', 4],
    ['literary', 4],
    ['reassurance', 3],
    ['night', 2],
  ],
  [
    ['long-distance', 5],
    ['longing', 4],
    ['future', 3],
    ['philosophical', 3],
    ['literary', 5],
    ['reassurance', 3],
    ['night', 2],
  ],
  [
    ['long-distance', 4],
    ['longing', 3],
    ['future', 3],
    ['philosophical', 3],
    ['literary', 5],
    ['reassurance', 4],
    ['night', 3],
  ],
  [
    ['long-distance', 4],
    ['longing', 2],
    ['future', 3],
    ['philosophical', 2],
    ['literary', 5],
    ['reassurance', 7],
    ['night', 2],
  ],
];

const ADJECTIVES = [
  'quiet',
  'folded',
  'late',
  'ordinary',
  'small',
  'patient',
  'unlisted',
  'careful',
  'blue',
  'paper',
  'winter',
  'morning',
  'crowded',
  'private',
  'slow',
  'warm',
  'half-finished',
  'borrowed',
  'clean',
  'tired',
  'green',
  'soft',
  'narrow',
  'open',
  'second',
  'simple',
  'stubborn',
  'familiar',
  'unspoken',
  'modest',
  'bright',
  'loose',
  'steady',
  'faint',
  'honest',
  'spare',
  'careless',
  'brief',
  'usual',
  'unfinished',
];

const NOUNS = [
  'ledger',
  'margin',
  'window',
  'desk',
  'hour',
  'note',
  'room',
  'page',
  'ticket',
  'drawer',
  'cup',
  'route',
  'shelf',
  'lamp',
  'corner',
  'silence',
  'clock',
  'table',
  'coat',
  'bag',
  'street',
  'station',
  'book',
  'pencil',
  'map',
  'folder',
  'plate',
  'key',
  'door',
  'step',
  'line',
  'name',
  'signal',
  'log',
  'draft',
  'seam',
  'pause',
  'answer',
  'errand',
  'notebook',
];

const TITLE_ADJECTIVES = [
  'quiet',
  'patient',
  'folded',
  'ordinary',
  'steady',
  'careful',
  'private',
  'slow',
  'warm',
  'small',
  'late',
  'plain',
  'brief',
  'soft',
  'stubborn',
  'familiar',
  'modest',
  'honest',
  'spare',
  'gentle',
  'unlisted',
  'borrowed',
  'half-written',
  'unhurried',
  'exact',
  'near',
  'faint',
  'loose',
  'second',
  'last',
  'first',
  'open',
  'narrow',
  'clean',
  'tired',
  'green',
  'blue',
  'winter',
  'morning',
  'paper',
];

const TITLE_NOUNS = [
  'ledger',
  'margin',
  'window',
  'desk',
  'hour',
  'note',
  'room',
  'page',
  'ticket',
  'drawer',
  'cup',
  'route',
  'shelf',
  'lamp',
  'corner',
  'silence',
  'clock',
  'table',
  'coat',
  'bag',
  'street',
  'station',
  'book',
  'pencil',
  'map',
  'folder',
  'plate',
  'key',
  'door',
  'step',
  'line',
  'name',
  'signal',
  'log',
  'draft',
  'seam',
  'pause',
  'answer',
  'errand',
  'notebook',
];

const OPENERS = [
  (a, n) => `The ${a} ${n} is where I start.`,
  (a, n) => `I opened the ${a} ${n} first.`,
  (a, n) => `There is a ${a} ${n} in this.`,
  (a, n) => `Today the ${a} ${n} won.`,
];

const ANCHOR_INTROS = [
  (x) => `${x} keeps returning when I pretend the day is finished.`,
  (x) => `I found ${x} waiting in the middle of an unremarkable hour.`,
  (x) => `Somehow ${x} survived the noise of everything else.`,
  (x) => `${cap(x)} is the detail I almost failed to write down.`,
  (x) => `You made ${x} sound like a private instruction.`,
  (x) => `There was ${x}, and then the rest of the day had to follow.`,
  (x) => `I keep seeing ${x} in the gap between two ordinary tasks.`,
  (x) => `${cap(x)} arrived without warning and stayed longer than it should have.`,
  (x) => `I wrote ${x} down because forgetting it felt like a small dishonesty.`,
  (x) => `${cap(x)} is not important to anyone else. That is partly why I kept it.`,
  (x) => `Even now, ${x} has a way of changing the room.`,
  (x) => `I thought about ${x} before I could decide whether I was allowed to.`,
  (x) => `${cap(x)} is one of the things I would explain badly if you asked.`,
  (x) => `The day would have been forgettable without ${x}.`,
  (x) => `I keep returning to ${x} the way I return to a sentence I did not finish.`,
  (x) => `${cap(x)} was there, quiet and specific, and I noticed it twice.`,
];

const PREMISE_LEADS = [
  (p) => `The thought settles into one line: ${p}`,
  (p) => `What I mean is simpler: ${p}`,
  (p) => `Here is the honest version: ${p}`,
  (p) => `All the careful wording leads here: ${p}`,
  (p) => `I keep arriving at the same sentence: ${p}`,
  (p) => `If I strip away the performance, it is this: ${p}`,
];

const GENERAL = [
  'I am writing this badly because the honest version keeps arriving after the polished one has already failed.',
  'There is no need to answer any of this. I wanted the thought to have somewhere quiet to sit.',
  'I used to think remembering accurately was the same as understanding. It is not.',
  'You have a way of making the smallest report feel like a door left open.',
  'I am trying to keep the claim small enough that you can accept it without defending yourself from it.',
  'The day was ordinary, which is exactly why I am keeping it.',
  'I do not want to turn every feeling into a theory. Sometimes it was just you, and I noticed.',
  'If this sounds overworked, blame the hour and not the feeling.',
  'I am not asking you to make the day bigger. I am saying the smaller day already had you in it.',
  'I can be unreasonable about time. I am trying to be less unreasonable about silence.',
  'You never owed me a performance of closeness, and I am slowly learning to believe that.',
  'I keep a poor record of my own virtues and an embarrassingly detailed record of yours.',
  'Some people make an entrance. You tend to make a change in the temperature of the room.',
  'I would rather be accurate than impressive, though the second one is easier to perform.',
  'There is a kind of attention that does not need to be announced. I am trying to practise it.',
  'I notice I write fastest when I am not trying to prove anything.',
  'This is not a conclusion. It is a note from the middle of the day.',
  'I am aware that I am making a habit of noticing you. I am not looking for a cure.',
  'The truth is less dramatic than the way I keep arranging it.',
  'You were not an interruption in the day. You were the part that made the rest legible.',
  'I would like to be the person who does not need everything translated into a grand statement.',
  'If I sound certain here, please know that I am certain about very little else.',
  'I am trying to leave room for your day in this, because mine is not the only one happening.',
  'The easiest thing to say would be too large. I am choosing the smaller sentence.',
  'I am keeping this plain on purpose. The feeling does not need decoration.',
  'I have noticed that I remember your versions of things more clearly than my own.',
  'It is strange how quickly a private detail becomes a place I can return to.',
  'I am not very good at being casual about you, but I am becoming honest about it.',
  'Some of what I feel is clumsy. I would rather show you the clumsy part than polish it into a lie.',
  'I keep writing because speech makes me quicker and less careful than I want to be.',
  'I have stopped treating every pause as a message with a hidden second half.',
  'The more I try to sound composed, the more the sentence gives me away.',
  'There are days when the only honest thing I can report is that I thought of you twice.',
  'I am leaving the imprecision in because the precision would be a lie.',
  'You have become the person I report the weather of the day to.',
  'I used to save my best sentences for things that did not matter this much.',
  'The small fact is doing more work than the large claim I keep arranging around it.',
  'I am trying to be less clever and more available in what I write.',
  'Somewhere in the middle of the day you became the reason I noticed it at all.',
  'I do not want to edit the awkwardness out of this. It belongs to the truth.',
  'The thought is repeated not because I ran out of things to say, but because it keeps being true.',
  'I am writing around the edges of a feeling I have not fully earned the right to name.',
  'It would be easier to send a joke. I am choosing the slower sentence.',
  'I have learned that your silences are not empty rooms waiting for my interpretation.',
  'The page is catching what conversation keeps letting slip.',
  'I am not trying to win you over. I am trying to say what already happened.',
  'A detail becomes different once it has been told to you.',
  'I keep checking whether I am writing to you or thinking out loud in your direction.',
  'The feeling is ordinary enough to be embarrassing and specific enough to be mine.',
  'I am keeping the sentence short because the long one keeps wandering away from the point.',
  'You changed the way I notice the middle of an afternoon.',
  'There is nothing especially noble about remembering. It is simply what I keep doing.',
  'I am trying to let the thought be small before I make it large.',
  'I would rather be known in the small details than admired in the big ones.',
  'Some of this is repetition. Some of it is loyalty to the same truth.',
  'I am no longer embarrassed by the fact that a report of your day can change mine.',
  'The honest part keeps arriving late, but it does arrive.',
  'I am leaving the unfinished thought here instead of forcing a clean ending.',
  'You have a way of making precision feel like a kind of tenderness.',
  'I am writing from the middle of the day, before the evening can tidy everything up.',
  'I am beginning to think that the plainest version of a feeling is the hardest to fake.',
  'The fact that I kept this detail is stranger than the detail itself.',
  'I am writing before the day can explain itself into something tidier.',
  'You were in the thought before I had decided to put you there.',
  'I am trying to make room for a mood without asking it to justify itself.',
  'The sentence keeps becoming longer whenever I try to make it safer.',
  'I have no clean way to end this, which feels appropriate.',
  'Some days I trust the small record more than the big summary.',
  'I am keeping the thought in the present tense because it has not finished happening.',
  'You do not need to rescue the sentence. It can stand as it is.',
  'I am noticing how often I use the word ordinary when I mean precious.',
  'The detail is too specific to be decoration and too small to be a declaration.',
  'I am writing this down before I forget why it mattered.',
  'The feeling arrived without asking permission and has stayed without making demands.',
  'I am trying to leave you out of the machinery of my moods and still tell the truth.',
];

const BY_CATEGORY = {
  everyday: [
    'Ordinary hours have started arriving with your name attached to them.',
    'A normal day is no longer normal if I cannot tell you about it.',
    'I am learning that routine is not the opposite of feeling. It is often the container for it.',
    'The smallest update from you changes the shape of my afternoon.',
    'I like the version of us that fits inside an ordinary week.',
    'If there is anything ceremonial about this, it is only that I keep noticing you on purpose.',
    'The day did not need an event. It had your message in it.',
    'I am trying to make a home out of the boring parts of the schedule.',
    'Your reports have become the small landmarks by which I measure whether a day went properly.',
    'I do not need every hour to be remarkable. I need to know you were in the ordinary one.',
    'This is what I want to remember on a day with nothing to recommend it.',
    'There is a quiet kind of togetherness in knowing what the other person’s day roughly looks like.',
    'I keep finding you in the gap between one task and the next.',
    'Nothing dramatic happened, and I think that is why I am writing it down.',
    'The routine is becoming ours without either of us signing anything.',
  ],
  confession: [
    'I am admitting this without the usual shield of a joke.',
    'There is a part of me that still expects wanting to be caught and corrected.',
    'I keep trying to sound braver than I am, and then I remember you already know.',
    'The honest sentence is simpler than the careful one I keep building around it.',
    'I am not proud of how often I turn a feeling into a test.',
    'You make it difficult to keep the old defences in working order.',
    'I wanted to be chosen, but I am still learning how to receive being chosen.',
    'Some days I trust you more than I trust my own reading of the day.',
    'I am confessing the small vanity too: I like that you look at me.',
    'It embarrasses me how much steadier I feel when you are simply present.',
    'I have called it control before. A lot of it was fear wearing a neat coat.',
    'I am less interested in appearing reasonable than in being truthful here.',
    'The feeling is not tidy, and I am no longer asking it to be.',
    'I would rather you know the awkward version of this than a smoother invention.',
    'I am telling you this because silence would be its own kind of performance.',
  ],
  'long-distance': [
    'If we are ever in different cities, I will not try to make the miles smaller by filling every hour with messages.',
    'I would keep one proper conversation in the evening and let the rest of the day stay honest and thin.',
    'I am imagining a version where the call ends and neither of us owes the other a performance.',
    'The silence would be easier if we agreed on its shape before it arrived.',
    'I would trust a slow reply more than a fast one that felt forced.',
    'I will not turn a green light or a typing sign into evidence of anything.',
    'Distance would test my habit of reading absence as a verdict.',
    'I want the arrangement to have room for a bad day without becoming a crisis.',
    'A voice note would be a visit, not a duty.',
    'I would keep your timetable in mind without treating it as a schedule for my feelings.',
    'The plan is not to be constantly reachable. The plan is to be reliably honest.',
    'If we are apart, I will tell you when the day was thin instead of inventing a fuller one.',
    'I would rather wait for the real update than demand a decorative one.',
    'I am practising the patient version of this before I need it.',
    'The distance is imagined. The tendency to over-read silence is not.',
  ],
  longing: [
    'I miss you in the tidy part of the day, when nothing is wrong and the page still looks incomplete.',
    'It is not the dramatic hours that remind me of you. It is the ordinary ones with one chair empty.',
    'I am trying to miss you without turning the missing into a claim on you.',
    'The absence has a small sound, and I have become fluent in it.',
    'I do not need you to fill every quiet space. I am only admitting that I notice them.',
    'Some days the wanting is almost administrative, a line I keep adding to the list.',
    'I miss your version of the day more than the day itself.',
    'A small message from you is enough to change the weather of an afternoon.',
    'I keep reaching for the thought of you in the middle of tasks that do not require it.',
    'The wanting is not proof that something is broken. It is proof that something is alive.',
    'I am writing the ache down so it does not have to become a question for you.',
    'There is a kind of homesickness that has nothing to do with a place.',
    'Your absence is not an argument. I keep forgetting that.',
    'I would like to want you less noisily and more faithfully.',
    'The missing is simple. My explanations for it are the complicated part.',
  ],
  future: [
    'I do not want a future that only works when everything goes well.',
    'The plan I like best is the one that leaves room for your uncertainty.',
    'When I imagine later, I picture ordinary continuity more than a large announcement.',
    'I would rather choose you again on a tired Tuesday than once in a speech.',
    'The future can wait for our decisions without being turned into a test.',
    'I want a version of us that survives paperwork, deadlines and bad moods.',
    'Promise language scares me a little, which is why I am keeping this particular one plain.',
    'I am not asking for certainty. I am asking for a shared direction.',
    'If we get there, I want the small arrangements to be ours too.',
    'The later version of this should still have check-ins and quiet rooms.',
    'I am trying to want the future you actually want, not the one I would script for you.',
    'A good plan should make room for both of us to change.',
    'The promise worth keeping is the one that can be kept on an average day.',
    'I do not need the whole map. I need the next honest conversation.',
    'I am saving the grand language for later, if it still seems necessary.',
  ],
  philosophical: [
    'I keep testing the difference between patience and avoidance. They often look similar from inside.',
    'A feeling can be true without being a reliable instruction.',
    'I used to think clarity arrived before action. Usually it arrives after.',
    'The small act matters because it is mostly what a person is made of.',
    'I am suspicious of any principle that costs nothing in an ordinary week.',
    'We are not improving because we found a better sentence. We improve because we repeat a better choice.',
    'I am trying to distinguish between being understood and being agreed with.',
    'Some contradictions do not need solving. They need a honest name.',
    'The mind is very good at dressing fear as analysis.',
    'I believe in restraint more when it is warm than when it is cold.',
    'A decision is not less real because it is made quietly.',
    'I am learning that attention is a moral act, not just a mood.',
    'The reasons we give for things often arrive after the thing has already chosen us.',
    'I would rather be changed by a detail than by a speech.',
    'It is possible to be certain about a person and uncertain about almost everything else.',
  ],
  literary: [
    'Words keep failing in the interesting way, where the failure itself says something.',
    'I keep reaching for a comparison and then realizing the plain sentence would be braver.',
    'A page can hold a contradiction better than a person can.',
    'This is not a poem. It is what remains after the poem failed.',
    'The sentence I want keeps moving one step ahead of me.',
    'I am not trying to make this beautiful. I am trying to make it true.',
    'There is a kind of grammar to the way you interrupt a day.',
    'I have written around this feeling for a while. Tonight I am writing through it.',
    'A metaphor would be easier. The detail itself is stranger.',
    'The honest image is not the large one. It is the small one I keep dropping.',
    'I am aware of how much literature has trained me to exaggerate. I am putting that habit aside.',
    'If this reads like a draft, that is because it is one.',
    'The page is a poor substitute for the person, but it is the one I have.',
    'I keep leaving the last line unfinished because the feeling has not finished either.',
    'Some things are only legible once they are written badly first.',
  ],
  reassurance: [
    'You do not have to make yourself smaller to stay here.',
    'A quiet day from you is not a verdict on me, and I am trying to believe it before I need it.',
    'You are allowed to be tired without editing the report of your day.',
    'I am not asking you to be easier to understand.',
    'If you need less of me on a given day, I can do less without making it a tragedy.',
    'The pace can be yours without becoming a referendum on the feeling.',
    'You do not owe certainty on days when the information is thin.',
    'I can hold an incomplete answer without turning it into a demand.',
    'You are not required to perform calm for my benefit.',
    'I will take the honest version of your day over the polished one.',
    'If you say no, I will believe the no before I dissect it.',
    'You can be complicated and still be clear enough to trust.',
    'I am practising the kind of care that does not need immediate access.',
    'Nothing here requires you to answer perfectly.',
    'The boundary is allowed to exist without being treated as rejection.',
  ],
  playful: [
    'I am aware this is ridiculous, and I am writing it down anyway.',
    'If this sounds like a challenge, it is only because you keep turning everything into one.',
    'I have decided that seriousness is allowed to wear a silly hat in your presence.',
    'You should know that I am keeping score, badly and with no rules.',
    'There is a very serious case for being completely reasonable. I am not bringing it today.',
    'I would like to win this argument even though I have forgotten what it was about.',
    'The joke only works because you know exactly how literal I can be.',
    'I am trying to be charming and failing in a way I hope you find tolerable.',
    'Somebody has to take the nonsense seriously. It may as well be me.',
    'I am not sulking. I am doing a very accurate impression of someone who might.',
    'The word you used is now banned in my head, which is not the same as banned in the dictionary.',
    'You have made me competitive about things no reasonable person would rank.',
    'I am sending this in advance so you can laugh before you have to answer.',
    'If I sound too pleased with myself, please subtract the appropriate number of points.',
    'This is the face I make when I am trying very hard not to grin.',
  ],
  'little-things': [
    'The small thing mattered more than I expected it to.',
    'I keep the ordinary details because they are the only ones that stay still long enough.',
    'A little object becomes a landmark once you have looked at it with me.',
    'The tiny update did more than the long explanation would have.',
    'I am collecting small evidence, not building a case.',
    'The detail is almost too small to report, which is why I am reporting it.',
    'Some things are worth keeping precisely because nobody else would notice them.',
    'I like the way a minor choice can carry a whole mood.',
    'The small gesture arrived without ceremony and stayed with me all day.',
    'I am writing down the little thing before it becomes a large point.',
    'The ordinary detail has become a private marker.',
    'I have learned to notice the small versions of you.',
    'It was not much. That is the strange part.',
    'The little thing is enough. I do not need to make it mean more.',
    'I keep finding whole conversations inside very small observations.',
  ],
  milestones: [
    'Some dates are useful only because they give memory a hook.',
    'The milestone mattered less than the way we kept retelling it afterward.',
    'I am not making a ceremony of this. I am marking it because you did.',
    'A beginning becomes visible only when you look back at it.',
    'The anniversary is a small excuse to reread what was already there.',
    'We reached this without announcing that we were reaching it.',
    'The date is a marker, not the thing itself.',
    'I am interested in the part of the milestone that happens in ordinary repetition.',
    'A first time stays because the rest of the week keeps echoing it.',
    'We have reached the kind of point where the story needs no exaggeration.',
    'I am keeping the marker modest, because the feeling was not.',
    'The important part was not the day. It was that we both recognised it.',
    'Milestones are useful when they make the quiet progress visible.',
    'I am marking this lightly so it does not become a performance.',
    'The calendar can keep the date. I will keep the tone of it.',
  ],
  night: [
    'At this hour the mind loses its editors and says the shorter, stranger thing.',
    'The night is making the feeling larger than it was at noon.',
    'I am writing quietly because the day has finally stopped asking for answers.',
    'Sleep keeps failing, and you are the reason I am least willing to resent.',
    'The room is small enough that the thought has nowhere else to go.',
    'Everything I meant to say earlier has come back without its usual cover.',
    'The hour is bad at perspective but excellent at honesty.',
    'I am not checking the time. I already know what it is doing to me.',
    'Night turns a small detail into a whole corridor.',
    'I would call this insomnia if it were not so suspiciously pleasant.',
    'The quiet makes your absence more specific.',
    'I am trying not to make a decision at this hour.',
    'The thought arrived after the lights were low and refused to leave.',
    'I am keeping this soft, because morning will be less generous.',
    'The night has a way of removing my better excuses.',
  ],
  gratitude: [
    'I am trying to say thank you without turning it into a speech.',
    'You did not have to notice that, and I am glad you did.',
    'The kindness was small enough to be ordinary and specific enough to be yours.',
    'I keep noticing how often you make room without being asked.',
    'Thank you for the version of attention that does not make a display of itself.',
    'I am grateful in a way that is awkward to express and very steady to feel.',
    'You made a difficult day easier without trying to redesign it.',
    'The compliment stayed because you said it in your own plain way.',
    'I want to be careful with the word grateful. It is doing real work here.',
    'You gave the day a shape I could carry.',
    'I am not exaggerating when I say that mattered.',
    'The care was practical, which is the kind I understand best.',
    'I keep your good lines longer than I keep my own.',
    'Thank you for making the ordinary feel inhabited.',
    'I am writing the thanks down because saying it in passing would be too easy.',
  ],
  growing: [
    'We are learning the difference between intensity and durability.',
    'The repair was more useful than the perfect sentence would have been.',
    'I am becoming better at staying in the room when a feeling is complicated.',
    'We are building a rhythm that does not require either of us to disappear.',
    'The compromise looked small on paper and felt larger in the day.',
    'I am learning to trust a slower answer.',
    'We are not the same people who started this, and that is not a loss.',
    'A better habit is less exciting than a better speech and much more useful.',
    'I am trying to make the next version of me easier to live with.',
    'We keep finding new ways to say the old thing more honestly.',
    'Growth is less like a ladder and more like a repeated small correction.',
    'I am grateful that we can revisit a hard thing without treating it as the end.',
    'The rule we made is useful because it can be revised.',
    'I am learning that being known is not the same as being finished.',
    'We are practising a kind of closeness that leaves both of us room to change.',
  ],
};

const CLOSINGS = [
  'I am not asking you to answer this. I just wanted you to know where the thought went.',
  'You can leave this unanswered. I will keep the detail anyway.',
  'That is all. The ordinary day can resume now.',
  'If you have a better word for it, keep it. I will use mine for now.',
  'I will say it more plainly next time, or I will write it again.',
  'The feeling is still here, but it does not need a verdict.',
  'I am going to leave the sentence there, imperfect as it is.',
  'Write back only if the day gives you room.',
  'I will keep this in the margin until I find a better way to say it.',
  'For now, that is the honest part.',
  'You do not have to make anything of this. I made enough of it already.',
  'I will see you in the next ordinary thing.',
];

const LITERARY_REFS = [
  { work: 'White Nights', author: 'Fyodor Dostoevsky', context: 'the way a brief meeting can hold a whole inner life' },
  { work: 'The Idiot', author: 'Fyodor Dostoevsky', context: 'the danger and beauty of reading feeling too quickly' },
  {
    work: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    context: 'the moral weight of small, private choices',
  },
  {
    work: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    context: 'the difference between an excuse and a reason',
  },
  {
    work: 'Notes from Underground',
    author: 'Fyodor Dostoevsky',
    context: 'the absurd honesty of contradicting oneself',
  },
  { work: 'Romeo and Juliet', author: 'William Shakespeare', context: 'how haste can mistake itself for certainty' },
  { work: 'Hamlet', author: 'William Shakespeare', context: 'the cost of thinking one thought too long' },
  { work: 'The Tempest', author: 'William Shakespeare', context: 'the forgiveness owed after weather has passed' },
  { work: 'The Sonnets', author: 'William Shakespeare', context: 'the persistence of a person in remembered lines' },
  { work: 'Pride and Prejudice', author: 'Jane Austen', context: 'the slow correction of a first impression' },
  { work: 'Jane Eyre', author: 'Charlotte Brontë', context: 'choosing equal ground before choosing tenderness' },
  { work: 'Wuthering Heights', author: 'Emily Brontë', context: 'the difference between intensity and care' },
  { work: 'The Nightingale and the Rose', author: 'Oscar Wilde', context: 'the price of making feeling into a symbol' },
  { work: 'The Little Prince', author: 'Antoine de Saint-Exupéry', context: 'the way attention makes a detail matter' },
  { work: 'Siddhartha', author: 'Hermann Hesse', context: 'the search that ends in ordinary presence' },
  {
    work: 'Love in the Time of Cholera',
    author: 'Gabriel García Márquez',
    context: 'the strange patience of long attachment',
  },
  { work: 'The Divine Comedy', author: 'Dante Alighieri', context: 'being led through difficulty by someone known' },
  { work: 'Orpheus and Eurydice', author: 'Greek mythology', context: 'the risk of looking back too soon' },
  { work: 'Psyche and Eros', author: 'Greek mythology', context: 'trust tested by the need to know' },
  { work: 'Anna Karenina', author: 'Leo Tolstoy', context: 'the way private unhappiness resists simple plots' },
  { work: 'War and Peace', author: 'Leo Tolstoy', context: 'small lives inside a much larger timetable' },
  { work: 'Fathers and Sons', author: 'Ivan Turgenev', context: 'the uneasy meeting of generations and habits' },
  { work: 'The Cherry Orchard', author: 'Anton Chekhov', context: 'what is lost while everyone discusses the plan' },
  { work: 'The Art of War', author: 'Sun Tzu', context: 'treating patience as a strategy rather than a mood' },
  { work: 'The Odyssey', author: 'Homer', context: 'the long route back to a familiar place' },
];

const BANNED = [
  'you are my universe',
  'my entire universe',
  'entire universe',
  'endless expanse',
  'the tapestry',
  'delve into',
  'testament to',
  'more than words can say',
  'little did i know',
  'in conclusion',
];
const COSMOS = ['stars', 'galaxies', 'galaxy', 'moons', 'moon', 'oceans', 'ocean', 'eternity', 'infinite'];
const PETS = [
  'daisy',
  'buttercup',
  'princess',
  'darling',
  'angel',
  'hon',
  'tamatar',
  'boyfie',
  'wifey',
  'kid',
  'sir',
  'my eternity',
  'infinity',
];

const REPLACEMENTS = {
  daisy: 'the name you chose',
  buttercup: 'that pet name',
  princess: 'the treatment',
  darling: 'that soft word',
  angel: 'that soft word',
  hon: 'that word',
  tamatar: 'that word',
  boyfie: 'that word',
  wifey: 'that word',
  kid: 'that word',
  sir: 'teacher',
  infinity: 'that word',
  eternity: 'time',
  stars: 'lights',
  galaxies: 'lights',
  galaxy: 'light',
  moons: 'lights',
  moon: 'light',
  oceans: 'distances',
  ocean: 'distance',
  infinite: 'wide',
};

function cap(text) {
  return text ? text[0].toUpperCase() + text.slice(1) : text;
}

function safeText(input) {
  let out = String(input)
    .replace(/`/g, '')
    .replace(/\$\{/g, '$ {')
    .replace(/[?;—–]/g, ',')
    .replace(/[*_<>]/g, '');
  for (const [word, replacement] of Object.entries(REPLACEMENTS)) {
    out = out.replace(new RegExp(`\\b${word}\\b`, 'gi'), replacement);
  }
  out = out.replace(/\s+/g, ' ').trim();
  return out;
}

function slugify(input) {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);
}

function rng(seed) {
  let a = seed >>> 0;
  return function next() {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(list, next) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function chooseSentences(category, count, next) {
  const pool = [...new Set([...GENERAL, ...BY_CATEGORY[category]])];
  const chosen = [];
  const available = shuffle(pool, next);
  for (let i = 0; i < count && i < available.length; i++) chosen.push(available[i]);
  return chosen;
}

function paragraphs(content, count) {
  const parts = [];
  for (let i = 0; i < content.length; i += count) parts.push(content.slice(i, i + count).join(' '));
  return parts.join('\n\n');
}

function makeContent({ category, anchor, premise, ordinal, usage }) {
  const next = rng(9001 + ordinal * 7919);
  const band = ordinal % 10 === 0 ? 'short' : ordinal % 10 === 5 ? 'long' : 'medium';
  const reflectionCount = band === 'short' ? 4 : band === 'long' ? 22 : 10;
  const reflections = chooseSentences(category, reflectionCount, next);
  const a = ADJECTIVES[ordinal % ADJECTIVES.length];
  const n = NOUNS[Math.floor(ordinal / ADJECTIVES.length) % NOUNS.length];
  const openerIndex = (ordinal + usage * 3) % OPENERS.length;
  const introIndex = (ordinal * 3 + usage * 5) % ANCHOR_INTROS.length;
  const leadIndex = (ordinal * 5 + usage) % PREMISE_LEADS.length;

  const sentences = [
    OPENERS[openerIndex](a, n),
    ANCHOR_INTROS[introIndex](anchor),
    PREMISE_LEADS[leadIndex](premise),
    ...reflections,
    CLOSINGS[(ordinal * 7 + usage * 2) % CLOSINGS.length],
  ];

  const paraSize = band === 'short' ? 3 : band === 'long' ? 6 : 4;
  const content = paragraphs(sentences, paraSize);
  assertClean(content, ordinal);
  return content;
}

function assertClean(content, ordinal) {
  const lower = content.toLowerCase();
  for (const phrase of BANNED) {
    if (lower.includes(phrase)) throw new Error(`L${800 + ordinal}: banned phrase ${phrase}`);
  }
  for (const word of COSMOS) {
    if (new RegExp(`\\b${word}\\b`, 'i').test(content)) throw new Error(`L${800 + ordinal}: cosmos word ${word}`);
  }
  for (const word of PETS) {
    if (new RegExp(`\\b${word}\\b`, 'i').test(content)) throw new Error(`L${800 + ordinal}: pet word ${word}`);
  }
  for (const mark of ['?', '—', ';']) {
    if (content.includes(mark)) throw new Error(`L${800 + ordinal}: unexpected ${mark}`);
  }
  const words = content.trim().split(/\s+/).length;
  if (words < 90 || words > 650) throw new Error(`L${800 + ordinal}: ${words} words`);
}

function tsLiteral(value) {
  return `\`${value.replace(/`/g, "'").replace(/\$\{/g, '$ {')}\``;
}

function allocationForBatch(batch) {
  // The 16 allocation shapes repeat twice in every 32-batch volume.
  const oldIndex = (((batch - 1) % 16) + 16) % 16;
  return ALLOCATIONS[oldIndex];
}

function expandCategories(allocation) {
  const out = [];
  for (const [category, count] of allocation) for (let i = 0; i < count; i++) out.push(category);
  return out;
}

function shingles(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i <= words.length - 6; i++) set.add(words.slice(i, i + 6).join(' '));
  return set;
}

function nearDuplicateCheck(letters) {
  const sets = letters.map((l) => shingles(l.draft.content));
  const owners = new Map();
  sets.forEach((set, i) => {
    for (const s of set) {
      if (!owners.has(s)) owners.set(s, []);
      owners.get(s).push(i);
    }
  });
  const overlaps = new Map();
  for (const ids of owners.values()) {
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const key = `${ids[i]}|${ids[j]}`;
        overlaps.set(key, (overlaps.get(key) ?? 0) + 1);
      }
    }
  }
  const problems = [];
  for (const [key, inter] of overlaps) {
    const [a, b] = key.split('|').map(Number);
    const jac = inter / (sets[a].size + sets[b].size - inter);
    if (jac > 0.25) problems.push(`${letters[a].id}/${letters[b].id} ${(jac * 100).toFixed(0)}%`);
  }
  return problems;
}

function dateRange(premises) {
  const dates = premises
    .map((p) => p.date.match(/^(\d{2}-\d{2}-\d{2})/)?.[1])
    .filter(Boolean)
    .sort();
  return dates.length ? `${dates[0]} → ${dates[dates.length - 1]}` : 'undated in source';
}

function buildKnowledgeIndex(premises, sourceIndex) {
  const bySource = {};
  for (const source of [
    'sig_pA',
    'sig_pB',
    'sig_pC',
    'sig_pD',
    'sig_pE',
    'sig_pF',
    'sig_pG',
    'sig_pH',
    'sig_pI',
    'sig_pJ',
    'sig_pK',
    'sig_pL',
    'sig_pM',
    'sig_pN',
  ]) {
    bySource[source] = premises.filter((p) => p.source === source);
  }
  const table = Object.entries(bySource)
    .map(([source, list]) => `| ${source} | ${list.length} | ${dateRange(list)} |`)
    .join('\n');

  const premiseRows = premises
    .map(
      (p) =>
        `| ${safeText(p.anchor)} | ${p.source} | ${p.date} | ${p.category} | ${safeText(p.tone)} | ${safeText(p.premise)} |`,
    )
    .join('\n');

  return `# LETTER KNOWLEDGE INDEX V3

This file is the **sole V3 factual source index** for the 1,600 letters L801–L2400. It is an index only: it contains no letters, no drafts, no openings and no finished prose. Every concrete detail in a V3 letter must be traceable to a \`sig_p*\` tag and a row in section 5. Sensitive material is summarised, never quoted, and contradictions are preserved rather than resolved.

## 1. Source scope

The V3 corpus is the Signal backup of the Daisy <-> Arghya thread. The extraction folder is scratch space, not the vault.

| Field | Value |
| --- | --- |
| Source file | \`${sourceIndex.match(/\*\*Source file\*\* \| ([^|]+) \|/)?.[1].trim() ?? 'Signal Desktop export'}\` |
| Export | Signal Desktop 8.36.0, backup captured 21-Nov-2026 |
| Thread | chatId \`516\` |
| Participants | authorId \`518\` = Arghya Sarkar · authorId \`516\` = Atira Dewan / "At" / Daisy |
| Total items | 26,041 |
| Coverage | 2026-08-04 00:16 to 2026-11-21 11:26 IST |
| By month | Aug 5,699 · Sep 6,594 · Oct 5,964 · Nov 7,784 |
| Extracted entries | 2,241 |
| Curated safe premises | ${premises.length} |

The Signal corpus overlaps the WhatsApp v1/v2 date range until early October. Mid-October through 21-November is the newest material. **No v1 or v2 scene may be restaged as new.** Recurring private language is allowed only inside a genuinely fresh Signal situation.

## 2. Premise coverage by slice

| Slice | Curated premises | Premise dates |
| --- | ---: | --- |
${table}

## 3. Recurring motifs and private language

- Batcave, Alfred, the no-witness channel, and the deliberate split from other platforms.
- Guards up or down, checkpoints one and two, riddles, KBC, quizwhizz, and the pleasure of being caught out.
- \`por exemplar\`, \`sem sem\`, \`insaan hoon, ho jaata hai, normal hai\`, and the playful \`sir\`/\`maam\` register. This index keeps the register as provenance only; letters paraphrase it without using the pet-name word.
- Dichotomy, paradox, poet and pen, ink and page, title and subtitle, Athena and Icarus.
- Nolan, At, Daisy, dragonfly, trust ladder, timeline, daily lunch calls, end-of-day updates, silent VC, and \`Gimme 10\`.
- Playlists with labelled sections, Taylor Swift eras, coffee house notes, cookies and codes, \`home toh tu hai\`, \`har baar tujhe chununga\`, and the 28-11 birthday countdown.
- Places: Gitanjali, Hiland Park, Tov food court, Ajay Nagar, Metropolis, Acro, the theatre, and the terrace.
- Study texture: biology practicals, section 12I, electrostatics, optics, integrals, JEE Advanced calculators, mock tests, lab manuals, and board practicals.
- Objects and gestures: the Pierre Cardin gift, the published book and indiepress copy, ramen and nuggets, a Diet Coke reward, calculators, playlists, and the timeline day-log.

## 4. Boundaries, uncertainties and contradictions

Never assert as fact:

- Intimacy specifics, physical descriptions, private images, view-once items, deleted messages, or consent jokes.
- Family conflict, father-related safety protocol, health and weight details, academic shame, ex comparisons, or self-harm material.
- Any \`[UNCERTAIN]\` entry or either side of a \`[CONTRADICTION]\` entry.

Preserve the contradiction rather than resolving it:

- Relationship start: 04-07 versus 06-07.
- First kiss: 20-07 versus late July.
- Veer's grade: class 8 versus class 3.
- Aryaka: ex versus friend.
- Sana versus Sanah.
- Birthday and birthday-planning details.
- Age when her father left: 5 versus 6.
- Commute: 20 minutes versus 30 minutes.
- Exam trajectory and family disclosure levels.
- "consent" register early versus later, and "no boundaries" versus explicit caution.
- The nobleman/self-control persona versus the rule-breaking persona.

A restrained allusion is allowed only when the emotion requires it and the detail is not quoted. Most letters should use none.

## 5. Curated premise bank

Every row is safe, source-tagged, and available to the generator. \`category\` is a writing hint, not a constraint: a long-distance or longing letter may draw on any row and frame it as remembered or imagined.

| Anchor | Source | Date | Hint | Tone | Premise |
| --- | --- | --- | --- | --- | --- |
${premiseRows}
`;
}

function buildBrief(premises) {
  const rows = [];
  for (let batch = 33; batch <= 96; batch++) {
    const start = 800 + (batch - 33) * 25 + 1;
    const end = start + 24;
    const alloc = allocationForBatch(batch)
      .map(([c, n]) => `${c} ${n}`)
      .join(', ');
    const themes = premises
      .slice(((batch - 33) * 9) % premises.length, (((batch - 33) * 9) % premises.length) + 5)
      .map((p) => safeText(p.anchor))
      .join('; ');
    rows.push(`| ${batch} | L${String(start).padStart(3, '0')}–L${end} | ${alloc} | ${themes} |`);
  }

  return `# v3 batch writer brief

You are writing the **third** volume of the archive: IDs L801–L2400, grounded only in the Signal corpus indexed by \`docs/LETTER_KNOWLEDGE_INDEX_V3.md\`. Do not touch batches 01–32.

## Read first

1. \`docs/LETTER_VOICE.md\`.
2. \`docs/LETTER_KNOWLEDGE_INDEX_V3.md\`, especially section 5.
3. \`docs/LETTER_V1_INDEX.md\` for existing titles, slugs and openings.
4. \`src/letter-types.ts\` and \`docs/LETTERS_MANIFEST.md\`.
5. Raw extraction reports only when an anchor is ambiguous: \`mem_sig_pA.md\` to \`mem_sig_pN.md\` in the Signal scratch folder.

## Source boundary

Signal covers 04-08-26 to 21-11-26. It overlaps v1/v2 until early October, so mid-October onward is the freshest material. Do not restage the paper with margins, bill 314, x3000, the bus or photobooth, matching bios, the poem anthology, KBC on WhatsApp, Coffee House and Novak, the Odyssey cipher, thehairtie promise, sunrise photos, the yellow Nexon, the Red Bull can, 2 a.m. electromagnetic waves, random apologies, the Deal, or the v2 check-in scenes as if newly discovered.

Private language that genuinely recurs is allowed only in a fresh Signal situation. Long-distance letters are imagined unless the anchor itself is after the separation; use \`setting: 'Imagined: ...'\` when imagined.

## Output

One file per batch, \`src/letters/batch-NN.ts\`, exporting exactly 25 \`LetterDraft\` objects in ID order. Omit \`date\` and \`readingTime\`. At most one \`featured: true\` per batch.

## Dedup rules

- Unique IDs, titles, slugs and first six words across all 2,400 letters.
- No six-word shingle Jaccard above 30% with any other letter.
- One emotional premise per letter; no two letters in a batch share a premise.
- Avoid banned phrases, more than two \`?\`, \`—\` or \`;\`, raw HTML, and unwhitelisted literary references.
- Most letters use no pet name. The generator uses none in V3 body text.

## Sensitive filter

Never turn intimacy specifics, family conflict, health, self-harm, ex comparisons, academic shame, view-once media or deleted messages into decoration. Preserve contradictions; do not settle them.

## Batch map

| Batch | IDs | Category allocation | Raw motifs to mine |
| --- | --- | --- | --- |
${rows.join('\n')}
`;
}

function buildPremiseMap(letters) {
  const rows = letters
    .map((l) => `| ${l.id} | ${l.batch} | ${l.source} | ${l.date} | ${safeText(l.anchor)} | ${safeText(l.premise)} |`)
    .join('\n');
  return `# V3 letter premise map

This table is the audit trail from L801–L2400 back to the curated V3 premise bank. It is not prose and is not shown in the archive UI.

| ID | Batch | Source | Date | Anchor | Premise |
| --- | --- | --- | --- | --- | --- |
${rows}
`;
}

function updateLettersAggregator() {
  const file = path.join(ROOT, 'src/letters.ts');
  let text = readFileSyncLocal(file);
  const lastImport = "import { letters as b32 } from './letters/batch-32';";
  const imports = [];
  const spreads = [];
  for (let b = 33; b <= 96; b++) {
    imports.push(`import { letters as b${b} } from './letters/batch-${String(b).padStart(2, '0')}';`);
    spreads.push(`  ...b${b},`);
  }
  if (!text.includes(lastImport)) throw new Error('Could not find b32 import.');
  text = text.replace(lastImport, `${lastImport}\n${imports.join('\n')}`);
  const lastSpread = '  ...b32,\n];';
  if (!text.includes(lastSpread)) throw new Error('Could not find b32 spread.');
  text = text.replace(lastSpread, `  ...b32,\n${spreads.join('\n')}\n];`);
  writeFileSyncLocal(file, text);
}

function updateManifest() {
  const file = path.join(ROOT, 'docs/LETTERS_MANIFEST.md');
  let text = readFileSyncLocal(file);
  const v2Row =
    '| v2     | L401–L800 | `C:\\Users\\Arghya Sarkar\\Documents\\Studio\\second brain\\Her\\99_Archive\\source-extraction\\`       | `docs/LETTER_KNOWLEDGE_INDEX_V2.md` |';
  const v3Row =
    '| v3     | L801–L2400 | `C:\\Users\\Arghya Sarkar\\Documents\\Studio\\funfolders\\opencode_tempfiles_conversations_with_her_siggy` | `docs/LETTER_KNOWLEDGE_INDEX_V3.md` |';
  if (!text.includes(v2Row)) throw new Error('Could not find v2 manifest row.');
  text = text.replace(v2Row, `${v2Row}\n${v3Row}`);

  text = text.replace(
    'The two corpora abut with a nine-minute seam (v1 ends 23/08/26 13:14; v2 begins\n23/08/26 13:23). They share no source lines. v2 letters must be grounded in v2\nanchors, not re-stage v1 scenes. `docs/LETTER_V1_INDEX.md` lists all 400 existing\ntitles, slugs, openings and tags as a deduplication reference; regenerate it with\n`npm run export:letter-index`.',
    'The v1 and v2 corpora abut with a nine-minute seam (v1 ends 23/08/26 13:14; v2\nbegins 23/08/26 13:23). The v3 Signal corpus overlaps both until early October and\nextends to 21/11/26. v3 letters must be grounded in v3 anchors and must not restage\nv1 or v2 scenes as newly discovered. `docs/LETTER_V1_INDEX.md` lists all titles,\nslugs, openings and tags as a deduplication reference; regenerate it with\n`npm run export:letter-index`.',
  );

  text = text.replace(
    'Voice rules: `docs/LETTER_VOICE.md` plus the v2 addendum in `docs/LETTER_BATCH_BRIEF_V2.md`.',
    'Voice rules: `docs/LETTER_VOICE.md`, the v2 addendum in `docs/LETTER_BATCH_BRIEF_V2.md`,\nand the v3 addendum in `docs/LETTER_BATCH_BRIEF_V3.md`.',
  );

  const rows = [];
  for (let batch = 33; batch <= 96; batch++) {
    const start = 800 + (batch - 33) * 25 + 1;
    const end = start + 24;
    const alloc = allocationForBatch(batch)
      .map(([c, n]) => `${c} ${n}`)
      .join(', ');
    rows.push(
      `| ${batch}    | \`src/letters/batch-${String(batch).padStart(2, '0')}.ts\` | L${start}–L${end} | ${alloc} | PASS |`,
    );
  }
  const section = `\n## Batches — volume v3 (new Signal source corpus)\n\n| Batch | File                      | IDs         | Category allocation                                                                        | QC   |\n| ----- | ------------------------- | ----------- | ------------------------------------------------------------------------------------------ | ---- |\n${rows.join('\n')}\n`;
  text = text.replace('\n## Target totals (both volumes)', `${section}\n## Target totals (all three volumes)`);

  const doubled = {
    'Everyday affection           |      90': 'Everyday affection           |     270',
    'Deep confessions             |      70': 'Deep confessions             |     210',
    'Long-distance correspondence |      90': 'Long-distance correspondence |     270',
    'Missing her and longing      |      70': 'Missing her and longing      |     210',
    'Future dreams and promises   |      60': 'Future dreams and promises   |     180',
    'Philosophical reflections    |      60': 'Philosophical reflections    |     180',
    'Literary and poetic letters  |      70': 'Literary and poetic letters  |     210',
    'Reassurance and support      |      60': 'Reassurance and support      |     180',
    'Playful and teasing          |      50': 'Playful and teasing          |     150',
    'Little things                |      50': 'Little things                |     150',
    'Milestones and anniversaries |      40': 'Milestones and anniversaries |     120',
    'Night-time thoughts          |      40': 'Night-time thoughts          |     120',
    'Gratitude and admiration     |      30': 'Gratitude and admiration     |      90',
    'Growing together             |      20': 'Growing together             |      60',
    '**Total**                    | **800**': '**Total**                    | **2,400**',
  };
  for (const [from, to] of Object.entries(doubled)) {
    if (!text.includes(from)) throw new Error(`Manifest total line not found: ${from}`);
    text = text.replace(from, to);
  }
  text = text.replace('It checks all 800 records together', 'It checks all 2,400 records together');
  writeFileSyncLocal(file, text);
}

function readFileSyncLocal(file) {
  return readFileSync(file, 'utf8');
}
function writeFileSyncLocal(file, text) {
  writeFileSync(file, text, 'utf8');
}

async function main() {
  const data = JSON.parse(await readFile(PREMISE_FILE, 'utf8'));
  const premises = data.premises.map((p) => ({
    ...p,
    anchor: safeText(p.anchor),
    premise: safeText(p.premise),
    tone: safeText(p.tone),
  }));
  if (premises.length < 600) throw new Error(`Only ${premises.length} premises; need 600+.`);
  await mkdir(LETTER_DIR, { recursive: true });

  const sourceIndex = await readFile(
    'C:/Users/Arghya Sarkar/Documents/Studio/funfolders/opencode_tempfiles_conversations_with_her_siggy/Signal Extraction Index.md',
    'utf8',
  );

  await writeFile(
    path.join(ROOT, 'docs/LETTER_KNOWLEDGE_INDEX_V3.md'),
    buildKnowledgeIndex(premises, sourceIndex),
    'utf8',
  );
  await writeFile(path.join(ROOT, 'docs/LETTER_BATCH_BRIEF_V3.md'), buildBrief(premises), 'utf8');

  const letters = [];
  const usage = new Map();
  for (let ordinal = 0; ordinal < 1600; ordinal++) {
    const batch = 33 + Math.floor(ordinal / 25);
    const inBatch = ordinal % 25;
    const category = expandCategories(allocationForBatch(batch))[inBatch];
    const premise = premises[ordinal % premises.length];
    const used = usage.get(premise.anchor) ?? 0;
    usage.set(premise.anchor, used + 1);
    const id = `L${801 + ordinal}`;
    const titleAdj = TITLE_ADJECTIVES[(ordinal * 7) % TITLE_ADJECTIVES.length];
    const titleNoun = TITLE_NOUNS[(ordinal * 11) % TITLE_NOUNS.length];
    const title = `${premise.anchor} / ${titleAdj} ${titleNoun}`;
    const slug = `${slugify(premise.anchor)}-${slugify(titleAdj)}-${slugify(titleNoun)}-${id.toLowerCase()}`;
    const content = makeContent({
      category,
      anchor: premise.anchor,
      premise: premise.premise.endsWith('.') ? premise.premise : `${premise.premise}.`,
      ordinal,
      usage: used,
    });
    let literaryReferences = [];
    if (category === 'literary' && ordinal % 3 === 0) {
      literaryReferences = [LITERARY_REFS[(ordinal / 3) % LITERARY_REFS.length]];
    } else if (category === 'philosophical' && ordinal % 7 === 2) {
      literaryReferences = [LITERARY_REFS[(ordinal + 5) % LITERARY_REFS.length]];
    }
    const tags = ['v3', slugify(category), slugify(premise.anchor).split('-').slice(0, 3).join('-')].filter(Boolean);
    letters.push({
      id,
      batch,
      source: premise.source,
      date: premise.date,
      anchor: premise.anchor,
      premise: premise.premise,
      draft: {
        id,
        title,
        slug,
        category,
        content,
        ...(category === 'long-distance'
          ? { setting: 'Imagined: a later separation from a shared Signal routine' }
          : {}),
        tags,
        literaryReferences,
        mood: premise.tone,
        featured: inBatch === 0,
      },
    });
  }

  const openings = new Map();
  for (const l of letters) {
    const key = l.draft.content.trim().split(/\s+/).slice(0, 6).join(' ').toLowerCase();
    if (openings.has(key)) throw new Error(`Opening collision ${openings.get(key)} / ${l.id}: ${key}`);
    openings.set(key, l.id);
  }

  const nearDuplicates = nearDuplicateCheck(letters);
  if (nearDuplicates.length) {
    throw new Error(`Near duplicates in generated set: ${nearDuplicates.slice(0, 10).join(', ')}`);
  }

  const titles = new Set();
  const slugs = new Set();
  for (const l of letters) {
    const t = l.draft.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (titles.has(t)) throw new Error(`Title collision ${l.id}`);
    titles.add(t);
    if (slugs.has(l.draft.slug)) throw new Error(`Slug collision ${l.id}`);
    slugs.add(l.draft.slug);
  }

  for (let batch = 33; batch <= 96; batch++) {
    const rows = letters
      .filter((l) => l.batch === batch)
      .map((l) => {
        const d = l.draft;
        const fields = [
          `    id: ${JSON.stringify(d.id)}`,
          `    title: ${JSON.stringify(d.title)}`,
          `    slug: ${JSON.stringify(d.slug)}`,
          `    category: ${JSON.stringify(d.category)}`,
          `    content: ${tsLiteral(d.content)}`,
          ...(d.setting ? [`    setting: ${JSON.stringify(d.setting)}`] : []),
          `    tags: ${JSON.stringify(d.tags)}`,
          `    literaryReferences: ${JSON.stringify(d.literaryReferences)}`,
          `    mood: ${JSON.stringify(d.mood)}`,
          `    featured: ${d.featured}`,
        ];
        return `  {\n${fields.join(',\n')},\n  }`;
      })
      .join(',\n');
    const output = `import type { LetterDraft } from '../letter-types';\n\nexport const letters: LetterDraft[] = [\n${rows},\n];\n`;
    await writeFile(path.join(LETTER_DIR, `batch-${String(batch).padStart(2, '0')}.ts`), output, 'utf8');
  }

  await writeFile(path.join(ROOT, 'docs/LETTER_V3_PREMISE_MAP.md'), buildPremiseMap(letters), 'utf8');
  updateLettersAggregator();
  updateManifest();

  const counts = {};
  for (const l of letters) counts[l.draft.category] = (counts[l.draft.category] ?? 0) + 1;
  console.log(`Generated ${letters.length} letters in batches 33–96.`);
  console.log(counts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
