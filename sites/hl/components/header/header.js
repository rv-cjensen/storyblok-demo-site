import { useState, useEffect } from 'react';
import Link from 'next/link';
import Storyblok from '@libs/storyblok';
import styles from './header.module.scss';

export default function Header() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getLinks() {
      const resp = await Storyblok.get('cdn/stories');
      const { data } = await resp;
      const filteredLinks = data.stories.filter((story) => story.parent_id !== 0);
      setLinks(filteredLinks);
    }

    getLinks();
  }, [links]);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          className={styles.logo}
          src={`${process.env.IMAGE_PREFIX}/logos/healthline.svg`}
          alt="Healthline logo"
        />
      </Link>

      <ul>
        {links.length > 0 && links.map((link) => (
          <li key={link.id}>
            <Link href={link.full_slug}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
