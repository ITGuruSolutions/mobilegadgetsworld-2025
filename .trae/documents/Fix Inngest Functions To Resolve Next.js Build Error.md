## Summary
The build fails when loading `/api/inngest` due to a typo in the Inngest functions file, causing `TypeError: nS.createFuntion is not a function`. I will correct the typos and a Prisma method mistake, then verify the build.

## Root Cause
- `inngest.createFuntion` is called instead of `inngest.createFunction` in `inngest/functions.js` at `inngest/functions.js:22` and `inngest/functions.js:39`.
- Deletion uses `prisma.user.deleted` instead of `prisma.user.delete` at `inngest/functions.js:44`.
- These errors execute at module load and break Next.js page data collection for `/api/inngest`.

## Changes I Will Make
1. Replace `createFuntion` with `createFunction` in the two occurrences.
2. Replace `prisma.user.deleted` with `prisma.user.delete({ where: { id } })`.
3. Keep existing event names and structure; no further refactor needed.

## Verification Steps
1. Run `npm run build` to ensure Next.js compiles and collects page data successfully.
2. Confirm `/api/inngest` route is exported correctly (`GET`, `POST`, `PUT`) and loads without errors.
3. Optional: Dry-run an event locally (if available) to ensure the Prisma methods are correct.

## Rollback/Safety
- Only small string changes; low risk.
- If anything else surfaces in build logs, I will triage and fix immediately.

Please confirm so I can apply the fixes and run the build.