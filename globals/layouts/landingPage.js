import Head from 'next/head';
import { Hero, Modal, Products, Standout, Collapsible, Tabs, Disclaimer, Scroll, StandoutCollapsible } from '../components';

const componentMap = {
  Hero,
  Modal,
  Products,
  Standout,
  Collapsible,
  Tabs,
  Disclaimer,
  Scroll,
  StandoutCollapsible,
};

export default function landingPage(data) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      {data.components.map((component, index) => {
        const TagName = componentMap[component.name];
        return <TagName key={index} {...component} />;
      })}
    </>
  );
}
