import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import newRequest from "../../../utils/newRequest";
import { countries } from "countries-list";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

const Removeassignrole = ({
  isVisible,
  setVisibility,
  selectdatauser,
  refreshuser,
}) => {
  const [selectRoles, setselectRoles] = useState([]);
  const { t } = useTranslation();
  const modalRef = useRef(null);
  if (!isVisible) return null;

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await newRequest.get(`/api/v1/roles/all`);
        setselectRoles(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const userroleadd = async () => {
    const selectedRoleIds = selectRoles
      .filter((role) => role.selected)
      .map((role) => role.id);
    try {
      const response = await newRequest.delete(`/api/v1/roles/remove/${selectdatauser?.id}/${selectedRoleIds}`);
      setVisibility(false);
      if (response.status >= 200) {
        toast.success(
          response?.data?.message || "Roles have been assigned successfully"
        );
        refreshuser();
        setVisibility(false);
      } else {
        throw new Error(response?.data?.message || "Unexpected error");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to assign roles";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div
        ref={modalRef} // Attach the ref to the modal
        className="bg-white rounded-lg shadow-lg w-full max-w-lg"
      >
        {/* Modal Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ backgroundColor: "#5B4DF5" }}
        >
          <h2 className="text-white text-xl font-semibold">
            {t("UnAssign Roles")}
          </h2>
          <div className="flex items-center gap-4">
            <button onClick={() => setVisibility(false)}>
              <CloseIcon style={{ color: "white" }} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="Location"
                className="text-lg font-medium text-gray-700"
              >
                {t("Roles")}
              </label>
              <Autocomplete
                multiple
                disablePortal
                options={selectRoles}
                getOptionLabel={(option) => option.name} // Display role name
                value={selectRoles.filter((role) => role.selected)}
                onChange={(event, newValue) => {
                  setselectRoles((prevRoles) =>
                    prevRoles.map((role) => ({
                      ...role,
                      selected: newValue.some(
                        (selectedRole) => selectedRole.id === role.id
                      ),
                    }))
                  );
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id} // Ensure correct selection
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t("Select Roles")}
                    className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
                  />
                )}
                sx={{ width: "100%", mt: 2 }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-gray-400"
              onClick={() => setVisibility(false)}
            >
              {t("Cancel")}
            </button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#13BA88", color: "#ffffff" }}
              onClick={userroleadd}
            >
              {t("UnAssign")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Removeassignrole;
