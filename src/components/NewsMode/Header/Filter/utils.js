import { t } from "i18next";

export const getNewsCategoryOptions = () => [
  { label: t("news.categories.business"), value: "business" },
  { label: t("news.categories.entertainment"), value: "entertainment" },
  { label: t("news.categories.general"), value: "general" },
  { label: t("news.categories.health"), value: "health" },
  { label: t("news.categories.science"), value: "science" },
  { label: t("news.categories.sports"), value: "sports" },
  { label: t("news.categories.technology"), value: "technology" },
];
