import Head from 'next/head';
import Storyblok from '@libs/storyblok';
import { DynamicComponent } from '@globals/components';

export default function Home({ story }) {
  return (
    <div>
      <Head>
        <title>Storyblok Demo Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps(context) {
  // the slug of the story
  let slug = "home"
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  }

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft"
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 3600, // revalidate every hour
  }
}
