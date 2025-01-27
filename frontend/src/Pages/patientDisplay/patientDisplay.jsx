import React, { useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner";
import newRequest from "../../utils/newRequest";
import { useQuery } from "react-query";

const PatientDisplay = () => {
    const { isLoading, data: patients = [], error } = useQuery("fetchAllMegaMenus", async () => {
    try {
      const response = await newRequest.get("/api/v1/patients/called");
      return response?.data?.data || [];
    } catch (error) {
      console.log(error);
      throw error;
    }
  });



  return (
    <div className="flex h-screen bg-blue-400">
      {/* Sidebar for subsequent patient cards */}
      <div className="w-1/4 bg-green-500 p-4 flex flex-col gap-4">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          ""
        ) : (
          patients.slice(1).map((patient) => {
            const departmentName = patient.department
              ? patient.department.deptname
              : "Triage";
            const departmentAbbreviation = departmentName.substring(0, 2);

            return (
              <div
                key={patient.id}
                className="bg-white p-4 rounded-lg shadow-md border-2 border-yellow-400"
              >
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-bold text-blue-800">
                    Ticket Number
                  </h3>
                  <h3 className="text-2xl font-bold text-blue-800">
                    رقم التذكرة
                  </h3>
                </div>
                <h1 className="text-center text-3xl font-bold text-blue-800 ">
                  {patient.ticketNumber} {departmentAbbreviation}
                </h1>
                <h2 className="text-2xl text-red-600 text-center mt-3">
                  {patient.name}
                </h2>
                <div className="flex justify-between">
                  <p className="text-lg text-blue-800">please proceed to</p>
                  <p className="text-xl text-blue-800">اذهب إلى</p>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">
                  {departmentName}
                </h3>
              </div>
            );
          })
        )}
      </div>

      {/* Main display for the first patient */}
      <div className="flex-1 flex items-center justify-center ">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          ""
        ) : (
          patients.length > 0 && (
            <div className="bg-white p-10 rounded-2xl shadow-lg border-4  items-center justify-center border-red-600 w-3/4 ">
              <div className="flex flex-row justify-between">
                <h3 className="text-4xl font-bold text-blue-800">
                  Ticket Number
                </h3>
                <h3 className="text-4xl font-bold text-blue-800">
                  رقم التذكرة
                </h3>
              </div>
              <h1 className="text-5xl font-bold text-blue-800 text-center">
                {patients[0].ticketNumber}
                {patients[0].department
                  ? patients[0].department.deptname.substring(0, 2)
                  : "Tr"}
              </h1>
              <h2 className="text-3xl text-red-800 text-center mt-16">
                {patients[0].name}
              </h2>
              <div className="flex flex-row justify-between">
                <p className="text-xl text-blue-800">please proceed to</p>
                <p className="text-xl text-blue-800">اذهب إلى</p>
              </div>
              <div className="flex flex-row justify-between mt-4">
                <h3 className="text-4xl font-bold text-red-600">
                  {patients[0].department
                    ? patients[0].department.deptname
                    : "Triage"}
                </h3>
                <h3 className="text-4xl font-bold text-red-600">الفرز</h3>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PatientDisplay;
