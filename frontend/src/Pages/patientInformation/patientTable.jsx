import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from "../../utils/config";
import SideNav from '../../components/Sidebar/SideNav';
function PatientTable() {
    const [patients, setPatients] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await axios.get(`${baseUrl}/api/v1/patients`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                setPatients(response.data.data.data); // Adjust based on your API response structure
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (<>
        <div className="font-[sans-serif] overflow-x-auto">
           
            <SideNav>
                <div className="flex items-center mb-4 justify-around mt-16">
            <h3 className="text-2xl font-bold text-left mt-10"
            style={{marginRight: '630px'}}>Patients Informaation</h3>
            <div className="font-[sans-serif] space-x-4 space-y-4 text-center mt-10">
                <button type="button" 
                    className=" px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300"
                    onClick={() => navigate('/patient-information')}
                    >
                    Add New
                </button>
            </div>
            </div>
            <div className="w-11/12 mx-auto">
                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap">
                        <tr>
                            <th className="pl-4 w-8"> {/* Checkbox Header */} </th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">Name</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">Status</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">Age</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">Contact</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">Action</th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {patients.map((patient) => (
                            <tr 
                                key={patient.id} 
                                className={`odd:bg-blue-50 ${selectedPatientId === patient.id ? 'bg-white' : ''}`}
                                onClick={() => setSelectedPatientId(patient.id)}
                            >
                                <td className="pl-4 w-8">
                                    <input id={`checkbox-${patient.id}`} type="checkbox" className="hidden peer" />
                                    <label htmlFor={`checkbox-${patient.id}`} className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before-w-full before-h-full before:bg-white w-5 h-5 cursor-pointer bg-white-500 border border-gray-400 rounded overflow-hidden">
                                        {selectedPatientId === patient.id && <span>✔️</span>}
                                    </label>
                                </td>
                                <td className="p-4 text-sm text-gray-800">{patient.name}</td>
                                <td className="p-4 text-sm text-gray-800">
                                    <span className={`w-[68px] block text-center py-1 border ${patient.status === 'Active' ? 'border-green-500 text-green-600' : 'border-yellow-500 text-yellow-600'} rounded text-xs`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-gray-800">{patient.age}</td>
                                
                                <td className="p-4 text-sm text-gray-800">{patient.mobileNumber}</td>
                                <td className="p-4">
                                    {/* Action Icons */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </SideNav>
        </div>
        </>
    );
}

export default PatientTable;
