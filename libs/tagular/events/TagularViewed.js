import beam from '../beam';
import viewModels from '../models/viewed';

const HAS_BEEN_VIEWED_ATTR = 'data-tagular-viewed';
const VIEW_EL_ATTR = 'data-tagular-view';

const setElementToViewed = (el) => {
  if (!el) return;

  el.setAttribute(HAS_BEEN_VIEWED_ATTR, 'true');
};

const hasBeenViewed = (el) => {
  if (!el) return false;

  const elAttr = el.getAttribute(HAS_BEEN_VIEWED_ATTR);
  const hasAttr = elAttr;
  const notEmpty = elAttr !== '';
  const notUndefined = elAttr !== 'undefined' || elAttr !== null;

  return hasAttr && notEmpty && notUndefined;
};

export default function TagularViewed() {
  const elementsToView = [...document.querySelectorAll(`[${VIEW_EL_ATTR}]`)];

  const observerOptions = {
    root: null, // browsers viewport
    rootMargin: '0px',
    threshold: 1, // 0 = element completely out of view. 1 = every pixel in view
  };

  const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      const { target } = element;

      // we see ENTIRE element AND it has not already been viewed
      // check to see if we already send a viewed event on this element
      if (element.isIntersecting && !hasBeenViewed(target)) {
        // get the event type we need to send `element || product`
        const viewEventType = target.getAttribute(VIEW_EL_ATTR);
        // get the payload we will send in our beam event
        const viewPayload = viewModels[viewEventType](target);

        // Send the beam event
        beam(viewPayload);
        // set the element to viewed so we dont send a duplicate view event
        setElementToViewed(target);
      }
    });
  }, observerOptions);

  // use the observer on each element
  elementsToView.forEach((el) => observer.observe(el));
}
