import React, { useState } from "react";
import Pagination from "./Pagination";
import { oderHistoryData } from "../../common/data";



const TableOne = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOderHistoryData = oderHistoryData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Total number of pages
  const totalPages = Math.ceil(oderHistoryData.length / itemsPerPage);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Order History
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 md:grid-cols-12">
          <div className="p-1.5 xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Symbol
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type
            </h5>
          </div>
          <div className="hidden p-1.5 text-center md:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Open Date
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-3 hidden md:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Open Price
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">SL</h5>
          </div>
          <div className="p-1.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">TP</h5>
          </div>
          <div className="hidden p-1.5 text-center md:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Close Date
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-3 hidden md:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Close Price
            </h5>
          </div>
          <div className="hidden p-1.5 text-center md:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Lots
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Profit
            </h5>
          </div>
          <div className="hidden p-1.5 text-center md:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Duration
            </h5>
          </div>
          <div className="p-1.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Gain
            </h5>
          </div>
        </div>

        {currentOderHistoryData.map((order, key) => (
          <div
            className={`grid grid-cols-6 md:grid-cols-12 ${
              key === currentOderHistoryData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-1.5 xl:p-3">
              <p className="text-black dark:text-white">{order.symbol}</p>
            </div>
            <div className="flex justify-center items-center gap-3 p-1.5 xl:p-3">
              <p className={`${order?.color? 'text-meta-3 bg-meta-33':'text-meta-5 bg-meta-55'} px-2 rounded py-0.5`}>{order.type}</p>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3 p-1.5 xl:p-3">
              <p className=" text-black dark:text-white ">
                {order.openDate}
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center gap-3 p-1.5 xl:p-3">
              <p className=" text-black dark:text-white">{order.openPrice}</p>
            </div>
            <div className="flex justify-center items-center gap-3 p-1.5 xl:p-3">
              <p className=" text-black dark:text-white">{order.sl}</p>
            </div>
            <div className="flex  justify-center items-center gap-3 p-1.5 xl:p-3">
              <p className=" text-black dark:text-white">{order.tp}</p>
            </div>
            <div className="hidden md:flex  justify-center items-center gap-3 p-1.5 xl:p-3">
              <p className=" text-black dark:text-white ">
                {order.closeDate}
              </p>
            </div>
            <div className="hidden md:flex justify-center items-center gap-3 p-1.5 xl:p-3">
              <p className=" text-black  dark:text-white">{order.closePrice}</p>
            </div>
            <div className="hidden md:flex justify-center items-center p-1.5 xl:p-3">
              <p className="text-black dark:text-white">{order.lots}K</p>
            </div>
            <div className="flex items-center justify-center p-1.5 xl:p-3">
              <p className="text-meta-3">{order.profit}</p>
            </div>
            <div className="hidden items-center justify-center p-1.5 md:flex xl:p-3">
              <p className="text-black dark:text-white">{order.duration}</p>
            </div>
            <div className="flex  justify-center items-center p-1.5 xl:p-3">
              <p className="text-meta-5">{order.gain}</p>
            </div>
          </div>
        ))}

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TableOne;
