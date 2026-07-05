<div class="max-w-3xl mx-auto py-12 px-4">
  <a href="/blog" class="text-indigo-600 hover:underline text-sm mb-6 inline-block">← Back to blog</a>
  <article class="prose dark:prose-invert max-w-none">
    <h1>How I Built a Cloud Storage Platform from Scratch</h1>
    <p class="text-slate-500">July 2026 · 5 min read</p>

    <p>I've always been fascinated by cloud storage services like Google Drive and Dropbox. So I decided to build my own — MyCloud. In this article I'll walk you through the tech stack, the challenges, and what I learned.</p>

    <h2>Choosing the Stack</h2>
    <p>I wanted a modern frontend that felt fast, so I picked SvelteKit. For the backend, I used Supabase — it gave me auth, a database, and storage out of the box. But when I needed massive file uploads, I integrated Cloudflare R2 with presigned URLs.</p>

    <h2>File Versioning & Sharing</h2>
    <p>One of the trickiest parts was implementing file versioning. I added a separate table to track old versions and updated the upload logic to handle collisions. Sharing with other users required a new endpoint that looked up emails via Supabase's admin API.</p>

    <h2>Deployment & Domain</h2>
    <p>I deployed the app on Vercel with a custom domain (cloud.djkoast.com). The portfolio site was built separately and deployed on the root domain. Both are completely free.</p>

    <p>This project taught me a ton about authentication, Row‑Level Security, and working with S3‑compatible storage. I'm already planning my next project!</p>
  </article>
</div>
