import React, { useRef } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const AssignLocation = ({ isVisible, setVisibility }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const modalRef = useRef(null); // Reference to the modal container

  if (!isVisible) return null; // Return null if not visible

  const handleFullscreen = () => {
    if (modalRef.current) {
      if (!document.fullscreenElement) {
        modalRef.current.requestFullscreen(); // Make the modal fullscreen
      } else {
        document.exitFullscreen(); // Exit fullscreen
      }
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
            {t("Assign Location")}
          </h2>
          <div className="flex items-center gap-4">
            <button onClick={handleFullscreen}>
              <FullscreenIcon style={{ color: "white" }} />
            </button>
            <button onClick={() => setVisibility(false)}>
              <CloseIcon style={{ color: "white" }} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Department Code
              </label>
              <input
                type="text"
                placeholder="Enter Department Code"
                className="w-full border border-green-500 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Ticket Number
              </label>
              <input
                type="number"
                placeholder="Enter Ticket Number"
                className="w-full border border-green-500 rounded px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="Location"
                className="text-lg font-medium text-gray-700"
              >
                {t("Location")}
              </label>
              <select
                id="Location"
                className="w-full mt-2 p-3 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-300"
              >
                <option>{t("Select Location")}</option>
              </select>
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
            >
              {t("Assign")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignLocation;
