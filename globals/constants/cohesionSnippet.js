import cohesionKeys from './cohesionKeys';

const cohesionSnippet = (site) => `
! function (co, h, e, s, i, o, n) {
  const d = 'documentElement';
  const a = 'className';
  h[d][a] += ' preampjs fusejs';
  n.k = e;
  co._Cohesion = n;
  co._Preamp = {
    k: s,
    start: new Date
  };
  co._Fuse = {
    k: i
  };
  co._Tagular = {
    k: o
  };
  [e, s, i, o].map(
    function (x) {
      co[x] = co[x] || function () {
        (co[x].q = co[x].q || []).push([].slice.call(arguments))
      }
    });
  h.addEventListener('DOMContentLoaded', function () {
    co.setTimeout(function () {
      const u = h[d][a];
      h[d][a] = u.replace(/ ?preampjs| ?fusejs/g, '')
    }, 3e3);
    co._Preamp.docReady = co._Fuse.docReady = !0
  });
  const z = h.createElement('script');
  z.async = 1;
  z.src = 'https://cdn.cohesionapps.com/cohesion/cohesion-latest.min.js';
  h.head.appendChild(z);
}
(window, document, 'cohesion', 'preamp', 'fuse', 'tagular', {
  tagular: {
    writeKey: '${cohesionKeys[site].writeKey}',
    sourceKey: '${cohesionKeys[site].sourceKey}',
    apiVersion: 'v2/t',
  },
  preamp: { siteId: '${cohesionKeys[site].preampSiteId}' }
});
`;

export default cohesionSnippet;
