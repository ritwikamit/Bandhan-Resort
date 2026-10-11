# Security Document: Bandhan Resort Website

## 1. Scope

Phase 1 is a public-facing marketing website with contact actions and
possibly an enquiry form. A future backend may handle enquiries or
booking information.

## 2. Static phase

-   Keep dependencies minimal and updated.
-   Use HTTPS through the hosting platform.
-   Apply suitable security headers, including CSP where compatible,
    HSTS, X-Content-Type-Options, Referrer-Policy, and
    Permissions-Policy.
-   Avoid unsafe HTML rendering and untrusted scripts.
-   Do not embed secret API keys in client-side code.
-   Do not collect unnecessary personal information.
-   Do not store form submissions in browser local storage.
-   Load third-party embeds only when needed and review privacy impact.

## 3. Enquiry form

If the form submits to an API: - Validate every field server-side. -
Apply length limits and schema validation. - Use rate limiting and spam
protection. - Use CAPTCHA/Turnstile only when appropriate and
configured. - Avoid reflecting submitted text as HTML. - Do not expose
internal errors to users. - Add consent/privacy text where required. -
Do not create a fake client-side-only submission success state.

## 4. Future booking system

Before implementing bookings or payments: - Use a trusted payment
provider rather than storing card data. - Enforce server-side
authorization. - Protect admin routes. - Use secure sessions/cookies. -
Rate-limit sensitive endpoints. - Audit booking status changes. -
Protect personal data and restrict staff access. - Back up persistent
data and test recovery. - Secure uploaded documents and images.

## 5. GitHub and environment hygiene

-   Commit `.env.example` only with placeholders.
-   Ignore `.env`, `.env.local`, `.env.production`, credentials,
    service-account files, private keys and tokens.
-   Scan staged files before commits.
-   Rotate any secret that has entered Git history.
-   Do not force-push or rewrite history without explicit approval.

## 6. Security review checklist

-   Dependency audit passes or findings are documented.
-   No exposed credentials.
-   No unsafe HTML.
-   Form validation exists.
-   External links use safe attributes when opening new tabs.
-   Headers are configured and tested.
-   Privacy page accurately describes any data collection.
-   No unnecessary trackers.
