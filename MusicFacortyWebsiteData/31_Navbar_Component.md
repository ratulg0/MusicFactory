# 31 Navbar Component

## Purpose

Global navigation present on every page.

## Structure

-   Logo
-   Primary navigation
-   CTA button
-   Mobile toggle

## States

Transparent over hero. Solid after scroll. Active link highlighted.

## HTML

```{=html}
<header>
```
```{=html}
<nav>
```
`<a class='logo'>`{=html}...`</a>`{=html}
```{=html}
<ul>
```
...
```{=html}
</ul>
```
```{=html}
<button>
```
Book Trial Class
```{=html}
</button>
```
```{=html}
</nav>
```
```{=html}
</header>
```
## CSS

Height:80px desktop,72px mobile. Sticky positioning. Backdrop blur after
scroll.

## JS

Toggle mobile menu. Lock body scroll.

## Acceptance

Keyboard accessible, responsive, CLS-free.
