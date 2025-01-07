import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTableProvider from "./Contexts/DataTableContext";
import SlicUserLogin from "./Pages/MemberLogin/SlicUserLogin/SlicUserLogin.jsx";
import GtinManagement from "./Pages/SlicPages/GtinManagement/GtinManagement.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import SlicUserSignUp from "./Pages/MemberLogin/SlicUserSignUp/SlicUserSignUp.jsx";
import SlicFirstScreen from "./Pages/MemberLogin/SlicUserLogin/SlicFirstScreen.jsx";
import RolesProvider from "./Contexts/FetchRolesContext.jsx";
import PosHistory from "./Pages/SlicPages/PosHistory/PosHistory.jsx";
import Registration from "./Pages/SlicPages/Registration/Registration.jsx";

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
                  <Route path="/" element={<Registration />} />
                  <Route path="/user-login" element={<SlicUserLogin />} />
                  <Route path="slic-signup" element={<SlicUserSignUp />} />

                  <Route path="gtin-management" element={<GtinManagement />} />
                 
                  <Route path="pos-history" element={<PosHistory />} />

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
