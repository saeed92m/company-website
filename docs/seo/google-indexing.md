# SEO & Google Search Visibility

Status: Technical SEO hardening implemented; Google Search Console onboarding remains a one-time account-owned action.

## Implemented
- Crawlable static HTML for all eight locales.
- `robots.txt` generated from `PUBLIC_SITE_URL`.
- XML sitemap generated from the same route source.
- Sitemap includes locale alternates via `xhtml:link`.
- Canonical URLs per localized page.
- `hreflang` alternates plus `x-default`.
- `index,follow` on indexable pages and `noindex,follow` on the root redirect entrypoint and 404 pages.
- Localized `lang` and RTL/LTR direction.
- Unique page titles for the primary page families.
- Localized meta descriptions.
- Open Graph metadata and Twitter card metadata.
- Organization, Person, WebSite and CEO ProfilePage JSON-LD.
- Organization identity signals: legal name, alternate English name, founding date, Tabriz/East Azerbaijan location, logo, founder relationship.
- Founder identity signals: name, role, company relationship and source-backed public profiles.
- Production smoke tests cover `robots.txt`, sitemap and localized routes.
- Browser QA validates title, language, direction, one H1, main content, navigation labels, accessibility basics and responsive overflow.

## Google Search Console — required external step

The website cannot create or verify a Google Search Console property without access to the Google account that controls the property.

After deployment:
1. Open Google Search Console.
2. Add the production URL as a URL-prefix property: `https://saeed92m.github.io/company-website/`
3. Complete Google's ownership verification.
4. Open **Sitemaps** and submit `sitemap.xml`.
5. Use **URL Inspection** for `/fa/`, `/en/`, `/fa/company/`, `/en/company/`, `/fa/company/ceo/`, `/en/company/ceo/`.
6. Request indexing for the important canonical URLs.
7. Monitor **Page indexing**, **Core Web Vitals**, **Manual actions**, **Security issues**, and Search performance.

Indexing is not instantaneous and a request does not guarantee inclusion. Search Console is the authoritative place to determine whether Google can crawl/index the deployed URLs.

## Entity / reputation work

Technical SEO cannot by itself guarantee a first-place result for a person's or company's name. The next layer is consistent, public entity evidence:
- official website
- founder's public professional profile
- Google Scholar
- GitHub
- publication records
- consistent company and founder naming
- authoritative third-party references where legitimately available

Do not manufacture citations, reviews, backlinks, awards, or business claims.

## Source-of-truth identity

Company facts are taken from the approved company profile and founder CV. Public claims must remain consistent with those sources. The company profile identifies the legal company, Tabriz location, founder/CEO and six activity domains; the CV supplies the founder's education, professional history, publications and public profile links.

## Release gate

SEO is considered production-ready only when:
- build/check passes;
- deployed `robots.txt` and sitemap return HTTP 200;
- canonical/hreflang metadata is present on representative localized pages;
- JSON-LD is present and syntactically valid;
- browser QA passes across RTL/LTR locales;
- Search Console property is verified;
- sitemap is submitted;
- key URLs have been inspected.

Google indexing/ranking remains an external search-engine process and is not treated as a deterministic CI pass/fail condition.