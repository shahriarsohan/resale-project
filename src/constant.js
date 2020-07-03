const RootURL = process.env.REACT_APP_ROOT_URL;
const APIUrl = process.env.REACT_APP_API_URL;

export const endpoint = `${RootURL}${APIUrl}`;

export const FetchUsersList = `${endpoint}users/list`;
export const FetchAllProductsList = `${endpoint}products/list`;
export const FeaturedProductsList = `${endpoint}featured/products/list`;
export const FetchAllProductDetails = (slug) =>
  `${endpoint}featured/products/details/${slug}`;

export const FeaturedFilter = `${endpoint}featured/products/filter`;

export const AddToCart = `${endpoint}order/add-to-cart`;
