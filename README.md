# حاسبتك (Hasbatak): launch guide

A static Arabic site with four Saudi finance calculators, ready for Google AdSense. No server or database needed.

## 1. Before you upload
Search and replace in all files:
- `https://example.com` : your real domain (in every page, `sitemap.xml`, `robots.txt`)
- `contact@example.com` : an email you want public (in `contact.html`)

## 2. Get a domain and host it (free hosting)
1. Buy a domain (about $10/year) from Namecheap, Cloudflare or GoDaddy. A short Arabic-friendly .com works best.
2. Create a free account at netlify.com, then drag this whole folder onto "Deploy manually". The site is live in seconds.
3. In Netlify: Domain settings, add your domain, and follow the DNS steps. HTTPS is automatic.

## 3. Get indexed by Google
1. Add the site at search.google.com/search-console and verify it.
2. Submit `https://yourdomain.com/sitemap.xml`.

## 4. Apply for AdSense
1. Apply at adsense.google.com with your domain. Approval usually takes days to a few weeks. Having real traffic and the privacy, about and contact pages (already included) helps.
2. After approval, in every HTML file's `<head>`, remove the comment markers around the AdSense script and put in your `ca-pub-...` ID. Turning on **Auto ads** in AdSense is the easiest way to get started.
3. For manual ad units, paste the `<ins class="adsbygoogle">` code Google gives you inside the `<div class="ad-slot">` blocks (each calculator page has one).
4. Replace the contents of `ads.txt` with the line AdSense shows you.

Tip: the pages are generated from a template, so editing headers in all 8 files by hand is fine, or ask Claude to regenerate them with your IDs filled in.

## 5. Getting traffic (this is what makes money)
- Share the calculators in Saudi Twitter/X, Telegram, and WhatsApp groups when relevant (end of year, Ramadan for Zakat, July GOSI changes).
- Add one new calculator or guide every couple of weeks: annual leave pay, overtime, car financing, Citizen Account eligibility, VAT.
- Keep figures current: the GOSI new-system rate rises every July until 2028.

## Facts used (verified Nov 2026)
- End of service: Labor Law Articles 84 and 85 (half a month per year for the first 5 years, a full month after; on resignation nothing under 2 years, 1/3 for 2 to 5, 2/3 for over 5 and under 10, full at 10+).
- GOSI: legacy Saudi 9.75% employee / 11.75% employer; new system (registered from 3 Jul 2024) 10.75% / 12.75% from 1 Jul 2026; non-Saudi 0% / 2%; wage cap SAR 45,000.
- Zakat: 2.5%, nisab of 85 g gold.
