# Tagular Tracking

Our Tagular tracking will be done off data attributes in the HTML. Our end goal is the send a `beam` event with the correct payload.

How we send a tagular beam event:

```js
window.tagular('beam', payload);
```

_NOTE:_ You DO NOT have to use all the attributes, but the example below shows them all.

TagularClick Event Example:

```html
<button
  data-tagular-click="element"
  data-location="card"
  data-position="top"
  data-element-type="button"
  data-htmlId="someId"
  data-action-outcome="outbound"
  data-outbound-url="http://someurl.com"
>
  TagularClick Event
</button>
```

## TagularClick Event

To add an element clicked event to an element you'll need to do the following.

To see what data-attributes the click event takes look in this file: `./libs/tagular/models/click`. In that file you will see data models for an `elementClicked` and `productClicked`. These are the different models based off what tagular click event payload you're trying to send.

To get the `elementClicked` payload set your `data-tagular-click` attribute equal to `element`.

```html
<button data-tagular-click="element"></button>
```

To get the `producttClicked` payload set your `data-tagular-click` attribute equal to `product`.

```html
<button data-tagular-click="product"></button>
```

1. `data-tagular-click="element || product"` - This is what the event `ElementClicked()` is looking for.
2. Add the data-attributes you need based off click event your triggering (`element` or `product`).

## Add Event Listener to `_app.js`

In your sites `_app.js` you'll need to call the events that will be used. These events can be found in `./libs/tagular/events`.

Example setting up Click and View events:

```js
// useEffect hook is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined.
import { useEffect } from 'react';
// Our tagular events that we'll fire in useEffect()
import { TagularClick, TagularViewed } from '@libs/tagular/events';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagularClick();
    TagularViewed();
  }, []); // passing an empty array tells useEffect that it has no depedencies to watch for. This will only fire useEffect 1 time (what we want).

  return <Component {...pageProps} />;
}

export default MyApp;
```

## `TagularClick()` explained

This method is looking for all elements on the document with `data-tagular-click` and listening for a click. Once an element is clicked it looks to see what event type it is. That event type is passed into the attribute `data-tagular-click="element || product"`. Once it knows `element` or `product` it will retrieve that data model from `./libs/tagular/models/click.js` and return the payload with the correct data for the `beam` function to fire.

## Data models (./libs/tagular/models)

We know what payload to send from the docs:

- [Web Events](https://redventures.atlassian.net/wiki/spaces/COHSN/pages/74429348/Web+Events)
- [Ecommerce Events](https://redventures.atlassian.net/wiki/spaces/COHSN/pages/74429380/Ecommerce+Events)

## Visit the docs

Looking to learn more about tagular events, visit the [Confluence Docs](https://redventures.atlassian.net/wiki/spaces/COHSN/pages/74429348/Web+Events).
