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
  memberId:number,
  firstName:string,
  lastName:string
  contactNumber?:string
  dateRegistered?:string,
  gender:string
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
            <Tr key={person.memberId}>
              <Td>{person.memberId}</Td>
              <Td>{person.firstName+person.lastName}</Td>
              <Td>{person.contactNumber}</Td>
              {arrayType=="Member"?<Td>{person.dateRegistered}</Td>:null}
              <Td>{person.gender}</Td>
              <Td>
                <Button
                  variant="solid"
                  textColor="#F1B900"
                  size={butonResponsiveSize}
                  onClick={()=>onPressViewButton(person.memberId)}
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

// in here same table component is used for both staff and Members.the arraytype represent whethter it is from member data or staff data.
// the data showing in the table for satff and members are totally different