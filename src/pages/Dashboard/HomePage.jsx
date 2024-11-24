import React from "react";
import CardDataStats from "../../components/CardDataStats";
import ChartOne from "../../components/Charts/ChartOne";
import CardList from "../../components/CardsLists";
import TableTwo from "../../components/Tables/TableTwo";
import TableOne from "../../components/Tables/TableOne";
import ChartTwo from "../../components/Charts/ChartTwo";

const HomePage = () => {
  return (
    <>
      <div className="my-4 flex flex-col gap-y-4">
        <div className="flex w-full gap-x-4">
          <div className="w-[55%]">
            <ChartOne />
          </div>

          <div className="flex flex-col w-[45%] gap-4">
            <div className="w-full flex justify-between gap-4">
              <div className="w-1/2">
                <CardDataStats
                  title="Users"
                  total="1,234"
                  rate="3.8%"
                  levelUp={true}
                />
              </div>
              <div className="w-1/2">
                <CardDataStats
                  title="Orders"
                  total="567"
                  rate="1.1%"
                  levelDown={true}
                />
              </div>
            </div>
            <ChartTwo />
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="w-[55%]">
            <CardList />
          </div>
          <div className="w-[45%]">
            <TableTwo />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default HomePage;
