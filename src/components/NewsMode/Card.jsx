import React from "react";

import { Typography } from "neetoui";

const Card = () => (
  <div className="mt-10 flex w-full items-start justify-between border-b-2 px-10 py-4 shadow-sm">
    <div className="flex max-w-2xl flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Typography style="h2" weight="bold">
          title
        </Typography>
        <Typography className="text-gray-600" style="h4" weight="medium">
          description
          <a
            className="text-blue-500"
            href=""
            // rel="noreferrer"
            target="_blank"
          >
            know more
          </a>
        </Typography>
      </div>
      <Typography className="text-gray-500" style="body2">
        {/* {convertDate(article.publishedAt)} &middot;&nbsp;
              {isNil(article.author) ? DEFAULT_AUTHOR : article.author} */}
        publishedAt author
      </Typography>
    </div>
    <div className="h-36 w-64 rounded-lg border-2">
      <img
        alt="image"
        className="h-full w-full rounded-lg object-fill"
        src=""
        // onError={event => {
        //   event.currentTarget.src = DEFAULT_IMAGE;
        // }}
      />
    </div>
  </div>
);

{
  /* <div className="mt-6 flex justify-between">
  <div>
    <div className="flex gap-2">{title}</div>
    <Category categories={categories} className="mt-1" />
    <p className="mt-2 text-sm" />
    <p className="mt-2 text-xs font-bold">{user.name}</p>
    <p className=" text-[10px]">{formatDate(created_at)}</p>
    <hr className="mt-2" />
  </div>
  <div className="flex w-1/4 flex-col items-center justify-center">
    <img alt="image" src="" />
  </div>
</div> */
}

export default Card;
