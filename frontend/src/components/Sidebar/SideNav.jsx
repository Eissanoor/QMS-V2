import React, { useState, useEffect } from "react";
import { Menu, X, UserRound, Users, MapPin, Building2, Building, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideNav({ children }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem('sidebarOpen');
    return savedState ? JSON.parse(savedState) : true;
  });
  const [activeTab, setActiveTab] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  const getTabClass = (path) => {
    return `flex items-center py-1 rounded transition-all duration-300 relative group ${
      activeTab === path
        ? "bg-[#13BA8885] text-black"
        : "hover:bg-gray-100 text-gray-700"
    } ${
      i18n.language === "ar"
        ? "pr-3 pl-4 justify-end"
        : "pl-3 pr-4 justify-start"
    }`;
  };

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const handleIconClick = (e) => {
    if (!isOpen) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const renderIcon = (Icon, path) => (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => !isOpen && setHoveredIcon(path)}
      onMouseLeave={() => setHoveredIcon(null)}
      onClick={handleIconClick}
    >
      <Icon className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
        activeTab === path ? "transform scale-110" : ""
      }`} />
    </div>
  );

  return (
    <>
      <div className="p-0 lg:h-screen">
        <div className="body-content">
          <div className="relative lg:block navbar-menu">
            <nav
              className={`fixed top-0 transition-all duration-300 ease-in-out bg-white lg:mt-0 mt-16 bottom-0 flex flex-col shadow-lg overflow-hidden z-50 ${
                i18n.language === "ar" ? "right-0" : "left-0"
              } ${isOpen ? "w-[280px]" : "w-[80px]"}`}
              id="sidenav"
            >
              <div className="flex items-center justify-between w-full px-4 pt-4 pb-4 border-b border-gray-200">
                <div className={`transition-opacity duration-300 ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  
                    <h1 className="text-2xl font-bold text-gray-800">QMSv2.0</h1>
                 
                </div>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
                  aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                >
                  {isOpen ? (
                    <X size={24} className="text-gray-600 cursor-pointer"  />
                  ) : (
                    <Menu size={24} className="text-gray-600 mx-auto cursor-pointer" />
                  )}
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ul className="p-4 space-y-4">
                  {/* Patient Information */}
                  <li>
                    <Link
                      to="/patient-table"
                      className={getTabClass("/patient-table")}
                    >
                      <div
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        } ${!isOpen && 'justify-center'}`}
                      >
                        {renderIcon(UserRound, "/patient-table")}
                        <span className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ${
                          !isOpen && 'opacity-0 w-0 overflow-hidden'
                        }`}>
                          {t("Patient Information")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Central/Waiting Area */}
                  <li>
                    <Link
                      to="/monitoring"
                      className={getTabClass("/monitoring")}
                    >
                      <div
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        } ${!isOpen && 'justify-center'}`}
                      >
                          {renderIcon(Users, "/monitoring")}
                        <span className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ${
                          !isOpen && 'opacity-0 w-0 overflow-hidden'
                        }`}>
                          {t("Patient Monitoring")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Location Assignment */}
                  <li>
                    <Link
                      to="/location-assignment"
                      className={getTabClass("/location-assignment")}
                    >
                      <div
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        } ${!isOpen && 'justify-center'}`}
                      >
                        {renderIcon(MapPin, "/location-assignment")}
                        <span className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ${
                          !isOpen && 'opacity-0 w-0 overflow-hidden'
                        }`}>
                          {t("Location Assignment")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Location Waiting Area */}
                  <li>
                    <Link
                      to="/location-waiting-area"
                      className={getTabClass("/location-waiting-area")}
                    >
                      <div
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        } ${!isOpen && 'justify-center'}`}
                      >
                        {renderIcon(Building2, "/location-waiting-area")}
                        <span className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ${
                          !isOpen && 'opacity-0 w-0 overflow-hidden'
                        }`}>
                          {t("Location Waiting Area")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* Location */}
                  <li>
                    <Link 
                      to="/location" 
                      className={getTabClass("/location")}
                    >
                      <div
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        } ${!isOpen && 'justify-center'}`}
                      >
                        {renderIcon(Building, "/location")}
                        <span className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ${
                          !isOpen && 'opacity-0 w-0 overflow-hidden'
                        }`}>
                          {t("Location")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  {/* KPI */}
                  <li>
                    <Link 
                      to="/kpi" 
                      className={getTabClass("/kpi")}
                    >
                      <div
                        className={`flex items-center gap-3 transition-all duration-300 ${
                          i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                        } ${!isOpen && 'justify-center'}`}
                      >
                        {renderIcon(BarChart3, "/kpi")}
                        <span className={`font-medium text-gray-700 whitespace-nowrap transition-all duration-300 ${
                          !isOpen && 'opacity-0 w-0 overflow-hidden'
                        }`}>
                          {t("KPI")}
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div
          className={`mx-auto transition-all duration-300 content-wrapper ${
            isOpen
              ? `${i18n.language === "ar" ? "lg:mr-[280px]" : "lg:ml-[280px]"}`
              : `${i18n.language === "ar" ? "lg:mr-[80px]" : "lg:ml-[80px]"}`
          }`}
          id="dash"
        >
          <section className="sticky top-0 z-40 px-3 py-3 bg-white shadow-sm">
            <nav className="relative">
              <div
                className={`flex justify-between items-center ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {t(location.pathname.substring(1).split("-").map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(" ")) || "Dashboard"}
                </h2>
              </div>
            </nav>
          </section>

          {children}
        </div>
      </div>
    </>
  );
}

export default SideNav;