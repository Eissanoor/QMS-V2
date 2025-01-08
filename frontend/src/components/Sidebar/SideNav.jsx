import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import sliclogo from "../../Images/sliclogo.png";
import i18ns from "../../i18n";
import { useTranslation } from "react-i18next";
import Registration from "../../Images/Registration.png"
import CentralWaitingArea from "../../Images/Central Waiting Area.png"
import LocationAssignment from "../../Images/Location Assignment.png"
import KPI from "../../Images/KPI.png"
import Location from "../../Images/Location.png"
import LocationWaitingArea from "../../Images/Location Waiting Area.png"

function SideNav({ children }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <DashboardHeader /> */}
      <div className="p-0 lg:h-screen">
        <div className="body-content" x-data="{ open: true }">
          <div className="relative lg:block navbar-menu">
            <nav
              className={`fixed top-0 transition-all bg-primary lg:mt-0 mt-16  bottom-0 flex flex-col shadow bg-primary-sidebar overflow-hidden z-50 ${i18n.language === "ar" ? "right-0" : "left-0"
                } ${isOpen ? "w-[280px]" : "w-[280px]"}`}
              id="sidenav"
            >
              <div className="flex justify-center items-center w-full px-4 pt-4 pb-0 border-b border-gray-300 ">
                <Link to="/">
                  {/* <img
                    src={sliclogo}
                    alt="logo"
                    className="object-contain h-28 w-full"
                  /> */}
                  <h1 className="text-2xl mb-10">QMSv2.0</h1>
                </Link>
              </div>
              <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                <ul className="mb-8 text-sm ">
                  <li>
                    <li>
                      <Link
                        to="/patient-information"
                        className={`flex items-center py-1 rounded hover:bg-gray-100 ${i18n.language === "ar"
                          ? "pr-3 pl-4 justify-end"
                          : "pl-3 pr-4 justify-start"
                          }`}
                      >
                        <div
                          className={`flex justify-center items-center gap-3 ${i18n.language === "ar"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          <img
                            src={Registration}
                            alt="logo"
                            className="w-8 h-8 object-cover"
                          />
                          <span className="text-black font-medium text-lg">
                            {t("Patient Information")}
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        to="#"
                        className={`flex items-center py-1  text-gray-700 rounded hover:bg-gray-100 ${i18n.language === "ar"
                          ? "pr-3 pl-4 justify-end"
                          : "pl-3 pr-4 justify-start"
                          }`}
                      >
                        <div
                          className={`flex justify-center items-center gap-3 ${i18n.language === "ar"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          <img
                            src={CentralWaitingArea}
                            alt="logo"
                            className="w-8 h-8 object-cover"
                          />
                          <span className="text-black font-medium text-lg">
                            {t("Central/Waiting Area")}
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        to="#"
                        className={`flex items-center py-1  text-gray-700 rounded hover:bg-gray-100 ${i18n.language === "ar"
                          ? "pr-3 pl-4 justify-end"
                          : "pl-3 pr-4 justify-start"
                          }`}
                      >
                        <div
                          className={`flex justify-center items-center gap-3 ${i18n.language === "ar"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          <img
                            src={LocationAssignment}
                            alt="logo"
                            className="w-8 h-8 object-cover"
                          />
                          <span className="text-black font-medium text-lg">
                            {t("Location Assignment")}
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        to="#"
                        className={`flex items-center py-1  text-gray-700 rounded hover:bg-gray-100 ${i18n.language === "ar"
                          ? "pr-3 pl-4 justify-end"
                          : "pl-3 pr-4 justify-start"
                          }`}
                      >
                        <div
                          className={`flex justify-center items-center gap-3 ${i18n.language === "ar"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          <img
                            src={LocationWaitingArea}
                            alt="logo"
                            className="w-8 h-8 object-cover"
                          />
                          <span className="text-black font-medium text-lg">
                            {t("Location Waiting Area")}
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        to="#"
                        className={`flex items-center py-1  text-gray-700 rounded hover:bg-gray-100 ${i18n.language === "ar"
                          ? "pr-3 pl-4 justify-end"
                          : "pl-3 pr-4 justify-start"
                          }`}
                      >
                        <div
                          className={`flex justify-center items-center gap-3 ${i18n.language === "ar"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          <img
                            src={Location}
                            alt="logo"
                            className="w-8 h-8 object-cover"
                          />
                          <span className="text-black font-medium text-lg">
                            {t("Location")}
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="mt-3">
                      <Link
                        to="#"
                        className={`flex items-center py-1  text-gray-700 rounded hover:bg-gray-100 ${i18n.language === "ar"
                          ? "pr-3 pl-4 justify-end"
                          : "pl-3 pr-4 justify-start"
                          }`}
                      >
                        <div
                          className={`flex justify-center items-center gap-3 ${i18n.language === "ar"
                            ? "flex-row-reverse"
                            : "flex-row"
                            }`}
                        >
                          <img
                            src={KPI}
                            alt="logo"
                            className="w-8 h-8 object-cover"
                          />
                          <span
                            className={`text-black font-medium text-lg  ${i18n.language === "ar" ? "text-end" : "text-start"
                              }`}
                          >
                            {t("KPI")}
                          </span>
                        </div>
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* top nav */}
        <div
          className={`mx-auto transition-all content-wrapper  ${isOpen
            ? `${i18n.language === "ar" ? "lg:mr-[280px]" : "lg:ml-[280px]"}`
            : "lg:ml-[280px]"
            }`}
          id="dash"
        >
          <section className="sticky top-0 z-40 px-3 py-0 bg-primary shadow text-gray-100 lg:px-5">
            <nav className="relative">
              <div
                className={`flex justify-between items-center ${i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                  } `}
              >
                {/* <div
                  className={`flex items-center ${
                    i18n.language === "ar"
                      ? "justify-end flex-row-reverse"
                      : "justify-start flex-row"
                  }`}
                >
                  <button onClick={toggleSideNav} className="px-2 py-5 ">
                    <RxHamburgerMenu className="text-secondary h-auto w-6" />
                  </button>
                  <p className="text-secondary font-sans font-bold">
                    {t("GTIN Management")}
                  </p>
                </div>
                <div
                  className={`flex justify-center items-center gap-3 ${
                    i18n.language === "ar"
                      ? "sm:flex-row-reverse"
                      : "sm:flex-row"
                  }`}
                >
                  <I18nextProvider i18n={i18ns}>
                    <LanguageSwitcher />
                  </I18nextProvider>
                  <p className="text-secondary font-sans">
                    {memberData?.data?.user?.UserLoginID}
                  </p>
                  <img
                    src={sliclogo}
                    className="h-8 w-auto object-contain"
                    alt=""
                  />
                </div> */}
              </div>
            </nav>
          </section>

          {/* main content */}
          {children}
        </div>
      </div>
    </>
  );
}

export default SideNav;
