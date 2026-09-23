# MusicRoom — Curated Photo Package & Implementation Guide

## Goal

Keep `musicroom.co.in` **simple, spacious and editorial**, rather than turning it into a
photo-heavy portfolio.

I reviewed the supplied photo set and reduced it from **38 photos to 18 photos**.

The 18 retained photos have two website-ready grades:

- `light/` — optimized for the site's light theme
- `dark/` — optimized for the site's dark theme

The original retained files are in `originals_kept/`.

The retouching is deliberately subtle: exposure balancing, highlight/shadow control,
contrast, saturation restraint, mild warm highlights, restrained mauve/rose shadows and
light sharpening. The photographs should still look photographic rather than like
heavily filtered social-media images.

---

# 1. IMPORTANT DESIGN RULE

**Do not show all 18 photographs on the main pages.**

Use only the strongest images in prominent sections and let the Gallery contain the
larger curated set.

Recommended approximate distribution:

- Home: **4 photos**
- About: **2 photos**
- Gallery: **10–12 photos**
- Do not add additional photo sections merely to use every asset.

Whitespace and typography should remain the primary design elements.

---

# 2. LIGHT/DARK IMAGE BEHAVIOR

The project already has a light/dark theme system. Use that existing theme mechanism.

Do **not** create a second theme system just for images.

When the active website theme is light:
    `/images/musicroom/light/<filename>`

When the active website theme is dark:
    `/images/musicroom/dark/<filename>`

If the project uses the browser's `prefers-color-scheme`, a `<picture>` element may be
used. If the application has its own theme toggle/state, bind the image source to that
existing state instead.

Example concept:

```html
<picture>
    <source media="(prefers-color-scheme: dark)"
            srcset="/images/musicroom/dark/home_hero_guitar.jpg">
    <img src="/images/musicroom/light/home_hero_guitar.jpg"
         alt="Musician playing acoustic guitar">
</picture>
```

For an application-controlled theme, use the project's existing theme variable/state
instead of `prefers-color-scheme`.

---

# 3. HOME PAGE — KEEP IT VERY SIMPLE

Use these four images:

| Section | File |
|---|---|
| Hero | `home_hero_guitar.jpg` |
| Philosophy / Music First | `home_philosophy_music_with_guitar.jpg` |
| Programs / Instruments | `home_programs_instruments.jpg` |
| Community / Ensemble | `home_ensemble_group.jpg` |

### Optional

`home_hero_music_in_the_mountains.jpg`

Use this only if the existing Home design already has a secondary visual or carousel.

**Do not show both hero images simultaneously in a crowded layout.**

---

# 4. ABOUT PAGE

Use:

| Section | File |
|---|---|
| Our Story / Academy | `about_story_studio.jpg` |
| Performance / people visual | `gallery_performance_singer_indoor.jpg` |

Keep the About page to **two photographs**.

Do not create additional image cards simply to fill empty space.

---

# 5. GALLERY PAGE

The Gallery should feel curated rather than like a dump of every photograph.

Use these as the main Gallery collection:

### Ensemble / Community
- `gallery_ensemble_lake.jpg`
- `home_ensemble_group.jpg`

### Live Performance
- `gallery_live_band_ensemble.jpg`
- `gallery_live_performance_vocal_01.jpg`
- `gallery_live_performance_vocal_06.jpg`
- `gallery_live_vocal_closeup.jpg`

### Singer / Artist
- `gallery_performance_singer_guitar_closeup.jpg`
- `gallery_performance_singer_indoor.jpg`

### Practice
- `gallery_practice_acoustic_portrait.jpg`
- `gallery_practice_electric_guitar.jpg`
- `gallery_practice_guitar_seated.jpg`

### Studio / Outdoor
- `gallery_studio_performance.jpg`
- `gallery_outdoor_duo_performance.jpg`

**Recommended initial Gallery display:** 10–12 images.

If the current Gallery has category filters, keep the filters but do not make every
category contain many nearly identical images.

---

# 6. PHOTOS TO REMOVE FROM THE WEBSITE

The following 20 photos should not be used in the initial website build:

- `about_story_studio_02.jpg` — Near-duplicate of about_story_studio.jpg; keep one studio image.
- `gallery_ensemble_mountain.jpg` — Only one ensemble landscape is needed; lake ensemble provides more visual variety.
- `gallery_guitar_closeup.jpg` — Redundant guitar close-up; stronger dedicated practice/performance photos are retained.
- `gallery_live_guitar_outdoor.jpg` — Less distinctive composition; outdoor duo/performance image is stronger.
- `gallery_live_performance_stage_guitar.jpg` — Stylized silhouette/contrast is less consistent with the clean site photography.
- `gallery_live_performance_vocal_02.jpg` — Near-duplicate of the same stage setup; avoid a repetitive gallery.
- `gallery_live_performance_vocal_03.jpg` — Near-duplicate of the same stage setup; avoid a repetitive gallery.
- `gallery_live_performance_vocal_04.jpg` — Near-duplicate of the same stage setup; avoid a repetitive gallery.
- `gallery_live_performance_vocal_05.jpg` — Near-duplicate of the same stage setup; avoid a repetitive gallery.
- `gallery_live_performance_vocal_closeup.jpg` — Redundant close-up; gallery_live_vocal_closeup.jpg is a stronger complementary crop.
- `gallery_music_in_the_mountains_portrait.jpg` — Scenic portrait is less useful than the stronger wide mountain hero.
- `gallery_performance_singer_outdoor.jpg` — Redundant with retained indoor performer portrait and other performance images.
- `gallery_performance_singer_outdoor_02.jpg` — Near-duplicate outdoor portrait.
- `gallery_performance_singer_outdoor_03.jpg` — Near-duplicate outdoor portrait.
- `gallery_performance_vocal_closeup_02.jpg` — Redundant close-up compared with retained singer/guitar and vocal images.
- `gallery_practice_acoustic_guitar.jpg` — Redundant with retained acoustic practice portrait.
- `gallery_practice_guitar_outdoor.jpg` — Redundant outdoor practice image; outdoor performance is retained instead.
- `gallery_practice_guitar_portrait.jpg` — Redundant portrait of the same practice subject.
- `gallery_practice_guitar_standing.jpg` — Redundant standing practice composition.
- `gallery_studio_music_session.jpg` — Room-focused image is visually busy; studio performance communicates the section more clearly.

These files are intentionally excluded from the implementation package's active
photo set. They are not deleted from the original source material.

---

# 7. RETOUCHING DIRECTION

The goal is **color consistency**, not dramatic photo manipulation.

### Light mode

- Slightly brighter midtones
- Controlled highlights
- Natural skin tones
- Slightly reduced saturation
- Soft warm highlights
- Very subtle mauve/rose in darker tones
- Gentle sharpening
- Minimal vignette

### Dark mode

- Slightly deeper blacks
- Controlled highlights
- Slightly stronger contrast
- Reduced saturation
- Natural skin tones
- Subtle warm highlights
- Very restrained mauve/rose shadows
- Gentle sharpening
- Slightly stronger vignette

Do not add:
- heavy HDR
- artificial glow
- excessive magenta
- orange/teal cinematic grading
- fake film grain
- artificial bokeh
- face reshaping
- skin-plastic effects
- AI-generated objects

---

# 8. CROPPING

Use the existing component/card aspect ratios.

When cropping:

1. Prioritize faces.
2. Keep microphones and instruments visible where possible.
3. Do not crop the head or guitar unnecessarily.
4. Use `object-position` rather than editing the source photograph when only the crop
   needs adjustment.
5. Do not stretch an image to fill a slot.

Portrait photos should remain portrait-friendly.

---

# 9. IMAGE PERFORMANCE

Use the existing project's image optimization approach.

Where supported:

- lazy-load below-the-fold Gallery images
- use appropriate `width`/`height`
- avoid layout shift
- use responsive image sizes
- do not load the dark and light version simultaneously
- do not preload every Gallery image

Only preload the actual Home hero image if the existing performance strategy supports it.

---

# 10. ALT TEXT

Use descriptive accessibility text, for example:

- `Musician playing acoustic guitar`
- `Music ensemble performing beside a mountain lake`
- `Musicians performing together`
- `Singer performing on stage`
- `Vocalist performing live`
- `Singer playing guitar`
- `Musician practicing acoustic guitar`
- `Electric guitar practice session`
- `Live music performance in a studio`
- `Outdoor acoustic music performance`

Do not use the filename as the alt text.

---

# 11. IMPLEMENTATION CHECKLIST FOR THE CODING AGENT

1. Inspect the existing Home, About and Gallery components.
2. Find the current image asset directory.
3. Copy the `light/` and `dark/` directories into the project's appropriate asset
   structure.
4. Replace the existing placeholder/old image references with the mappings above.
5. Keep the existing component structure and CSS.
6. Do not redesign the page.
7. Do not add photo carousels unless the existing page already has one.
8. Do not add new sections just to display unused photographs.
9. Preserve existing light/dark theme behavior.
10. Switch image variants using the existing theme state.
11. Keep the Home page to roughly four active images.
12. Keep About to roughly two active images.
13. Keep the initial Gallery to roughly 10–12 visible/active images.
14. Preserve Gallery filtering if it already exists.
15. Check mobile cropping carefully.
16. Check both light and dark themes.
17. Check that images do not overpower text or CTAs.
18. Search the project for old image filenames after implementation.
19. Remove references to discarded images.
20. Build the application and verify there are no missing asset paths.

---

# 12. PHOTO MAP

| `home_hero_guitar.jpg` | Home hero — primary |
| `home_hero_music_in_the_mountains.jpg` | Home hero — optional alternate/secondary visual |
| `home_philosophy_music_with_guitar.jpg` | Home philosophy / Music First. Instrument Second. |
| `home_programs_instruments.jpg` | Home programs / instruments section |
| `home_ensemble_group.jpg` | Home ensemble / community section |
| `about_story_studio.jpg` | About — Academy / Our Story |
| `gallery_ensemble_lake.jpg` | Gallery — Music Circle / ensemble |
| `gallery_live_band_ensemble.jpg` | Gallery — Live Performances / Performance Lab |
| `gallery_live_performance_vocal_01.jpg` | Gallery — featured stage performance |
| `gallery_live_performance_vocal_06.jpg` | Gallery — secondary live performance |
| `gallery_live_vocal_closeup.jpg` | Gallery — performance close-up |
| `gallery_performance_singer_guitar_closeup.jpg` | Gallery — singer/guitar close-up |
| `gallery_performance_singer_indoor.jpg` | About/Gallery — indoor performer portrait |
| `gallery_practice_acoustic_portrait.jpg` | Gallery — Practice Sessions |
| `gallery_practice_electric_guitar.jpg` | Gallery — Practice Sessions / electric guitar |
| `gallery_practice_guitar_seated.jpg` | Gallery — Practice Sessions / quiet practice |
| `gallery_studio_performance.jpg` | Gallery — Studio Moments |
| `gallery_outdoor_duo_performance.jpg` | Gallery — outdoor music / supporting image |

---

# 13. FINAL VISUAL PRINCIPLE

The website should feel like a **music academy website first and a photography gallery
second**.

The photographs should support:

- the people
- the music
- the instruments
- the learning experience
- the performance culture

They should not compete with the navigation, typography, program information or booking
CTA.

**When in doubt, use fewer photos and more whitespace.**
