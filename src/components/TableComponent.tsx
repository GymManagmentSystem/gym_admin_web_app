import {
  Button,
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface TableComponent {
  thArray: string[];
  onPressViewButton:()=>void;
}

const TableComponent = ({ thArray,onPressViewButton }: TableComponent) => {
  const tableResponsiveSize = { md: "sm", lg: "sm", xl: "md" };
  const butonResponsiveSize = { md: "xs", lg: "md", xl: "md" };
  const data = [
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
    {
      id: 1011,
      name: "Kasun Perera",
      expDate: "2025-01-03",
      phone: "0712334489",
      payment: "Yes",
      Gender: "Male",
    },
  ];
  return (
    <TableContainer mt={10} mr={2}>
      <Table size={tableResponsiveSize}>
        <Thead
          backgroundColor="#FFECB0"
          style={{ position: "sticky", top: "0", zIndex: 1000 }}
        >
          <Tr borderBottomColor="#F1B900">
            {thArray.map((thName, index) => (
              <Th key={index} color="#000">
                {thName}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody color="#000" borderBottomColor="#F1B900">
          {data.map((person) => (
            <Tr key={person.id}>
              <Td>{person.id}</Td>
              <Td>{person.name}</Td>
              <Td>{person.expDate}</Td>
              <Td>{person.phone}</Td>
              <Td>{person.payment}</Td>
              <Td>{person.Gender}</Td>
              <Td>
                <Button
                  variant="solid"
                  textColor="#F1B900"
                  size={butonResponsiveSize}
                  onClick={onPressViewButton}
                >
                  View More
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
