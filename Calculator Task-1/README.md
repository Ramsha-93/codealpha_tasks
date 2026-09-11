# Calculator Task-1

Short description:
A simple web-based calculator project implemented with HTML, CSS and JavaScript. This README contains documentation about the project's purpose, usage, structure, known issues and possible improvements.

## Purpose
This task demonstrates a basic calculator UI and logic suitable for simple arithmetic (addition, subtraction, multiplication, division and decimal input). It is intended as a small learning/project exercise.

## Features
- Basic arithmetic operations: +, -, ×, ÷
- Decimal input support
- Clear (AC) and delete (DEL) controls
- Responsive layout suitable for desktop and small screens

## How to use
1. Open `index.html` in any modern web browser.
2. Use the on-screen buttons to input numbers and operations.
3. Press `=` to compute the result.
4. Use `AC` to clear the entire display, `DEL` to remove the last digit.

## File structure
- index.html — main UI and markup
- style.css — styling and layout rules
- script.js — calculator logic and event handlers
- README.md — this documentation

## Implementation notes
- UI and behaviour are implemented with plain HTML/CSS/JS (no frameworks).
- Operators shown in the UI use symbols (×, ÷) but implementation may map them to JS arithmetic operations internally.
- Decimal and floating-point arithmetic may show rounding artifacts common to JavaScript numbers.

## Known issues / limitations
- No keyboard input handling (only button clicks).
- No advanced error handling for divide-by-zero or extremely large inputs beyond basic UI restrictions.
- Floating-point precision issues inherent to JavaScript (e.g., 0.1 + 0.2).

## Suggested improvements
- Add keyboard support (allow typing numbers and operators).
- Improve floating-point handling (format results, limit decimal places).
- Add unit/integration tests for computation logic.
- Add accessibility improvements (ARIA labels, focus styles) and localization.
- Add build/test workflow (if project grows).

## License
Specify a license if needed (e.g., MIT). If you don't want a license, mention "All rights reserved" or leave blank until decided.

## Author / Contact
Author: Ramsha-93
(Optionally add email or GitHub profile link)
