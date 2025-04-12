import { EmptyPage, PageLoader } from "components/commons";
import { keysToSnakeCase } from "neetocist";
import { Pagination } from "neetoui";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import Card from "./Card";
import { DEFAULT_PAGE_SIZE } from "./constants";

const ListNews = ({
  articles,
  isFetching,
  totalResults,
  handlePageNavigation,
  currentPage,
}) => {
  const { t } = useTranslation();

  const noNewsAvailable = isEmpty(articles);

  return (
    <>
      {isFetching && (
        <div className="flex h-full flex-1 items-center justify-center">
          <PageLoader />
        </div>
      )}
      {!isFetching && noNewsAvailable && (
        <EmptyPage text={t("news.noNewsToShow")} />
      )}
      {!isFetching && !noNewsAvailable && (
        <div className="mx-auto max-w-6xl space-y-3 pb-4">
          {articles.map(article => (
            <Card key={keysToSnakeCase(article.title)} {...article} />
          ))}
        </div>
      )}
      {!noNewsAvailable && (
        <div className="flex justify-end px-2 py-2">
          <Pagination
            count={totalResults}
            navigate={handlePageNavigation}
            pageNo={currentPage}
            pageSize={DEFAULT_PAGE_SIZE}
          />
        </div>
      )}
    </>
  );
};

export default ListNews;
