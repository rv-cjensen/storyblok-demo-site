import StoryblokClient from 'storyblok-js-client';

// Storyblok config
const Storyblok = new StoryblokClient({
  accessToken: 'rorVlHL15IxZYXDJVrq2Mwtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  }
});

export default Storyblok;
