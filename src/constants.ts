import { DefaultTheme } from "@react-navigation/native";

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

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffecb3",
    secondary: "#212121",
    background: "#ffffe5",
    border: "#ccc",
    backgroundSecondary: "#fff",
    text: {
      title: "#4e4e4e",
      default: "#424242",
    },
  },
};
