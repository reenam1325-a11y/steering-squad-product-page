# Polish the complete light theme

## Goal
Make every homepage section feel intentionally designed in light mode while preserving the current dark theme exactly.

## Changes
- Refine the light palette with crisp neutral surfaces, stronger text contrast, cleaner borders, and softer elevation.
- Add light-specific styling for the header and mobile menu, vehicle finder, trust and stats cards, customizer controls, comparison frame, reviews, materials, workshop, social gallery, FAQ, journal, and all supporting notes and links.
- Keep image-led sections readable with intentional dark overlays instead of inheriting mismatched light colors.
- Correct light-mode hover, active, focus, dropdown, badge, icon, and button states.
- Preserve the intentionally cinematic dark bands: hero, process, custom-build request, final call-to-action, footer, and image overlays.
- Verify switching and persistence on desktop and mobile, including menu, finder, cards, accordion, and controls.

## Technical details
- Scope every visual adjustment under the existing light-theme document attribute, so dark-mode declarations remain unchanged.
- Replace dark-only fixed colors in light surfaces with semantic light-mode overrides.
- Keep local theme persistence and system-preference behavior unchanged.
