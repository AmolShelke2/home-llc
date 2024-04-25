import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../../assets/MenuSvg";
import { useState } from "react";
import DropdownMenu from "./DropDown";
import logoNav from "../../assets/logoNav.png";

export const navigation = [
  {
    id: "0",
    title: "Analyze",
    dropdownItems: [
      { name: "Consult", path: "/Consult" },
      { name: "Neigborhood", path: "/home-analytics-landing" },
    ],
  },
  {
    id: "1",
    title: "Buy",
    path: "/buyer-landing",
  },
  {
    id: "2",
    title: "Borrow",
    path: "/equity-landing",
  },
  {
    id: "3",
    title: "Sell",
    path: "/seller",
  },
  {
    id: "4",
    title: "About Us",
    dropdownItems: [
      { name: "Our Blogs", path: "/blogs" },
      { name: "FAQ", path: "/faq" },
      { name: "Our Team", path: "/home-analytics-landing" },
      { name: "Culture", path: "/home-analytics-landing" },
      { name: "Press", path: "/home-analytics-landing" },
    ],
  },
];

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    openNavigation ? enablePageScroll() : disablePageScroll();
  };

  return (
    <div
      className={`mt-4 fixed top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-4/5 z-50
    ${
      openNavigation ? "bg-n-8 opacity-95" : "bg-n-8/90"
    } rounded-full backdrop-blur`}
      style={{ backdropFilter: "blur(20px)" }}>
      <div className="flex items-center justify-end px-2 sm:px-5 lg:px-7.5 xl:px-10 py-4">
        {/*******************************Logo********************************/}
        <img
          src={logoNav}
          alt="Logo"
          className="mr-auto cursor-pointer"
          onClick={() => (window.location.href = "/")}
          style={{ height: "40px" }}
        />
        {/*******************************Navigation***************************/}
        <nav
          className={`w-full ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[6rem] sm:top-[5rem] right-0 bottom-0 lg:flex lg:static lg:bg-transparent`}>
          <div
            className="flex h-[250px] bg-n-8 opacity-95 backdrop-blur rounded-lg sm:rounded-none sm:h-auto flex-col lg:flex-row
           sm:bg-transparent sm:justify-end items-start sm:items-center w-full mx-2 sm:px-0">
            {navigation.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.id)}
                onMouseLeave={() => setDropdownOpen(null)}>
                <button
                  className={`dropdown-button text-white font-semibold px-6 py-2 xl:px-12 focus:outline-none relative inline-flex items-center
              ${dropdownOpen === item.id || !item.dropdownItems ? "open" : ""}
              hover:bg-pink-500 hover:text-white hover:rounded-3xl`}
                  onClick={() => {
                    if (!item.dropdownItems) {
                      window.location.href = item.path;
                    }
                  }}>
                  {item.title}
                  {item.dropdownItems && (
                    <span className="dropdown-arrow ml-2"></span>
                  )}
                </button>

                {dropdownOpen === item.id && item.dropdownItems && (
                  <DropdownMenu dropdownItems={item.dropdownItems} />
                )}
              </div>
            ))}
          </div>
        </nav>
        <Button className="lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
