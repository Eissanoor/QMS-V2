import React, { useState } from "react";
import SideNav from "../../components/Sidebar/SideNav";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const WaitingArea = () => {
  const { t } = useTranslation();
  const [PatientName, setPatientName] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [Age, setAge] = useState("");
  const [ChiefComplaint, setChiefComplaint] = useState("");
  const [Allergies, setAllergies] = useState("No");
  const [VitalSigns, setVitalSigns] = useState({
    BP: "",
    HR: "",
    TEMP: "",
    RR: "",
    SPO2: "",
    RBS: "",
    Height: "",
    Weight: "",
    TimeVS: "",
  });

  const handleVitalChange = (e) => {
    setVitalSigns({ ...VitalSigns, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100">
      <SideNav>
        <div className="min-h-screen flex flex-col antialiased bg-white text-black">
          <div className="container mx-auto p-6">
            {/* Patient Info Section */}
            <div className="bg-green-50 shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-green-700 font-bold text-xl">EB TN # 5</h5>
                <p className="text-gray-600 text-sm">01/11/2016 08:45:47</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t("Patient Name")}
                  </label>
                  <input
                    type="text"
                    value={PatientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={t("Enter patient name")}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t("Mobile Number")}
                  </label>
                  <PhoneInput
                    international
                    country={"sa"}
                    value=""
                    onChange={() => {}}
                    inputStyle={{
                      width: "100%",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t("ID Number")}
                  </label>
                  <input
                    type="text"
                    value={IDNumber}
                    onChange={(e) => setIDNumber(e.target.value)}
                    placeholder={t("Enter ID number")}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t("Nationality")}
                  </label>
                  <select
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  >
                    <option>{t("Select Nationality")}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t("Age")}
                  </label>
                  <input
                    type="text"
                    value={Age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={t("Enter age")}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    {t("Sex")}
                  </label>
                  <select
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  >
                    <option>{t("Select Sex")}</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    {t("Chief Complaint")}
                  </label>
                  <input
                    type="text"
                    value={ChiefComplaint}
                    onChange={(e) => setChiefComplaint(e.target.value)}
                    placeholder={t("Describe the complaint")}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Vital Signs Section */}
            <div className="bg-green-50 shadow-md rounded-lg p-6 mt-6">
              <h5 className="text-green-700 font-bold text-xl mb-4">Vital Sign</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["BP", "HR", "TEMP", "RR", "SPO2", "RBS", "Height", "Weight", "TimeVS"].map(
                  (field) => (
                    <div key={field}>
                      <label className="text-sm font-medium text-gray-700">
                        {t(field)}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={VitalSigns[field]}
                        onChange={handleVitalChange}
                        placeholder={t(`Enter ${field}`)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  )
                )}
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">
                  {t("Allergies")}
                </span>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="Allergies"
                      value="Yes"
                      checked={Allergies === "Yes"}
                      onChange={(e) => setAllergies(e.target.value)}
                      className="form-radio text-green-600"
                    />
                    <span className="ml-2 text-sm">{t("Yes")}</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="Allergies"
                      value="No"
                      checked={Allergies === "No"}
                      onChange={(e) => setAllergies(e.target.value)}
                      className="form-radio text-green-600"
                    />
                    <span className="ml-2 text-sm">{t("No")}</span>
                  </label>
                  {Allergies === "Yes" && (
                    <input
                      type="text"
                      placeholder={t("Specify")}
                      className="p-2 border border-gray-300 rounded-lg"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500">
                {t("Call Patient")}
              </button>
              <div className="flex space-x-4">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                  {t("Save")}
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                  {t("Re-Print")}
                </button>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                  {t("Void")}
                </button>
                <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                  {t("Close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SideNav>
    </div>
  );
};

export default WaitingArea;
