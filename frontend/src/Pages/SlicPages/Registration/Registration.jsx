import React, { useState } from 'react'
import SideNav from '../../../components/Sidebar/SideNav';
import { useTranslation } from 'react-i18next';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Registration = () => {
  const { t, i18n } = useTranslation();
  const [PatientName, setPatientName] = useState("")
  const [IDNumber, setIDNumber] = useState("")
  const [Age, setAge] = useState("")
 
  return (
    <div className="bg-mainbg">
      <SideNav>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black">
          <div className="h-full mb-10">
            {/* <!-- Statistics Cards --> */}
            <div className="bg-primary mt-4 w-[98%] mx-auto rounded-md">
              <div className="p-5">
                <h5 className="text-main-color text-2xl font-bold font-sans">
                  Patient Information
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-3 gap-4">
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="field1"
                      className={`text-xl font-sans font-medium ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Patient Name")}
                    </label>
                    <input
                      type="text"
                      id="Title"
                      value={PatientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={`${t("Enter")} ${t("Patient Name")}`}
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-2 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 p-3 gap-4">
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="IDNumber"
                      className={`text-xl font-sans font-medium  ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Nationality")}
                    </label>
                    <select
                      name="country"
                      // onChange={handleChange}
                      id="SelectCountry"
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-3 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      <option>{t("Select")}</option>
                      {/* {country.map(({ id, CountryName }) => (
                      <option key={id} value={CountryName}>
                        {CountryName}
                      </option>
                    ))} */}
                    </select>
                  </div>
                  <div></div>
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="field1"
                      className={`text-xl font-sans font-medium  ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Sex")}
                    </label>
                    <select
                      name="Sex"
                      // onChange={handleChange}
                      id="Sex"
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-3 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      <option>{t("Select")}</option>
                      <option value={"Male"}>Male</option>
                      <option value={"Female"}>Female</option>
                      <option value={"Other"}>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 p-3 gap-4">
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="IDNumber"
                      className={`text-xl font-sans font-medium  ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("ID Number")}
                    </label>
                    <input
                      type="number"
                      id="IDNumber"
                      value={IDNumber}
                      onChange={(e) => setIDNumber(e.target.value)}
                      placeholder={`${t("Enter")} ${t("ID Number")}`}
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-2 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    />
                  </div>
                  <div></div>
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="field1"
                      className={`text-xl font-sans font-medium  ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Age")}
                    </label>
                    <input
                      type="number"
                      id="Age"
                      value={Age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder={`${t("Enter")} ${t("Age")}`}
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-2 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 p-3 gap-4">
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="IDNumber"
                      className={`text-xl font-sans font-medium  ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Mobile Number")}
                    </label>
                    <div className="mt-2">
                      <PhoneInput
                        international
                        country={"sa"}
                        defaultCountry={"sa"}
                        inputProps={{
                          id: "landline",
                          placeholder: t("Phone Number with Country Code"),
                          autoComplete: "off",
                        }}
                        inputStyle={{
                          width: "100%",
                          border: "1px solid #05D899",
                          borderRadius: "8px",
                          marginTop: "0.5rem",
                          marginBottom: "0.75rem",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          fontWeight: "500",
                        }}
                        containerClass={`w-full`}
                        required
                      />
                    </div>
                  </div>
                  <div></div>
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="field1"
                      className={`text-xl font-sans font-medium  ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Status")}
                    </label>
                    <select
                      name="Status"
                      // onChange={handleChange}
                      id="Status"
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-3 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      <option>{t("Select")}</option>
                      <option value={"NON - Critical"}>NON - Critical</option>
                    </select>
                  </div>
                </div>

                <div className=" p-3 gap-4">
                  <div className="w-full font-body sm:text-base text-sm ">
                    <label
                      htmlFor="field1"
                      className={`text-xl font-sans font-medium ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
                      {t("Chief Complain")}
                    </label>
                    <textarea
                      type="text"
                      id="Title"
                      value={PatientName}
                      rows={5}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={`${t("Enter")} ${t("Chief Complain")}`}
                      className={`border w-full rounded-md border-[#05D899] mt-2 font-medium p-2 mb-3 ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex flex-row lg:flex-row sm:flex-col justify-between">
                  <button className="bg-[#F6452A] py-6 px-10 text-white rounded-md font-sans text-lg hover:text-black hover:border-[#F6452A] border hover:bg-white transition-colors duration-300 ease-in-out">
                    Close
                  </button>
                  <button className="bg-[#13BA88] py-6 px-10 text-white rounded-md font-sans text-lg hover:text-black hover:border-[#13BA88] border hover:bg-white transition-colors duration-300 ease-in-out">
                    Issue Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideNav>
    </div>
  );
}

export default Registration;