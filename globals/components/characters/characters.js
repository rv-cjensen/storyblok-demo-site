import Character from '../character/character';

export default function Characters({ blok }) {
  return (
    <div className="container">
      <ul>
        {blok.list.map((char) => {
          const charContent = {
            full_slug: char.full_slug,
            ...char.content,
          };

          return (
            <Character key={char.id} blok={charContent} />
          )
        })}
      </ul>

    </div>
  )
}
