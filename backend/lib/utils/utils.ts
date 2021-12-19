// 配列からパラメータの Uri を作る関数
export const objectToUriStrings = (obj): string => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
