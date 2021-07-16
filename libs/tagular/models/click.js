const elementClicked = (el) => {
  if (!el) return 'no element found';

  const dataAttr = { ...el.dataset };

  return {
    '@type': 'redventures.usertracking.v3.ElementClicked',
    webElement: {
      location: dataAttr.location ? dataAttr.location.toUpperCase() : null,
      position: dataAttr.position || null,
      elementType: dataAttr.elementType
        ? dataAttr.elementType.toUpperCase()
        : null,
      text: dataAttr.text || null,
      htmlId: dataAttr.htmlId || null,
    },
    actionOutcome: dataAttr.actionOutcome
      ? dataAttr.actionOutcome.toUpperCase()
      : null,
    outboundUrl: dataAttr.outboundUrl || null,
    correlationId: dataAttr.correlationId || null,
  };
};

const productClicked = (el) => {
  if (!el) return 'no product element found';

  const dataAttr = { ...el.dataset };

  return {
    '@type': 'redventures.ecommerce.alpha.v1.ProductClicked',
    product: {
      productId: dataAttr.productId || null,
      sku: dataAttr.sku || null,
      category: dataAttr.category || null,
      name: dataAttr.name || null,
      brand: dataAttr.brand || null,
      variant: dataAttr.variant || null,
      price: dataAttr.price || null,
      quantity: dataAttr.quantity || null,
      coupon: dataAttr.coupon || null,
      position: dataAttr.position || null,
      location: dataAttr.location ? dataAttr.location.toUpperCase() : null,
    },
  };
};

const clickModels = {
  element: elementClicked,
  product: productClicked,
};

export default clickModels;
