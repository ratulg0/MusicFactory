# 49 JavaScript Architecture

## Philosophy

Keep JavaScript modular and lightweight.

## File Structure

main.js navbar.js animations.js gallery.js contact.js utils.js

## Rules

-   ES6 modules
-   No inline JavaScript
-   One responsibility per module
-   Event delegation where appropriate
-   Avoid global variables

## Initialization

main.js initializes all feature modules after DOMContentLoaded.
