import React,{ useState } from "react";
import { Link } from "react-router-dom";
import UserOne from "../../images/user/user-01.png";
import { FaCaretDown } from "react-icons/fa";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-between gap-4 w-full p-4"
        to="#"
      >
        <div className="flex items-center gap-4 w-full">
          <div className="h-12 w-12 rounded-full">
            <img src={UserOne} alt="User" />
          </div>
          <div className="hidden text-right lg:block">
            <span className="block text-sm text-left font-medium text-black dark:text-white">
              Thomas Anree
            </span>
            <span className="block text-xs text-left">UX Designer</span>
          </div>
        </div>
        <FaCaretDown size={20} />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute left-0 mt-4 -top-46 flex w-full flex-col rounded-sm border border-stroke bg-white  dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Account Settings
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
