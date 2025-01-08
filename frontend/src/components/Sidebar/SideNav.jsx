import React, { useState } from "react";
import { Link } from "react-router-dom";
import sliclogo from "../../Images/sliclogo.png";
import { useTranslation } from "react-i18next";
import Registration from "../../Images/Registration.png";
import CentralWaitingArea from "../../Images/Central Waiting Area.png";
import LocationAssignment from "../../Images/Location Assignment.png";
import KPI from "../../Images/KPI.png";
import Location from "../../Images/Location.png";
import LocationWaitingArea from "../../Images/Location Waiting Area.png";

function SideNav({ children }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/patient-information"); // Default active tab

  const handleTabClick = (path) => {
    setActiveTab(path); // Update active tab
  };

  const getTabClass = (path) => {
    return `flex items-center py-1 rounded ${
      activeTab === path ? "bg-gray-300 text-black" : "hover:bg-gray-100 text-gray-700"
    } ${i18n.language === "ar" ? "pr-3 pl-4 justify-end" : "pl-3 pr-4 justify-start"}`;
  };

  return (
    <>
      <div className="p-0 lg:h-screen">
        <div className="body-content">
          <div className="relative lg:block navbar-menu">
            <nav
              className={`fixed top-0 transition-all bg-primary lg:mt-0 mt-16 bottom-0 flex flex-col shadow bg-primary-sidebar overflow-hidden z-50 ${
                i18n.language === "ar" ? "right-0" : "left-0"
              } ${isOpen ? "w-[280px]" : "w-[280px]"}`}
              id="sidenav"
            >
              <div className="flex justify-center items-center w-full px-4 pt-4 pb-0 border-b border-gray-300">
                <Link to="/">
                  <h1 className="text-2xl mb-10">QMSv2.0</h1>
                </Link>
              </div>
              <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                <ul className="mb-8 text-sm">
                  <li>
                    <Link
                      to="/patient-information"
                      className={getTabClass("/patient-information")}
                      onClick={() => handleTabClick("/patient-information")}
                    >
                      <div
                        className={`flex justify-center items-center gap-3 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <img src={Registration} alt="logo" className="w-8 h-8 object-cover" />
                        <span className="text-black font-medium text-lg">{t("Patient Information")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/waiting-area"
                      className={getTabClass("/waiting-area")}
                      onClick={() => handleTabClick("/waiting-area")}
                    >
                      <div
                        className={`flex justify-center items-center gap-3 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <img src={CentralWaitingArea} alt="logo" className="w-8 h-8 object-cover" />
                        <span className="text-black font-medium text-lg">{t("Central/Waiting Area")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/location-assignment"
                      className={getTabClass("/location-assignment")}
                      onClick={() => handleTabClick("/location-assignment")}
                    >
                      <div
                        className={`flex justify-center items-center gap-3 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <img src={LocationAssignment} alt="logo" className="w-8 h-8 object-cover" />
                        <span className="text-black font-medium text-lg">{t("Location Assignment")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/location-waiting-area"
                      className={getTabClass("/location-waiting-area")}
                      onClick={() => handleTabClick("/location-waiting-area")}
                    >
                      <div
                        className={`flex justify-center items-center gap-3 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <img src={LocationWaitingArea} alt="logo" className="w-8 h-8 object-cover" />
                        <span className="text-black font-medium text-lg">{t("Location Waiting Area")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/location"
                      className={getTabClass("/location")}
                      onClick={() => handleTabClick("/location")}
                    >
                      <div
                        className={`flex justify-center items-center gap-3 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <img src={Location} alt="logo" className="w-8 h-8 object-cover" />
                        <span className="text-black font-medium text-lg">{t("Location")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/kpi"
                      className={getTabClass("/kpi")}
                      onClick={() => handleTabClick("/kpi")}
                    >
                      <div
                        className={`flex justify-center items-center gap-3 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <img src={KPI} alt="logo" className="w-8 h-8 object-cover" />
                        <span className="text-black font-medium text-lg">{t("KPI")}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`mx-auto transition-all content-wrapper ${
            isOpen ? `${i18n.language === "ar" ? "lg:mr-[280px]" : "lg:ml-[280px]"}` : "lg:ml-[280px]"
          }`}
          id="dash"
        >
          <section className="sticky top-0 z-40 px-3 py-0 bg-primary shadow text-gray-100 lg:px-5">
            <nav className="relative">
              <div
                className={`flex justify-between items-center ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                }`}
              ></div>
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
