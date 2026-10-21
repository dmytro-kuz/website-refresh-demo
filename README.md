# Website Refresh Demo: Before / After

Live demo: https://dmytro-kuz.github.io/website-refresh-demo/

A one-page demo of the kind of cleanup small-business sites usually need. Toggle **Before** / **After** at the top to compare, and open **What changed** for the list of fixes.

The business (Harbor Bakery) is fictional. This is a portfolio demo, not client work.

## What the "After" version fixes

- **Broken links:** dead "Menu" / "Order a cake" anchors and an outdated maps link now point to real targets; the external link opens with `rel="noopener"`.
- **Typography:** one heading font and one body font, a fluid type scale with `clamp()`, readable line length (62ch).
- **Spacing:** consistent section padding on an 8px grid instead of random margins.
- **Buttons:** one primary and one secondary style, with hover and visible keyboard focus.
- **Navigation:** sticky header and a working, accessible mobile menu (`aria-expanded`).
- **Responsive layout:** CSS grid that collapses cleanly on phones, with no horizontal overflow.
- **Accessibility:** alt text for images and labelled form fields.

The same kind of fixes apply to Squarespace, Wix or WordPress sites through their custom CSS panels and editor settings.

## Stack

Plain HTML, CSS and a little vanilla JavaScript. No build step; hosted on GitHub Pages.

Photos: Unsplash.
