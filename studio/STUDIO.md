# Suite 24 Boutique — Sanity Studio

The Studio is deployed and connected to your Sanity project.

## Troubleshooting console errors

### `Unable to connect to visual editing` / `Preview.tsx`

The **Presentation** tab tries to load your website inside the Studio. Right now the preview URL is set to `http://localhost:3000`, which only works when:

- You are using the Studio **locally** (`http://localhost:3333`), **and**
- `npm run dev` is running so the site is up on port 3000

The **deployed** Studio (`https://suite24-boutique.sanity.studio`) cannot reach localhost on your computer.

**To edit content (recommended for now):** use the **Structure** tab → **Homepage** or **Site Settings**. You do not need Presentation or visual editing for that.

**To fix Presentation later:** deploy the website to Vercel, then set `SANITY_STUDIO_PREVIEW_URL` to your live URL (e.g. `https://your-site.vercel.app`) in `studio/.env.local` and run `npx sanity deploy` again from the `studio` folder.

### `installHook.js` / `pixel.js` / `No visitor ID available`

These come from **browser extensions** (React DevTools, ad blockers, privacy tools). They are not from your project and can be ignored. Try a normal Chrome/Edge window with extensions disabled for sanity.io if the Studio feels broken.

### WebSocket connection failed (`wss://tz3txzl5.api.sanity.io`)

Often caused by ad blockers or strict privacy settings blocking Sanity’s realtime connection. Allow `*.sanity.io` or test in a private window without extensions. Editing in **Structure** usually still works.

### `Load failed, error in settings`

Usually analytics/consent inside Sanity’s hosted Studio, or an extension blocking scripts. Rarely blocks content editing.

---

## Client editing URL

**https://suite24-boutique.sanity.studio**

Share this link with your client after inviting them to the project (see below).

## What your client can edit

| Document | Contents |
|----------|----------|
| **Homepage** | Hero text, about section, services, gallery images, testimonials, book CTA |
| **Site Settings** | Phone, email, location, booking link, footer tagline, social links, SEO |

## Invite your client

1. Open [sanity.io/manage/project/tz3txzl5/members](https://www.sanity.io/manage/project/tz3txzl5/members)
2. Click **Invite project members**
3. Enter your client's email
4. Role: **Administrator** (full edit access) or **Editor** (content only)
5. They sign in at the Studio URL above with the same email

## Local development

```powershell
# From project root
npm run dev
```

- Website: http://localhost:3000
- Studio (local): http://localhost:3333

## Redeploy after schema changes

```powershell
cd studio
npx sanity schema deploy
npx sanity deploy
```

## Seed default content (optional)

If Homepage is empty on first open, click **Homepage** in the Studio sidebar — default text is pre-filled from the schema. Upload images in each section, then click **Publish**.

To bulk-create documents from the terminal:

```powershell
cd studio
npx sanity exec scripts/seed.mjs --with-user-token
```
