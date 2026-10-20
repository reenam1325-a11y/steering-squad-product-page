# Light and dark theme switcher

## Goal
Add a header control that lets visitors switch between the existing dark theme and a polished light theme.

## Changes
- Add a sun/moon icon button to the desktop and mobile header controls with an accessible label and clear active icon.
- Remember the visitor’s choice on their device and use their system preference on the first visit.
- Add a complete light palette for backgrounds, cards, text, borders, menus, overlays, and controls while preserving red as the primary accent.
- Keep photography sections dark where needed for legibility, while adapting content sections and navigation cleanly.
- Verify switching, refresh persistence, desktop layout, and mobile layout.

## Technical details
- Apply the selected mode as a document-level theme attribute after the page loads to avoid rendering mismatches.
- Extend existing semantic color variables and add targeted light-theme overrides for fixed dark surfaces.
- Respect reduced-motion settings already present.
