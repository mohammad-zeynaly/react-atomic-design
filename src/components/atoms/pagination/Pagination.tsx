import { useState } from "react";
import Button from "../button/Button";

type TPagination = {
  totalPages: number;
  queryList: (page?: number) => Promise<void>;
};

const Pagination = ({ totalPages, queryList }: TPagination): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPageHandler = () => {
    queryList(currentPage + 1);
    setCurrentPage((prevCurrent) => prevCurrent + 1);
  };
  const PrevPageHandler = () => {
    queryList(currentPage - 1);
    setCurrentPage((prevCurrent) => prevCurrent - 1);
  };

  return (
    <div className="flex justify-between items-center gap-4 mt-4 text-sm">
      {/* <Button className="" title="قبلی" onClick={PrevPageHandler} /> */}
      <div
        className={`${
          currentPage > 1 ? "visible" : "invisible"
        } flex items-center bg-secondary text-white py-1 px-3 rounded-lg cursor-pointer`}
        onClick={PrevPageHandler}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-[18px] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
          />
        </svg>
        <Button className="pr-2" title="قبلی" />
      </div>
      <span>صفحه {currentPage}</span>
      <div
        className={`${
          currentPage < totalPages ? "visible" : "invisible"
        } flex items-center bg-primary text-white py-1 px-3 rounded-lg cursor-pointer`}
        onClick={nextPageHandler}
      >
        <Button className="pl-2" title="بعدی" />
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-[18px] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
