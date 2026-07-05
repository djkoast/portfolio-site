<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { playerStore } from '$lib/stores/player.js';

  let { children } = $props();
  let widget = null;
  let iframeElement;

  onMount(() => {
    // Load SoundCloud Widget API (browser only)
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    // Expose the showPlayerAndPlay function globally (browser only)
    window.__startMixPlayer = showPlayerAndPlay;

    return () => {
      if (widget) widget.unbind();
      delete window.__startMixPlayer;
    };
  });

  function initWidget() {
    if (window.SC && iframeElement) {
      widget = window.SC.Widget(iframeElement);
      widget.bind(window.SC.Widget.Events.PLAY, () => {
        playerStore.update(p => ({ ...p, playing: true }));
      });
      widget.bind(window.SC.Widget.Events.PAUSE, () => {
        playerStore.update(p => ({ ...p, playing: false }));
      });
      widget.bind(window.SC.Widget.Events.FINISH, () => {
        playerStore.update(p => ({ ...p, playing: false }));
      });
    }
  }

  function togglePlay() {
    if (!widget) return;
    widget.isPaused((paused) => {
      if (paused) {
        widget.play();
      } else {
        widget.pause();
      }
    });
  }

  function showPlayerAndPlay() {
    playerStore.update(p => ({ ...p, visible: true }));
    setTimeout(() => {
      if (widget) widget.play();
    }, 500);
  }

  // Derived store value for reactivity
  let player = $derived($playerStore);
</script>

<div class="min-h-screen flex flex-col">
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-4xl mx-auto flex items-center justify-between h-16 px-4">
      <a href="/" class="text-xl font-bold text-amber-600 dark:text-amber-400">Koast</a>
      <div class="flex items-center gap-4 sm:gap-6">
        <a href="/#music" class="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors">Music</a>
        <a href="/#projects" class="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors">Projects</a>
        <a href="/blog" class="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors">Blog</a>
        <a href="/#skills" class="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors">Skills</a>
        <a href="/#contact" class="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 transition-colors">Contact</a>
        <button
          onclick={() => document.documentElement.classList.toggle('dark')}
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          <span class="block dark:hidden">🌙</span>
          <span class="hidden dark:block">☀️</span>
        </button>
      </div>
    </div>
  </nav>

  <main class="flex-1">
    {@render children()}
  </main>

  {#if player.visible}
    <div class="sticky bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-2xl p-4 z-50">
      <div class="max-w-4xl mx-auto flex items-center gap-4">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <span class="text-2xl">📻</span>
          <div class="min-w-0">
            <p class="font-medium text-slate-900 dark:text-white truncate">{player.trackTitle}</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">KOAST Radio Show · London 2001</p>
          </div>
        </div>
        <button onclick={togglePlay} class="p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-colors shadow-md">
          {#if player.playing}
            ⏸️
          {:else}
            ▶️
          {/if}
        </button>
        <button onclick={() => playerStore.update(p => ({ ...p, visible: false }))} class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" title="Close player">
          ✕
        </button>
      </div>
    </div>
  {/if}

  <!-- Hidden SoundCloud iframe (with title for accessibility) -->
  <iframe
    id="soundcloud-player"
    bind:this={iframeElement}
    title="SoundCloud player"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/978058357%3Fsecret_token%3Ds-dgGT0EGdG8p&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&buying=false&sharing=false&download=false&show_artwork=false"
    style="display: none;"
    allow="autoplay"
  ></iframe>

  <footer class="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-400">
    © 2026 Koast. Built with SvelteKit & Tailwind.
  </footer>
</div>
