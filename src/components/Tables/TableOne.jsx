import React, { useState } from 'react';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';
import Pagination from './Pagination';  // Import the Pagination component

const brandData = [
  {
    logo: BrandOne,
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'Facebook',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
  {
    logo: BrandOne,
    name: 'Apple',
    visitors: 4.0,
    revenues: '7,600',
    sales: 710,
    conversion: 5.0,
  },
  {
    logo: BrandTwo,
    name: 'Microsoft',
    visitors: 3.8,
    revenues: '6,200',
    sales: 650,
    conversion: 4.6,
  },
  {
    logo: BrandThree,
    name: 'Amazon',
    visitors: 5.2,
    revenues: '8,500',
    sales: 950,
    conversion: 5.4,
  },
  {
    logo: BrandFour,
    name: 'Netflix',
    visitors: 2.8,
    revenues: '5,100',
    sales: 520,
    conversion: 4.1,
  },
  {
    logo: BrandFive,
    name: 'Spotify',
    visitors: 2.4,
    revenues: '4,800',
    sales: 470,
    conversion: 3.9,
  },
];

const TableOne = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the indices of the current page's items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBrands = brandData.slice(startIndex, startIndex + itemsPerPage);

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Total number of pages
  const totalPages = Math.ceil(brandData.length / itemsPerPage);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Top Channels</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Source</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Sales</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
          </div>
        </div>

        {currentBrands.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === currentBrands.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">{brand.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
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
