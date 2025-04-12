import { t } from "i18next";

export const getNewsSourceOptions = () => [
  { label: t("news.sources.bbcNews"), value: "bbc-news" },
  { label: t("news.sources.theVerge"), value: "the-verge" },
  { label: t("news.sources.businessInsider"), value: "business-insider" },
  { label: t("news.sources.time"), value: "time" },
  { label: t("news.sources.theNextWeb"), value: "the-next-web" },
  { label: t("news.sources.abcNews"), value: "abc-news" },
  { label: t("news.sources.engadget"), value: "engadget" },
  {
    label: t("news.sources.entertainmentWeekly"),
    value: "entertainmentWeekly",
  },
  { label: t("news.sources.espn"), value: "espn" },
  { label: t("news.sources.financialPost"), value: "financial-post" },
];
