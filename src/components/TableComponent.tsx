import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface Person{
  id:number,
  name:string,
  expDate?:string,
  dateRegister:string,
  payment?:string,
  Gender:string
}

interface TableComponent {
  thArray: string[];
  onPressViewButton:(id:number)=>void;
  personArray:Person[]
  arrayType:"Member"|"Staff"
}

const TableComponent = ({ thArray,personArray,arrayType,onPressViewButton}: TableComponent) => {
  const tableResponsiveSize = { md: "sm", lg: "sm", xl: "md" };
  const butonResponsiveSize = {md: "xs", lg: "sm", xl: "md" };
  
  return (
    <TableContainer mt={10} mr={2}>
      <Table size={tableResponsiveSize}>
        <Thead
          backgroundColor="#FFECB0"
        >
          <Tr borderBottomColor="#F1B900">
            {thArray.map((thName, index) => (
              <Th key={index} color="#000" fontSize={{sm:"0.5rem",md:"initial"}}>
                {thName}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody color="#000" borderBottomColor="#F1B900" fontSize={{sm:"0.5rem",md:"initial"}}>
          {personArray.map((person) => (
            <Tr key={person.id}>
              <Td>{person.id}</Td>
              <Td>{person.name}</Td>
              {arrayType=="Member"?<Td>{person.expDate}</Td>:null}
              <Td>{person.dateRegister}</Td>
              {arrayType=="Member"?<Td>{person.payment}</Td>:null}
              <Td>{person.Gender}</Td>
              <Td>
                <Button
                  variant="solid"
                  textColor="#F1B900"
                  size={butonResponsiveSize}
                  onClick={()=>onPressViewButton(person.id)}
                  _hover={{textColor:"#000"}}
                  
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
