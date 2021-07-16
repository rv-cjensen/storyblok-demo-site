# hw-landing-pages
Landing pages for the Health and Wellness team.

## Getting Started
After cloning, install NPM 7 from the project root: `npm i npm@latest -G`

Then, run `npm install` from the project root. **NOTE:** Do not run install within the sub-folders or you will get errors. This project uses NPM 7's "workspaces" feature, which allows a single `node_modules` folder shared by all the applications in the monorepo.

## Starting the Application
Run `npm start` from the root with the `--site=siteFolder` argument. This will open a new browser window and watch for changes.

Example:  `npm start --site=hl`

## Import Aliases
`@global/*` - Will look inside the `./globals` directory.
`@libs/*` - Will look inside the `./globals` directory.

Example usage:
```js
import {Header} from '@globals/components/';
```

## Styling
The intent of the archtitecture is to allow "re-skinning" of shared components by adding/changing variables for each site. Approach styling of components with reusability and flexible configuration in mind.
* Site variables: `/sites/siteName/styles/`
* Mixins for re-usable shared styles: `/globals/styles/components`
* Utility mixins/functions: `/globals/styles/utils`
* Shared global default styles (rare): `/globals/styles/default`
* Encapsulated component styles: `/globals/components/componentName/componentName.module.scss`

## Dynamic Page Pathing
 From the NextJS docs: Each page is associated with a route based on its file name. If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

 How we do it, is by taking it one step further by utilizing NextJS's dynamic route functionality.

 For example: we have a route in the `pages` directory `./sites/hl/pages/mental-health/[id].js`. Since `[id].js` is within the directory `mental-health` the page will be accessible at `localhost:3000/mental-health/<some-page>`.

 ### How does the file `[id].js` know what to render?
At build time, there is code within `[id].js` that generates paths from the whatever path you provide it as long as it's within the `./globals/data/` directory.

Example, there is this data file: `./globals/data/hl/mental-health/best-health-page.js` and since `[id].js` is reading all files within `globals/data/mental-health` you would be able to visit `localhost:3000/mental-health/best-health-page` and see your page.

The following functions provided by NextJS help us accomplish this:

- [`getStaticPaths()`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)
  - We use this to look at the params for the page we're visiting and then do something with that param. In our case, get the data file.
- [`getStaticProps()`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)
  - We pass the param from `getStaticPaths` to this function and the get the data from the file. Once we have the data we pass it to our component as `props`.


### Walking through `[id].js`
```js
// [id].js

// this function will take in a path that lives within the `./globals/data` directory and return the routes to generate.
import generatePathsFromDataDirectory from '@globals/utils/generatePathsFromDataDirectory';

// landingPage is a function that returns the html for the page. Pass it the data from getStaticProps
import { landingPage } from '@globals/layouts';

// A mapping to the layout functions we know we'll use for the mental-health pages.
const layoutMapping = {
  landingPage,
};

// NextJS Docs https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export async function getStaticPaths() {
  /**
   * This will look inside `sites/hl/data/mental-health` and create a route for each file.
   * Each filename will be passed as a `params.id` to getStaticProps below.
  */
  return generatePathsFromDataDirectory('mental-health');
}

// NextJS Docs https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps({ params }) {
  /**
   * `id` is the name of the page we're visiting. Ex route: `mental-health/landing-best-online-therapy`
   * This is the `id`: landing-best-online-therapy
   */
  const { id } = params;

  // use the `id` to pull in the data for the page
  const res = await import(`../../data/mental-health/${id}.js`);

  // await the data for the page
  const { data } = await res;

  // if your data files object does not have a layout specified or the `layout` key in the object
  if (!data.layout || !Object.prototype.hasOwnProperty.call(data, 'layout')) {
    throw new Error('Your data file did not provide a `layout`. It is either empty or the `layout` key does not exist. Please choose a layout from `./globals/layouts/` to use in your data file. For example: add `layout: landingPage` to your data file.');
  }

  return {
    props: { data }, // pass in the data as props to LandingPage function below
  };
}

export default function LandingPage({ data }) {
  /**
   * use the `layoutMapping` from above
   * dynamically choose the layout from `layoutMapping` - `layoutMapping[data.layout]`
   * `layoutMapping[data.layout](data)` === `landingPage(data)`
   */
  return layoutMapping[data.layout](data);
}
```

## Layouts Directory
The layouts directory is what we pass to the dynamic page files, IE: `/pages/mental-health/[id].js`.

## Generating PR's
We use the "round robin" approach to PR's. The "round robin" approach randomly picks 2 people from the team to look over someone's PR.

In your PR -
- Add the reviewer `healthline/health-wellness`. This is our "team" within Github.
- Once selected and the PR has officially been created Github will randomly select 2 team members to review the PR.
- You're done.

## Learn More
### NextJS
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
### NPM 7
- [Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
