// Letter archive UI. A second sheet beside the discovery journal, using the
// same typography and colours. The atlas itself is untouched.

import { LETTERS, CATEGORY_DEFS, CATEGORY_LABELS, CATEGORY_SHORT } from './letters';
import type { Letter, LetterCategory } from './letter-types';
import { escapeHtml, firstSentence, renderMarkdown } from './letter-render';

const PAGE_SIZE = 20;
type CategoryFilter = LetterCategory | 'all';

export class Archive {
  private panel: HTMLElement | null = null;
  private listEl: HTMLElement | null = null;
  private detailEl: HTMLElement | null = null;
  private filtersEl: HTMLElement | null = null;
  private countEl: HTMLElement | null = null;
  private moreEl: HTMLButtonElement | null = null;
  private searchEl: HTMLInputElement | null = null;

  private category: CategoryFilter = 'all';
  private query = '';
  private visible = PAGE_SIZE;
  private selectedId: string | null = null;

  init(): void {
    this.panel = document.getElementById('atira-archive');
    this.listEl = document.getElementById('letter-list');
    this.detailEl = document.getElementById('letter-detail');
    this.filtersEl = document.getElementById('letter-filters');
    this.countEl = document.getElementById('letter-count');
    this.moreEl = document.querySelector<HTMLButtonElement>('#letter-more');
    this.searchEl = document.querySelector<HTMLInputElement>('#letter-search');

    document.getElementById('atira-archive-close')?.addEventListener('click', () => this.close());
    this.panel?.addEventListener('pointerdown', (e) => {
      if (e.target === this.panel) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    this.searchEl?.addEventListener('input', (e) => {
      this.query = (e.target as HTMLInputElement).value.trim().toLowerCase();
      this.visible = PAGE_SIZE;
      this.selectedId = null;
      this.render();
    });

    this.moreEl?.addEventListener('click', () => {
      this.visible += PAGE_SIZE;
      this.renderList();
    });

    this.filtersEl?.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-category]');
      if (!btn) return;
      this.category = btn.dataset.category as CategoryFilter;
      this.visible = PAGE_SIZE;
      this.selectedId = null;
      this.render();
    });

    this.listEl?.addEventListener('click', (e) => {
      const card = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-letter-id]');
      if (!card?.dataset.letterId) return;
      this.selectedId = card.dataset.letterId;
      this.renderList();
      this.renderDetail();
      this.detailEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    this.detailEl?.addEventListener('click', (e) => {
      const back = (e.target as HTMLElement).closest<HTMLButtonElement>('#letter-back');
      if (!back) return;
      this.selectedId = null;
      this.renderDetail();
      this.listEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    this.renderFilters();
    this.render();
  }

  private filtered(): Letter[] {
    const q = this.query;
    return LETTERS.filter((letter) => {
      if (this.category !== 'all' && letter.category !== this.category) return false;
      if (!q) return true;
      const haystack = [
        letter.title,
        letter.content,
        CATEGORY_LABELS[letter.category],
        letter.mood,
        ...letter.tags,
        ...letter.literaryReferences.map((r) => `${r.work} ${r.author}`),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  private renderFilters(): void {
    if (!this.filtersEl) return;
    const all = `<button data-category="all" class="active">All <span>${LETTERS.length}</span></button>`;
    const rest = CATEGORY_DEFS.map(
      (c) => `<button data-category="${c.id}">${escapeHtml(c.short)} <span>${c.target}</span></button>`,
    ).join('');
    this.filtersEl.innerHTML = all + rest;
  }

  private render(): void {
    this.renderFiltersState();
    this.renderList();
    this.renderDetail();
  }

  private renderFiltersState(): void {
    this.filtersEl?.querySelectorAll<HTMLButtonElement>('button[data-category]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category === this.category);
    });
  }

  private renderList(): void {
    const matches = this.filtered();
    if (this.countEl) {
      this.countEl.textContent = `${matches.length} ${matches.length === 1 ? 'letter' : 'letters'}`;
    }
    if (!this.listEl) return;
    const shown = matches.slice(0, this.visible);
    if (!shown.length) {
      this.listEl.innerHTML =
        '<p class="letter-empty">Nothing filed under that. Try another word — I may have called it something else.</p>';
    } else {
      this.listEl.innerHTML = shown
        .map((letter) => {
          const selected = letter.id === this.selectedId ? ' selected' : '';
          return `<button class="letter-card${selected}" data-letter-id="${escapeHtml(letter.id)}">
            <span class="letter-card-meta">${escapeHtml(CATEGORY_SHORT[letter.category])} · ${letter.readingTime} min · ${escapeHtml(letter.mood)}</span>
            <strong>${escapeHtml(letter.title)}</strong>
            <span class="letter-card-teaser">${escapeHtml(firstSentence(letter.content))}</span>
          </button>`;
        })
        .join('');
    }
    if (this.moreEl) {
      const remaining = matches.length - shown.length;
      this.moreEl.hidden = remaining <= 0;
      this.moreEl.textContent = remaining > 0 ? `Show more · ${remaining} left` : '';
    }
  }

  private renderDetail(): void {
    if (!this.detailEl) return;
    const letter = LETTERS.find((l) => l.id === this.selectedId);
    if (!letter) {
      this.detailEl.innerHTML = `<div class="letter-placeholder">
        <span class="eyebrow">pick a moment</span>
        <p>Some are loud, some are just lunch and water. Choose one from the list and it opens here.</p>
      </div>`;
      return;
    }
    const refs = letter.literaryReferences.length
      ? `<div class="letter-refs"><span class="eyebrow">threads in the margin</span>${letter.literaryReferences
          .map((r) => `<p><em>${escapeHtml(r.work)}</em> — ${escapeHtml(r.author)}. ${escapeHtml(r.context)}</p>`)
          .join('')}</div>`
      : '';
    const tags = letter.tags.map((t) => `<span>#${escapeHtml(t)}</span>`).join(' ');
    const setting = letter.setting ? `<p class="letter-setting">Setting: ${escapeHtml(letter.setting)}</p>` : '';
    this.detailEl.innerHTML = `<article class="letter-open">
      <button id="letter-back" aria-label="back to all the letters">← all letters</button>
      <span class="eyebrow">${escapeHtml(CATEGORY_LABELS[letter.category])}</span>
      <h3>${escapeHtml(letter.title)}</h3>
      <p class="letter-meta">archive entry · undated · ${letter.readingTime} min read</p>
      ${setting}
      <div class="letter-body">${renderMarkdown(letter.content)}</div>
      ${refs}
      <div class="letter-tags">${tags}</div>
    </article>`;
  }

  open(): void {
    this.panel?.classList.add('open');
    this.panel?.setAttribute('aria-hidden', 'false');
  }

  private close(): void {
    this.panel?.classList.remove('open');
    this.panel?.setAttribute('aria-hidden', 'true');
  }
}

export const archive = new Archive();
