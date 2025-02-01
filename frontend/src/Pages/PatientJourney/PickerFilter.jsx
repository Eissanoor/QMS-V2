import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { VscSettings } from "react-icons/vsc";
import { Input, Select, SelectItem } from "@nextui-org/react";

function PickerFilter({ onFilterChange, currentStatus }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedStatus, setSelectedStatus] = React.useState(currentStatus || "all");
  const [searchTerm, setSearchTerm] = React.useState("");

  
  const handleStatusChange = (value) => {
    console.log(value.target.value, "+", "dataFilter");
    
    setSelectedStatus(value);
    onFilterChange?.({
      statusfilter: value,
      searchTerm: searchTerm,
    });
    //  onFilterChange({ status: value, searchTerm }); 
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onFilterChange?.({
      statusfilter: selectedStatus,
      searchTerm: newSearchTerm,
    });
  };


  const columns = [
    { name: "patient status", uid: "name" },
    { name: "Gender", uid: "mrnNumber" },
    { name: "Age", uid: "registration" },
  ];

  return (
    <>
      <Button
        onPress={onOpen}
        variant="bordered"
        startContent={<VscSettings className="text-lg" />}
        className="capitalize bg-gray-50 text-gray-600 ms-5 hover:bg-gray-600 hover:text-gray-50 rounded-md"
      >
        Filter
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-white shadow-lg flex my-auto",
          header: "border-b border-gray-200",
          body: "py-6",
          footer: "border-t border-gray-200",
        }}
        backdrop="opaque"
        size="lg"
      >
        <ModalContent className="bg-white rounded-lg shadow-lg p-6 w-full z-30">
          {(onClose) => (
            <ModalBody className="gap-6 flex flex-row sm:flex-col lg:flex-row w-full">
              <Select
                className="max-w-xs bg-gray-50 rounded-sm "
                placeholder="Filter"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                {columns.map((key, value) => (
                  <SelectItem
                    key={value}
                    value={key.uid}
                    className="bg-white hover:bg-gray-200 w-full"
                  >
                    {key.name || ""}
                  </SelectItem>
                ))}
              </Select>
              <Input
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search"
                aria-label="Search term"
                className="bg-gray-50 border border-gray-50 "
              />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default PickerFilter;
