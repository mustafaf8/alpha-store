const defaultList = [];

const normalizeListResponse = (payload, fallbackPage = 1, fallbackLimit = 0) => {
  if (Array.isArray(payload)) {
    return {
      items: payload,
      total: payload.length,
      page: fallbackPage,
      limit: fallbackLimit || payload.length,
    };
  }

  if (Array.isArray(payload?.items)) {
    return {
      items: payload.items,
      total: payload.total ?? payload.items.length,
      page: payload.page ?? fallbackPage,
      limit: payload.limit ?? fallbackLimit ?? payload.items.length,
    };
  }

  return {
    items: defaultList,
    total: 0,
    page: fallbackPage,
    limit: fallbackLimit,
  };
};

const ensureProductShape = (product) => {
  if (!product) {
    return null;
  }

  const image = product.image || product.images?.[0] || "";

  return {
    ...product,
    image,
    images: Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : image
        ? [image]
        : [],
    highlights: Array.isArray(product.highlights) ? product.highlights : [],
    technicalSpecs: Array.isArray(product.technicalSpecs)
      ? product.technicalSpecs
      : [],
    variantOptions:
      product.variantOptions && typeof product.variantOptions === "object"
        ? product.variantOptions
        : {},
    totalStock: Number.isFinite(product.totalStock) ? product.totalStock : 0,
  };
};

const normalizeProductsPayload = (payload, fallbackPage = 1, fallbackLimit = 0) => {
  const normalized = normalizeListResponse(payload, fallbackPage, fallbackLimit);
  return {
    ...normalized,
    items: normalized.items.map(ensureProductShape).filter(Boolean),
  };
};

export { ensureProductShape, normalizeListResponse, normalizeProductsPayload };
