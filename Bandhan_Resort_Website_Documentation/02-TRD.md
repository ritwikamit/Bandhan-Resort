# Technical Requirements Document (TRD): Bandhan Resort Website

## 1. Initial architecture

Phase 1 is a static-first marketing website. No database,
authentication, booking inventory, or payment processing is required
unless the owner separately approves it.

Preferred stack if the current project has no existing framework: -
Next.js with TypeScript - Tailwind CSS - Lucide React for icons - A
lightweight motion library only if needed and already justified - Vercel
deployment

If the existing repository already uses a suitable framework, inspect
and reuse it rather than rebuilding without reason.

## 2. Suggested routes

-   `/`
-   `/about`
-   `/gallery`
-   `/facilities`
-   `/events` (only if confirmed)
-   `/rooms` (only if confirmed)
-   `/contact`
-   `/privacy`

## 3. Component structure

-   `SiteHeader`
-   `MobileNavigation`
-   `HeroSection`
-   `IntroSection`
-   `GalleryGrid`
-   `FacilityList`
-   `EventEnquirySection`
-   `LocationSection`
-   `ContactActions`
-   `EnquiryForm`
-   `SiteFooter`

Keep content in a single data module where practical: - `siteConfig` -
`navigation` - `galleryImages` - `confirmedFacilities` -
`contactDetails`

Do not add abstraction layers without a concrete need.

## 4. Data model for future use

`GalleryImage`: id, src, alt, category, isPublished,
attribution/permission status. `Facility`: id, name, description,
isConfirmed, isPublished. `Enquiry`: id, name, phone, email, type,
preferredDate, guestCount, message, consent, createdAt, status.

Do not implement database persistence in phase 1 unless explicitly
approved.

## 5. Image handling

-   Use owner-supplied or permission-cleared image files in
    `/public/images/`.
-   Use descriptive, lowercase filenames such as
    `bandhan-resort-exterior-01.webp`.
-   Optimize images to WebP/AVIF where appropriate.
-   Provide responsive sizes and lazy-load below-the-fold images.
-   Set width/height or aspect ratio to avoid layout shifts.
-   Use a proper hero crop and focal point.
-   Do not scrape around access controls or bypass source restrictions.
-   Do not hotlink unstable directory image URLs for production.
-   Track image source and usage permission in
    `assets/reference-photo-links/PHOTO-SOURCING.md`.

## 6. Contact and map

-   Use the Google Maps URL supplied by the client for the directions
    button.
-   If embedding a map, use the official share/embed flow where possible
    and avoid leaking unrelated credentials.
-   Phone and WhatsApp values must come from owner-confirmed
    configuration.
-   Do not silently choose between the different public phone numbers.

## 7. SEO

-   Unique page title and meta description.
-   Canonical URL after domain is confirmed.
-   Open Graph metadata.
-   `robots.txt` and sitemap.
-   Semantic headings and meaningful alt text.
-   LocalBusiness/Hotel schema only after confirming the correct
    business type and details. Never invent star rating, prices, opening
    hours, or aggregate review data.
-   Target natural search terms such as "Bandhan Resort Aurangabad
    Bihar", "resort in Aurangabad Bihar", and event/banquet terms only
    where relevant.

## 8. Performance and accessibility

-   Mobile-first layout.
-   Optimize images and fonts.
-   Avoid autoplay audio.
-   Ensure keyboard-accessible navigation, visible focus, accessible
    form labels, contrast, and reduced-motion support.
-   Use lightweight transitions.
-   Test on slow mobile connections.

## 9. Deployment

-   Prepare for Vercel.
-   Keep secrets in environment variables if a future server/API needs
    them.
-   Provide `.env.example` with placeholders only when environment
    variables are used.
-   Do not commit `.env` files, credentials, or service tokens.
-   Run lint, typecheck, tests (if configured), and production build
    before deployment.
