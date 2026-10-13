import sys
from pathlib import Path

base = Path(r'R:\MusicFactory\MusicFactory')
files = [
    base / 'index.html',
    base / 'pages' / 'about.html',
    base / 'pages' / 'contact.html',
    base / 'pages' / 'curriculum.html',
    base / 'pages' / 'gallery.html',
]

# For each file, replace the footer social links
# Current: Instagram (#), YouTube (#), Facebook (#)
# Need: Instagram school -> https://instagram.com/_themusicroom_
#       Instagram owner/yagyaverse -> https://instagram.com/yagyaverse  
#       Facebook -> https://www.facebook.com/YagyaVerse

for f in files:
    try:
        text = f.read_text(encoding='utf-8')
        orig = text
        
        # Replace the entire social block
        old = '''          <div class="footer__social" aria-label="Social media links">
            <a href="#" class="footer__social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>'''
        
        new = '''          <div class="footer__social" aria-label="Social media links">
            <a href="https://instagram.com/_themusicroom_" class="footer__social-link" aria-label="Instagram (@_themusicroom_)" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://instagram.com/yagyaverse" class="footer__social-link" aria-label="Instagram (@yagyaverse)" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/YagyaVerse" class="footer__social-link" aria-label="Facebook (Yagya Verse)" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>'''
        
        if old not in text:
            print(f'MISS: {f.name}')
            # try more flexible
            continue
        text = text.replace(old, new)
        if text != orig:
            f.write_text(text, encoding='utf-8')
            print(f'OK: {f.name}')
        else:
            print(f'NOCHANGE: {f.name}')
    except Exception as e:
        print(f'ERR: {f} -> {e}')
