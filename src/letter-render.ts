// A deliberately tiny Markdown renderer for letter bodies. No dependency,
// no raw HTML: anything that looks like markup is escaped first.

export const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const inline = (s: string): string =>
  escapeHtml(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/(^|[^_])_([^_]+)_/g, '$1<em>$2</em>');

export function renderMarkdown(md: string): string {
  const blocks = md.trim().split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('> ')) {
        return `<blockquote>${inline(trimmed.slice(2).replace(/\n> ?/g, '<br>'))}</blockquote>`;
      }
      return `<p>${inline(trimmed).replace(/\n/g, '<br>')}</p>`;
    })
    .join('');
}

export function firstSentence(md: string): string {
  const flat = md.replace(/\s+/g, ' ').trim();
  const match = flat.match(/^.{0,180}?[.!?](?=\s|$)/);
  return (match ? match[0] : flat.slice(0, 150)).trim();
}
