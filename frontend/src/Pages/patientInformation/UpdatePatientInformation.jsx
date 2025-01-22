import React, { useEffect, useState } from "react";
import SideNav from "../../components/Sidebar/SideNav";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { baseUrl } from "../../utils/config";
import Spinner from "../../components/spinner/spinner";
import toast from "react-hot-toast";
import axios from "axios";
import { countries } from "countries-list";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import newRequest from "../../utils/userRequest";

const countryList = Object.entries(countries).map(([code, country]) => ({
    name: country.name,
    code,
}));

const CountryDropdown = ({ value, onChange, t }) => (
    <Autocomplete
        disablePortal
        options={countryList.map((country) => country.name)}
        value={value}
        onChange={(event, newValue) => onChange({ target: { value: newValue } })}
        renderInput={(params) => (
            <TextField
                {...params}
                label={t("Select Nationality")}
                className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
            />
        )}
        sx={{ width: "100%", mt: 2 }}
    />
);

const UpdatePatientInformation = () => {
    let { Id } = useParams();
    const { t, i18n } = useTranslation();
    const [PatientName, setPatientName] = useState("");
    const [IDNumber, setIDNumber] = useState("");
    const [Age, setAge] = useState("");
    const [Nationality, setNationality] = useState("Saudi Arabia");
    const [Sex, setSex] = useState("");
    const [Status, setStatus] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [cheifComplaint, setcheifComplaint] = useState("");
    const [ticket, setTicket] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchPatients = async () => {
        try {
            const response = await newRequest.get(`/api/v1/patients/${Id}`);
            setPatientName(response?.data?.data?.name || "");
            setNationality(response?.data?.data?.nationality || "");
            setIDNumber(response?.data?.data?.idNumber || "");
            setMobileNumber(response?.data?.data?.mobileNumber || "");
            setStatus(response?.data?.data?.status || "");
            setAge(response?.data?.data?.age || "");
            setSex(response?.data?.data?.sex || "");
            setcheifComplaint(response?.data?.data?.cheifComplaint || "");
        } catch (error) {
            console.error("Error fetching patients:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPatients()
    }, [])

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);

     const patientData = {
       name: PatientName,
       nationality: Nationality,
       sex: Sex,
       idNumber: IDNumber,
       age: Age,
       mobileNumber: MobileNumber,
       cheifComplaint: cheifComplaint, // Fix typo if necessary
       status: Status,
     };

     try {
       const response = await newRequest.put(
         `/api/v1/patients/${Id}`,
         patientData
       );

       if (response.status >= 200 && response.status < 300) {
         toast.success(
           response.data?.message || "Successfully updated patient data!"
         );
         navigate("/patient-table");
       } else {
         throw new Error("Unexpected response status");
       }
     } catch (error) {
       console.error("API Error:", error);
       toast.error(
         error.response?.data?.message || "Error updating patient data."
       );
     } finally {
       setLoading(false);
     }
   };

    const closePopup = () => {
        setShowPopup(false);
    };

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
                                    <CountryDropdown
                                        value={Nationality}
                                        onChange={(e) => setNationality(e.target.value)}
                                        t={t}
                                    />
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
                                    <div className="mt-2">
                                        <PhoneInput
                                            onChange={(e) => setMobileNumber(e)}
                                            value={MobileNumber}
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
                                        value={Status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        id="status"
                                        className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                                    >
                                        <option>{t("Select Status")}</option>
                                        <option value="Non-urgent">{t("Non-urgent")}</option>
                                        <option value="Urgent">{t("Urgent")}</option>
                                        <option value="Critical">{t("Critical")}</option>
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
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                                >
                                    {t("Update Issue Ticket")}
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
                                height="600px"
                                title="PDF Document"
                            />
                        ) : (
                            <p>No PDF available</p>
                        )}
                        <button
                            onClick={closePopup}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {loading && <Spinner />}
        </div>
    );
};

export default UpdatePatientInformation;
