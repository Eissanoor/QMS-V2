import React, { useState, useEffect } from 'react';
import { baseUrl } from "../../utils/config";
import newRequest from '../../utils/newRequest';
import toast from 'react-hot-toast';

const AssignPopup = ({ onClose, patientId, onAssignSuccess }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [departments, setDepartments] = useState([]);
    const [selectedDeptId, setSelectedDeptId] = useState(null);
    useEffect(() => {
        const fetchDepartments = async () => {
            const response = await fetch(`${baseUrl}/api/v1/departments/all`);
            const data = await response.json();
            if (data.success) {
                setDepartments(data.data);
            }
        };
        fetchDepartments();
    }, []);

    const handleAssign = async () => {
        try {
            const response = await newRequest.patch(
                `/api/v1/patients/${patientId}/assign-department`,
                { departmentId: selectedDeptId }
            );
            toast.success(response?.data?.message || "Department assigned to patient successfully");
           
            handleClose();
            
            setTimeout(() => {
                onAssignSuccess();
            }, 2000);

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to assign department";
            toast.error(errorMessage);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-4">Assign Location</h2>
                        <label className="block mb-2">Department Code</label>

                        <select
                            value={selectedDeptId}
                            onChange={(e) => setSelectedDeptId(e.target.value)}
                            className="border border-gray-300 p-2 w-full mb-4"
                        >
                            <option value="">Select Department</option>
                            {departments.map(department => (
                                <option key={department.tblDepartmentID} value={department.tblDepartmentID}>
                                    {department.deptcode}
                                </option>
                            ))}
                        </select>

                        <div className="flex justify-between">
                            <button
                                onClick={handleClose}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAssign}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Assign
                            </button>
                        </div>
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-gray-500"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssignPopup;