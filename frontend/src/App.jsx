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
import Kpi from "./Pages/KPI/Kpi.jsx";
import PatientMonitoring from "./Pages/LocationWaitingArea/monitoring.jsx";
import PatientDisplay from "./Pages/patientDisplay/patientDisplay.jsx";
import UpdatePatientInformation from "./Pages/patientInformation/UpdatePatientInformation.jsx";
import Department from "./Pages/Department/Department.jsx";
import Users from "./Pages/MasterData/Users/Users.jsx";
import Roless from "./Pages/MasterData/Roles/Roless.jsx";
import Beds from "./Pages/MasterData/Beds/Beds.jsx";
import Servingss from "./Pages/Serving/Servingss.jsx";
import Departmentmonitoring from "./Pages/DepartmentWaitingList/Departmentmonitoring.jsx";
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
                  <Route path="/" element={<Login />} />
                  <Route
                    path="/patient-information"
                    element={<PatientInformation />}
                  />
                  <Route
                    path="/update/patient-information/:Id"
                    element={<UpdatePatientInformation />}
                  />
                  <Route path="/patient-table" element={<PatientTable />} />
                  <Route path="/monitoring" element={<PatientMonitoring />} />
                  <Route path="/waiting-area/:id" element={<WaitingArea />} />
                  <Route path="/Servings/:id" element={<Servingss />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route
                    path="/location-assignment"
                    element={<LocationAssignment />}
                  />
                  <Route
                    path="/location-waiting-area/:id"
                    element={<LocationWaitingArea />}
                  />
                  <Route path="/location" element={<Locationpage />} />
                  <Route path="/kpi" element={<Kpi />} />
                  <Route path="/patient-display" element={<PatientDisplay />} />
                  {/* Master Data */}
                  <Route path="/Department" element={<Department />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/Roles" element={<Roless />} />
                  <Route path="/Beds" element={<Beds />} />
                  {/* Department monitoring */}
                  <Route path="/Department-monitoring/:id" element={<Departmentmonitoring />} />
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
