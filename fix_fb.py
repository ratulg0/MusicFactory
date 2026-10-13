from pathlib import Path

base = Path(r'R:\MusicFactory\MusicFactory')
files = [
    base / 'index.html',
    base / 'pages' / 'about.html',
    base / 'pages' / 'contact.html',
    base / 'pages' / 'curriculum.html',
    base / 'pages' / 'gallery.html',
]

for f in files:
    try:
        text = f.read_text(encoding='utf-8')
        orig = text
        text = text.replace('https://www.facebook.com/YagyaVerse', 'https://www.facebook.com/share/19i3r42GsA/?mibextid=wwXIfr')
        if text != orig:
            f.write_text(text, encoding='utf-8')
            print('OK', f.name)
        else:
            print('NOCHANGE', f.name)
    except Exception as e:
        print('ERR', e)
