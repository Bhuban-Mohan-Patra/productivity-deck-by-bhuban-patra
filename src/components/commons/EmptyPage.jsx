import { NoData } from "neetoui";

const EmptyPage = ({ text }) => (
  <div className="  flex h-full items-center justify-center">
    <NoData title={text} />
  </div>
);
export default EmptyPage;
