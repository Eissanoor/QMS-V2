import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";

const PatientDisplay = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/v1/patients/called`);
        if (response.data.success) {
          setPatients(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="flex h-screen bg-blue-400">
      {/* Sidebar for subsequent patient cards */}
      <div className="w-1/4 bg-green-500 p-4 flex flex-col gap-4">
        {patients.slice(1).map((patient) => {
          const departmentName = patient.department
            ? patient.department.deptname
            : "Triage";
          const departmentAbbreviation = departmentName.substring(0, 2);

          return (
            <div
              key={patient.id}
              className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-400"
            >
              <h1 className="text-3xl font-bold text-blue-800">
                {patient.ticketNumber} {departmentAbbreviation}
              </h1>
              <h2 className="text-2xl text-red-600">{patient.name}</h2>
              <p className="text-lg">please proceed to</p>
              <h3 className="text-2xl font-bold text-blue-800">
                {departmentName}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Main display for the first patient */}
      <div className="flex-1 flex items-center justify-center ">
        {patients.length > 0 && (
          <div className="bg-white p-10 rounded-lg shadow-lg border-4 items-center justify-center border-red-600 w-3/4 h-3/4 ">
            <h1 className="text-5xl font-bold text-blue-800">
              {patients[0].ticketNumber}{" "}
              {patients[0].department
                ? patients[0].department.deptname.substring(0, 2)
                : "Tr"}
            </h1>
            <h2 className="text-3xl text-red-600">{patients[0].name}</h2>
            <p className="text-xl">please proceed to</p>
            <h3 className="text-4xl font-bold text-blue-800">
              {patients[0].department
                ? patients[0].department.deptname
                : "Triage"}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDisplay;
