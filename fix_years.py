from pathlib import Path

base = Path(r'R:\MusicFactory\MusicFactory')
files = [
    base / 'index.html',
    base / 'pages' / 'about.html',
]

for f in files:
    try:
        text = f.read_text(encoding='utf-8')
        orig = text
        # Replace data-count="8" to data-count="15" for Years of Excellence stat
        text = text.replace('data-count="8"', 'data-count="15"')
        if text != orig:
            f.write_text(text, encoding='utf-8')
            print('OK', f.name)
        else:
            print('NOCHANGE', f.name)
    except Exception as e:
        print('ERR', e)
