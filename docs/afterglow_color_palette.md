# Afterglow Arcade — Master Color Palette

---

## Accent Colors

### Hot Magenta
`--color-primary`

| Stop | Hex |
|------|-----|
| 50 | `#FFD1E3` |
| 100 | `#FFB3CC` |
| 200 | `#FF8FB5` |
| 300 | `#FF6FA8` |
| 400 | `#FF4D8F` |
| 500 | `#FF2D78` |
| 600 | `#C4005A` |
| 700 | `#8A003F` |
| 800 | `#5C0029` |
| 900 | `#3D001C` |

---

### Laser Cyan
`--color-secondary`

| Stop | Hex |
|------|-----|
| 50 | `#E0FEFF` |
| 100 | `#B3FBFF` |
| 200 | `#80F8FF` |
| 300 | `#4DF6FF` |
| 400 | `#1AF3FF` |
| 500 | `#00F5FF` |
| 600 | `#00B8C4` |
| 700 | `#007A85` |
| 800 | `#004D54` |
| 900 | `#003840` |

---

### Electric Purple
`--color-accent`

| Stop | Hex |
|------|-----|
| 50 | `#F2D9FF` |
| 100 | `#E5B3FF` |
| 200 | `#DF99FF` |
| 300 | `#CF66FF` |
| 400 | `#BF00FF` |
| 500 | `#9900CC` |
| 600 | `#8C00BD` |
| 700 | `#6600A3` |
| 800 | `#5A0080` |
| 900 | `#2A0040` |

---

### Neon Yellow
`--color-warning`

| Stop | Hex |
|------|-----|
| 50 | `#FFFFE0` |
| 100 | `#FEFFB3` |
| 200 | `#FCFFA0` |
| 300 | `#FAFE50` |
| 400 | `#F8FE00` |
| 500 | `#F5FF00` |
| 600 | `#B8BF00` |
| 700 | `#7A7F00` |
| 800 | `#4D5000` |
| 900 | `#3D4000` |

---

### Matrix Green
`--color-success`

| Stop | Hex |
|------|-----|
| 50 | `#DFFFDB` |
| 100 | `#AFFFB0` |
| 200 | `#80FF72` |
| 300 | `#5AFF3C` |
| 400 | `#39FF14` |
| 500 | `#25BF0D` |
| 600 | `#167A07` |
| 700 | `#0E5204` |
| 800 | `#0A3D03` |
| 900 | `#061F01` |

---

### Arcade Orange
`--color-notification`

| Stop | Hex |
|------|-----|
| 50 | `#FFE8D4` |
| 100 | `#FFD0A8` |
| 200 | `#FFB066` |
| 300 | `#FF8F33` |
| 400 | `#FF6B00` |
| 500 | `#CC5500` |
| 600 | `#C44F00` |
| 700 | `#883500` |
| 800 | `#5C2200` |
| 900 | `#3D1800` |

---

## Semantic Tokens

| Name | Variable | Hex |
|------|----------|-----|
| Primary | `--color-primary` | `#FF2D78` |
| Secondary | `--color-secondary` | `#00F5FF` |
| Accent | `--color-accent` | `#BF00FF` |
| Warning | `--color-warning` | `#F5FF00` |
| Success | `--color-success` | `#39FF14` |
| Notification | `--color-notification` | `#FF6B00` |
| Primary glow | `--color-primary-glow` | `rgba(255, 45, 120, 0.35)` |
| Secondary glow | `--color-secondary-glow` | `rgba(0, 245, 255, 0.35)` |
| Accent glow | `--color-accent-glow` | `rgba(191, 0, 255, 0.35)` |

---

## Backgrounds & Surfaces

| Name | Variable | Hex |
|------|----------|-----|
| Base | `--bg` | `#0A0A12` |
| Surface | `--bg-surface` | `#12121F` |
| Elevated | `--bg-elevated` | `#1A1A2E` |
| Overlay | `--bg-overlay` | `rgba(10, 10, 18, 0.85)` |

---

## Text

| Name | Variable | Hex |
|------|----------|-----|
| Primary text | `--text-h` | `#EEEEEE` |
| Body text | `--text` | `#9A96AA` |

---

## Borders & Overlays

| Name | Variable | Value |
|------|----------|-------|
| Border | `--border` | `rgba(255, 255, 255, 0.08)` |
| Accent border | `--accent-border` | `rgba(191, 0, 255, 0.45)` |
| Code bg | `--code-bg` | `#12121F` |
| Social bg | `--social-bg` | `rgba(26, 26, 46, 0.6)` |

---

## Glow Box Shadows

| Name | Variable | Value |
|------|----------|-------|
| Primary glow | `--glow-primary` | `0 0 12px rgba(255,45,120,0.6), 0 0 32px rgba(255,45,120,0.3)` |
| Cyan glow | `--glow-cyan` | `0 0 12px rgba(0,245,255,0.6), 0 0 32px rgba(0,245,255,0.3)` |
| Purple glow | `--glow-purple` | `0 0 12px rgba(191,0,255,0.6), 0 0 32px rgba(191,0,255,0.3)` |

---

## Typography

| Name | Variable | Value |
|------|----------|-------|
| Heading | `--heading` | `AudioWave, 'Share Tech Mono', 'Courier New', monospace` |
| Serif | `--serif` | `CourierPrime-Bold, serif` |
| Sans | `--sans` | `system-ui, 'Segoe UI', Roboto, sans-serif` |
| Mono | `--mono` | `'Share Tech Mono', ui-monospace, Consolas, monospace` |

---

## Usage Notes

- **Stop 500** is the base/brand color for each ramp
- **Stops 50–400** are suitable for fills on dark backgrounds
- **Stops 600–900** are suitable for text on light fills, or deep shadow tones
- All neon colors are designed for use on dark backgrounds (`--bg` or darker)
- Pair any neon color with its matching `glow` variable for the signature neon effect
- Text on Yellow (`#F5FF00`) and Cyan (`#00F5FF`) should use dark text — use the 800/900 stop of that ramp