import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTableProvider from "./Contexts/DataTableContext";
import { QueryClient, QueryClientProvider } from "react-query";
import RolesProvider from "./Contexts/FetchRolesContext.jsx";
import PatientInformation from "./Pages/patientInformation/patientInformation.jsx";
import Login from "./Pages/adminLogin/login.jsx";
import WaitingArea from "./Pages/waintingArea/waitingArea.jsx";
import Dashboard from "./Pages/dashboard/dashoboard.jsx";
import LocationAssignment from "./Pages/locationAssignment/locationAssignment.jsx";
import LocationWaitingArea from "./Pages/LocationWaitingArea/LocationWaitingArea.jsx";
import PatientTable from "./Pages/patientInformation/patientTable.jsx";
import Locationpage from "./Pages/Locationpage/Locationpage.jsx";
import PatientMonitoring from "./Pages/LocationWaitingArea/monitoring.jsx";
import PatientDisplay from "./Pages/patientDisplay/patientDisplay.jsx";
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <DataTableProvider>
        <RolesProvider>
          <div>
            <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path="/patient-information" element={<PatientInformation />} />
                  <Route path="/patient-table" element={<PatientTable />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/waiting-area/:id" element={<WaitingArea />} />  
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/location-assignment" element={<LocationAssignment />} />
                  <Route path="/location-waiting-area" element={<LocationWaitingArea />} />
                  <Route path="/location" element={<Locationpage />} />
                  <Route path="/monitoring" element={<PatientMonitoring />} />
                  <Route path="/patient-display" element={<PatientDisplay />} />
                </Routes>
              </QueryClientProvider>
            </BrowserRouter>
          </div>
        </RolesProvider>
      </DataTableProvider>
    </>
  );
};

export default App;
