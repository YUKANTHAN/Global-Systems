import urllib.request, ssl, re, json

ssl._create_default_https_context = ssl._create_unverified_context
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

# Try to find gaming banner images from Zebronics
urls = [
    'https://zebronics.com/collections/premium-gaming-series',
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        r = urllib.request.urlopen(req, timeout=20)
        content = r.read().decode('utf-8', errors='ignore')
        img_pattern = r'https://[^"\\s<>]+\.(?:jpg|jpeg|png|webp)'
        imgs = re.findall(img_pattern, content)
        for img in imgs[:50]:
            print(img)
    except Exception as e:
        print(f'Error: {e}')