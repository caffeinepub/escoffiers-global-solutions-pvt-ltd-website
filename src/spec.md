# Specification

## Summary
**Goal:** Revert the site branding so the frontend uses the originally uploaded logo asset everywhere the logo appears.

**Planned changes:**
- Update the centralized branding configuration (`frontend/src/config/branding.ts`) to point to the originally uploaded logo asset.
- Ensure all instances of `BrandLogo` with `variant="logo-with-text"` (Header, Footer, and Home hero) resolve to the same configured logo path, with no remaining references to any other logo file.

**User-visible outcome:** The Header, Footer, and Home page hero all display the originally uploaded logo (logo-with-text), consistently across the site.
