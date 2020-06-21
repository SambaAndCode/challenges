export const BASE_URL = "https://api.punkapi.com/v2";

export const getParams = (params: object) => {
  const searchParamsKeys = Object.keys(params);
  let url = "";
  searchParamsKeys.map((param, index) => {
    url +=
      index === searchParamsKeys.length - 1
        ? `${param}=${params[param]}`
        : params[param]
        ? `${param}=${params[param]}&`
        : "";
    return null;
  });
  return `?${url}`;
};
