import dayjs from "dayjs";
import { Typography } from "neetoui";
import { useTranslation } from "react-i18next";

const Card = ({ title, description, publishedAt, author, url, urlToImage }) => {
  const { t } = useTranslation();
  const publishDate = dayjs(publishedAt).format("DD	MMMM YYYY");

  return (
    <div className="neeto-ui-rounded-lg mt-3 grid grid-cols-6 gap-4 bg-white p-3 shadow-sm sm:p-4 sm:shadow-lg">
      <div className="col-span-4 gap-4 space-y-2 lg:col-span-5">
        <Typography className="truncate font-medium" style="h3">
          {title}
        </Typography>
        <div>
          <Typography
            className="neeto-ui-text-gray-500 line-clamp-4 capitalize"
            style="body2"
          >
            {description}
          </Typography>
          <a href={url} rel="noreferrer" target="_blank">
            {t("news.knowMore")}
          </a>
        </div>
        <Typography className="neeto-ui-text-gray-500" style="body2">
          {publishDate} . {author || t("news.anonymous")}
        </Typography>
      </div>
      <div className="col-span-2 overflow-hidden rounded-lg lg:col-span-1">
        <img
          alt={title}
          className="h-full w-full object-cover"
          src={urlToImage}
        />
      </div>
    </div>
  );
};

export default Card;
