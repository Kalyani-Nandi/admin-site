import React from 'react';

const CardDataStats = ({ title, total, rate, levelUp, levelDown }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5  dark:border-strokedark dark:bg-boxdark">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-meta-2 dark:bg-meta-4">
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp ? 'text-meta-3' : ''
          } ${levelDown ? 'text-meta-5' : ''}`}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.357 2.477L0.909 5.83 0 4.946 5 0.085 10 4.946 9.091 5.83 5.643 2.477v7.608H4.357V2.477z" />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.643 7.692L9.091 4.34 10 5.224 5 10.085 0 5.224 0.909 4.34 4.357 7.692V0.085h1.286v7.607z" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
