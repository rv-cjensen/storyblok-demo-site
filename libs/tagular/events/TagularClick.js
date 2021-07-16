import beam from '../beam';
import clickModels from '../models/click';

export default function TagularClick() {
  // handle the click event on the page
  const handleClickEvent = (e) => {
    // if no event or no event target return early
    if (!e || !e.target) return;

    // the element that was clicked on
    const { target } = e;
    // if the target has the `data-tagular-click` we know to send a beam
    const clickEventType = target.getAttribute('data-tagular-click');

    // if this is NOT a `data-tagular-click` element return early
    if (!clickEventType) return;

    // the payload we'll send the beam event
    const clickPayload = clickModels[clickEventType](target);

    beam(clickPayload);
  };

  document.addEventListener('click', handleClickEvent, false);

  return () => {
    document.removeEventListener('click', handleClickEvent);
  };
}
