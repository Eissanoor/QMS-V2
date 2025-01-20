import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from 'react-hot-toast';
import SideNav from '../../components/Sidebar/SideNav';
import Spinner from '../../components/spinner/spinner';
import newRequest from '../../utils/newRequest';

const fetchPatients = async () => {
    const response = await newRequest.get(`/api/v1/patients`);
    return response?.data?.data?.data || [];
};

function PatientTable() {
    const navigate = useNavigate();
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const { data: patients, isLoading, refetch } = useQuery('patients', fetchPatients);

    const toggleDropdown = (patientId) => {
        setDropdownVisible((prev) => (prev === patientId ? null : patientId));
    };

    const handleDelete = async (patient) => {
        setDropdownVisible(null);
        Swal.fire({
            title: `Are you sure to delete this record?`,
            text: `You will not be able to recover this! ${patient?.name || ""}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: `Yes, Delete!`,
            cancelButtonText: `No, keep it!`,
            confirmButtonColor: "#1E3B8B",
            cancelButtonColor: "#FF0032",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await newRequest.delete(`/api/v1/patients/` + patient?.id);
                    toast.success(response?.data?.message || "Patient information has been deleted successfully");   
                    refetch();                 
                } catch (error) {
                    const errorMessage = error.response?.data?.message || "An unexpected error occurred";
                    toast.error(errorMessage);
                }
            }
        });
    };

    return (
        <div className="font-[sans-serif] overflow-x-auto">
            <SideNav>
                <div className="flex items-center mb-4 justify-around mt-16">
                    <h3 className="text-2xl font-bold text-left mt-10">Patients Information</h3>
                    <button
                        type="button"
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300"
                        onClick={() => navigate("/patient-information")}
                    >
                        Add New
                    </button>
                </div>
                <div className="w-11/12 mx-auto">
                    <table className="min-w-full bg-white">
                        <thead className="whitespace-nowrap">
                            <tr>
                                <th className="pl-4 w-8"></th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-800">Name</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-800">Status</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-800">Age</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-800">Contact</th>
                                <th className="p-4 text-center text-sm font-semibold text-gray-800">Action</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap">
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                patients.map((patient) => (
                                    <tr key={patient.id} className={`odd:bg-blue-50 ${selectedPatientId === patient.id ? "bg-white" : ""}`}>
                                        <td className="pl-4 w-8">
                                            <input id={`checkbox-${patient.id}`} type="checkbox" className="hidden peer" />
                                            <label htmlFor={`checkbox-${patient.id}`} className="relative flex items-center justify-center w-5 h-5 cursor-pointer border border-gray-400 rounded"></label>
                                        </td>
                                        <td className="p-4 text-sm text-gray-800">{patient.name}</td>
                                        <td className="p-4 text-sm text-gray-800">
                                            <span className={`w-[68px] block text-center py-1 border ${patient.status === "Active" ? "border-green-500 text-green-600" : "border-yellow-500 text-yellow-600"} rounded text-xs`}>{patient.status}</span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-800">{patient.age}</td>
                                        <td className="p-4 text-sm text-gray-800">{patient.mobileNumber}</td>
                                        <td className="relative text-center">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleDropdown(patient.id);
                                                }}
                                                className="text-gray-500 text-lg hover:text-blue-600"
                                            >
                                                ⋮
                                            </button>
                                            {dropdownVisible === patient.id && (
                                                <div className="absolute bg-white border rounded shadow-lg w-40 z-10">
                                                    <ul>
                                                        <li className="px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer flex" onClick={() => handleDelete(patient)}>
                                                            <FaTrash className="mr-4" /> Delete
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </SideNav>
        </div>
    );
}

export default PatientTable;
