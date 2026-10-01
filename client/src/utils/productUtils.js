/**
 * Interpolate location variables ({city}, {state}, {location}) into any text string
 */
export const interpolateLocation = (text, location) => {
  if (!text || typeof text !== "string" || !location) return text || "";
  const city = location.name || "";
  const state = location.state || "";
  const locStr = city && state ? `${city}, ${state}` : city || state;
  return text
    .replace(/\{city\}/gi, city)
    .replace(/\{state\}/gi, state)
    .replace(/\{location\}/gi, locStr);
};

/**
 * Returns product with identical content, adding location context variables
 * @param {Object} product - Base product object from API
 * @param {Object} location - Location object { name, state, slug }
 * @returns {Object} Product object with location variables
 */
export const getLocalizedProduct = (product, location) => {
  if (!product) return null;
  if (!location) return product;

  const cityName = location.name || "";
  const stateName = location.state || "";
  const locationLabel = cityName && stateName ? `${cityName}, ${stateName}` : cityName;
  const prodName = product.name || product.title || "Teflon Dam";

  return {
    ...product,
    cityName,
    stateName,
    locationLabel,
    titleWithCity: `${prodName} in ${cityName}`,
    metaTitle: `${prodName} in ${locationLabel} | Teflon Dam Manufacturer & Exporter`,
    metaDescription: `Buy ${prodName} in ${locationLabel} directly from manufacturer & exporter ImageTech Industries. Machine-specific PTFE Teflon dam with express dispatch and factory price across ${locationLabel}.`,
  };
};
