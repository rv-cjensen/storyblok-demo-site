import Link from 'next/link';
import { useState, useEffect } from 'react';
import Storyblok from '@libs/storyblok';
import styles from './character.module.scss';

export default function Character({ blok }) {
  const [branch, setBranch] = useState(false);

  async function getBranch() {
    const { data } = await Storyblok.get(`cdn/stories`, {
      cv: Date.now(),
      version: 'draft',
      starts_with: 'branches/',
      by_uuids: blok.branch,
    });
    setBranch(data.stories[0].content);
  }

  useEffect(() => {
    // getBranch();
  }, []);

  return (
    <div className={styles.character}>
      <div style={{ backgroundImage: `url(${blok.image.filename})` }} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>
          {blok.full_slug
            ? <Link href={blok.full_slug}><a>{blok.name}</a></Link>
            : blok.name
          }
        </h2>
        {branch
          ? <h4>{branch.name}</h4>
          : <h4>{blok.branch}</h4>
        }

      </div>
    </div>
  )
}
