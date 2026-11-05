# GA4 and Google Search Console onboarding

Status: **Implementation prepared; external account setup is pending.**

## Scope and safety

- The site uses a static Astro build and GitHub Pages.
- The GA4 Measurement ID is public configuration. Store it as the GitHub Actions repository variable `PUBLIC_GA_MEASUREMENT_ID`; do not store it as a secret and do not commit a real account ID to source.
- The analytics script is not loaded until a visitor selects **Allow analytics**. A rejection is stored locally and prevents GA4 from loading on later page views.
- The implementation denies analytics and advertising consent by default. It does not enable Google Ads, remarketing, or advertising signals.
- The event model excludes email addresses, phone numbers, full outbound URLs, form contents, and other direct identifiers.
- Consent UI text is localized for fa, en, ar, ru, de, zh, fr, and es.
- This implementation is a technical privacy control. It is not a legal determination that the site's privacy obligations are fully met. A reviewed privacy notice and jurisdiction-specific legal review remain separate acceptance items.

## GA4 setup — account owner

1. Sign in to the Google account that will own the company's measurement property.
2. Open [Google Analytics](https://analytics.google.com/).
3. Create an organization-owned GA4 account or use an existing company account. Do not use a personal employee account as the long-term owner.
4. Create a GA4 property with the approved company name and reporting time zone. Choose the currency that matches the company's reporting policy.
5. Create a Web data stream for the current production URL: `https://saeed92m.github.io/company-website/`.
6. Copy the Measurement ID. It must match `G-[A-Z0-9]+`.
7. In GitHub, open **Settings → Secrets and variables → Actions → Variables** and add:
   - Name: `PUBLIC_GA_MEASUREMENT_ID`
   - Value: the GA4 Measurement ID
8. Run the **Deploy GitHub Pages** workflow after the code is merged. Do not add the ID to source files or preview builds.
9. Test in GA4 **Realtime** after explicitly accepting analytics on the deployed site. Test rejection in a clean browser profile and confirm that no request to `googletagmanager.com/gtag/js` is made before acceptance.
10. Keep Google Signals and advertising features disabled unless a separate privacy and business decision authorizes them.

## Events

The initial implementation sends only:
- `page_view`: standard GA4 page view after consent.
- `contact_click`: click on a `mailto:` link; sends only `contact_method=email`, not the address.
- `file_download`: click on a link with the HTML `download` attribute; sends only a bounded file extension.
- `outbound_click`: click to another origin; sends only the destination hostname.

No event is sent before consent. No form submission event is configured because no public contact form is currently in scope.

## Google Search Console setup — account owner

1. Sign in to the same organization-controlled Google account.
2. Open [Google Search Console](https://search.google.com/search-console).
3. Add a **URL-prefix** property for `https://saeed92m.github.io/company-website/`. A Domain property is not available for a GitHub Pages subpath; use a Domain property only after the company controls a custom domain.
4. The shared site layout currently contains a Google HTML meta verification token. Confirm that this token belongs to the intended Google account and that Google accepts it. Do not assume that a token in source proves ownership or verification.
5. If Google does not accept the existing token, generate a new verification method in Search Console and update the site only through a reviewed pull request.
6. Submit `https://saeed92m.github.io/company-website/sitemap.xml` under **Sitemaps**.
7. Inspect these representative URLs:
   - `/company-website/fa/`
   - `/company-website/en/`
   - `/company-website/fa/company/`
   - `/company-website/en/company/`
   - `/company-website/fa/company/ceo/`
   - `/company-website/en/company/ceo/`
8. Review Page indexing, Core Web Vitals, HTTPS, Manual actions, Security issues, and Search performance. Record errors and remediation evidence in the repository.

## SEO baseline already present in the codebase

- Static, crawlable HTML routes for eight locales.
- Localized `lang` and `dir` attributes.
- Per-page title and meta description.
- Canonical URLs and locale alternates, including `x-default`.
- XML sitemap with `hreflang` alternates.
- Generated `robots.txt`.
- Organization, Person, WebSite, and CEO ProfilePage JSON-LD.
- Open Graph and Twitter metadata.
- Automated deployment smoke checks for sitemap, robots, canonical, hreflang, and JSON-LD markers.

## Remaining SEO work

- Verify live production responses and rendered HTML from an external network.
- Verify the existing Search Console token and submit the sitemap.
- Review every localized page for unique, accurate, high-quality content. Empty or thin translations must not be treated as SEO-ready.
- Validate JSON-LD against Google's Rich Results Test and Schema.org validator. Do not add unsupported structured data types.
- Run Lighthouse on representative routes and measure field data in Search Console when available.
- Review image dimensions, alt text, internal links, redirects, 404 handling, and crawl budget.
- Publish a reviewed privacy notice before enabling analytics in production.
- After a custom domain is selected, update the canonical origin, sitemap, Search Console property, and redirects in one planned release.

## Acceptance criteria

- Build, Astro check, unit tests, and browser QA pass.
- No analytics request is sent before explicit consent.
- Rejecting analytics prevents GA4 from loading on subsequent visits.
- Accepting analytics loads exactly one GA4 instance.
- The deployed site reports page views only after consent.
- The GA4 property and Search Console property are owned by the company's controlled Google account.
- Search Console verifies the live property and accepts the sitemap.
- Representative localized URLs are inspected and any indexing errors are tracked.
- Privacy notice and legal review are completed before production analytics is enabled.

## Rollback

Remove the GitHub Actions repository variable `PUBLIC_GA_MEASUREMENT_ID` and redeploy. The site will then omit the consent interface and analytics loader. This does not delete historical data from Google Analytics; handle data deletion separately in the Google property if required.
