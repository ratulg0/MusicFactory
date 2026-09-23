# MusicRoom — Agent Photo Placement Instructions

## Objective

Update the existing `musicroom.co.in` website to use the **curated MusicRoom photo package**.

The goal is a **simple, spacious, premium music-school website**.

Do NOT make the website photo-heavy.

The curated package contains:

```text
MusicRoom_Curated_Retouched/
├── light/
├── dark/
└── originals_kept/
```

Use the files from `light/` and `dark/`.

**Do not use `originals_kept/` for the website unless explicitly required.**

---

# 1. FIRST: INSPECT THE EXISTING PROJECT

Before changing anything:

1. Inspect the project structure.
2. Find the Home page/component.
3. Find the About page/component.
4. Find the Gallery page/component.
5. Find the existing image/assets folder.
6. Find the existing light/dark theme implementation.
7. Find every current image reference.
8. Determine whether the site is:
   - HTML/CSS/JavaScript
   - Blazor
   - React
   - another framework

Do not assume the framework.

**Preserve the existing architecture.**

Do not create a new theme system or rewrite the website.

---

# 2. CORE DESIGN RULE

## Keep the website visually simple.

Do NOT try to use every supplied photograph.

Target:

- Home: **4 images**
- About: **2 images**
- Gallery: **10–12 images**
- Total active website images: approximately **16–18**
- No additional photo sections just to fill empty space.

Whitespace, typography, content and the existing design should remain the primary visual elements.

Avoid:

- photo carousels unless one already exists
- huge photo grids everywhere
- overlapping photos
- unnecessary cards
- decorative photo backgrounds
- multiple images showing the same scene
- photo sections added only because assets are available

---

# 3. LIGHT/DARK MODE

The package contains two versions of each curated photograph:

```text
light/<filename>.jpg
dark/<filename>.jpg
```

Use the appropriate version according to the site's existing theme.

### Light mode

Use:

```text
light/<filename>.jpg
```

### Dark mode

Use:

```text
dark/<filename>.jpg
```

Do NOT modify the theme implementation just for these images.

If the project already has a theme state/toggle:

```text
theme == light → /.../light/<filename>.jpg
theme == dark  → /.../dark/<filename>.jpg
```

If the site uses CSS/browser color preference, use the existing mechanism.

For example, if appropriate for the existing architecture:

```html
<picture>
    <source media="(prefers-color-scheme: dark)"
            srcset="/images/musicroom/dark/home_hero_guitar.jpg">

    <img src="/images/musicroom/light/home_hero_guitar.jpg"
         alt="Musician playing acoustic guitar">
</picture>
```

If the application already controls the theme through JavaScript/component state,
use that instead.

**Do not introduce a second independent dark-mode system.**

---

# 4. HOME PAGE

Use exactly these four primary images.

## 4.1 Hero

```text
home_hero_guitar.jpg
```

Location:

```text
Home → Hero / Main visual
```

Use the existing Home hero image slot.

Do not create another hero section.

Recommended alt text:

```text
Musician playing acoustic guitar
```

---

## 4.2 Philosophy / Music First section

```text
home_philosophy_music_with_guitar.jpg
```

Location:

```text
Home → Music First / Philosophy section
```

Use the existing image slot associated with the philosophy/content section.

Recommended alt text:

```text
Musician with guitar in a studio
```

---

## 4.3 Programs / Instruments section

```text
home_programs_instruments.jpg
```

Location:

```text
Home → Programs / Instruments section
```

Use the existing visual slot if one exists.

Recommended alt text:

```text
Musical instruments in the studio
```

---

## 4.4 Community / Ensemble section

```text
home_ensemble_group.jpg
```

Location:

```text
Home → Community / Ensemble / Small Batches section
```

Recommended alt text:

```text
Music ensemble performing together
```

---

## Optional Home image

```text
home_hero_music_in_the_mountains.jpg
```

Do NOT automatically add this.

Only use it if the existing Home page already has a secondary visual/carousel/feature
where this image genuinely improves the layout.

If the page looks cleaner without it, leave it unused.

---

# 5. ABOUT PAGE

Use only **two** photographs.

## 5.1 Our Story / Academy

```text
about_story_studio.jpg
```

Location:

```text
About → Our Story / Academy section
```

Recommended alt text:

```text
Music studio at The Music Room
```

---

## 5.2 People / Performance visual

```text
gallery_performance_singer_indoor.jpg
```

Location:

```text
About → Performance / People / Music Culture section
```

Recommended alt text:

```text
Singer performing indoors
```

Keep the About page clean.

**Do not add additional photos just because they are available.**

---

# 6. FOUNDER IMAGE RULE

Do NOT automatically assign a photograph to the founder section based only on
appearance.

If the current About page contains a specific founder portrait slot:

1. Inspect the existing project content/data.
2. Determine whether one of the supplied photos is explicitly identified as the founder.
3. Only then assign that image.

If the identity cannot be verified:

- leave the existing founder image/content unchanged, OR
- use the existing founder asset if one already exists.

Do not guess a person's identity.

---

# 7. GALLERY PAGE

The Gallery should be curated.

Use approximately **10–12 images initially**.

Do not turn the Gallery into a 30–40 image dump.

Use these photographs.

---

## 7.1 Ensemble / Community

```text
gallery_ensemble_lake.jpg
home_ensemble_group.jpg
```

Category:

```text
Music Circle / Community / Ensemble
```

---

## 7.2 Live Performance

```text
gallery_live_band_ensemble.jpg
gallery_live_performance_vocal_01.jpg
gallery_live_performance_vocal_06.jpg
gallery_live_vocal_closeup.jpg
```

Category:

```text
Live Performances
```

---

## 7.3 Singer / Artist

```text
gallery_performance_singer_guitar_closeup.jpg
gallery_performance_singer_indoor.jpg
```

Category:

```text
Artists / Performance
```

---

## 7.4 Practice

```text
gallery_practice_acoustic_portrait.jpg
gallery_practice_electric_guitar.jpg
gallery_practice_guitar_seated.jpg
```

Category:

```text
Practice Sessions
```

---

## 7.5 Studio / Outdoor

```text
gallery_studio_performance.jpg
gallery_outdoor_duo_performance.jpg
```

Category:

```text
Studio / Music Sessions
```

---

# 8. GALLERY DISPLAY RULE

The Gallery can contain 10–12 active images, but do not necessarily show all of them
immediately above the fold.

Prefer:

```text
Gallery heading
↓
small curated grid
↓
category/filter controls if they already exist
↓
remaining gallery images
```

Keep the existing Gallery design.

If the existing site already has filters, preserve them.

Do not add filters if they do not already exist unless they are genuinely needed.

---

# 9. PHOTOS TO EXCLUDE

Do NOT add these photos to the active website:

```text
about_story_studio_02.jpg
gallery_ensemble_mountain.jpg
gallery_guitar_closeup.jpg
gallery_live_guitar_outdoor.jpg
gallery_live_performance_stage_guitar.jpg
gallery_live_performance_vocal_02.jpg
gallery_live_performance_vocal_03.jpg
gallery_live_performance_vocal_04.jpg
gallery_live_performance_vocal_05.jpg
gallery_live_performance_vocal_closeup.jpg
gallery_music_in_the_mountains_portrait.jpg
gallery_performance_singer_outdoor.jpg
gallery_performance_singer_outdoor_02.jpg
gallery_performance_singer_outdoor_03.jpg
gallery_performance_vocal_closeup_02.jpg
gallery_practice_acoustic_guitar.jpg
gallery_practice_guitar_outdoor.jpg
gallery_practice_guitar_portrait.jpg
gallery_practice_guitar_standing.jpg
gallery_studio_music_session.jpg
```

These are excluded intentionally.

Reasons include:

- near-duplicates
- repetitive stage shots
- repetitive portraits
- weaker compositions
- unnecessary visual repetition
- less consistency with the site's simple visual direction

**Do not delete these source files from the downloaded package.**

Simply do not reference them in the website.

---

# 10. IMAGE FOLDER STRUCTURE

Use the project's existing static asset structure.

If there is no existing suitable structure, create something equivalent to:

```text
wwwroot/
└── images/
    └── musicroom/
        ├── light/
        │   ├── home_hero_guitar.jpg
        │   ├── home_philosophy_music_with_guitar.jpg
        │   ├── home_programs_instruments.jpg
        │   ├── home_ensemble_group.jpg
        │   ├── about_story_studio.jpg
        │   └── ...
        │
        └── dark/
            ├── home_hero_guitar.jpg
            ├── home_philosophy_music_with_guitar.jpg
            ├── home_programs_instruments.jpg
            ├── home_ensemble_group.jpg
            ├── about_story_studio.jpg
            └── ...
```

If the project already has a different asset structure, follow the existing convention
instead of creating this exact structure.

---

# 11. DO NOT RENAME THE CURATED FILES

The filenames are intentional.

For example:

```text
home_hero_guitar.jpg
```

must remain:

```text
home_hero_guitar.jpg
```

Do not rename files to:

```text
hero1.jpg
image1.jpg
img_001.jpg
photo.jpg
```

The semantic filenames make the implementation easier to maintain.

---

# 12. IMAGE CROPPING

Use the existing website component/card dimensions.

Do not stretch images.

Use:

```css
object-fit: cover;
```

where the existing slot is designed as a crop.

For portrait images:

- prioritize the face
- keep the instrument visible where possible
- avoid cutting off the head
- avoid cutting microphones
- avoid cutting guitars unnecessarily

Use `object-position` where needed.

Example:

```css
object-position: center center;
```

or a more appropriate focal position.

Do not permanently crop the source files just to solve a CSS crop problem.

---

# 13. RETOUCHING — DO NOT RE-FILTER

The supplied `light/` and `dark/` images are already retouched.

Use them as provided.

Do NOT apply another aggressive CSS/image filter.

Avoid:

```css
filter: saturate(...);
filter: contrast(...);
filter: brightness(...);
```

unless a very small adjustment is necessary for an existing component.

Do not add:

- heavy HDR
- orange/teal grading
- excessive magenta
- artificial glow
- fake film grain
- artificial bokeh
- face smoothing
- skin-plastic effects
- AI-generated objects

The photographs should remain natural.

---

# 14. PERFORMANCE

Follow the existing project's image-loading conventions.

For images below the fold:

```html
loading="lazy"
```

where supported and appropriate.

Do not lazy-load the primary hero if it causes a visible delay.

Use appropriate image dimensions.

Do not load a huge original image when the displayed slot is small.

Do not convert the images to a lower-quality format unless the existing project already
has an image optimization pipeline.

---

# 15. ACCESSIBILITY

Every image needs useful alt text.

Good:

```text
Musician playing acoustic guitar
```

Bad:

```text
home_hero_guitar.jpg
```

Bad:

```text
image
```

Bad:

```text
photo 1
```

Do not put filenames into alt text.

Decorative images that genuinely convey no information may use:

```text
alt=""
```

but do not mark meaningful music/people photographs as decorative.

---

# 16. IMPLEMENTATION PROCESS

Follow this sequence.

### Step 1

Inspect the project.

### Step 2

Locate existing image references.

### Step 3

Locate the existing light/dark theme mechanism.

### Step 4

Copy the curated `light/` and `dark/` images into the appropriate existing asset
directory.

### Step 5

Update Home image references.

### Step 6

Update About image references.

### Step 7

Update Gallery image references.

### Step 8

Remove references to excluded/repetitive photos.

### Step 9

Verify light mode.

### Step 10

Verify dark mode.

### Step 11

Check desktop layout.

### Step 12

Check tablet layout.

### Step 13

Check mobile layout.

### Step 14

Search the entire project for old placeholder image references.

### Step 15

Confirm that excluded photos are not referenced by active page components.

---

# 17. FINAL VALIDATION CHECKLIST

Before considering the task complete, verify:

- [ ] Home uses the 4 primary curated photos.
- [ ] About uses only 2 primary photos.
- [ ] Gallery uses approximately 10–12 photos.
- [ ] Website is not visually overcrowded.
- [ ] Light mode uses `/light/` images.
- [ ] Dark mode uses `/dark/` images.
- [ ] Existing theme toggle still works.
- [ ] Existing layout is preserved.
- [ ] Existing typography is preserved.
- [ ] Existing navigation is preserved.
- [ ] Existing CTA buttons are preserved.
- [ ] Existing Gallery filters are preserved if present.
- [ ] No photo is stretched.
- [ ] Faces/instruments are not badly cropped.
- [ ] Images have useful alt text.
- [ ] Below-fold images are lazy-loaded where appropriate.
- [ ] Excluded photos are not referenced.
- [ ] No duplicate/repetitive image sections were added.
- [ ] No new unnecessary carousel was added.
- [ ] No new theme system was introduced.
- [ ] No aggressive image filters were added.
- [ ] Desktop layout looks clean.
- [ ] Mobile layout looks clean.
- [ ] Dark mode does not have overly bright photographs.
- [ ] Light mode does not have muddy/dull photographs.

---

# 18. MOST IMPORTANT INSTRUCTION

**Use fewer photographs if the page looks better without one.**

The objective is not to maximize the number of images.

The objective is:

> **MusicRoom should feel like a clean, modern music academy with carefully selected
> photography — not a photography gallery that happens to contain a music website.**

When uncertain between adding another photograph and leaving whitespace, **keep the
whitespace**.
