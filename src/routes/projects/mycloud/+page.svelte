<div class="max-w-3xl mx-auto py-12 px-4">
  <a href="/#projects" class="text-indigo-600 hover:underline text-sm mb-6 inline-block">← Back to portfolio</a>
  <h1 class="text-4xl font-bold mb-2">MyCloud</h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 mb-8">Full‑Stack Cloud Storage Platform</p>

  <div class="prose dark:prose-invert max-w-none">
    <p>MyCloud is a multi‑user cloud storage web application that I built from scratch. It allows users to sign up, upload files of any size, organise them into folders, preview media, share files with other users, and manage file versions.</p>

    <h2>Live Demo</h2>
    <p><a href="https://cloud.djkoast.com" target="_blank" class="text-indigo-600 underline">cloud.djkoast.com</a></p>

    <h2>Technologies</h2>
    <ul>
      <li>Frontend: SvelteKit, Tailwind CSS, Lucide icons</li>
      <li>Backend / Auth: Supabase (PostgreSQL, Row‑Level Security)</li>
      <li>File Storage: Cloudflare R2 (S3‑compatible, presigned uploads)</li>
      <li>Deployment: Vercel (CI/CD, custom domain)</li>
      <li>Version Control: Git & GitHub</li>
    </ul>

    <h2>Key Features</h2>
    <ul>
      <li>User authentication (sign‑up, login, password reset)</li>
      <li>Drag‑and‑drop uploads of any size</li>
      <li>Folders & breadcrumb navigation</li>
      <li>File sharing with other users via email</li>
      <li>Automatic file versioning</li>
      <li>Search, thumbnails, full‑screen previews (images, video, PDF)</li>
      <li>Dark/light mode, responsive design</li>
      <li>Multi‑select operations (delete, rename, copy share links)</li>
    </ul>

    <h2>Challenges Overcome</h2>
    <p>
      <strong>Svelte 5 migration</strong> – Updated event handlers and used $state runes.<br/>
      <strong>Row‑Level Security</strong> – Recreated Supabase storage policies for proper isolation.<br/>
      <strong>Anonymous sign‑in error</strong> – Replaced client call with direct REST API request.<br/>
      <strong>Large file uploads</strong> – Integrated R2 to bypass 50MB limit via presigned URLs.<br/>
      <strong>Deployment caching</strong> – Added cache‑buster and Vercel configuration.
    </p>

    <h2>Skills Demonstrated</h2>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">JavaScript</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">SvelteKit</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">Tailwind CSS</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">REST API</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">PostgreSQL</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">S3/R2</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">JWT</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">Git</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">Vercel</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">Security</span>
    </div>
  </div>
</div>
