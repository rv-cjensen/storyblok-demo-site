import StoryblokClient from 'storyblok-js-client';

// Storyblok config
const Storyblok = new StoryblokClient({
  accessToken: '5reQmKrpz8hwrJtMr3Pfhwtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  }
});

export default Storyblok;
