import React, { useState } from "react";
import SideNav from "../../../components/Sidebar/SideNav";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Registration = () => {
  const { t, i18n } = useTranslation();
  const [PatientName, setPatientName] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [Age, setAge] = useState("");

  return (
    <div className="bg-gray-100">
      <SideNav>
        <div className="min-h-screen flex flex-col antialiased bg-white text-black">
          <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h5 className="text-green-600 text-2xl font-bold mb-6">
                Patient Information
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="patientName"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Patient Name")}
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    value={PatientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={t("Enter patient name")}
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nationality"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Nationality")}
                  </label>
                  <select
                    id="nationality"
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  >
                    <option>{t("Select Nationality")}</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="idNumber"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("ID Number")}
                  </label>
                  <input
                    type="text"
                    id="idNumber"
                    value={IDNumber}
                    onChange={(e) => setIDNumber(e.target.value)}
                    placeholder={t("Enter ID number")}
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Mobile Number")}
                  </label>
                  <PhoneInput
                    international
                    country={"sa"}
                    defaultCountry={"sa"}
                    inputProps={{
                      id: "mobileNumber",
                      placeholder: t("Enter mobile number"),
                    }}
                    inputStyle={{
                      width: "100%",
                      border: "1px solid #05D899",
                      borderRadius: "8px",
                      padding: "12px",
                      fontSize: "16px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                      height: "auto",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="sex"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Sex")}
                  </label>
                  <select
                    id="sex"
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  >
                    <option>{t("Select Sex")}</option>
                    <option value="Male">{t("Male")}</option>
                    <option value="Female">{t("Female")}</option>
                    <option value="Other">{t("Other")}</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Age")}
                  </label>
                  <input
                    type="text"
                    id="age"
                    value={Age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={t("Enter age")}
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Status")}
                  </label>
                  <select
                    id="status"
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  >
                    <option>{t("Select Status")}</option>
                    <option value="NON - Critical">{t("NON - Critical")}</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="chiefComplaint"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Chief Complaint")}
                  </label>
                  <textarea
                    id="chiefComplaint"
                    rows="4"
                    placeholder={t("Describe the complaint")}
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
                  {t("Close")}
                </button>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                  {t("Issue Ticket")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SideNav>
    </div>
  );
};

export default Registration;
