import { writable } from 'svelte/store';

export const playerStore = writable({
  visible: false,
  playing: false,
  trackTitle: 'KOAST Radio Show – LondonRadioShow1',
  trackUrl: 'https://soundcloud.com/dj-koast/koast-londonradioshow1'
});
