import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@heroui/react";
import { VscSettings } from "react-icons/vsc";

function PickerFilter({ onFilterChange, currentStatus }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedStatus, setSelectedStatus] = React.useState(
    currentStatus || "all"
  );

  const handleStatusChange = (value) => {
    console.log(value, "value");
    
    setSelectedStatus(value);
    onFilterChange?.({
      status: value,
    });
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
          base: "bg-white flex my-auto",
          header: "border-b border-gray-200",
          body: "py-6",
          footer: "border-t border-gray-200",
        }}
        size="sm"
      >
        <ModalContent className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm h-auto overflow-y-auto">
          {(onClose) => (
            <ModalBody className="gap-6">
              <RadioGroup
                label="Select a Filter"
                value={selectedStatus}
                onValueChange={handleStatusChange}
                classNames={{
                  label: "text-foreground-500 text-lg",
                  wrapper: "space-y-3",
                }}
              >
                {columns.map((column) => (
                  <Radio key={column.uid} value={column.uid}>
                    {column.name}
                  </Radio>
                ))}
              </RadioGroup>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default PickerFilter;
