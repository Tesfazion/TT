"""Generate apple-touch-icon.png (180x180) and a 512 social icon from the
brand gradient + TM monogram, matching public/favicon.svg.

iOS does not render SVG favicons, so a PNG apple-touch-icon is required or
the home-screen icon falls back to a screenshot of the page.
"""
from PIL import Image, ImageDraw, ImageFont

GRAD = (0x7C, 0x6C, 0xF6), (0x22, 0xD3, 0xEE), (0xF4, 0x72, 0xB6)


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient(size):
    img = Image.new("RGB", (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            if t < 0.55:
                px[x, y] = lerp(GRAD[0], GRAD[1], t / 0.55)
            else:
                px[x, y] = lerp(GRAD[1], GRAD[2], (t - 0.55) / 0.45)
    return img


def monogram(size, radius_ratio=0.22, text_ratio=0.50):
    """Rounded-square gradient badge with a white TM monogram."""
    img = gradient(size).convert("RGBA")

    # iOS masks the icon itself, so keep the badge full-bleed (no alpha).
    draw = ImageDraw.Draw(img)
    font = None
    for path in (
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ):
        try:
            font = ImageFont.truetype(path, int(size * text_ratio))
            break
        except OSError:
            continue
    if font is None:
        raise SystemExit("No usable TrueType font found")

    box = draw.textbbox((0, 0), "TM", font=font)
    tw, th = box[2] - box[0], box[3] - box[1]
    draw.text(
        ((size - tw) / 2 - box[0], (size - th) / 2 - box[1]),
        "TM",
        font=font,
        fill=(255, 255, 255, 255),
    )
    return img.convert("RGB")


for size, name in ((180, "apple-touch-icon.png"), (512, "icon-512.png")):
    out = monogram(size)
    out.save(f"public/{name}", "PNG", optimize=True)
    print(f"wrote public/{name}  {out.size[0]}x{out.size[1]}")
