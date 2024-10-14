import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SchedulePage = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <CiSearch color="#E6E6E5" />
        </InputLeftElement>
        <Input
          placeholder="Enter Member Id"
          borderColor="#BABABA"
          _placeholder={{ textColor: "#E6E6E5", fontWeight: "600" }}
          focusBorderColor="#F1B900"
          size={{xl:"lg"}}
        />
      </InputGroup>
      <HStack mt={10}>
        <Button 
        size={{xl:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
        >
          View
        </Button>

        <Button 
        size={{xl:"lg"}}
          variant="outline"
          color="#F1B900"
          borderColor="#F1B900"
          _hover={{ backgroundColor: "#F1B900", textColor: "#fff" }}
        >
          Add 
        </Button>
      </HStack>
    </>
  );
};

export default SchedulePage;
