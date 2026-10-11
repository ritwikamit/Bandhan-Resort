# Bug Fixes and QA Document: Bandhan Resort Website

## 1. Severity

-   P0: site unavailable, serious security issue, or major data
    exposure.
-   P1: primary contact action broken, major mobile layout failure, or
    critical content incorrect.
-   P2: gallery/navigation issue, moderate responsive defect, or SEO
    metadata problem.
-   P3: minor visual inconsistency or non-blocking polish issue.

## 2. Bug report template

-   Title
-   Environment/browser/device
-   Route
-   Steps to reproduce
-   Expected result
-   Actual result
-   Screenshot/video
-   Severity
-   Suspected root cause
-   Fix
-   Regression checks

## 3. Functional checks

-   Logo/wordmark returns to home.
-   Navigation links work.
-   Gallery images open and close correctly.
-   Phone link opens the dialer.
-   WhatsApp opens the correct contact.
-   Google Maps CTA opens the correct location.
-   Form validates required fields.
-   Form success is shown only after a real successful submission.
-   All social links point to the correct official pages.
-   No fake booking flow is shown.

## 4. Content checks

-   Name is consistently "Bandhan Resort".
-   Address and phone are owner-confirmed.
-   Service and facility claims are confirmed.
-   Image rights and source are recorded.
-   No fake ratings, testimonials, awards, prices, capacities, room
    counts, or opening hours.
-   All placeholder copy is removed before launch.

## 5. Responsive checks

Test 320, 375, 390, 414, 768, 1024, 1280, and 1440px widths. Check
overflow, navigation, image cropping, tap targets, text wrapping, forms
and footer.

## 6. Browser checks

Test current Chrome and Edge, Firefox, Safari where available, Android
Chrome and iOS Safari where available.

## 7. Performance and accessibility

-   Optimize images.
-   Check layout shift.
-   Ensure alt text.
-   Keyboard-test menus and gallery.
-   Check contrast and focus visibility.
-   Test reduced-motion behavior.
-   Check console for errors and failed requests.

## 8. Build checks

Inspect `package.json` before running scripts. Run available lint,
typecheck, tests and production build. Do not claim checks passed unless
they were actually run.

## 9. Definition of done

-   Responsive layout passes.
-   Contact and directions work.
-   All images load.
-   No broken links or console errors.
-   Published details are approved.
-   Build and tests pass.
-   No secrets are committed.
