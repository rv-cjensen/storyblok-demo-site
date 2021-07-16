import fs from 'fs';
import path from 'path';

/**
 * We'll use this inside getStaticPaths when generating dynamic pages.
 * When using this function, make sure your dynamic page is named `[id].js`.
 * @param {string} pathToDataDirectory - path to the directory in the './globals/data/' directory
 * @returns generate the dynamic url routes based of the directory you pass in.
 */
export default function generatePathsFromDataDirectory(pathToDataDirectory) {
  const cwd = process.cwd();
  const dirRoute = path.join(cwd, '/data/', pathToDataDirectory);

  if (!pathToDataDirectory || !fs.existsSync(dirRoute)) {
    throw new Error('Could not find the data directory provided. The data directory provided either does not exist or the route to the directory is wrong.');
  }

  // get each file out of the ./globals/data/<some>/<directory>/<path>
  const files = fs.readdirSync(dirRoute);

  // get the paths we want to pre-render based on data file
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace('.js', ''),
    },
  }));

  // pre-render only these paths at build time.
  // { fallback: false } means other routes should 404
  return {
    paths,
    fallback: false,
  };
}
