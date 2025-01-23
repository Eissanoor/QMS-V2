import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Registration from "../../Images/Registration.png";
import CentralWaitingArea from "../../Images/Central Waiting Area.png";
import LocationAssignment from "../../Images/Location Assignment.png";
import KPI from "../../Images/KPI.png";
import Location from "../../Images/Location.png";
import LocationWaitingArea from "../../Images/Location Waiting Area.png";
import MasterData from "../../Images/masterdata.png";
import Usersicon from "../../Images/users.png";
import TVscreeen from "../../Images/TV screen.jpg";
import Rolesicon from "../../Images/Roles.png";
import Department from "../../Images/Department.png";
function SideNav({ children }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState ? JSON.parse(savedState) : true;
  });
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const getTabClass = (path) => {
    return `flex items-center py-1 rounded transition-all duration-300 relative group ${
      activeTab === path ? "bg-[#13BA8885] text-black" : "hover:bg-gray-100 text-gray-700"
    } ${
      i18n.language === "ar" ? "pr-3 pl-4 justify-end" : "pl-3 pr-4 justify-start"
    }`;
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="p-0 lg:h-screen">
        <div className="body-content">
          <nav
            className={`fixed top-0 transition-all duration-300 ease-in-out bg-white lg:mt-0 mt-16 bottom-0 flex flex-col shadow-lg overflow-hidden z-50 ${
              i18n.language === "ar" ? "right-0" : "left-0"
            } ${isOpen ? "w-[280px]" : "w-[80px]"}`}
            id="sidenav"
          >
            <div
              className={`flex items-center justify-between w-full px-4 pt-4 pb-4 border-b border-gray-200 `}
            >
              <div
                className={`transition-opacity duration-300 ${
                  !isOpen ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                <h1 className="text-2xl font-bold text-gray-800">QMSv2.0</h1>
              </div>
              <div
                className={`transition-opacity duration-300 ${
                  isOpen ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                <h1 className="text-sm font-bold text-gray-800">QMSv2.0</h1>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <ul className="p-4 space-y-4">
                <li>
                  <Link
                    to="/patient-table"
                    className={getTabClass("/patient-table")}
                  >
                    <img
                      src={Registration}
                      alt="Registered Patients"
                      className="w-6 h-6"
                    />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Registered Patients")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/monitoring" className={getTabClass("/monitoring")}>
                    <img
                      src={CentralWaitingArea}
                      alt="Triage Waiting List"
                      className="w-6 h-6"
                    />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Triage Waiting List")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/location-assignment"
                    className={getTabClass("/location-assignment")}
                  >
                    <img
                      src={LocationAssignment}
                      alt="Location Assignment"
                      className="w-6 h-6"
                    />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Department Waiting List")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/location-waiting-area"
                    className={getTabClass("/location-waiting-area")}
                  >
                    <img
                      src={MasterData}
                      alt="Location Waiting Area"
                      className="w-6 h-6"
                    />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("MasterData")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/location" className={getTabClass("/location")}>
                    <img src={Location} alt="Location" className="w-6 h-6" />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Location")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/location" className={getTabClass("/location")}>
                    <img src={Usersicon} alt="Location" className="w-6 h-6" />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Users")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/location" className={getTabClass("/location")}>
                    <img src={Rolesicon} alt="Location" className="w-6 h-6" />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Roles")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/location" className={getTabClass("/location")}>
                    <img src={Department} alt="Location" className="w-6 h-6" />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("Department")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/location" className={getTabClass("/location")}>
                    <img src={TVscreeen} alt="Location" className="w-6 h-6" />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("TV Screen")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/kpi" className={getTabClass("/kpi")}>
                    <img src={KPI} alt="KPI" className="w-6 h-6" />
                    <span
                      className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ms-3 ${
                        !isOpen && "opacity-0 w-0 overflow-hidden"
                      }`}
                    >
                      {t("KPI")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className={`mx-auto transition-all duration-300 content-wrapper ${
            isOpen ? "lg:ml-[280px]" : "lg:ml-[80px]"
          }`}
        >
          <section className="sticky top-0 z-40 px-3 py-3 bg-white shadow-sm flex my-auto">
            <button
              onClick={toggleSidebar}
              className="me-5 rounded-lg hover:bg-gray-100"
            >
              {!isOpen ? (
                <Menu size={24} className="text-gray-600" />
              ) : (
                <X size={24} className="text-gray-600" />
              )}
            </button>
            <h2 className="text-xl font-semibold text-gray-800">
              {t(
                location.pathname.substring(1).replace(/-/g, " ").toUpperCase()
              ) || "Dashboard"}
            </h2>
          </section>
          {children}
        </div>
      </div>
    </>
  );
}

export default SideNav;
