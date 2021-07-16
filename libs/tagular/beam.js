/**
 * beam the paylod we give: tagular('beam', payload);
 * @param payload - the event payload
 */
export default function beam(payload) {
  const isDev = process.env.IS_DEV;
  // check for tagular on page
  if (typeof window.tagular === 'undefined') return;

  // if we're in dev mode, console.log the event object
  if (isDev) {
    /* eslint-disable-next-line no-console */
    console.info(payload);
    return;
  }

  // this is the magic, beam the tagular event!
  window.tagular('beam', payload);
}
