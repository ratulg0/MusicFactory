from pathlib import Path

base = Path(r'R:\MusicFactory\MusicFactory')
files = [
    base / 'index.html',
    base / 'pages' / 'about.html',
    base / 'pages' / 'contact.html',
    base / 'pages' / 'curriculum.html',
    base / 'pages' / 'gallery.html',
]

# Fix Instagram school link to the full redirect link provided
for f in files:
    try:
        text = f.read_text(encoding='utf-8')
        orig = text
        # replace old link
        text = text.replace('https://instagram.com/_themusicroom_', 'https://instagram.com/__themusicroom__?obrf=MXVkd2ZxNjJyb3hxNw%3D%3D')
        if text != orig:
            f.write_text(text, encoding='utf-8')
            print('OK', f.name)
        else:
            print('NOCHANGE', f.name)
    except Exception as e:
        print('ERR', e)
