# Home Blueprint

## Goal

Create an award-quality landing page comparable in polish to premium
brand sites.

## Visual Narrative

Hero → Trust → Philosophy → Programs → Performance Culture → Gallery →
Testimonials → CTA.

## Desktop Grid

12-column, max width 1280px. Alternate text/image alignment between
sections.

## Hero

100vh. Dark cinematic image/video. Overlay 65%. Large headline (72px).
Primary CTA + Secondary CTA.

## Spacing

Hero padding: 120px. Section spacing: 120px desktop, 80px tablet, 56px
mobile.

## HTML Skeleton

```{=html}
<header>
```
```{=html}
<nav>
```
...
```{=html}
</nav>
```
```{=html}
</header>
```
```{=html}
<main>
```
```{=html}
<section class="hero">
```
...
```{=html}
</section>
```
```{=html}
<section class="about-preview">
```
...
```{=html}
</section>
```
```{=html}
<section class="philosophy">
```
...
```{=html}
</section>
```
```{=html}
<section class="programs">
```
...
```{=html}
</section>
```
```{=html}
<section class="why-us">
```
...
```{=html}
</section>
```
```{=html}
<section class="gallery-preview">
```
...
```{=html}
</section>
```
```{=html}
<section class="testimonials">
```
...
```{=html}
</section>
```
```{=html}
<section class="cta">
```
...
```{=html}
</section>
```
```{=html}
</main>
```
```{=html}
<footer>
```
...
```{=html}
</footer>
```
## Animations

Navbar fade. Headline stagger reveal. Buttons fade-up. Images reveal
with IntersectionObserver. Cards lift on hover.

## Performance

LCP image preloaded. Lazy load remaining images.
