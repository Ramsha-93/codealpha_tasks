# Wanderlight Gallery (ImageGallery Task-2)

Short description:
This folder contains the Wanderlight image gallery project — a web-based image gallery implemented with HTML, CSS and JavaScript. This README provides documentation about the project's purpose, usage, structure, known issues and suggested improvements.

## Purpose
The Wanderlight Gallery demonstrates a responsive gallery layout, image viewing interactions (lightbox/modal or similar), and basic gallery controls. It is intended as a learning task for building image-driven UI components.

## Features
- Responsive image grid layout
- Click-to-view image (lightbox/modal) behaviour
- Basic navigation between images in the viewer
- Simple styling and layout suitable for small projects

## How to use
1. Open the folder in a browser or open the top-level `index.html` inside this folder (if present).
2. Browse thumbnails and click an image to open it in the viewer/lightbox.
3. Use on-screen controls or keyboard (if implemented) to navigate between images.

## File structure
- `index.html` — main gallery page and markup (may be named differently depending on project files)
- `styles/` or `style.css` — styling and layout rules
- `scripts/` or `script.js` — gallery logic and event handlers
- `images/` — image assets used by the gallery
- `README.md` — this documentation

> Note: Exact filenames and subfolders may vary — check the folder contents to locate the main entry point.

## Implementation notes
- Built with plain HTML/CSS/JS (no frameworks) unless a build tool or library is present.
- The gallery may use CSS grid/flexbox for layout and JavaScript for the lightbox behaviour.
- Large images should be optimized for web performance; consider using smaller thumbnails for grid view.

## Known issues / limitations
- Keyboard navigation and accessibility may be limited or not implemented.
- No lazy-loading for images (may affect performance with many images).
- Lack of captions, metadata, or image descriptions by default.

## Suggested improvements
- Add lazy-loading (loading="lazy") for thumbnails to improve performance.
- Add ARIA attributes and focus management for better accessibility.
- Implement responsive image srcset/sizes to serve appropriate resolutions.
- Add captions, image metadata, and filtering/sorting options.
- Add tests for gallery behaviour (unit/integration) if logic is complex.

## License
Add a license (e.g., MIT) if you want to allow reuse; otherwise state your preferred terms.

## Author / Contact
Author: Ramsha-93
(Optionally add email or GitHub profile link)
