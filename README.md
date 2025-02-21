# Funnel Preview

This repo contains my (Radoslaw Warzocha) solution to the Perspective recruitment task.
The task instructions can be found here: [Work Sample – Radosław Warzocha](https://perspectiveco.notion.site/Work-Sample-Rados-aw-Warzocha-19ef87b6a844808997bdf0492a0c4cf7)

The app is deployed at [https://funnel-preview-4p58-olive.vercel.app/](https://funnel-preview-4p58-olive.vercel.app/)

This `README` is describing the practical aspects of the solution (e.g. build/deploy etc.). For the app design considerations, check [`DESIGN.md`](./DESIGN.md). For final notes, check [NOTES.md](./NOTES.md).

## Working localy

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

Ye olde

```
npm run test
```

;)

There's just a bunch of jest tests in the `__tests__` directory. Unfortunatelly no e2e tests at the moment.

## Deploying

Given the time constraints and the ease of it, I've decided to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js for deployment.

That said, given the nature of the app (single page/route, most of the components are client-side), we're not using any fancy stuff that Vercel folks give us (ISR, streaming, etc. - we do image and font optimizations though, since those are easy to do out of the box).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
