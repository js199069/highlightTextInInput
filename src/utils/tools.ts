export const urlRegxV1 =
  /\b(?!((?:((?:https:\/\/)?(?:www+\.|\b)(?:[\w-]*\.|\b)))?[Aa][Ii][Nn][Ff][Ll][Uu][Ee][Nn][Cc][Ee][Rr]\.com))(?!(S?:(?:(?:http|ftp|https):\/\/)?(?:www\.|\b)(?:\.(?:[\\\/]\S*|\w*))))(?:(?:(?:http|ftp|https):\/\/)?(?:[\w_-]+(?:\.(?:[a-zA-Z_-]){2,}))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\\\/~+#-])?)\b/gim;
export const urlRegxV2 =
  /(?!((?:((?:https:\/\/)?(?:www+\.|\b)(?:[\w-]*\.|\b)))?[Aa][Ii][Nn][Ff][Ll][Uu][Ee][Nn][Cc][Ee][Rr]\.com))(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;

export const Regexes = {
  link1: urlRegxV1,
  link2: urlRegxV2,
  phone2: /[+(]?\d(?:[-()+\s.]*\d){8,14}(?![-()+\s.]*\d)/gm,
};