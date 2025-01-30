import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Pagination,
  Spinner,
} from "@nextui-org/react";
import { FaSearch,  } from "react-icons/fa";
import newRequest from "../../utils/newRequest";
import SideNav from "../../components/Sidebar/SideNav";

function PatientJourney() {
  const [AllRoles, setAllRoles] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchAllRoles = async () => {
    setLoading(true);
    try {
      const response = await newRequest.get("/api/v1/patients/journeys", {
        params: { page, search },
      });
        setAllRoles(response?.data?.data?.data || []);
        setPagination(response.data.data.pagination);
    } catch (error) {
      console.error("Error fetching Role:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRoles();
  }, [page, search]);

const formatDateTime = (dateTime) => {
  if (!dateTime) return ""; // Handle empty values
  const date = new Date(dateTime);
  if (isNaN(date.getTime())) return ""; // Check for valid date
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric", // Fix: Use "numeric" instead of "4-digit"
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const calculateTotalHours = (treatmentEnded,registration) => {
  const treatmentEndedtime = new Date(treatmentEnded);
  const registrationtime = new Date(registration);
  const totalTime = treatmentEndedtime - registrationtime; // Difference in milliseconds
  const hours = Math.floor(totalTime / 3600000); // Convert to hours
  const minutes = Math.floor((totalTime % 3600000) / 60000); // Convert to minutes
  // If the total time is less than an hour, show "0 hrs"
  const displayHours = hours > 0 ? `${hours} hrs` : "0 hrs";
  return `${displayHours} ${minutes} min`; // Return formatted result
};

  const columns = [
    { name: "Name", uid: "name" },
    { name: "MRN Number", uid: "mrnNumber" },
    { name: "Registration", uid: "registration" },
    { name: "Triage", uid: "firstCall" },
    { name: "Dept. Call", uid: "secondCall" },
    { name: "Vital Signs", uid: "vitalSigns" },
    { name: "Department Assigned", uid: "departmentAssigned" },
    { name: "Treatment Began", uid: "treatmentBegan" },
    { name: "Treatment Ended", uid: "treatmentEnded" },
    { name: "Total Hrs", uid: "totalHrs" },
  ];

  const renderCell = (Roless, columnKey) => {
    switch (columnKey) {
      case "name":
        return <span>{Roless?.name || ""}</span>;
      case "mrnNumber":
        return <span>{Roless?.mrnNumber || ""}</span>;
      case "registration":
        return (
          <span>{formatDateTime(Roless?.journey?.registration) || ""}</span>
        );
      case "firstCall":
        return <span>{formatDateTime(Roless?.journey?.firstCall) || ""}</span>;
      case "secondCall":
        return <span>{formatDateTime(Roless?.journey?.secondCall) || ""}</span>;
      case "vitalSigns":
        return <span>{formatDateTime(Roless?.journey?.vitalSigns) || ""}</span>;
      case "departmentAssigned":
        return (
          <span>
            {formatDateTime(Roless?.journey?.departmentAssigned) || ""}
          </span>
        );
      case "treatmentBegan":
        return (
          <span>{formatDateTime(Roless?.journey?.treatmentBegan) || ""}</span>
        );
      case "treatmentEnded":
        return (
          <span>{formatDateTime(Roless?.journey?.treatmentEnded) || ""}</span>
        );
         case "totalHrs":
      return (
        <span>
          {calculateTotalHours(Roless?.journey?.treatmentEnded, Roless?.journey?.registration) || ""}
        </span>
      );
      default:
        return PatientJourney[columnKey];
    }
  };

  const topContent = useMemo(
    () => (
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex justify-between items-center">
          <Input
            isClearable
            value={search}
            onValueChange={setSearch}
            className="w-full sm:max-w-[44%] border-green-700 border py-1 rounded-lg focus:outline-none"
            placeholder="Search by patient name or MRN ..."
            startContent={<FaSearch className="text-default-300 me-2" />}
          />

          {/* <Button
            className="bg-navy-600 border border-green-700 outline-none bg-transparent hover:bg-green-700 text-green-700 hover:text-white transition-all duration-300 rounded-lg py-2"
            startContent={<FaPlus />}
            onClick={() => setisAddRolesModalOpen(true)}
          >
            Add New Role
          </Button> */}
        </div>
      </div>
    ),
    [search]
  );

  const bottomContent = useMemo(
    () => (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-sm text-gray-500">
          {pagination?.total || 0} Patient Journey in total
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          classNames={{
            wrapper: "gap-0 overflow-visible h-8",
            item: "w-8 h-8 text-sm rounded-none ",
            cursor: "bg-navy-600 text-white font-bold",
          }}
          page={page}
          total={pagination?.totalPages || 1}
          onChange={setPage}
        />
      </div>
    ),
    [page, pagination]
  );

  return (
    <SideNav>
      <div className="p-6 bg-blue-50 min-h-screen">
          <Table
            aria-label="Patient Journey"
            bottomContent={bottomContent}
            topContent={topContent}
            classNames={{
              wrapper: "shadow-md rounded-lg bg-white mt-6 w-full ",
            }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                  className="bg-gray-50 text-gray-600"
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              items={AllRoles}
              emptyContent="No Patient Journey found"
              isLoading={loading}
              loadingContent={<Spinner label="Loading..." />}
            >
              {(item) => (
                <TableRow key={item.patientId}>
                  {(columnKey) => (
                    <TableCell >{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
    </SideNav>
  );
}

export default PatientJourney;
