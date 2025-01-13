import React, { useState } from "react";
import SideNav from "../../components/Sidebar/SideNav";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { baseUrl } from "../../utils/config";

const PatientInformation = () => {
  const { t, i18n } = useTranslation();
  const [PatientName, setPatientName] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [Age, setAge] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Sex, setSex] = useState("");
  const [Status, setStatus] = useState("Active");
  const [MobileNumber, setMobileNumber] = useState("");
  const [cheifComplaint, setcheifComplaint] = useState("");
  const [ticket, setTicket] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("pdfUrl",pdfUrl);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const patientData = {
      name: PatientName,
      nationality: Nationality,
      sex: Sex,
      idNumber: IDNumber,
      age: Age,
      mobileNumber: MobileNumber, // Add mobile number state if needed
      cheifComplaint: cheifComplaint,
      status: Status,
    };
    console.log("patientData",patientData);
    try {
      const response = await fetch(`${baseUrl}/api/v1/patients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(patientData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTicket(`${baseUrl}/${data.data.ticket}`);
      setPdfUrl(data.data.ticket);
      setShowPopup(true);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const Spinner = () => (
    <div className="spinner-container">
      <div className="spinner">
        <style jsx>{`
          .spinner-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5); /* Optional: dim background */
            z-index: 1000; /* Ensure it appears above other elements */
          }
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #05D899;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s ease infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );

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
                    value={Nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    id="nationality"
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  >
                    <option>{t("Select Nationality")}</option>
                    <option>{t("Saudi Arabia")}</option>
                    <option>{t("Other")}</option>
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
                  <div  className="mt-2">
                    <PhoneInput
                     
                      onChange={(e) => setMobileNumber(e)}
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
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontSize: "16px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white",
                        height: "auto",
                      }}
                      flagStyle={{
                        width: "80px", // Increased flag size
                        height: "80px", // Increased flag size
                      }}

                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="sex"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Sex")}
                  </label>
                  <select
                    value={Sex}
                    onChange={(e) => setSex(e.target.value)}
                    id="sex"
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  >
                    <option value="">{t("Select Sex")}</option>
                    <option value="M">{t("Male")}</option>
                    <option value="F">{t("Female")}</option>
                    <option value="O">{t("Other")}</option>
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
                    type="number"
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
                    <option value="NON - Critical">
                      {t("NON - Critical")}
                    </option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="cheifComplaint"
                    className="text-lg font-medium text-gray-700"
                  >
                    {t("Chief Complaint")}
                  </label>
                  <textarea
                    id="cheifComplaint"
                    rows="4"
                    value={cheifComplaint}
                    onChange={(e) => setcheifComplaint(e.target.value)}
                    placeholder={t("Describe the complaint")}
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
                  {t("Close")}
                </button>
                <button onClick={handleSubmit} type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                  {t("Issue Ticket")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SideNav>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Ticket Information</h2>
            {pdfUrl ? (
              <iframe
                src={`${baseUrl}/${pdfUrl}`}
                width="100%"
                height="400px"
                title="PDF Document"
              />
            ) : (
              <p>No PDF available</p>
            )}
            <button onClick={closePopup} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
      {loading && <Spinner />}
    </div>
  );
};

export default PatientInformation;
