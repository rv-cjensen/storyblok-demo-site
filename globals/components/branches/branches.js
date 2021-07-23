import Branch from '../branch/branch.js';

export default function Branches({ blok }) {
  return (
    <div className="container">
      <ul>
        {blok.list.map((branch) => {
          const branchContent = {
            full_slug: branch.full_slug,
            ...branch.content,
          };

          return (
            <Branch key={branch.id} blok={branchContent} />
          )
        })}
      </ul>

    </div>
  )
}
