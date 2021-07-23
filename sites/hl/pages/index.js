import Head from 'next/head';
import Storyblok from '@libs/storyblok';
import { DynamicComponent } from '@globals/components';

export default function Home({ home }) {
  const story = home.story;

  return (
    <div>
      <Head>
        <title>The Office</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponent blok={story.content} />
    </div>
  );
}

async function getHomeStory() {
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
    cv: Date.now(),
    resolve_relations: 'Branches.list,Characters.list',
  };

  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/home`, params);

  return data;
}

export async function getStaticProps(context) {
  const homeStory = await getHomeStory();

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      home: homeStory ? homeStory : false,
    },
    revalidate: 3600, // revalidate every hour
  }
}
