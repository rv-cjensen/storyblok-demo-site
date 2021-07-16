import DynamicComponent from '../dynamicComponent/dynamicComponent.js';

export default function BlokPage({ blok }) {
  return (
    <main>
      {blok.body
        ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
        : null
      }
    </main>
  )
}
