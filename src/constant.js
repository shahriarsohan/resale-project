const RootURL = process.env.REACT_APP_ROOT_URL;
const APIUrl = process.env.REACT_APP_API_URL;

export const endpoint = `${RootURL}${APIUrl}`;

export const FetchUsersList = `${endpoint}users/list`;
export const FetchAllProductsList = `${endpoint}products/list`;
