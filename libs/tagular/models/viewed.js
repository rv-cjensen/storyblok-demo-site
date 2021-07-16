const elementViewed = (el) => {
  if (!el) return 'no element found';

  const dataAttr = { ...el.dataset };

  return {
    '@type': 'redventures.usertracking.v3.ElementViewed',
    webElement: {
      location: dataAttr.location ? dataAttr.location.toUpperCase() : '',
      position: dataAttr.position || null,
      elementType: dataAttr.elementType
        ? dataAttr.elementType.toUpperCase()
        : null,
      text: dataAttr.text || null,
      htmlId: dataAttr.htmlId || null,
    },
  };
};

const productViewed = (el) => {
  if (!el) return 'no product element found';

  const dataAttr = { ...el.dataset };

  return {
    '@type': 'redventures.ecommerce.v1.ProductViewed',
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

const viewModels = {
  element: elementViewed,
  product: productViewed,
};

export default viewModels;
