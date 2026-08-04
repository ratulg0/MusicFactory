# 57 CSS Architecture

## Philosophy

CSS must be scalable, modular, predictable and easy to maintain.

## Folder Structure

css/ - variables.css - reset.css - typography.css - layout.css -
components.css - utilities.css - animations.css - responsive.css -
style.css

style.css only imports the other files.

## Rules

-   Never write page-specific hacks.
-   Reuse components.
-   Prefer composition over duplication.
-   Keep specificity low.
