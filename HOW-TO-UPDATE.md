# How to Update the ParikhHealth Website

This guide covers everything the front desk or admin team needs to update the website without touching code.

---

## Practice Info (phone, hours, address)

File: **`content/site.ts`** — top of the file, `SITE` object.

Edit the fields directly:
```ts
phone: {
  appointments: "408-384-4898",   // ← change this
  general: "408-266-3100",
  fax: "408-608-1961",
},
hours: [
  { day: "Monday – Friday", hours: "9:00 AM – 4:00 PM" },  // ← change hours here
  { day: "Saturday – Sunday", hours: "Closed" },
],
```

After saving, push to GitHub → Vercel auto-deploys in ~1 minute.

---

## Provider Profiles

File: **`content/site.ts`** — the `TEAM` array.

Each provider is an object:
```ts
{
  name: "Neesheet Parikh",
  credentials: "DO",
  title: "Physician — Family Medicine & Sports Medicine",
  bio: "...",                           // ← edit bio here
  specialties: ["Family Medicine", ...], // ← edit list
  acceptingNewPatients: true,            // ← set false to hide "Accepting" badge
}
```

---

## Services

File: **`content/site.ts`** — the `SERVICES` array.

Each service has: `name`, `shortDesc`, `description`, `highlights` (bullet list).  
To add a new service, copy an existing entry and change the `id` (must be lowercase with dashes, e.g. `"allergy-testing"`).

---

## Adding a Blog / Education Article

Create a new file in **`content/blog/`** — copy an existing `.mdx` file as a template.

The top section (frontmatter) controls how the article appears:
```
---
title: "My Article Title"
slug: "my-article-title"           ← URL will be /education/my-article-title
excerpt: "One sentence summary."
category: "Health Education"       ← or "Sports Medicine", "Practice News", etc.
author: "Neesheet Parikh, DO"
publishedAt: "2026-04-17"          ← publish date (YYYY-MM-DD)
readingTime: "4 min"
featured: true                     ← shows in the "Featured" section on /education
tags: ["heart health", "tips"]
---

Article content goes here in Markdown...
```

Below the `---` you write normal text. Use `##` for headings, `**bold**`, `- item` for bullets.

---

## Changing the Appointment Booking System

File: **`content/site.ts`** — `booking` section:
```ts
booking: {
  provider: "zocdoc",           // ← change to "calendly" when ready
  zocdocUrl: "https://...",
  calendlyUrl: "",              // ← paste your Calendly URL here
},
```

Changing `provider` to `"calendly"` will automatically embed your Calendly calendar instead of linking to ZocDoc.

---

## Adding Photos

Drop photos in the **`public/`** folder:
- Team photos → `public/team/dr-parikh.jpg`, `public/team/kinnari-shah.jpg`, etc.
- Service photos → `public/services/primary-care.jpg`, etc.
- The site already references these paths — just add the files.

Recommended sizes:
- Team photos: 800×1000px (portrait)
- Service photos: 1200×800px (landscape)

---

## Testimonials

File: **`content/site.ts`** — the `TESTIMONIALS` array.  
Each entry: `quote`, `author`, `detail`, `rating`.

---

## Deploying Changes

1. Save the file(s) you edited
2. Push to GitHub (`git add . && git commit -m "Update hours" && git push`)
3. Vercel automatically redeploys — live in ~60 seconds

If you don't use git, you can also edit files directly on GitHub.com and changes deploy automatically.
