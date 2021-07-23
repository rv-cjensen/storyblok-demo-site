import Head from "next/head";
import Storyblok from "@libs/storyblok";
import { DynamicComponent } from "@globals/components";

export async function getStaticPaths() {
  let { data } = await Storyblok.get("cdn/links/", {
    cv: Date.now(),
    version: 'draft',
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    // get array for slug because of catch all
    const { slug } = data.links[linkKey];
    let splittedSlug = slug.split("/");
    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = true }) {
  let slug = params.slug ? params.slug.join("/") : "home";
  let sbParams = {
    version: "draft", // or published
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default function SlugPage({ story }) {
  return (
    <>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponent blok={story.content} />
    </>
  );
}
