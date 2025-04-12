import React from "react";

const Card = () => (
  <div className="mt-6 flex justify-between">
    <div>
      <div className="flex gap-2">title</div>
      {/* <Category categories={categories} className="mt-1" /> */}{" "}
      <p>category</p>
      <p className="mt-2 text-sm" />
      <p className="mt-2 text-xs font-bold">name</p>
      <p>date</p>
      <hr className="mt-2" />
    </div>
    <div className="flex w-1/4 flex-col items-center justify-center">
      <img alt="image" src="" />
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
