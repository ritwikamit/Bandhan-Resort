# Product Requirements Document (PRD): Bandhan Resort Website

## 1. Product overview

Create a professional, mobile-first website for Bandhan Resort in
Aurangabad, Bihar. The site should make it easy for visitors to
understand the venue, view approved photographs, locate it, and enquire
about stays, celebrations, events, or facilities that the resort
confirms it provides.

## 2. Business facts and evidence

-   Business name: Bandhan Resort.
-   Location: Near G.D. Goenka School, Bijauli Road, Aurangabad, Bihar
    824101, according to the Justdial listing.
-   Justdial lists the business as established in 2018.
-   The listing categorizes the business under resorts/hotels and
    banquet halls.
-   The listing shows AC and non-AC banquet types, outdoor seating, and
    a children's play area.
-   The public listings show inconsistent phone/rating values. Treat
    these as provisional and ask the owner to confirm before
    publication.

## 3. Goals

-   Present the venue clearly and professionally.
-   Showcase authentic resort, outdoor, room, dining, and event
    photographs where supplied/approved.
-   Make contact and directions easy to find.
-   Generate enquiries for the services the owner confirms.
-   Work well on low-to-mid-range Android devices and variable mobile
    connections.
-   Establish a foundation for future booking functionality without
    building an unrequested backend.

## 4. Target users

-   Families and local visitors.
-   People planning weddings, parties, celebrations, or gatherings, if
    the venue confirms these services.
-   Guests looking for accommodation, if rooms are available.
-   Local businesses and groups looking for a meeting or event venue, if
    confirmed.

## 5. Sitemap

Required: - Home - About - Gallery - Facilities / Experiences - Events /
Celebrations (publish only after capacity and event services are
confirmed) - Contact & Directions - Privacy Policy

Optional after client confirmation: - Rooms & Stay - Restaurant /
Dining - FAQs - Terms & Booking Policy

## 6. Homepage sections

1.  Header with logo/wordmark, key navigation and a prominent Enquire
    button.
2.  Hero with one strong owner-approved photograph and a clear message.
3.  Short introduction to Bandhan Resort and its location.
4.  Photo gallery preview.
5.  Confirmed facilities and experiences.
6.  Events/banquet section if confirmed.
7.  Location and directions with Google Maps link/embed.
8.  Contact/enquiry CTA.
9.  Footer with verified contact details, address, opening hours if
    confirmed, social links.

Suggested headline direction: "A welcoming place for stays and
celebrations in Aurangabad." Use only the portions that reflect
confirmed services. Do not make unsupported luxury, capacity, or service
claims.

## 7. Enquiry requirements

Recommended static-first form fields: - Name - Phone - Email
(optional) - Enquiry type: General, Stay, Event/Banquet, Dining, Other
(only show categories confirmed by owner) - Preferred date (optional) -
Guest count (optional) - Message

Phase 1 form options: - `tel:` phone action - WhatsApp link using the
owner-confirmed number - A mailto link if an official email is
supplied - A form UI that clearly says how the enquiry will be sent. Do
not show a fake success message if there is no working submission
backend.

Future phase: - Server-side form endpoint, spam protection,
notifications and optional enquiry database.

## 8. Content rules

-   Use only verified business facts.
-   Do not invent room counts, room rates, event capacity, amenities,
    awards, testimonials, or booking guarantees.
-   Do not publish third-party reviews as testimonials without
    permission.
-   If data is missing, hide that block or use a neutral placeholder in
    development only.
-   Do not use third-party directory ratings as permanent website copy
    without owner approval and fresh verification.

## 9. Success criteria

-   Visitors can find the phone/contact CTA within one or two
    interactions.
-   Gallery images load quickly and have descriptive alt text.
-   Directions open the supplied Google Maps location.
-   Website works at mobile, tablet, laptop and wide desktop widths.
-   All published service claims and contact details are
    owner-confirmed.
-   No dead links, broken images, console errors or fake form
    confirmations.
